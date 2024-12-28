import {interfaces} from 'inversify';
import {RequestManagerMiddlewareInterface} from '~/modules/RequestManager';

export type RequestManagerMiddlewaresInterface = RequestManagerMiddlewareInterface[];
export const RequestManagerMiddlewaresInterface: interfaces.ServiceIdentifier<RequestManagerMiddlewaresInterface> =
  Symbol('RequestManagerMiddlewaresInterface');
