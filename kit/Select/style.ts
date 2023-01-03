import Select from "react-select";
import styled from "@emotion/styled";

export const Wrapper = styled.div`
  font-family: "Roboto", sans-serif;
  font-weight: 500;
  font-size: 15px;
  line-height: 1;
  color: var(--grey);
`;

export const Label = styled.label`
  position: relative;
  left: 5px;
  display: block;
  margin-bottom: 15px;
`;

export const StyledSelect = styled(Select)`
  .react-select__control {
    padding: 14px 30px;
    min-width: 174px;
  }
  .react-select__control--menu-is-open, .react-select__control--is-focused {
    box-shadow: 0 0 1px var(--grey) inset;
    border-color: transparent;
  }
  .react-select__value-container {
    padding-left: 0;
    min-height: 36px;
  }
  .react-select__single-value {
    font-family: 'Roboto', sans-serif;
    font-weight: 600 !important;
    color: var(--grey);
  }
  .react-select__menu {
    margin: 0;
  }
  .react-select__menu-list {
    padding: 0;
  }
  .react-select__option {
    padding: 25px 30px;
    min-width: 174px;
    border: 1px solid var(--ebeb-grey);
  }
  .react-select__option--is-selected {
    background-color: var(--blue);
  }
`