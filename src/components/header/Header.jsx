import styled from "styled-components";
import { OrderBusket } from "./OrderBusket";
export const Header = () => {
  return (
    <header>
      <Container>
        <h1>ReactMeals</h1>
        <OrderBusket>Your Cart</OrderBusket>
      </Container>
    </header>
  );
};

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 101px;
  background: #8a2b06;
  align-items: center;
  justify-content: space-between;

  h1 {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 600;
    font-size: 38px;
    line-height: 57px;
    color: #ffffff;
    margin-left: 120px;
  }
`;
