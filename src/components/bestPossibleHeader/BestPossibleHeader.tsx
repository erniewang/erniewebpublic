import { memo, useCallback, useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router';
import { useMediaQuery } from './useMediaQuery';
import {
    FADE_IN_CLASS,
    FADE_OUT_CLASS,
    GRACEFULL_SPEED_MS,
    useGracefullAnimation,
} from "../../utils/gracefull";

const mobileQuery = '(max-width: 767px)';
const hoverEffectClasses = 'hover:text-gray-300 cursor-pointer';
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
    exiting: boolean;
    onNavigate: (to: string) => void;
};

const menuMotionClasses = (exiting: boolean) =>
    exiting
        ? `${FADE_OUT_CLASS} slide-out-to-top fill-mode-forwards`
        : `${FADE_IN_CLASS} slide-in-from-top`;

const DesktopNav = memo(function DesktopNav() {
    return (
        <div className={`flex centralized flex-row z-25 h-full ${FADE_IN_CLASS}`}>
            <div className="centralized gap-4 text-lg w-1/2 h-full">
                <span className="w-auto text-white text-xl font-semibold whitespace-nowrap pr-3">
                    Ernie Wang
                </span>
                <div className="w-[50px] h-[22px] rounded-xl bg-white flex-shrink-0" />
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
            <span className="hover:text-gray-300 text-5xl">
                {menuOpen ? 'x' : '☰'}
            </span>
        </button>
    );
});

const MobileMenu = memo(function MobileMenu({ exiting, onNavigate }: MobileMenuProps) {
    return (
        <div
            id="best-possible-header-menu"
            className={`${mobilePanelClasses} ${menuMotionClasses(exiting)}`}
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
    const { exiting, exit } = useGracefullAnimation({ speed: GRACEFULL_SPEED_MS });

    const closeMenu = useCallback(
        (afterClose?: () => void) => {
            if (!menuMounted) {
                afterClose?.();
                return;
            }
            exit(() => {
                setMenuMounted(false);
                afterClose?.();
            });
        },
        [menuMounted, exit]
    );

    const openMenu = useCallback(() => {
        setMenuMounted(true);
    }, []);

    const toggleMenu = useCallback(() => {
        if (menuMounted) {
            closeMenu();
            return;
        }

        openMenu();
    }, [closeMenu, menuMounted, openMenu]);

    const handleNavigate = useCallback(
        (to: string) => {
            closeMenu(() => {
                navigate(to);
            });
        },
        [closeMenu, navigate]
    );

    useEffect(() => {
        if (!isMobile) {
            setMenuMounted(false);
        }
    }, [isMobile]);

    return (
        <header className="w-screen h-[8vh] min-h-[60px] fixed top-0 bg-black text-white z-25 shadow-xl">
            {isMobile ? (
                <div className={`h-auto ${FADE_IN_CLASS}`}>
                    <MobileBar menuOpen={menuMounted && !exiting} onToggle={toggleMenu} />
                    {menuMounted && <MobileMenu exiting={exiting} onNavigate={handleNavigate} />}
                </div>
            ) : (
                <DesktopNav />
            )}
        </header>
    );
}
