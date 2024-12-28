import {RequestManagerMiddlewareAfterInterface} from '~/modules/RequestManager';

interface RequestManager2JSONMiddlewareInterface {
  error: RequestManagerMiddlewareAfterInterface;
  response: RequestManagerMiddlewareAfterInterface;
}

const checkContentByJSON = (res: Response) =>
  res?.headers.get('content-type')?.indexOf('application/json') !== -1;

export const RequestManager2JSONMiddleware: RequestManager2JSONMiddlewareInterface = {
  response: (async (_, next, response) => {
    debugger;
    if (!response) {
      return;
    }

    const {res} = response;
    if (checkContentByJSON(res)) {
      const json = await res.json();
      return next({res, json});
    }

    return next(await res.text());
  }) as RequestManagerMiddlewareAfterInterface,
  error: (async (request, next, response) => {
    if (!response) {
      throw new Error(`Get empty response from URL: ${request.url}`);
    }

    const {res} = response;
    if (res.status !== 200) {
      const errorMsg = `[${res.status}] RequestError:`;
      const isJSON = checkContentByJSON(res);

      if (isJSON) {
        const json = await res.json();
        if (json.error) {
          throw new Error(errorMsg + json.error);
        }
      }

      throw new Error(errorMsg);
    }

    return next(await res.text());
  }) as RequestManagerMiddlewareAfterInterface,
}
