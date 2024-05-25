import createEmotionCache from "@/theme/createEmoticonsCache";
import { CacheProvider } from "@emotion/react";
import { Fragment } from "react";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "@/theme/theme";
import Layout from "@/components/Layout";

const clientSideEmotionCache = createEmotionCache();

export default function App({
  Component,
  pageProps: { session, ...pageProps },
  emotionCache = clientSideEmotionCache,
}) {
  return (
    <Fragment>
      <CacheProvider value={emotionCache}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Layout>
          <Component {...pageProps} />
          </Layout>
         
        </ThemeProvider>
      </CacheProvider>
    </Fragment>
  );
}
