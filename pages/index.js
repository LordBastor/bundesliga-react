import 'decorators/page_imports'
import Page from 'decorators/decorator'
import {
	Table,
	TableRow,
	TableBody,
	TableHeader,
	TableRowColumn,
	TableHeaderColumn,
} from 'material-ui/Table'
import Paper from 'material-ui/Paper'

import Header from 'components/Header'
import ScoreRow from 'components/ScoreRow'


class Index extends React.Component
{
	static async getInitialProps()
	{
		let url = 'scores'
		let scores
		await APIService.get(url).then(response => { scores = response })
		return { scores: scores }
	}

	constructor(props)
	{
		super(props)
		this.state = {
			scores: props.scores
		}
	}

	table()
	{
		let scores = this.state.scores.results
		
		return(
			<Table
				selectable={false}
				fixedHeader={false}
			>
				<TableHeader
					displaySelectAll={false}
					adjustForCheckbox={false}
					enableSelectAll={false}
				>
					<TableRow>
						<TableHeaderColumn>Team</TableHeaderColumn>
						<TableHeaderColumn>W</TableHeaderColumn>
						<TableHeaderColumn>L</TableHeaderColumn>
						<TableHeaderColumn>D</TableHeaderColumn>
						<TableHeaderColumn>Points</TableHeaderColumn>
					</TableRow>
				</TableHeader>
				<TableBody>
					{
						scores.map(value => {
							return(
								<ScoreRow
									key={value.id}
									value={value}
								/>
							)
						})
					}
				</TableBody>
			</Table>
		)
	}
	
	render()
	{
		return(
			<div>
				<Header title='All Scores'/>
				<Paper style={{marginTop: '80px'}}>
					{this.table()}
				</Paper>
			</div>
		)
	}
}

export default Page(Index)
