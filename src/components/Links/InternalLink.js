import {get} from 'lodash';
import {ROUTE_PATH} from 'constants/routes';

function InternalLink(props) {
	const {path, params, ...rest} = props;

	let routePath = get(ROUTE_PATH, path);
	console.log(routePath);

	return;
}

export default InternalLink;
