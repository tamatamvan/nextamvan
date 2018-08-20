import React from 'react'
import App, { Container } from 'next/app'

import mainStyle from '../styles/main.scss'

import Layout from '../components/Layout'

export default class MyApp extends App {
  static async getInitialProps ({Component, ctx}) {
    return ({
      pageProps: (
        Component.getInitialProps ? await Component.getInitialProps(ctx) : {}
      )
    })
  }

  render () {
    const { Component, pageProps } = this.props
    return (
      <Container>
        <Layout>
          <Component {...pageProps} />
        </Layout>
        <style jsx global>{ mainStyle }</style>
      </Container>
    )
  }
}