import Document, { Html, Head, Main, NextScript } from 'next/document';
import React from 'react';
import { SheetsRegistry, JssProvider, createGenerateId } from 'react-jss';

class JssDocument extends Document {
  static async getInitialProps(ctx) {
    const registry = new SheetsRegistry();
    const generateId = createGenerateId();
    const originalRenderPage = ctx.renderPage;

    ctx.renderPage = () =>
      originalRenderPage({
        // useful for wrapping the whole react tree
        enhanceApp: (App: any) => (props: any) =>
          (
            <JssProvider generateId={generateId} registry={registry}>
              <App {...props} />
            </JssProvider>
          ),
      });

    // Run the parent `getInitialProps`, it now includes the custom `renderPage`
    const initialProps = await Document.getInitialProps(ctx);
    return {
      ...initialProps,
      styles: (
        <>
          {initialProps.styles}
          <style
            // kvuli escapovani css selectoru '>' reactem vkladame jako innerHTML
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{ __html: registry.toString() }}
            id="server-side-styles"
          />
        </>
      ),
    };
  }

  render() {
    return (
      <Html>
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default JssDocument;
