import 'decorators/page_imports'
import Page from 'decorators/decorator'
import Paper from 'material-ui/Paper'
import Subheader from 'material-ui/Subheader'

import Header from 'components/Header'
import MatchTable from 'components/MatchTable'


class Team extends React.Component
{
	static async getInitialProps ({ query, res })
	{
		let score_url = `scores/${query.id}`
		let scores
		await APIService.get(score_url).then(response => { scores = response })
		
		let match_url = `upcoming_matches/${query.id}`
		let matches
		await APIService.get(match_url).then(response => { matches = response })
		
		return {
			scores: scores,
			matches: matches,
		}
	}

	componentWillReceiveProps(nextProps)
	{
		this.setState({
			scores: nextProps.scores,
			matches: nextProps.matches,
		})
	}

	constructor(props)
	{
		super(props)
		this.state = {
			scores: props.scores,
			matches: props.matches,
		}
	}

	scores()
	{
		const style = {
			paper: {
				textAlign: 'center',
				display: 'inline-block',
				width: '100%',
				marginTop: '50px',
			},
			bigTitle: {
				fontSize: '48px'
			},
			mediumTitle: {
				fontSize: '24px'
			}
		}
		
		let scores = this.state.scores
		
		return(
			<Paper style={style.paper} zDepth={1}>
				<h2 style={style.bigTitle}>{scores.name} <img src={scores.icon} /></h2>
				<h3 style={style.mediumTitle}><span>Wins: {scores.wins}</span></h3>
				<h3 style={style.mediumTitle}><span>Losses: {scores.losses}</span></h3>
				<h3 style={style.mediumTitle}><span>Draws: {scores.draws}</span></h3>
				<h3 style={style.mediumTitle}><span>Points: {scores.points}</span></h3>
			</Paper>
		)
	}

	matches()
	{
		return(<MatchTable matches={this.state.matches.results} />)
	}

	render()
	{
		return(
			<div>
				<Header title={this.state.scores.name}/>
				{this.scores()}
				{this.matches()}
			</div>
		)
	}
}

export default Page(Team)
