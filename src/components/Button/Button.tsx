import React from 'react';
import {Link, LinkProps} from 'react-router-dom';
import {IHTMLButtonElementProps} from '~/interfaces/ElementProps.interface.ts';

import './Button.style.scss';

interface IPropsButton extends IHTMLButtonElementProps {
  type?: 'button';
}

interface IPropsLink extends LinkProps {
  type?: 'link';
}

type IProps = IPropsButton | IPropsLink;

export const Button: React.FC<IProps> = ({type = 'button', ...props}) => {
  if (type === 'link') {
    return <Link className="btn" {...props as IPropsLink} />;
  }

  return (
    <button className="btn" {...props as IPropsButton} />
  );
}
