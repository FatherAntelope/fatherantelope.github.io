import React from 'react';
import {IHTMLDivElementProps} from '~/interfaces/ElementProps.interface.ts';

import './Section.style.scss';

export const Section: React.FC<IHTMLDivElementProps> = (props) => <section {...props} />;
