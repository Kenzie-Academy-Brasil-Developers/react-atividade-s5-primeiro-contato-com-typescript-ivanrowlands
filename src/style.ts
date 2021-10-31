import styled from "styled-components";

export const Container = styled.main`
  text-align: center;
  display: flex;
  height: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  font-size: 18px;
  color: white;
  ul {
    width: 90%;
    margin: 0 auto;
    padding: 0;
    display: flex;
    flex-direction: column;
  }
`;

export const Content = styled.div`
  width: 90%;
  height: 200px;
  margin: 40px auto 5px;
  background-color: silver;
  border-radius: 25px;
  display: flex;
  justify-content: space-around;
  align-items: space-around;
  flex-direction: column;
  button {
    width: 85%;
    margin: 10px auto;
    font-size: 1.5rem;
    background: aquamarine;
    border: 2px solid transparent;
    border-radius: 5px;
    color: darkblue;
    &:hover {
      color: aquamarine;
      background: darkblue;
    }
  }
`;