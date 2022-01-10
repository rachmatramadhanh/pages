import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from "next/document";
import { ServerStyleSheet } from "styled-components";

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet();
    const orignalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        orignalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <script dangerouslySetInnerHTML={{ __html: setInitialColorTheme }} />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

function checkThemePresent() {
  function getThemePreset() {
    const theme = window.localStorage.getItem("theme");
    const hasTheme = typeof theme === "string";
    if (hasTheme) {
      return theme;
    }
    return "light";
  }
  const colorTheme = getThemePreset();
  const root = document.documentElement;
  root.style.setProperty("--initial-data-theme", colorTheme);
  if (colorTheme === "dark") {
    document.documentElement.setAttribute("data-theme", "dark");
  }
}

const setInitialColorTheme = `(function () {
  ${checkThemePresent.toString()}checkThemePresent();
})()`;
