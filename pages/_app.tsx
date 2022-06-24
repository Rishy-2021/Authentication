import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Provider } from "next-auth/client";

import "@fortawesome/fontawesome-svg-core/styles.css"; // import Font Awesome CSS
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider>
      <Component {...pageProps} />;
    </Provider>
  );
}

export default MyApp;
