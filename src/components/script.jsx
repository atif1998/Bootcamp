const initialState = {
  firstName: "",
  lastName: "",
  userName: "",
  email: "",
};
function reducer(state, action) {
  switch (action.type) {
    case "changeValue":
      console.log("action", action);
      return { ...state, [action.field]: action.value };
    case "reset":
      return initialState;
    default:
      throw new Error();
  }
}
export { initialState, reducer };
