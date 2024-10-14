import { forwardRef, useMemo } from 'react';
import { IconProps } from './types';

export const IconPaperclip16 = forwardRef<SVGSVGElement, IconProps>(
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
                <path
                    fill={color}
                    d="M9.387 2.102a2.034 2.034 0 012.864 0c.776.785.749 2.179 0 2.928-.75.749-6.39 6.465-6.39 6.465a.642.642 0 01-.898 0 .685.685 0 010-.937l5.896-5.966a.75.75 0 10-1.066-1.054L3.896 9.504a2.184 2.184 0 000 3.045 2.142 2.142 0 003.033 0l6.39-6.465c1.36-1.378 1.36-3.659 0-5.036-1.364-1.38-3.636-1.38-5 0L1.938 7.513A5.001 5.001 0 00.5 11.027c0 1.316.516 2.58 1.437 3.513A4.893 4.893 0 005.42 16c1.308 0 2.56-.526 3.482-1.46l6.383-6.466a.75.75 0 10-1.068-1.053l-6.382 6.465A3.393 3.393 0 015.419 14.5a3.393 3.393 0 01-2.414-1.014A3.502 3.502 0 012 11.026c0-.924.363-1.808 1.005-2.459l6.382-6.465z"
                />
            </svg>
        );
    }
);
