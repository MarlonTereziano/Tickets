import styled from "styled-components";

export const ProductsContainer = styled.div`
  display: flex;
  justify-content: center;
  height: 20rem;
  padding: 0 1rem 0 1rem;

  @media (max-width: 967px) {
    padding: 0;
    height: 26rem;
  }

  .seperator {
    width: 100%;
  }

  .controls-wrapper {
    width: 100%;
  }

  .carousel-wrapper {
    width: 100%;
  }

  .rec.rec-arrow {
    border: none;
    background-color: transparent;
    border: none;
    box-shadow: none;
    color: white;
    @media (max-width: 967px) {
      display: none;
    }
  }

  .rec.rec-arrow:hover {
    color: white;
  }

  .rec-carousel-item:focus {
    outline: none;
    box-shadow: inset 0 0 1px 0px violet;
  }

  /* .sc-pyfCe.iXOKgB.rec.rec-pagination{
    background-color: white;
  } */

  .sc-ftTHYK.grqFvW.rec.rec-dot{
    background-color: transparent;
    border: 1px solid grey;
  }

  .sc-ftTHYK.grqFvW.rec.rec-dot:hover{
    box-shadow: none;
    border: 1px solid;
  }

  .sc-ftTHYK.hHFSRh.rec.rec-dot.rec.rec-dot_active{
    background-color: grey;
    box-shadow: none;
  }

`;

export const Item = styled.div`
border-radius: 1rem;
  display: flex;
  height: 20rem;
  width: 90%;
`;
