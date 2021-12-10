//* Initial State
const initialState = {
  openFront: true,
  openBack:false,
  darkMode: true,
  burgerOpen: false,

};

//* Actions received

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case 'TOOGLE_OPEN_FRONT':
      return {
        ...state,
        openFront: !state.openFront,
  };
  case 'TOOGLE_OPEN_BACK':
    return {
      ...state,
      openBack: !state.openBack,
  };
  case 'TOOGLE_DARK_MODE':
    return {
      ...state,
      darkMode: !state.darkMode,
  };
  case 'BURGER_OPEN':
    return {
      ...state,
      burgerOpen: !state.burgerOpen,
    };
    case 'BURGER_CLOSE':
    return {
      ...state,
      burgerOpen: !state.burgerOpen,
    };
  default:
    return state;
}
};

//* Reducer export
export default reducer;
