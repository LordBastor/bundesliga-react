import React, { Component } from 'react'
import { MuiThemeProvider, getMuiTheme } from 'material-ui/styles'


var decorator = ComposedComponent => class extends React.Component
{
	static async getInitialProps(ctx)
	{
		const { req } = ctx
		const userAgent = req ? req.headers['user-agent'] : navigator.userAgent

		let pageProps = {}

		if (ComposedComponent.getInitialProps)
		{
			pageProps = await ComposedComponent.getInitialProps(ctx)
		}

		return {
			...pageProps,
			userAgent,
		}
	}

	render()
	{
		const mui_theme = getMuiTheme({userAgent: false})

		return (
			<div>
				<MuiThemeProvider muiTheme={mui_theme}>
					<div>
						<ComposedComponent {...this.props} />
					</div>
				</MuiThemeProvider>
			</div>
		)
	}
}

export default decorator