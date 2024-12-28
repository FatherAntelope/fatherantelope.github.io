import React from 'react';
import {IHTMLDivElementProps} from '~/interfaces/ElementProps.interface.ts';
import {Container, Row} from '~/components';

import './Section.style.scss';

interface IProps extends IHTMLDivElementProps {
  hasPadding?: boolean;
  title?: string;
}

interface ITitleProps {
  title: string;
}

export const Section: React.FC<IProps> = ({hasPadding, className, title, children, ...props}) => {
  const styles = ['section'];

  if (className) {
    styles.push(...className.split(' '));
  }

  if (hasPadding) {
    styles.push('section__padding');
  }

  return (
    <section className={styles.join(' ')} {...props}>
      <Container>
        {title && <SectionTitle title={title}/>}
        {children}
      </Container>
    </section>);
};

const SectionTitle: React.FC<ITitleProps> = ({title}) => (
  <Row>
    <h2 className={'section__title'}>{title}</h2>
  </Row>
);
