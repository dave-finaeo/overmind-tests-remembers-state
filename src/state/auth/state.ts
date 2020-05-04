import { statemachine } from "overmind";

const state = {
  currentUser: null,
  error: null,
  mode: statemachine({
    initial: "unauthenticated",
    states: {
      unauthenticated: ["authenticating"],
      authenticating: ["unauthenticated", "authenticated"],
      authenticated: ["unauthenticated"],
    },
  }),
};

export default state;
