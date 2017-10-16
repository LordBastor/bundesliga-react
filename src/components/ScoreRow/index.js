import Link from 'next/link'
import {
	TableRow,
	TableRowColumn,
} from 'material-ui/Table'


export default class ScoreComponent extends React.Component
{
	constructor(props)
	{
		super(props)
		this.state = {}
	}

	open_team(id)
	{
		Router.push({
			pathname: `/team/${id}`
		}).then(() => window.scrollTo(0, 0))
	}

	render()
	{
		let value = this.props.value
		
		return(
			<Link
				href={{ pathname: '/team', query: { id: value.id } }}
				as={`/team/${value.id}`}
				prefetch
			>
				<TableRow>
					<TableRowColumn><img src={value.icon} /> {value.name}</TableRowColumn>
					<TableRowColumn>{value.wins}</TableRowColumn>
					<TableRowColumn>{value.losses}</TableRowColumn>
					<TableRowColumn>{value.draws}</TableRowColumn>
					<TableRowColumn>{value.points}</TableRowColumn>
				</TableRow>
			</Link>
		)
	}
}
