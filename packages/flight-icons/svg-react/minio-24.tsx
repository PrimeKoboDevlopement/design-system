import { forwardRef, useMemo } from 'react';
import { IconProps } from './types';

export const IconMinio24 = forwardRef<SVGSVGElement, IconProps>(
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
                    <path d="M14.58 2.976l2.618 4.285a.05.05 0 010 .059.047.047 0 01-.053.01.047.047 0 01-.016-.01l-3.392-3.537.843-.807zM13.487 13.4v1.297l-1.229.624v-1.29l1.23-.632z" />
                    <path d="M8.797 14.511a11.649 11.649 0 012.308-3.272c.362-.363.747-.7 1.153-1.013v2.496l-3.461 1.79zM6.8 16.825l5.458-2.774v6.351L13.488 22v-8.598l.745-.386a3.703 3.703 0 001.018-5.857l-2.81-2.938a.623.623 0 01.913-.848l.394.41.832-.81c-.996-1.292-2.219-1.129-2.92-.482a1.792 1.792 0 00-.078 2.53l2.84 2.959a2.536 2.536 0 01-.555 3.905l-.385.2V8.07a12.85 12.85 0 00-6.682 8.74v.014z" />
                </g>
            </svg>
        );
    }
);
