import {assign, cloneDeepWith, isObject, isString, keys} from 'lodash';
import urlJoin from 'url-join';

export function mergeNodePath(path, obj) {
	const nodes = assign({}, obj);

	return cloneDeepWith(nodes, (value) => {
		if (typeof value === 'string') {
			return urlJoin(path, value);
		}
	});
}

export function buildRouteNodes(routes) {
	let routeNodes = assign({}, routes); // clone
	const rootPath = routeNodes['INDEX'];

	keys(routeNodes).forEach((key) => {
		let nodeItem = routeNodes[key];

		if (isString(nodeItem)) {
			if (key !== 'INDEX') {
				if (nodeItem === '/') {
					nodeItem = rootPath;
				} else {
					nodeItem = urlJoin(rootPath, nodeItem);
				}
			}
		} else if (isObject(nodeItem)) {
			nodeItem = mergeNodePath(rootPath, buildRouteNodes(nodeItem));
		}

		routeNodes[key] = nodeItem;
	});

	return routeNodes;
}
