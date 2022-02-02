import { forwardRef, useMemo } from 'react';
import { IconProps } from './types';

export const IconPhoneCall16 = forwardRef<SVGSVGElement, IconProps>(
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
                        d="M5.847.533A2.21 2.21 0 004.391 0H2.206a2.21 2.21 0 00-2.09 1.501c-.098.29-.135.598-.107.903l.001.012a15.13 15.13 0 002.355 6.637c1.29 1.987 2.615 3.304 4.596 4.587a15.197 15.197 0 006.618 2.35h.014a2.21 2.21 0 002.406-2.204v-.075c-.002-.383-.008-1.771 0-2.087A2.204 2.204 0 0014.1 9.386h-.007a8.626 8.626 0 01-1.884-.47 2.21 2.21 0 00-2.327.497l-.515.513a10.903 10.903 0 01-3.313-3.305l.51-.509.003-.003a2.204 2.204 0 00.498-2.326 8.577 8.577 0 01-.47-1.88v-.007A2.204 2.204 0 005.847.533zM4.401 1.5a.71.71 0 01.708.604c.1.753.285 1.493.55 2.205l.001.001a.703.703 0 01-.157.742l-.924.923a.75.75 0 00-.122.902 12.403 12.403 0 004.655 4.646.75.75 0 00.9-.121l.923-.921.002-.002a.71.71 0 01.746-.157h.002c.713.266 1.454.45 2.209.55a.709.709 0 01.606.715 148.67 148.67 0 000 2.134v.07a.702.702 0 01-.481.671.71.71 0 01-.286.035 13.696 13.696 0 01-5.957-2.117c-1.805-1.168-2.979-2.335-4.153-4.144a13.63 13.63 0 01-2.12-5.972.702.702 0 01.419-.704c.09-.04.187-.06.286-.06H4.4zm2.664 2.283v-.001l-.703.264.703-.263z"
                        clipRule="evenodd"
                    />
                    <path d="M10.333.005a.75.75 0 10-.166 1.49 4.91 4.91 0 014.338 4.332.75.75 0 001.49-.167A6.41 6.41 0 0010.333.005z" />
                    <path d="M10.394 2.53a.75.75 0 10-.288 1.472 2.395 2.395 0 011.892 1.892.75.75 0 101.472-.288 3.894 3.894 0 00-3.076-3.076z" />
                </g>
            </svg>
        );
    }
);
