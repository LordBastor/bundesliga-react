import * as APIService from '../services/APIService'
var injectTapEventPlugin = require('react-tap-event-plugin')
import Router from 'next/router'
import Link from 'next/link'

import root from 'window-or-global'


root.APIService = APIService
root.Router = Router
root.Link = Link

if (typeof window !== 'undefined')
{
	injectTapEventPlugin()
}
