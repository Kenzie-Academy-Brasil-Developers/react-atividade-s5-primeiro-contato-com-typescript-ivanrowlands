import styled from "styled-components";

export const ContainerInput = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 5px auto;
  padding-right:100px;
  width: 50%;
  color: darkblue;
  align-items: center;
  label {
    padding: 0px 2px;
  }
  input {
    border: 1px solid transparent;
    border-radius: 5px;
    height: 20px;
    padding: 5px;
    width: 70%;
    &:hover::placeholder {
      color: white;
      padding: 5px;
      background: darkslateblue;
      text-transform: uppercase;
    }
  }
`;