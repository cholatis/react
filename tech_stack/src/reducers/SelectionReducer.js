export default (state = null, action) => {
  /*
  console.log(action);
  return null; // can not return undefine that's why return null
  */
  switch (action.type) {
    case 'select_library':
      return action.payload;

    default:
      return state;
  }
};
