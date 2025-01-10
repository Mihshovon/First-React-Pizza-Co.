import { useDispatch } from "react-redux";
import Button from "../../ui/Button";
import { decreaseItemQantity, increaseItemQantity } from "./cartSlice";

export default function UpdateItemQuantity({ pizzaId, currentQuantity }) {
  const dispatch = useDispatch();

  return (
    <div className="flex items-center gap-1 md:gap-2">
      <Button
        type="round"
        onClick={() => dispatch(decreaseItemQantity(pizzaId))}
      >
        -
      </Button>
      <span>{currentQuantity}</span>
      <Button
        type="round"
        onClick={() => dispatch(increaseItemQantity(pizzaId))}
      >
        +
      </Button>
    </div>
  );
}
