import React from 'react';

const tw = { socialLink: "text-white hover:text-gray-700" as const };

export default function HeaderLink({ href, icon: Icon }: { href: string; icon: React.ElementType }) {
    return (
        <a href={href} target="_blank" rel="noopener noreferrer" className={tw.socialLink}>
            <Icon size={30} />
        </a>
    );
} 