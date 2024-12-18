import React from 'react';
import {IHTMLDivElementProps} from '~/interfaces/ElementProps.interface.ts';

import './Row.style.scss';

interface IProps extends Pick<IHTMLDivElementProps, 'children'> {
  alignCenter?: boolean;
}

export const Row: React.FC<IProps> = ({children, alignCenter}) => {
  const classNames = ['row'];

  if (alignCenter) {
    classNames.push('align-items_center');
  }

  return <div className={classNames.join(' ')}>{children}</div>;
};
