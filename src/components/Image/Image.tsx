import React from 'react';
import {IHTMLImageElementProps} from '~/interfaces/ElementProps.interface.ts';

import './Image.style.scss';

export const Image: React.FC<IHTMLImageElementProps> = (props) => <img {...props} />
