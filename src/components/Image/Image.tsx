import React from 'react';
import {IHTMLImageElementProps} from '~/interfaces/ElementProps.interface.ts';

import './Image.style.scss';

interface IProps extends IHTMLImageElementProps {
  variant?: 'common' | 'box';
}

export const Image: React.FC<IProps> = ({alt, variant, ...props}) => {
  if (variant === 'box') {
    return (
      <div className="img__box">
        <img alt={alt} {...props} />
      </div>
    );
  }

  return (
    <img alt={alt} {...props} />
  );
};
