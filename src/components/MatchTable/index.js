import {
	Table,
	TableRow,
	TableBody,
	TableHeader,
	TableRowColumn,
	TableHeaderColumn,
} from 'material-ui/Table'

import MatchRow from 'components/MatchTable/MatchRow'


export default class MatchTable extends React.Component
{
	constructor(props)
	{
		super(props)
		this.state = {}
	}

	render()
	{
		let matches = this.props.matches
		
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
						<TableHeaderColumn>Team 1</TableHeaderColumn>
						<TableHeaderColumn>Score</TableHeaderColumn>
						<TableHeaderColumn>Team 2</TableHeaderColumn>
						<TableHeaderColumn>Finished</TableHeaderColumn>
					</TableRow>
				</TableHeader>
				<TableBody>
					{
						matches.map((value, index) => {
							return(
								<MatchRow
									key={index}
									value={value}
								/>
							)
						})
					}
				</TableBody>
			</Table>
		)
	}
}
