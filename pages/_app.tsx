import { Provider } from "react-redux";
import { store } from "../src/store";
import { GlobalStyle } from "../src/styles/GlobalStyle.style";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Provider store={store}>
        <GlobalStyle />
        <Component {...pageProps} />
      </Provider>
    </>
  );
}

export default MyApp;
