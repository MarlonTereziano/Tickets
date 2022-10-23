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
  img {
    width: 10rem;
  }
`;
export const AreaButtons = styled.div`
  display: flex;
  justify-content: space-between;
  height: 3rem;
  width: 15rem;
  button{
    z-index: 999;
    color: white;
    border-radius: 0.4rem;
    background-color: transparent;
    width: 7rem;
  }
  button:hover {
    z-index: 999;
    cursor: pointer;
  }
`;
