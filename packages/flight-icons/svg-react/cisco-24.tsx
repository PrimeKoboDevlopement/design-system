import { forwardRef, useMemo } from 'react';
import { IconProps } from './types';

export const IconCisco24 = forwardRef<SVGSVGElement, IconProps>(
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
                    <path d="M7.256 9.868V11.7c-.001.302-.148.495-.408.546a.482.482 0 01-.56-.414 1.223 1.223 0 01-.01-.168V6.583c0-.326.135-.516.404-.573a.481.481 0 01.566.417c.007.06.008.12.008.18v3.261zM5.91 13.961v1.121a1.636 1.636 0 00-.786-.207c-.468-.01-.86.232-1.023.633-.283.698.182 1.423.93 1.448.268.009.524-.045.768-.162l.084-.038.012-.005.008.002a.166.166 0 00.012.004v.19c0 .267 0 .535-.002.803 0 .025-.032.066-.055.072-.626.16-1.244.18-1.838-.135-.775-.41-1.097-1.212-1.026-2.01.107-1.197 1.1-1.947 2.248-1.835a3.863 3.863 0 01.56.095l.109.024zM15.978 15.082V13.95l-.21-.036c-.154-.027-.307-.054-.46-.07-1.143-.115-2.138.631-2.246 1.834-.068.754.203 1.542.946 1.973.613.356 1.261.338 1.92.17.021-.005.052-.04.052-.062.002-.274.002-.548.002-.828v-.19l-.045.02-.074.035a1.63 1.63 0 01-.756.16c-.753-.019-1.224-.748-.939-1.45.163-.399.556-.64 1.024-.63.274.005.535.068.786.207z" />
                    <path
                        fillRule="evenodd"
                        d="M21.015 15.946c0-1.17-.862-2.05-2.01-2.05-1.141-.002-2.017.887-2.018 2.047-.002 1.159.877 2.058 2.011 2.057 1.136-.001 2.016-.897 2.017-2.054zm-1.007-.004a1.016 1.016 0 01-1.013 1.043c-.56 0-1.004-.46-1.003-1.041 0-.58.445-1.038 1.006-1.038.563 0 1.005.454 1.01 1.036z"
                        clipRule="evenodd"
                    />
                    <path d="M11.856 14.854v-.801c-.347-.08-.69-.143-1.04-.127a1.576 1.576 0 00-.828.251c-.634.426-.688 1.393-.1 1.852.191.148.406.244.638.31.161.046.325.114.462.212.168.12.146.348-.026.465a.638.638 0 01-.19.085c-.252.07-.508.054-.762.012-.121-.02-.241-.047-.362-.075l-.158-.034v.891c.287.083 1.03.127 1.314.086.3-.043.584-.128.832-.314.617-.461.635-1.402.024-1.868-.129-.099-.28-.167-.431-.235l-.114-.052a3.194 3.194 0 00-.232-.095c-.075-.028-.15-.056-.222-.09a.274.274 0 01-.17-.277.246.246 0 01.203-.234c.173-.036.352-.067.526-.059.147.007.293.034.44.062.066.012.13.025.196.035zM16.775 9.121v.821l.001 1.804c.001.347.3.577.621.487.225-.064.355-.26.355-.543V6.549c0-.024 0-.049-.002-.073-.03-.328-.304-.535-.608-.46-.224.055-.366.247-.367.504v2.601zM7.26 13.961h.964v3.934H7.26v-3.934zM20.37 9.935v-.362-.307c0-.287.001-.574-.002-.86a.692.692 0 00-.04-.246.475.475 0 00-.547-.286.492.492 0 00-.385.492 232.81 232.81 0 000 2.408c0 .07.019.145.046.21a.482.482 0 00.925-.194c.004-.285.003-.57.003-.855zM15.125 9.934v.808c-.002.313-.2.529-.484.53-.29 0-.492-.218-.493-.535V8.4c0-.318.203-.536.492-.535.29.001.484.216.484.54v1.528zM9.88 9.931v-.618-.909c-.002-.32-.2-.537-.489-.537-.29 0-.488.215-.489.537v2.335c0 .317.205.534.495.532.282-.001.481-.219.482-.531V9.93zM3.657 9.56v-.385-.77c0-.302.156-.512.395-.536.283-.029.485.13.542.435.023.123.038.25.039.375.004.686.004 1.373.001 2.059-.001.382-.321.626-.654.507a.494.494 0 01-.323-.48V9.56zM11.529 10.089a45.21 45.21 0 010 .326v.356c.005.278.196.487.45.5.28.013.503-.167.516-.454.017-.38.018-.761 0-1.14a.47.47 0 00-.516-.455c-.255.016-.445.225-.45.502v.365zM1.98 10.255v.163l-.001.354c-.005.288-.216.5-.49.5-.274-.002-.483-.214-.486-.504a50.483 50.483 0 010-1.046.489.489 0 01.49-.5c.272.001.481.216.486.504v.529zM22.02 10.09v.16l-.001.161v.356c.005.288.207.5.475.504.278.004.495-.2.5-.49.008-.353.007-.706.001-1.06a.487.487 0 00-.492-.5c-.272.003-.48.22-.483.51-.002.12-.001.24 0 .359z" />
                </g>
            </svg>
        );
    }
);