import styled from "@emotion/styled";

export const StyledHeader = styled.header`
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    width: 100%;
    height: var(--header-height);
    background-color: var(--semilight-blue);
`;

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1440px;
    margin: 0 auto;
    padding: 46px 97px;
`;