import {get} from 'lodash';
import {ROUTE_PATH} from 'constants/routes';
import {generatePath, Link} from 'react-router-dom';
import cleanDeep from 'clean-deep';

function InternalLink(props) {
	const {path, params, ...rest} = props;

	let routePath = get(ROUTE_PATH, path, '/'); // '/' is default

	// to generate unique/dynamic paths
	// for instance /products/:id
	// the params props has the id
	// this will generate the link
	let linkTo = generatePath(routePath, cleanDeep(params));
	console.log(linkTo);

	return <Link to={linkTo} {...rest} />;
}

export default InternalLink;
