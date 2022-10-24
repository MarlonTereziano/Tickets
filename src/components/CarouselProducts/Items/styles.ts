import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  height: 100%;
  border-radius: 1rem;
  background-color: rgba(0, 0, 0, 0.2);
  
  img {
    border-radius: 1rem;
    width: 80%;
    height: 100%;
    box-shadow: rgba(0, 0, 0, 0.8) 0px 3px 8px;
  }
`;

export const ContainerDescription = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1.4rem;
  width: 40%;
  height: 100%;
  overflow-y: auto;

  button{
    color: white;
    border-radius: 0.5rem;
    height: 3rem;
    background-color: #d30b98;
    font-family: RimouskiBold;
    text-decoration: none;
  }

  button:hover{
    transition: 0.3s;
    border: 1px solid white;
  }

  ::-webkit-scrollbar {
    width: 10px; /* width of the entire scrollbar */
  }

  ::-webkit-scrollbar-track {
    background: transparent; /* color of the tracking area */
    margin-top: 0.3rem;
    margin-bottom: 0.1rem;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #27292a;
    border-radius: 1rem; /* roundness of the scroll thumb */
  }

  h2 {
    color: white;
    font-size: 1.2rem;
    font-family: RimouskiBold;
    text-align: justify;
  }

  h3 {
    color: grey;
    margin-top: 0.5rem;
  }

  h4{
    color: white;
    color: grey;
  }
`;
