import * as actionTypes from "../actions/actionTypes";

const appleReducer = (apple = 0, action) => {
  let newApple;
  switch (action.type) {
    case actionTypes.SHAKE_TREE:
      return (newApple = apple + action.payload);
    default:
      return apple;
  }
};

export default appleReducer;