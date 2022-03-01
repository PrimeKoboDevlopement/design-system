import { forwardRef, useMemo } from 'react';
import { IconProps } from './types';

export const IconF5Color24 = forwardRef<SVGSVGElement, IconProps>(
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
                <path
                    fill="#E4002B"
                    d="M20.253 6.354c-.123.506-.187 1.031-.305 1.568a56.737 56.737 0 00-5.24-.406c-.16.502-.31.993-.482 1.53 3.311.204 4.92 1.076 5.875 2.104.928 1.04 1.125 2.19 1.071 3.256-.12 1.734-.884 2.83-1.933 3.642-1.061.8-2.345 1.197-3.373 1.283-1.515.114-3.542-.247-3.973-.511-.26-.59-.516-1.186-.791-1.835-.067-.138-.11-.28.08-.445.295-.282.578-.556.877-.845.132-.13.278-.25.389-.065.407.629.79 1.206 1.172 1.78.434.641 1.096 1.226 2.543 1.128 1.215-.108 2.14-1.028 2.238-2.04.107-1.872-1.788-3.2-6.713-3.625.945-2.853 1.867-5.614 2.603-7.809 1.17.054 2.253.15 3.288.283.765.097 1.476.276 2.19.358A9.978 9.978 0 0011.998 2C6.477 2 2 6.477 2 12a9.953 9.953 0 001.947 5.926c.423.003.717-.091.749-.274.039-.191.006-.487-.027-.785-.2-1.962-.271-4.081-.196-6.204-.507.022-.962.045-1.399.07.018-.392.04-.764.07-1.152.432-.041.888-.077 1.39-.12.021-.338.046-.665.075-.996.225-2.025 2.357-3.263 4.134-3.741.788-.192 1.27-.253 1.648-.273.137-.004.284-.01.431-.01.368 0 .742.035.979.196.383.287.761.573 1.164.89.04.055.084.14-.016.287-.185.217-.363.423-.551.646-.108.131-.288.096-.44.055a46.47 46.47 0 00-.93-.46c-.56-.25-1.14-.506-1.785-.48-.403.032-.793.444-.833 1.007a84.509 84.509 0 00-.125 2.69 142.94 142.94 0 013.412-.057l-.001.788c-.384.171-.746.345-1.131.52-.794.009-1.55.015-2.31.028-.036 2.266-.002 4.523.1 6.61.02.315.035.634.125.848.109.269.733.476 2.092.553.005.236.012.46.02.689-2.212-.065-4.337-.276-6.04-.583A9.968 9.968 0 0012 22c5.524 0 10-4.477 10-10a9.952 9.952 0 00-1.746-5.646z"
                />
                <path
                    fill="#fff"
                    d="M21.172 14.406c.053-1.067-.144-2.216-1.072-3.256-.954-1.028-2.563-1.9-5.874-2.104.172-.537.322-1.028.481-1.53 1.98.07 3.741.212 5.24.406.118-.537.183-1.062.305-1.568a9.887 9.887 0 00-.483-.649c-.713-.082-1.424-.26-2.19-.358a39.903 39.903 0 00-3.287-.283c-.737 2.195-1.658 4.956-2.603 7.81 4.925.426 6.82 1.753 6.713 3.626-.098 1.011-1.023 1.931-2.239 2.04-1.446.097-2.108-.487-2.542-1.128-.383-.576-.765-1.152-1.173-1.78-.11-.185-.257-.065-.388.064-.299.29-.582.563-.877.846-.19.165-.148.306-.08.444.275.65.532 1.245.79 1.836.432.264 2.459.625 3.974.511 1.028-.086 2.312-.483 3.373-1.283 1.049-.814 1.813-1.91 1.932-3.644z"
                />
                <path
                    fill="#fff"
                    d="M3.946 17.926c.19.257.391.505.604.743 1.704.306 3.829.518 6.041.582l-.02-.689c-1.359-.077-1.983-.284-2.092-.553-.09-.213-.106-.532-.126-.847a103.977 103.977 0 01-.1-6.61c.76-.014 1.517-.02 2.31-.029.386-.175.748-.349 1.132-.52l.002-.788a143.01 143.01 0 00-3.412.056c.031-.952.069-1.832.124-2.69.04-.563.43-.975.833-1.007.645-.025 1.225.231 1.785.48.31.15.615.299.931.461.152.04.331.076.44-.056.187-.222.366-.429.55-.645.1-.148.057-.233.016-.287a56.679 56.679 0 00-1.164-.89c-.237-.16-.61-.196-.979-.196-.146 0-.294.005-.43.01-.379.02-.86.08-1.65.272-1.775.479-3.908 1.717-4.133 3.742-.03.331-.053.658-.075.997-.501.042-.958.078-1.389.12-.031.387-.053.76-.07 1.151.436-.025.891-.048 1.399-.07a45.987 45.987 0 00.195 6.204c.033.299.066.594.027.785-.032.183-.325.277-.749.274z"
                />
            </svg>
        );
    }
);
