import { forwardRef, useMemo } from 'react';
import { IconProps } from './types';

export const IconJwt16 = forwardRef<SVGSVGElement, IconProps>(
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
                    <path d="M9.09.75v3.9L8 6.144 6.91 4.651v1.856l-1.758-.58-2.31-3.147 1.773-1.29L6.91 4.65V.75h2.18zM6.91 15.25v-3.9l-2.295 3.16-1.773-1.29 2.31-3.147 1.758-.58v1.857L8 9.856l1.09 1.494v3.9H6.91zM9.09 11.35l2.295 3.16 1.773-1.29-2.31-3.147 3.72 1.204.682-2.073L11.53 8l3.72-1.203-.683-2.074-3.72 1.203 2.311-3.146-1.773-1.29L9.09 4.65v1.856l1.758-.58-1.09 1.509L11.531 8l-1.773.566 1.09 1.507-1.758-.58v1.857z" />
                    <path d="M5.152 5.926l-3.72-1.203L.75 6.797 4.47 8 .75 9.204l.683 2.073 3.72-1.204 1.089-1.508L4.469 8l1.773-.565-1.09-1.508z" />
                </g>
            </svg>
        );
    }
);
