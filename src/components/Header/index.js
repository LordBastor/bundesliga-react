import Head from 'next/head'
import Link from 'next/link'
import NProgress from 'nprogress'
import Router from 'next/router'
import AppBar from 'material-ui/AppBar'
import Drawer from 'material-ui/Drawer'
import MenuItem from 'material-ui/MenuItem'

Router.onRouteChangeStart = (url) => {
	NProgress.start()
}
Router.onRouteChangeComplete = () => NProgress.done()
Router.onRouteChangeError = () => NProgress.done()


export default class Header extends React.Component
{
	constructor(props)
	{
		super(props)
		this.state = {
			menu_open: false
		}
	}

	toggle_menu()
	{
		this.setState({menu_open: !this.state.menu_open})
	}

	render()
	{
		return(
			<div style={{ marginBottom: 20 }}>
				<Head>
					<link rel='stylesheet' type='text/css' href='/static/nprogress.css' />
				</Head>
				<AppBar
					title={this.props.title}
					style={{position: 'fixed', top: 0, left: 0, right: 0, zIndex: 999}}
					onLeftIconButtonTouchTap={() => this.toggle_menu()}
				/>
				<Drawer
					open={this.state.menu_open}
					onRequestChange={open => this.setState({menu_open: open})}
					docked={false}
				>
					<Link prefetch href='/' ><MenuItem primaryText='Scores'/></Link>
					<Link prefetch href='/all_matches' ><MenuItem primaryText='All Matches'/></Link>
					<Link prefetch href='/upcoming' ><MenuItem primaryText='Upcoming Matches'/></Link>
				</Drawer>
			</div>
		)
	}
}
