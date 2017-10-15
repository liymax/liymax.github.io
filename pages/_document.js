import React from "react";
import Document, { Head, Main, NextScript } from 'next/document'
import flush from 'styled-jsx/server'

export default class extends Document {
	static getInitialProps({ renderPage }) {
		const { html, head, errorHtml, chunks } = renderPage();
		const styles = flush();
		return { html, head, errorHtml, chunks, styles }
	}

	render() {
		return (
			<html>
			<Head>
				<style jsx>{`body { margin: 0 } `}</style>
				<link  href="/static/test/test.js" as="script"/>
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
			</html>
		)
	}
}