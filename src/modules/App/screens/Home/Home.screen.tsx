import React from 'react';
import {Button, Image, Row, Section} from '~/components';
import {useInjection} from 'inversify-react';
import {ImagesInterface} from '~/interfaces/Images.interface.ts';

import './HomeScreen.style.scss';

export const HomeScreen: React.FC = () => {
  const images = useInjection(ImagesInterface);

  return (
    <Section className="section__home align-items_center">
      <Row alignCenter>
        <div className="text__home">
          <p>Привет! Меня зовут</p>
          <h1>Владлен Горбунов</h1>
          <h2>web-developer</h2>
          <Button type={'link'} to={'/about'}>Обо мне</Button>
          <Button type={'link'} to={'/portfolio'}>Портфолио</Button>
        </div>
        <div className="img__home">
          <Image variant={'box'} src={images.avatarMini} alt="avatar"/>
        </div>
      </Row>
    </Section>
  );
};
