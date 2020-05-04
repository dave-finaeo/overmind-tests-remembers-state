export const login = ({ state, effects }, { username, password }) => {
  return state.auth.mode.authenticating(async () => {
    try {
      const user = await effects.auth.login(username, password);

      return state.auth.mode.authenticated(() => {
        state.auth.currentUser = user;
        state.auth.error = null;
      });
    } catch (err) {
      return state.auth.mode.unauthenticated(() => {
        state.auth.currentUser = null;
        state.auth.error = err;
      });
    }
  });
};
