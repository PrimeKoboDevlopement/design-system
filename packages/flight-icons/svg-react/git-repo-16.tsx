import { forwardRef, useMemo } from 'react';
import { IconProps } from './types';

export const IconGitRepo16 = forwardRef<SVGSVGElement, IconProps>(
    ({ color = 'currentColor', title, ...props }, svgRef) => {
        const titleId = useMemo(
            () =>
                title
                    ? 'title-' + Math.random().toString(36).substr(2, 9)
                    : undefined,
            [title]
        );
        return (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width={16}
                height={16}
                fill="none"
                viewBox="0 0 16 16"
                aria-hidden={!title}
                ref={svgRef}
                aria-labelledby={titleId}
                {...props}
            >
                {title ? <title id={titleId}>{title}</title> : null}
                <g fill={color}>
                    <path
                        fillRule="evenodd"
                        d="M3.25 0A2.25 2.25 0 001 2.25v10.5A2.25 2.25 0 003.25 15h.25a.75.75 0 000-1.5h-.25a.75.75 0 01-.75-.75v-1.5a.75.75 0 01.75-.75H13.5v3h-3a.75.75 0 000 1.5h3.25c.69 0 1.25-.56 1.25-1.25V1.25C15 .56 14.44 0 13.75 0H3.25zM13.5 9V1.5H3.25a.75.75 0 00-.75.75v6.878c.235-.083.487-.128.75-.128H13.5z"
                        clipRule="evenodd"
                    />
                    <path d="M5.5 12a.5.5 0 00-.5.5v3a.5.5 0 00.777.416L7 15.101l1.223.815A.5.5 0 009 15.5v-3a.5.5 0 00-.5-.5h-3z" />
                </g>
            </svg>
        );
    }
);
