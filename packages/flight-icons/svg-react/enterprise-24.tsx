import { forwardRef, useMemo } from 'react';
import { IconProps } from './types';

export const IconEnterprise24 = forwardRef<SVGSVGElement, IconProps>(
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
                    <path
                        fillRule="evenodd"
                        d="M13.673 2.647a9.462 9.462 0 014.545 2.17.75.75 0 00.983-1.133A10.96 10.96 0 0012 1C5.925 1 1 5.925 1 12c0 5.056 3.41 9.313 8.054 10.601a.75.75 0 10.401-1.445c-3.857-1.07-6.727-4.513-6.942-8.656h4.754c.097 1.97.539 3.892 1.292 5.68a.75.75 0 001.382-.582A15.256 15.256 0 018.769 12.5h.481a.75.75 0 000-1.5h-.446A15.149 15.149 0 0112 2.916c.432.546.824 1.12 1.174 1.718a.75.75 0 101.294-.758 16.46 16.46 0 00-.795-1.23zm-3.346 0A9.506 9.506 0 002.552 11h4.747a16.673 16.673 0 013.028-8.353z"
                        clipRule="evenodd"
                    />
                    <path d="M11 8.75A2.75 2.75 0 0113.75 6h6.5A2.75 2.75 0 0123 8.75v13.5a.75.75 0 01-1.5 0V8.75c0-.69-.56-1.25-1.25-1.25h-6.5c-.69 0-1.25.56-1.25 1.25v13.5a.75.75 0 01-1.5 0V8.75z" />
                    <path d="M15.75 18c-.69 0-1.25.56-1.25 1.25v3a.75.75 0 001.5 0V19.5h2v2.75a.75.75 0 001.5 0v-3c0-.69-.56-1.25-1.25-1.25h-2.5zM14.5 12.75a.75.75 0 01.75-.75h.5a.75.75 0 010 1.5h-.5a.75.75 0 01-.75-.75zM18.25 12a.75.75 0 000 1.5h.5a.75.75 0 000-1.5h-.5zM14.5 9.75a.75.75 0 01.75-.75h.5a.75.75 0 010 1.5h-.5a.75.75 0 01-.75-.75zM18.25 9a.75.75 0 000 1.5h.5a.75.75 0 000-1.5h-.5zM14.5 15.75a.75.75 0 01.75-.75h.5a.75.75 0 010 1.5h-.5a.75.75 0 01-.75-.75zM18.25 15a.75.75 0 000 1.5h.5a.75.75 0 000-1.5h-.5z" />
                </g>
            </svg>
        );
    }
);
