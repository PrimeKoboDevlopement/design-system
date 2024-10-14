import { forwardRef, useMemo } from 'react';
import { IconProps } from './types';

export const IconVaultSecretsFill16 = forwardRef<SVGSVGElement, IconProps>(
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
                    d="M2 0a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V2a2 2 0 00-2-2H2zm5.498 10.552v1.823h1.004v-3.88h3.873v-.99h-1.82c-.422 0-.844.028-1.267.087l-.393.043.306-.247c.335-.263.655-.54.961-.846l1.267-1.284-.7-.7-1.28 1.284c-.306.306-.583.627-.845.962l-.247.306.043-.393c.059-.423.088-.846.088-1.269V3.625h-.99v3.88H3.625v.99h1.82c.422 0 .844-.028 1.267-.087l.393-.043-.306.248c-.335.262-.655.54-.961.845l-1.281 1.284.699.7 1.28-1.284c.307-.306.583-.627.845-.962l.248-.306-.044.393a9.29 9.29 0 00-.087 1.27zm1.965-1.079v.7l1.267 1.269.699-.7-1.267-1.269h-.699zM4.557 5.258l1.266 1.27h.7v-.7l-1.267-1.27-.7.7z"
                    clipRule="evenodd"
                />
            </svg>
        );
    }
);
