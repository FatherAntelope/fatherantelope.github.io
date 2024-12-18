import React, {useEffect, useState} from 'react';
import {IHTMLDivElementProps} from '~/interfaces/ElementProps.interface.ts';
import {Container} from 'inversify';
import {Provider} from 'inversify-react';
import {AppContext} from '~/modules/App/contexts';

import './App.style.scss';

export const App: React.FC<IHTMLDivElementProps> = (props) => {
  const [container, setContainer] = useState<Container>();

  const initContext = () => {
    try {
      const ctx = new Container();
      AppContext(ctx);
      setContainer(ctx);
    } catch (e) {
      console.error('[Inversify] Error:', e);
    }
  };

  useEffect(() => {
    initContext();
  }, [])

  if (!container) {
    return null;
  }

  return (
    <Provider standalone container={container} key={container.id}>
      <div className="app" {...props} />
    </Provider>
  );
};
