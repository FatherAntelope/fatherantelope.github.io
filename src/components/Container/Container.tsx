import React from 'react';
import {IHTMLDivElementProps} from '~/interfaces/ElementProps.interface.ts';

import './Container.style.scss';

type IProps = Pick<IHTMLDivElementProps, 'children'>;
export const Container: React.FC<IProps> = ({children}) => <div className="container">{children}</div>;
