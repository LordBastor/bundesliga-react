import 'decorators/page_imports'
import Page from 'decorators/decorator'
import Paper from 'material-ui/Paper'

import Header from 'components/Header'
import MatchTable from 'components/MatchTable'


class Upcoming extends React.Component
{
	static async getInitialProps()
	{
		let url = 'upcoming_matches'
		let matches
		await APIService.get(url).then(response => { matches = response })
		return { matches: matches }
	}

	constructor(props)
	{
		super(props)
		this.state = {
			matches: props.matches
		}
	}

	table()
	{
		let matches = this.state.matches.results
		return(<MatchTable matches={matches} />)
	}

	render()
	{
		return(
			<div>
				<Header title='Upcoming Matches' />
				<Paper style={{marginTop: '80px'}}>
					{this.table()}
				</Paper>
			</div>
		)
	}
}

export default Page(Upcoming)
