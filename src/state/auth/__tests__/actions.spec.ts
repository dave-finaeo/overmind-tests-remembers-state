import { createOvermindMock } from "overmind";
import { config } from "../../";

const user = { username: "Test", password: "Blah!" };

describe("auth", () => {
  it("logs the user in", async () => {
    const { state, actions } = createOvermindMock(config, {
      auth: {
        login: async (_username, _password) => user,
      },
    });

    await actions.auth.login({ username: "blah", password: "blah" });

    expect(state.auth.mode.current).toBe("authenticated");
    expect(state.auth.currentUser).toEqual(user);
    expect(state.auth.error).toBeNull();
  });

  it("does not log the user in", async () => {
    const { state, actions } = createOvermindMock(config, {
      auth: {
        login: async (_username, _password) => {
          throw new Error("KABOOM!");
        },
      },
    });

    await actions.auth.login({ username: "blah", password: "blah" });

    expect(state.auth.mode.current).toBe("unauthenticated");
    expect(state.auth.currentUser).toBeNull();
    expect(state.auth.error).not.toBeNull();
  });
});
