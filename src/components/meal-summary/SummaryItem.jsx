import styled from "styled-components";
import { ReactComponent } from "../../assats/icons/Vector.svg";
export const SummaryItem = () => {
  return (
    <Container>
      <div>
        <h3>Sushi</h3>
        <SummaryItemTitle>Finest fish and veggies</SummaryItemTitle>
        <SummaryItemMount>$22.99</SummaryItemMount>
      </div>
      <Block>
        <h4>Amount</h4>
        <SummaryItemInput type="text" />
        <SummaryItemBtn>
          <SummaryIcon>
            <ReactComponent />
          </SummaryIcon>
          <span>ADD</span>
        </SummaryItemBtn>
      </Block>
      <Line></Line>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  width: 1039px;
  height: 564px;
  background: #ffffff;
  border-radius: 16px;
  border: 2px solid black;
  margin-top: 135px;
  margin-left: 201px;
  justify-content: space-between;

  h3 {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 27px;
    color: #222222;
    margin-top: 40px;
    margin-left: 40px;
  }
  h4 {
    position: relative;
    font-family: "Poppins";
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 27px;
    color: #222222;
    top: 42px;
    left: 40px;
  }
`;
const SummaryItemTitle = styled.p`
  font-family: "Poppins";
  font-style: italic;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #222222;
  margin-top: 4px;
  margin-left: 40px;
`;
const SummaryItemMount = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 30px;
  color: #ad5502;
  margin-top: 4px;
  margin-left: 40px;
`;
const SummaryItemBtn = styled.div`
  position: relative;
  top: 84px;
  right: 40px;
  width: 99px;
  height: 41px;
  background: #8a2b06;
  border-radius: 20px;
  &:hover {
    background-color: #4d1601;
    cursor: pointer;
  }
  &:active {
    background-color: #993108;
  }
  span {
    position: absolute;
    font-family: "Poppins";
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 21px;
    color: #ffffff;
    top: 10px;
    left: 44px;
  }
`;
const Block = styled.div`
  display: flex;
`;
const SummaryItemInput = styled.input`
  width: 60px;
  height: 32px;
  position: relative;
  top: 40px;
  left: 58px;
`;
const SummaryIcon = styled.div`
  margin-top: 14px;
  margin-left: 18px;
`;
const Line = styled.div`
  width: 959px;
  position: absolute;
  border: 1px solid #d6d6d6;
  top: 817px;
  left: 241px;
  box-shadow: 0px 6px 12px rgba(36, 36, 36, 0.08);
`;
