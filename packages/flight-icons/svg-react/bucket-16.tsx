import { forwardRef, useMemo } from 'react';
import { IconProps } from './types';

export const IconBucket16 = forwardRef<SVGSVGElement, IconProps>(
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
                    fillRule="evenodd"
                    d="M1.616 8.732A.752.752 0 01.7 8C.7 3.793 3.913.3 7.975.3S15.25 3.793 15.25 8a.75.75 0 01-.795.749 166.863 166.863 0 01-1.06 4.056c-.136.484-.27.938-.354 1.126-.187.411-.53.686-.873.87-.346.185-.756.312-1.182.403-.852.182-1.902.244-2.961.244-1.06 0-2.123-.062-2.989-.243-.432-.09-.848-.217-1.2-.401-.346-.182-.698-.456-.887-.873a.753.753 0 01-.045-.129L2.7 12.98c-.124-.495-.29-1.159-.462-1.834a306.765 306.765 0 00-.621-2.414zm.806-2.444C3.118 3.673 5.37 1.8 7.975 1.8c2.596 0 4.841 1.86 5.546 4.461a6.733 6.733 0 00-1.088-.375C11.228 5.569 9.633 5.4 8 5.4c-1.634 0-3.228.17-4.433.486a6.568 6.568 0 00-1.145.402zm10.011 3.276c.1-.026.196-.053.29-.081-.09.354-.19.741-.292 1.132-.167.64-.338 1.278-.48 1.785-.072.254-.135.471-.186.638a7.06 7.06 0 01-.09.272v.002c-.004.007-.042.073-.215.166-.176.094-.436.184-.787.26-.7.148-1.628.21-2.648.21-1.02 0-1.965-.062-2.682-.212-.359-.075-.628-.165-.81-.261a.717.717 0 01-.2-.14l-.18-.719A772.248 772.248 0 003.37 9.51c.065.018.13.037.198.054 1.205.317 2.8.486 4.433.486 1.634 0 3.228-.17 4.433-.486zM8 6.9c-1.549 0-3.007.162-4.052.437-.486.127-.827.265-1.04.388.213.123.554.26 1.04.388C4.993 8.388 6.45 8.55 8 8.55c1.549 0 3.007-.162 4.052-.437.486-.127.827-.265 1.04-.388-.213-.123-.554-.26-1.04-.388C11.007 7.062 9.55 6.9 8 6.9z"
                    clipRule="evenodd"
                />
            </svg>
        );
    }
);
