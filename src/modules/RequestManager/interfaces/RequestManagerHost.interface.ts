import {interfaces} from "inversify";
import {RequestManagerOptionsInterface} from '~/modules/RequestManager';

export type RequestManagerHostInterface = RequestManagerOptionsInterface['host'];
export const RequestManagerHostInterface: interfaces.ServiceIdentifier<RequestManagerHostInterface> =
  Symbol('RequestManagerHostInterface');
