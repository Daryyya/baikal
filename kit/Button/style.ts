import styled from "@emotion/styled";

export const Wrapper = styled.div`
    display: inline-block;
    padding: 14px 21.5px;
    background-color: var(--white);
    box-shadow: 0px 4px 40px rgba(46, 80, 87, 0.12);
    border-radius: 3px;
    font-weight: 600;
    font-size: 17px;
    line-height: 17px;
    letter-spacing: 0.2px;
    color: var(--grey);
    transition: 0.3s;

        &:hover {
            background-color: var(--blue);
            color: var(--white);
        }       
`;

