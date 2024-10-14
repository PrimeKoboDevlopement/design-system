import { forwardRef, useMemo } from 'react';
import { IconProps } from './types';

export const IconJwtColor24 = forwardRef<SVGSVGElement, IconProps>(
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
                <g fillRule="evenodd" clipRule="evenodd">
                    <path
                        fill="#fff"
                        d="M13.54 7.264V1.75h-3.08v5.514L12 9.377l1.54-2.111zM10.46 16.735v5.515h3.08v-5.515L12 14.624l-1.54 2.111z"
                    />
                    <path
                        fill="#00F2E6"
                        d="M13.54 16.735l3.246 4.47 2.506-1.825-3.266-4.448-2.485-.82v2.623zM10.46 7.264L7.213 2.796 4.708 4.62l3.266 4.449 2.485.82V7.265z"
                    />
                    <path
                        fill="#00B9F1"
                        d="M7.974 9.069L2.715 7.367l-.965 2.932L7.009 12l2.506-.8L7.974 9.07zM14.485 12.8l1.541 2.131 5.259 1.702.965-2.931L16.991 12l-2.506.8z"
                    />
                    <path
                        fill="#D63AFF"
                        d="M16.991 12l5.259-1.701-.965-2.932-5.259 1.701-1.54 2.133L16.99 12zM7.009 12L1.75 13.701l.965 2.932 5.259-1.701 1.54-2.133L7.01 12z"
                    />
                    <path
                        fill="#FB015B"
                        d="M7.974 14.931L4.708 19.38l2.506 1.825 3.245-4.47v-2.623l-2.485.82zM16.026 9.068l3.266-4.448-2.506-1.824-3.246 4.469v2.624l2.486-.82z"
                    />
                </g>
            </svg>
        );
    }
);
