import React from "react";
import { connect } from "react-redux";
import App from "../../components/App/App";
import Counter from "../../components/Counter/Counter";
import { action } from "../../store/actions";
import * as constants from "../../store/constants";



const MainPage = ({counter}) => {
  return (
    <>
      <App />
      <Counter
        value={counter}
        onIncrement={() => action(constants.INCREMENT)}
        onDecrement={() => action(constants.DECREMENT)}
      />
    </>
  );
}

function mapStateToProps(state) {
  return {
    counter: state.counterReducer,
  };
}

export default connect(mapStateToProps)(MainPage);
