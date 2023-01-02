import styled from "@emotion/styled";
import Image from "next/image";


export const Wrapper = styled.div`
    position: relative;
    min-height: calc(100vh - var(--header-height));
    /* height: 100vh; */
`;

export const Container = styled.div`
 max-width: 1440px;
 margin: 0 auto;
    padding: 110px 97px 0;`;

export const BackgroundImage = styled(Image)`
    object-fit: contain;
    object-position: right bottom;
    pointer-events: none;
`;

export const Title = styled.h1`
    font-size: 48px;
    line-height: 64px;
    letter-spacing: -1px;
    color: var(--grey);
    margin-bottom: 48px;
`;