import NextApp from "next/app"
import Head from "next/head"
import { ThemeProvider, CSSReset } from "@chakra-ui/core"
import { ContainerBody } from "../components/Container"

export default class MyApp extends NextApp {
  render() {
    const { Component, pageProps } = this.props
    return (
      <ThemeProvider>
        <CSSReset />
        <Head>
          <title>Puyuh App</title>
        </Head>
        <ContainerBody>
          <Component {...pageProps} />
        </ContainerBody>
      </ThemeProvider>
    )
  }
}
