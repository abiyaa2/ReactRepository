import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, reset } from "../ACTIONS/CountAction";
import "../ReduxCounter/button.css";

const ReduxCounter = () => {
  const count = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const incrementApp = () => {
    dispatch(increment(1));
  };
  const decrementApp = () => {
    if (count > 0) {
      dispatch(decrement(1));
    }
  };
  const resetApp = () => {
    dispatch(reset());
  };
  return (
    <>
      <h4 className="px-2"> Counter : {count}</h4>
      <div className="counter-button">
        <button className="btn btn-success me-3" onClick={incrementApp}>
          {" "}
          Increment
        </button>
        <button className=" btn btn-danger me-3" onClick={decrementApp}>
          Decrement
        </button>
        <button className="btn btn-primary me-3" onClick={resetApp}>
          Reset
        </button>
      </div>
    </>
  );
};
export default ReduxCounter;
