import React, {useEffect, useState} from 'react';
import {useInjection} from 'inversify-react';
import {RequestManager} from '~/modules/RequestManager';

export const AboutDescription: React.FC = () => {
  const request = useInjection(RequestManager);
  const [text, setText] = useState<string>('');

  useEffect(() => {
    //TODO: Тестовое. Снести, сделав сервис и хранилище
    request.send('/src/mock/about.json').then(({json}) => setText(json.description));
  }, [])

  return (
    <p dangerouslySetInnerHTML={{__html: text}}/>
  );
};
