import { Provider } from "react-redux";

import { store } from "../src/store";

import { GlobalStyle } from "../src/styles/GlobalStyle.style";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  backgrounds: {
    default: "gray",
    values: [
      {
        name: "white",
        value: "#ffffff",
      },
      {
        name: "gray",
        value: "#1F1F1F",
      },
    ],
  },
};

export const decorators = [
  (Story) => {
    return (
      <Provider store={store}>
        <GlobalStyle />
        <Story />
      </Provider>
    );
  },
];
