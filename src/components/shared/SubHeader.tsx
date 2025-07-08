import { ReactNode } from 'react';

const tw = {
    subheader: 'text-white text-2xl font-mono mb-4'
} as const;

interface SubHeaderProps {
    children: ReactNode;
}

export function SubHeader({ children }: SubHeaderProps) {
    return (
        <h2 className={tw.subheader}>{children}</h2>
    );
} 