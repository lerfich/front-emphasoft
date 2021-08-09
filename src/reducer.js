const reducer = (state, action) => {
  switch (action.type) {
    case 'JOINED':
      return {
        ...state,
        joined: true,
        username: action.payload.username,
        users: action.payload.users,
      };

    default:
      return state;
  }
};
export default reducer;
