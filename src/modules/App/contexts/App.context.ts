import {interfaces} from 'inversify';
import sourceContext from '~/contexts/source.context';
import requestContext from '~/contexts/request.context';

export const AppContext = (ctx: interfaces.Container) => {
  sourceContext(ctx);
  requestContext(ctx);
};

