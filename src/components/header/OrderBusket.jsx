import styled from "styled-components";
import { ReactComponent as BasketIcon } from "../../assats/icons/Group.svg";
export const OrderBusket = ({ children }) => {
  return (
    <Button>
      <BasketIcon /> <OrderBycketTitle>{children}</OrderBycketTitle>
      <OrderBusketCount>7</OrderBusketCount>
    </Button>
  );
};

const Button = styled.button`
  width: 249px;
  height: 59px;
  background: #5a1f08;
  border-radius: 30px;
  border-style: none;
  margin-right: 120px;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: #4d1601;
    cursor: pointer;
  }
`;
const OrderBycketTitle = styled.span`
  font-family: "Poppins";
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;
  margin: 0 24px 0 13px;
`;
const OrderBusketCount = styled.span`
  background: #8a2b06;
  border-radius: 30px;
  padding: 4px 13px;
  color: #fff;
`;
