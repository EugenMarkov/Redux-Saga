import React, { useEffect, useReducer, useCallback } from "react";
import v4 from "uuid";
import { NewCarForm, Cars } from "./CarForm";

// initial cars state
const initialState = [
  {
    id: v4(),
    name: "Audi A4",
    description: 'Black tint with red wheels, 100kw',
    sold: false
  },
  {
    id: v4(),
    name: "Porsche 911",
    description: 'Cherry red tint with dark golden wheels, 300kw',
    sold: false
  },
  {
    id: v4(),
    name: "Lamborghini Gallardo",
    description: 'Lamborghini green with black wheels, 500kw',
    sold: false
  },
];

// action names
const CAR_ADD = "CAR_ADD";
const CAR_SELL = "CAR_SELL";

// the reducer
const reducer = (state, action) => {
  if (action.type === CAR_ADD) {
    return [action.payload, ...state];
  }

  if (action.type === CAR_SELL) {
    return state.map(car => {
      if (car.id !== action.payload.id) {
        return car;
      }
      return { ...car, sold: !car.sold };
    });
  }

  return state;
};

const Hooks = () => {
  const [cars, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    console.log(cars);
  }, [cars]);

  const addCar = useCallback(({ name, description }) => {
    dispatch(
      {
        type: CAR_ADD,
        payload: {
          name,
          description,
          sold: false,
          id: v4()
        }
      },
      [dispatch]
    );
  },[dispatch]);

  const toggleSold = useCallback(id => {
      dispatch({ type: CAR_SELL, payload: { id } });
    },
    [dispatch]
  );

  return (
    <div style={{ maxWidth: 400, margin: '0 auto' }}>
      <NewCarForm onSubmit={addCar} />
      <Cars cars={cars} onSell={toggleSold} />
    </div>
  );

};

export default Hooks;
