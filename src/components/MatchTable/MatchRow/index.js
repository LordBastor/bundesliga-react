import Link from 'next/link'
import {
	TableRow,
	TableRowColumn,
} from 'material-ui/Table'

import AutoRenew from 'material-ui/svg-icons/action/autorenew'
import Done from 'material-ui/svg-icons/action/done'


export default class MatchRow extends React.Component
{
	constructor(props)
	{
		super(props)
		this.state = {}
	}

	render()
	{
		let value = this.props.value
		let team_1_id = value.team_1.id
		let team_2_id = value.team_2.id
		
		return(
			<TableRow>
				<TableRowColumn>
					<Link
						href={{ pathname: '/team', query: { id: team_1_id } }}
						as={`/team/${team_1_id}`}
						prefetch
					>
						<div><img src={value.team_1.icon}/> {value.team_1.name}</div>
					</Link>
				</TableRowColumn>
				<TableRowColumn>
					{value.team_1.score} - {value.team_2.score}
				</TableRowColumn>
				<TableRowColumn>
					<Link
						href={{ pathname: '/team', query: { id: team_2_id } }}
						as={`/team/${team_2_id}`}
						prefetch
					>
						<div><img src={value.team_2.icon}/> {value.team_2.name}</div>
					</Link>
				</TableRowColumn>
				<TableRowColumn>
					{
						value.finished
						?
						<Done/>
						:
						<AutoRenew/>
					}
				</TableRowColumn>
			</TableRow>
		)
	}
}
