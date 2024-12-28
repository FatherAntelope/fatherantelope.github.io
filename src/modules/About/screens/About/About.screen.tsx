import React from 'react';
import {Image, Row, Section} from '~/components';
import {useInjection} from 'inversify-react';
import {ImagesInterface} from '~/interfaces/Images.interface.ts';
import {AboutDescription} from '~/modules';

import './AboutScreen.style.scss';

export const AboutScreen: React.FC = () => {
  const images = useInjection(ImagesInterface);

  return (
    <Section title={'Обо мне'} hasPadding>
      <Row>
        <div className="img__about">
          <Image variant={'box'} src={images.avatar} alt="avatar"/>
        </div>
        <div className="text__about">
          <AboutDescription/>
          <h3>Ключевые навыки</h3>
          <h3>Знакомые технологии</h3>
        </div>
      </Row>
    </Section>
  );
};
