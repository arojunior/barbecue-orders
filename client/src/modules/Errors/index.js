export default {
  reducer: {
    EMPTY_ERROR: (state, action) => ({
      ...state,
      error: null,
    }),
  },
};
