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
          <title>Nextamvan</title>
          <meta name="charset" content="utf-8"/>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="manifest" content="/static/manifest.json"/>
        </Head>
        <body className="custom_class">
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}