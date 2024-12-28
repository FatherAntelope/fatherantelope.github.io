export type RequestManagerOptionsInterface = {
  host?: string;
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
  searchParams?: Array<[string, string]>;
};

export interface RequestManagerDataInterface {
  url: RequestInfo;
  info: RequestInit;
  options?: RequestManagerOptionsInterface;
}

export type RequestManagerMiddlewareBeforeInterface = (
  request: RequestManagerDataInterface,
  next: RequestManagerNextCallbackInterface,
) => Promise<any>;

export type RequestManagerMiddlewareAfterInterface = (
  request: RequestManagerDataInterface,
  next: RequestManagerNextCallbackInterface,
  response?: RequestManagerNextDataInterface,
) => Promise<any>;

export type RequestManagerMiddlewareJSONInterface = (
  request: RequestManagerDataInterface,
  next: RequestManagerNextCallbackInterface,
  nextData?: RequestManagerNextDataJSONInterface,
) => Promise<any>;

export type RequestManagerNextCallbackInterface = (
  response?: RequestManagerNextDataInterface | any,
) => Promise<any>;

export interface RequestManagerNextDataInterface {
  res: Response;

  [k: string]: any;
}

export interface RequestManagerNextDataJSONInterface extends RequestManagerNextDataInterface {
  json: {
    [k: string]: any;
  };
}

export type RequestManagerMiddlewareInterface =
  | RequestManagerMiddlewareBeforeInterface
  | RequestManagerMiddlewareAfterInterface
  | RequestManagerMiddlewareJSONInterface;

