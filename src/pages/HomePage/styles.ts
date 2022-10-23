import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 65rem;
  background-color: #131517;
`;

export const ContainerHeader = styled.div`
  width: 100vw;
  height: 5rem;
  display: flex;
  align-items: center;
  flex-direction: row;
  padding-left: 3rem;
  background-color: #131517;

  img {
    width: 10rem;
  }
  button {
    width: 10rem;
  }
`;

export const ContainerEvents = styled.div`
  background-color: #131517;
  height: 29rem;
  padding: 2rem 3rem 1rem 3rem;
  h1 {
    color: white;
    padding-left: 2rem;
    font-size: 1.2rem;
    margin-bottom: 2rem;
  }
`;

export const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 4rem;
  background-color: black;
  color: white;
`;
