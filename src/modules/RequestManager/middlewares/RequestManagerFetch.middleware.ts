import {RequestManagerMiddlewareBeforeInterface} from '~/modules/RequestManager';

export const RequestManagerFetchMiddleware: RequestManagerMiddlewareBeforeInterface = async (req, next) => {
  const res = await fetch(req.url, req.info);
  return next({res});
}
