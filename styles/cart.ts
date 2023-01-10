import styled from "@emotion/styled";
import Button from "../kit/Button";
import Link from "../kit/Link";

export const Wrapper = styled.div`
  min-height: calc(100vh - var(--header-height));
  position: relative;
  max-width: 1440px;
  padding: 0 97px;
`;

export const Title = styled.h3`
  font-size: 36px;
  line-height: 1;
  color: var(--grey);
  margin-bottom: 40px;
`;

export const ButtonsWrapper = styled.div`
  position: fixed;
  right: 97px;
  bottom: 50px;
  display: flex;
  gap: 12px;
  justify-content: space-between;
`;

export const StyledButton = styled(Button)`
  /* padding: 19px 50px; */
`;

export const StyledLink = styled(Link)`
  /* padding: 19px 50px; */
`;

export const Style = styled.div`

  table {
    margin: 0 auto;
    width: 100%;
    background-color: var(--barely-grey);
    border-spacing: 0;
    border: 1px solid #E2E4EA;
    color: var(--grey);
    font-weight: 600;
    font-size: 14px;

    tr {
      :last-child {
        td {
          border-bottom: 0;
        }
      }
    }

    th,
    td {
      margin: 0;
      padding: 1.5rem 1rem;
      text-align: center;
      border-bottom: 1px solid #E2E4EA;
      border-right: 1px solid #E2E4EA;

      :last-child {
        border-right: 0;
      }
    }
    tfoot {
      
      tr:first-child {
        td {
          border: 1px solid #E2E4EA;
          
          
        }
      }
      font-weight: bolder;
      border-spacing: 0;
    }
  }
`;