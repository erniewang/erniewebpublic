import { memo, useCallback, useEffect, useRef, useState } from 'react';
import { NavLink, useNavigate } from 'react-router';
import { useMediaQuery } from './useMediaQuery';

const mobileQuery = '(max-width: 767px)';
const menuAnimationMs = 240;
const hoverEffectClasses = 'hover:text-gray-300 hover:scale-105 cursor-pointer transition-transform duration-200 hover:animate-pulse';
const mobilePanelClasses = 'fixed top-[8vh] left-0 z-20 min-h-[190px] w-full bg-black p-7 text-[25px] flex flex-col items-center justify-start gap-10 shadow-xl';

const navItems = [
    { label: 'About', to: '/' },
    { label: 'Projects', to: '/projects' },
    { label: 'Creative', to: '/creative' },
] as const;

type MobileBarProps = {
    menuOpen: boolean;
    onToggle: () => void;
};

type MobileMenuProps = {
    isClosing: boolean;
    onNavigate: (to: string) => void;
};

const DesktopNav = memo(function DesktopNav() {
    return (
        <div className="fade-in flex centralized flex-row z-25 h-full">
            <div className="centralized gap-4 text-lg w-1/2 h-full">
                <span className="w-auto text-white text-xl font-semibold whitespace-nowrap pr-3">
                    Ernie Wang
                </span>
                <div
                    className="w-[50px] h-[22px] rounded-xl bg-white flex-shrink-0"
                    onClick={() => {
                        console.log('invert shit idk');
                    }}
                />
                {navItems.map((item) => (
                    <NavLink key={item.to} to={item.to} className={item.to === '/' ? `pl-2 ${hoverEffectClasses}` : hoverEffectClasses}>
                        {item.label}
                    </NavLink>
                ))}
                <a href="/ernie-resume.pdf" target="_blank" rel="noopener noreferrer" className={hoverEffectClasses}>
                    Resume
                </a>
            </div>
        </div>
    );
});

const MobileBar = memo(function MobileBar({ menuOpen, onToggle }: MobileBarProps) {
    return (
        <button
            type="button"
            onClick={onToggle}
            aria-expanded={menuOpen}
            aria-controls="best-possible-header-menu"
            className="centralized flex-row text-4xl p-2 pt-[10px] pl-7 pr-6 justify-between w-full text-left"
        >
            <span className="text-4xl">Ernie Wang</span>
            <span className="hover:text-gray-300 transition-transform duration-200 hover:scale-105 text-5xl">
                {menuOpen ? 'x' : '☰'}
            </span>
        </button>
    );
});

const MobileMenu = memo(function MobileMenu({ isClosing, onNavigate }: MobileMenuProps) {
    return (
        <div
            id="best-possible-header-menu"
            className={`${isClosing ? 'shrink-from-top' : 'grow-from-top'} ${mobilePanelClasses}`}
        >
            {navItems.map((item) => (
                <button
                    key={item.to}
                    type="button"
                    onClick={() => onNavigate(item.to)}
                    className={`${hoverEffectClasses} border-0 bg-transparent p-0 text-inherit`}
                >
                    {item.label}
                </button>
            ))}
            <a href="/ernie-resume.pdf" target="_blank" rel="noopener noreferrer" className={hoverEffectClasses}>
                Resume
            </a>
        </div>
    );
});

export function BestPossibleHeader() {
    const navigate = useNavigate();
    const isMobile = useMediaQuery(mobileQuery);
    const [menuMounted, setMenuMounted] = useState(false);
    const [isClosing, setIsClosing] = useState(false);
    const closeTimerRef = useRef<number | null>(null);

    const clearCloseTimer = useCallback(() => {
        if (closeTimerRef.current !== null) {
            window.clearTimeout(closeTimerRef.current);
            closeTimerRef.current = null;
        }
    }, []);

    const finishClose = useCallback((afterClose?: () => void) => {
        clearCloseTimer();
        setIsClosing(false);
        setMenuMounted(false);
        afterClose?.();
    }, [clearCloseTimer]);

    const closeMenu = useCallback((afterClose?: () => void) => {
        if (!menuMounted || isClosing) {
            afterClose?.();
            return;
        }

        setIsClosing(true);
        clearCloseTimer();
        closeTimerRef.current = window.setTimeout(() => {
            finishClose(afterClose);
        }, menuAnimationMs);
    }, [clearCloseTimer, finishClose, isClosing, menuMounted]);

    const openMenu = useCallback(() => {
        clearCloseTimer();
        setIsClosing(false);
        setMenuMounted(true);
    }, [clearCloseTimer]);

    const toggleMenu = useCallback(() => {
        if (menuMounted) {
            closeMenu();
            return;
        }

        openMenu();
    }, [closeMenu, menuMounted, openMenu]);

    const handleNavigate = useCallback((to: string) => {
        closeMenu(() => {
            navigate(to);
        });
    }, [closeMenu, navigate]);

    useEffect(() => {
        if (!isMobile) {
            finishClose();
        }
    }, [finishClose, isMobile]);

    useEffect(() => {
        return () => {
            clearCloseTimer();
        };
    }, [clearCloseTimer]);

    return (
        <header className="w-screen h-[8vh] min-h-[60px] fixed top-0 bg-black text-white z-25 shadow-xl">
            {isMobile ? (
                <div className="h-auto fade-in">
                    <MobileBar menuOpen={menuMounted && !isClosing} onToggle={toggleMenu} />
                    {menuMounted && <MobileMenu isClosing={isClosing} onNavigate={handleNavigate} />}
                </div>
            ) : (
                <DesktopNav />
            )}
        </header>
    );
}
