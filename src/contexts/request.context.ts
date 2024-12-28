import {interfaces} from 'inversify';
import {
  RequestManager,
  RequestManager2JSONMiddleware,
  RequestManagerFetchMiddleware,
  RequestManagerHostInterface,
  RequestManagerMiddlewaresInterface
} from '~/modules/RequestManager';

export default (ctx: interfaces.Container) => {
  ctx.bind(RequestManagerHostInterface).toConstantValue(window.location.origin);
  ctx.bind(RequestManagerMiddlewaresInterface).toConstantValue([
    RequestManagerFetchMiddleware,
    RequestManager2JSONMiddleware.error,
    RequestManager2JSONMiddleware.response,
  ]);
  ctx.bind(RequestManager).toSelf().inSingletonScope();
};
