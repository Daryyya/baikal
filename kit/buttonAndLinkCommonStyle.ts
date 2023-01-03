import { css } from "@emotion/react";

export interface StyledLinkOrButtonProps {
    variant: 'white' | 'blue' | 'outline';
}

const whiteCss = css`
    padding: 14px 21.5px;
    background-color: var(--white);
    box-shadow: 0px 4px 40px rgba(46, 80, 87, 0.12);
    color: var(--grey);
    &:hover {
        background-color: var(--blue);
        color: var(--white);
    } 
`;

const blueCss = css`
    padding: 25px 34px;
    background-color: var(--blue);
    color: var(--white);
    box-shadow: 0px 4px 40px rgba(93, 170, 255, 0.29);
    &:hover {
        background-color: var(--dark-blue);
    } 
`;

const outlineCss = css`
    border: 1px solid yellow;
    color: red;
`;

export const commonStyle = (variant: StyledLinkOrButtonProps['variant']) => css`
    display: inline-block;
    border-radius: 3px;
    font-weight: 600;
    font-size: 17px;
    line-height: 17px;
    letter-spacing: 0.2px;
    transition: 0.3s;

    ${variant === 'white' ? whiteCss : null};
    ${variant === 'blue' ? blueCss : null};
    ${variant === 'outline' ? outlineCss : null};

`;

 