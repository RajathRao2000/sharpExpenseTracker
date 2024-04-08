const redux = require("redux");

const conuterReducer = (state = { counter: 0 }, action) => {
  if (action.type == "increment") {
    return {
      counter: state.counter + 1,
    };
  } else if (action.type == "decrement") {
    return {
      counter: state.counter - 1,
    };
  }
};

const store = redux.createStore(conuterReducer);

const counterSubscriber = () => {
  const latestState = store.getState();
  console.log(latestState);
};

store.subscribe(counterSubscriber);

store.dispatch({ type: "increment" });
store.dispatch({ type: "increment" });
store.dispatch({ type: "increment" });
store.dispatch({ type: "increment" });
store.dispatch({ type: "increment" });
store.dispatch({ type: "decrement" });
