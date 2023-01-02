import React from "react";
import Select from "react-select";
import { StyledForm } from "./style";
import Link from "../../kit/Link";
import arrow from "../../public/img/arrow.svg";

const Form = () => {
  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];
  return (
    <StyledForm>
      <Select options={options} />
      <Select options={options} />
      <Select options={options} />
      <Link variant="blue" page="/order">
        Далее
        <svg
          width="27"
          height="11"
          viewBox="0 0 27 11"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 5.5H25M25 5.5L20.5 1M25 5.5L20.5 10"
            stroke="white"
            stroke-width="1.5"
          />
        </svg>
      </Link>
    </StyledForm>
  );
};

export default Form;
