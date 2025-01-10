import { useSelector } from "react-redux";
import CreateUser from "../features/user/CreateUser";
import Button from "./Button";

function Home() {

  const userName = useSelector(state => state.user.userName)

  return (
    <div className="my-10 text-center">
      <h1 className="mb-8 text-xl font-semibold sm:my-14">
        The best pizza.
        <br />
        <span className="text-yellow-500">
          Straight out of the oven, straight to you.
        </span>
      </h1>
      {userName === '' ?  <CreateUser /> : <Button type="primary" to='/menu'>Continue Order, {userName}</Button>}
    </div>
  );
}

export default Home;