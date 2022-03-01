import { forwardRef, useMemo } from 'react';
import { IconProps } from './types';

export const IconPack16 = forwardRef<SVGSVGElement, IconProps>(
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
                    <path d="M8.2 4.366l2.2-1.31c.06-.03.13-.051.2-.051.22 0 .4.185.4.412v2.62c0 .154-.08.288-.2.36L8.2 7.944a.396.396 0 01-.4 0L5.2 6.397a.446.446 0 01-.2-.36v-2.62c0-.072.01-.144.05-.206a.392.392 0 01.55-.155l2.2 1.31c.12.072.28.072.4 0zM4.3 9.866l-2.2-1.31a.392.392 0 00-.55.155.371.371 0 00-.05.206v2.62c0 .144.08.278.2.36l2.6 1.547c.12.072.28.072.4 0l2.6-1.547c.12-.072.2-.206.2-.36v-2.62a.408.408 0 00-.4-.412c-.07 0-.14.02-.2.051l-2.2 1.31a.396.396 0 01-.4 0zM11.3 9.866l-2.2-1.31a.392.392 0 00-.55.155.371.371 0 00-.05.206v2.62c0 .144.08.278.2.36l2.6 1.547c.12.072.28.072.4 0l2.6-1.547c.12-.072.2-.206.2-.36v-2.62a.408.408 0 00-.4-.412c-.07 0-.14.02-.2.051l-2.2 1.31a.396.396 0 01-.4 0z" />
                </g>
            </svg>
        );
    }
);
