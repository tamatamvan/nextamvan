import Document, { Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <html lang="en">
        <Head>
          <link rel="icon" href="/static/images/app-icons/nextamvan-32.png"/>
          <meta name="charset" content="utf-8"/>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="manifest" content="/static/manifest.json"/>
          <meta name="theme-color" content="#2f2f2f" />
          <link rel="shortcut icon" href="/static/images/app-icons/nextamvan-128.png" />
          <link rel="apple-touch-icon" href="/static/images/app-icons/nextamvan-128.png" />
          <meta name="apple-mobile-web-app-title" content="Nextamvan Boilerplate" />
          <meta name="apple-mobile-web-app-status-bar-style" content="default" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta name="mobile-web-app-capable" content="yes" />
        </Head>
        <body className="custom_class">
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}