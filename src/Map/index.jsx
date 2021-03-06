import React, { Component, useRef, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import MapRenderer from './MapRenderer';

import * as styles from './styles.css';

export default class Map extends Component {
	static propTypes = {
		baseMapLayer: PropTypes.object,
		vectorLayers: PropTypes.arrayOf(PropTypes.object),
		rasterLayers: PropTypes.arrayOf(PropTypes.object),
	};

	static defaultProps = {
		vectorLayers: [],
		rasterLayers: [],
	};

	componentDidMount() {
		this.mapRenderer = new MapRenderer(this.mapElement, this.props);
	}

	componentDidUpdate(prevProps) {
		this.mapRenderer.update(this.props);
	}

	render() {
		return <div ref={(mapElement) => (this.mapElement = mapElement)} className={styles.wrapper} />;
	}
}
//
// export default function Map({
// 	rasterLayers = [],
// 	vectorLayers = [],
// 							})
// {
// 	const mapElement = useRef(null);
// 	const [mapRenderer, setMapRenderer] = useState(new MapRenderer(mapElement, { rasterLayers, vectorLayers }))
// 	useEffect(() => {
// 		mapRenderer.update({ rasterLayers, vectorLayers });
// 	})
// 	return <div ref={mapElement} className={styles.wrapper} />;
// }
