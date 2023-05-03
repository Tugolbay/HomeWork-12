import styled from "styled-components";
export const MealSummaryCart = () => {
  return (
    <Container>
      <h3>Delicious Food, delivered To You</h3>
      <Paragraph1>
        Choose your favorite meal from our broad selection of available meals
        and enjoy a delicious lunch or dinner at home.
      </Paragraph1>
      <Paragraph2>
        All our meals are cooked with high-quality ingredients, just-in-time and
        of course by  experienced chefs!
      </Paragraph2>
    </Container>
  );
};

const Container = styled.div`
  width: 854px;
  height: 270px;
  background: #383838;
  box-shadow: 0px 6px 16px rgba(0, 0, 0, 0.3);
  border-radius: 16px;
  position: absolute;
  top: 358px;
  left: 293px;
  z-index: 2;

  h3 {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 600;
    font-size: 36px;
    line-height: 54px;
    color: #ffffff;
    text-align: center;
  }
`;

const Paragraph1 = styled.p`
  margin-top: 28px;
  margin-left: 54px;
  width: 746px;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  color: #ffffff;
`;
const Paragraph2 = styled.p`
  margin-top: 20px;
  margin-left: 40px;
  width: 746px;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  color: #ffffff;
`;
