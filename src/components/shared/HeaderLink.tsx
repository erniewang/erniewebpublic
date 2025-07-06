import React from 'react';

const tw = {
    socialLink: "text-white hover:text-gray-700" as const,
} as const;

interface HeaderLinkProps {
    href: string;
    icon: React.ElementType;
}

export const HeaderLink = ({ href, icon: Icon }: HeaderLinkProps) => {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={tw.socialLink}
        >
            <Icon size={30} />
        </a>
    );
}

export default HeaderLink; 