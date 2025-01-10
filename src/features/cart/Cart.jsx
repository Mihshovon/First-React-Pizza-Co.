import LinkButton from "../../ui/LinkButton";
import Button from "../../ui/Button";
import CartItem from "./CartItem";
import EmptyCart from "./EmptyCart"
import { useDispatch, useSelector } from "react-redux";
import { getCart } from "./cartSlice";
import {clearCart} from "./cartSlice"

function Cart() {
  const userName = useSelector(state => state.user.userName)
  const cart = useSelector(getCart);
  const dispatch = useDispatch();

  if(!cart.length) return <EmptyCart />

  return (
    <div>
      <LinkButton to="/menu">&larr; Back to menu</LinkButton>

      <h2 className="mt-7 text-xl font-semibold">Your cart, {userName}</h2>

      <ul className="mt-3 divide-y divide-stone-200 border-b">
        {cart.map((item) => (
          <CartItem item={item} key={item.pizzaId} />
        ))}
      </ul>

      <div>
        <Button type="primary" to="/order/new">
          Order pizzas
        </Button>
        <Button type="secondary" onClick={() => dispatch(clearCart())}>Clear cart</Button>
      </div>
    </div>
  );
}

export default Cart;
