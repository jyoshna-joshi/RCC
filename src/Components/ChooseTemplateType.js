import React from "react";
import { useNavigate } from "react-router-dom";


import{
  DropdownWrapper,
  StyledSelect,
  StyledOption,
  StyledLabel,
  StyledButton,
} from "./styles.js";


export function Dropdown(props) {
  return (
    <DropdownWrapper action={props.action}>
      <StyledLabel htmlFor="services">
        {props.formLabel}
      </StyledLabel>
      <StyledSelect id="services" name="services">
        {props.children}
      </StyledSelect>
      <StyledButton type="submit" value={props.buttonText} />
    </DropdownWrapper>
  );
}

export function Option(props) {
  return (
    <StyledOption selected={props.selected}>
      {props.value}
    </StyledOption>
  );
}


  {/* Show Dropdown for template type */}
const ChooseTemplateType = (props) => {
  const navigate = useNavigate();
  return (
    <>
      <h1>ChooseTemplateType Page</h1>
      <h1>Please select the type of content.</h1>
           <Dropdown
           formLabel="Choose content type"
            buttonText="Submit"
             action="/">
                    <Option selected value="Click to see options" />
                    <Option value="Pdf" />
                    <Option value="book" />
                     <Option value="cd" />
                     <Option value="others" />
              </Dropdown>
      <br />
      <button onClick={() => navigate(-1)}>Go Back</button>
    </>
  );
};

export default ChooseTemplateType;