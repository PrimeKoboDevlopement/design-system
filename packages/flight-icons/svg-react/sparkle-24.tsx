import { forwardRef, useMemo } from 'react';
import { IconProps } from './types';

export const IconSparkle24 = forwardRef<SVGSVGElement, IconProps>(
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
                    <path d="M13.572 5.79a.5.5 0 000 .92l1.219.522a.5.5 0 01.263.262l.522 1.22a.5.5 0 00.92 0l.521-1.22a.5.5 0 01.263-.262l1.219-.522a.5.5 0 000-.92l-1.219-.522a.5.5 0 01-.263-.262l-.522-1.22a.5.5 0 00-.919 0l-.522 1.22a.5.5 0 01-.263.262l-1.219.522zM2.572 13.21a.5.5 0 010-.92l3.694-1.582a.5.5 0 00.263-.263L8.11 6.75a.5.5 0 01.92 0l1.583 3.694a.5.5 0 00.262.262l3.694 1.583a.5.5 0 010 .92l-3.694 1.582a.5.5 0 00-.262.263L9.03 18.75a.5.5 0 01-.92 0L6.53 15.055a.5.5 0 00-.263-.262L2.572 13.21zM15.022 17.21a.5.5 0 010-.92l1.961-.84a.5.5 0 00.263-.263l.84-1.96a.5.5 0 01.92 0l.84 1.96a.5.5 0 00.263.263l1.961.84a.5.5 0 010 .92l-1.961.84a.5.5 0 00-.263.263l-.84 1.96a.5.5 0 01-.92 0l-.84-1.96a.5.5 0 00-.263-.263l-1.96-.84z" />
                </g>
            </svg>
        );
    }
);
