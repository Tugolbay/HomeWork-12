import summaryImage from "../../assats/images/pexels-alexy-almond-3756523 1.png";
import { MealSummaryCart } from "./MealSummaryCart";
import { SummaryItem } from "./SummaryItem";
export const MealSummary = () => {
  return (
    <div>
      <img src={summaryImage} />
      <MealSummaryCart />
      <SummaryItem />
    </div>
  );
};
