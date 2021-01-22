import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment } from "../store/actions";

/**
 * Describes a component which increments on click
 * It makes use of useSelector and useDispatch hooks to
 * communicate with the redux store
 */

export default function CounterWithReduxHooks(props) {
  const dispatch = useDispatch();
  const { count } = useSelector((state) => state);
  const hasReachedNumber = count >= props.numberToReach ? true : false;

  function handleOnClick(e) {
    e.preventDefault();

    dispatch(increment());
  }

  return (
    <div className="counter-hooks flex-center">
      I'm another counter using redux hooks! and the count is: {count}
      <h2>Has it reached? {hasReachedNumber.toString()}</h2>
      <button onClick={handleOnClick}>➕</button>
    </div>
  );
}
