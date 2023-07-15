import {
    variables,
    desktopWidthInt,
    mobileWidthInt,
    tabletWidthInt2,
} from './Variables';
import { css } from 'styled-components';

export const mediaQueries = {
    desktop: `(min-width: ${desktopWidthInt}px)`,
    tablet: `(max-width: ${desktopWidthInt - 1}px)`,
    tabletOnly: `(max-width: ${desktopWidthInt - 1}px) and (min-width: ${
        mobileWidthInt + 1
    }px)`,
    mobile: `(max-width: ${mobileWidthInt}px)`,
    tablet2: `(max-width: ${tabletWidthInt2}px)`,
};

export const containerStyles = css`
    margin: 0 auto;
    max-width: ${variables.maxWidth};
    width: 100%;
    padding: 0 64px;

    @media (max-width: ${variables.tabletWidthInt}) {
        padding: 0 44px;
    }

    @media (max-width: ${variables.mobileWidth}) {
        padding: 0 24px;
    }
`;

export const glassEffect = css`
    backdrop-filter: blur(90px);
    box-shadow: inset 0 0 0 0px rgba(255, 255, 255, 0.08);
    -webkit-backdrop-filter: grayscale(0.2) blur(90px);
`;

export const blurEffect = css`
    backdrop-filter: grayscale(0) blur(10px);
    box-shadow: inset 0 0 0 0px rgba(255, 255, 255, 0.08);
`;
