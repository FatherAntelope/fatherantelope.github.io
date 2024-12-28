import {inject, injectable} from 'inversify';
import {
  RequestManagerDataInterface,
  RequestManagerNextCallbackInterface,
  RequestManagerOptionsInterface,
} from '~/modules/RequestManager/interfaces';
import {RequestManagerHostInterface, RequestManagerMiddlewaresInterface} from '~/modules/RequestManager/interfaces/';

@injectable()
export class RequestManager {
  @inject(RequestManagerHostInterface)
  private host!: RequestManagerHostInterface;

  @inject(RequestManagerMiddlewaresInterface)
  private middlewares!: RequestManagerMiddlewaresInterface;

  async send(path: string, body?: object, info?: RequestInit, options?: RequestManagerOptionsInterface) {
    const request: RequestManagerDataInterface = {
      url: `${options?.host || this.host}${path}`,
      info: Object.assign(
        info || {},
        {
          method: info?.method || 'GET',
        },
      ),
    };

    if (body && ['POST', 'PUT', 'DELETE', 'PATCH'].includes(request.info.method!)) {
      request.info.body = JSON.stringify(body);
    }

    const runMiddleware = RequestManager.getNextMiddleware(
      request,
      this.middlewares,
    );

    return runMiddleware();
  }

  static getNextMiddleware(
    request: RequestManagerDataInterface,
    middlewares: RequestManagerMiddlewaresInterface,
  ): RequestManagerNextCallbackInterface {
    return async response => {
      const middleware = middlewares.shift();
      if (middleware) {
        const nextMiddleware =
          RequestManager.getNextMiddleware(request, middlewares) ??
          (async res => res);
        return await middleware(request, nextMiddleware, response);
      }
      return response;
    };
  }
}
