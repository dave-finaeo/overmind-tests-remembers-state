This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# Overmind Test State Issue

This repo is an example which exposes an issue with how overmind works with tests, related to: https://github.com/cerebral/overmind/issues/365

## Steps to reproduce

1. Clone repo
2. Install all dependencies (`yarn install`)
3. Run tests (`yarn test`)

You should see a failure in the `src/state/auth/__tests__/actions.spec.ts` file.
