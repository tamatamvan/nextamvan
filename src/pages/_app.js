import React from 'react'
import { Provider } from 'react-redux'
import App, { Container } from 'next/app'
import withRedux from 'next-redux-wrapper'
import { initStore } from 'store'

import mainStyle from 'styles/main.scss'

import Layout from 'components/Layout'

export default withRedux(initStore)(class MyApp extends App {
  static async getInitialProps ({Component, ctx}) {
    return ({
      pageProps: (
        Component.getInitialProps ? await Component.getInitialProps(ctx) : {}
      )
    })
  }

  render () {
    const { Component, pageProps, store } = this.props
    return (
      <Container>
        <Provider store={store}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </Provider>
        
        <style jsx global>{ mainStyle }</style>
      </Container>
    )
  }
})
