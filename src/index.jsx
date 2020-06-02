import React from 'react';
import { render as reactDOMRender } from 'react-dom';
// Global styles
import './styles.css';

import Map from './Map';

let root = document.getElementById('root');

if (!root) {
	root = document.createElement('div');
	root.id = 'root';

	document.body.appendChild(root);
}

reactDOMRender(<Map />, root);
