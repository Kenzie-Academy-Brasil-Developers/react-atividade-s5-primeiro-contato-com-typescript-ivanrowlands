import styled from "styled-components";

export const ContainerCard = styled.div`
  background: honeydew;
  width: 200px;
  margin: 10px auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  color: navy;
  border-radius: 20px;
  h3 {
    border-bottom: 2px solid darkblue;
    span {
      color: darkred;
    }
  }
  h4 {
    span {
      color: saddlebrown;
    }
  }
`;