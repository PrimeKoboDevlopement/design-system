import { forwardRef, useMemo } from 'react';
import { IconProps } from './types';

export const IconRadio24 = forwardRef<SVGSVGElement, IconProps>(
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
                width={24}
                height={24}
                fill="none"
                viewBox="0 0 24 24"
                aria-hidden={!title}
                ref={svgRef}
                aria-labelledby={titleId}
                {...props}
            >
                {title ? <title id={titleId}>{title}</title> : null}
                <g fill={color}>
                    <path d="M5.282 4.22a.75.75 0 010 1.06 9.502 9.502 0 000 13.436.75.75 0 01-1.06 1.06 11.002 11.002 0 010-15.556.75.75 0 011.06 0zM18.718 4.22a.75.75 0 011.06 0 11.002 11.002 0 010 15.557.75.75 0 11-1.06-1.06 9.502 9.502 0 000-13.437.75.75 0 010-1.06z" />
                    <path
                        fillRule="evenodd"
                        d="M9 12a3 3 0 116 0 3 3 0 01-6 0zm3-1.5a1.5 1.5 0 100 3 1.5 1.5 0 000-3z"
                        clipRule="evenodd"
                    />
                    <path d="M8.117 8.026A.75.75 0 107.05 6.974a7.11 7.11 0 00-1.517 2.305 7.194 7.194 0 000 5.432 7.11 7.11 0 001.517 2.305.75.75 0 001.068-1.053 5.611 5.611 0 01-1.196-1.819 5.694 5.694 0 010-4.299 5.61 5.61 0 011.196-1.819zM16.951 6.984a.75.75 0 10-1.069 1.053c.513.52.92 1.138 1.197 1.819a5.693 5.693 0 010 4.299 5.612 5.612 0 01-1.197 1.819.75.75 0 001.07 1.052 7.11 7.11 0 001.516-2.305 7.194 7.194 0 000-5.432 7.11 7.11 0 00-1.517-2.305z" />
                </g>
            </svg>
        );
    }
);
