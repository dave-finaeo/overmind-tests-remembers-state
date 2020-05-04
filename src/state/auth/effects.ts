export const login = async (username, password) => {
  if (username === "fail") {
    throw new Error("AUTH FAILURE");
  }

  return { username, password };
};
