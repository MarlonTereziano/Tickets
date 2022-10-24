import styled from "styled-components";
export const Container = styled.div`
  width: 100vw;
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  padding: 1rem 3rem 1rem 3rem;
  background-color: #131517;
  a{
    width: 10rem;
  }
  img {
    width: 10rem;
  }

`;

export const AreaButtons = styled.div`
  display: flex;
  justify-content: space-between;
  height: 3rem;
  width: 13rem;
  button {
    color: white;
    border-radius: 0.5rem;
    background-color: transparent;
    border: 1px solid white;
    width: 7rem;
  }
  .signIn {
    border:none;
  }
  .signUp:hover {
    background-color: #fb7312;
    text-decoration: none;
    border: none;
    font-weight: bold;
    transition: 0.3s;
  }

`;


