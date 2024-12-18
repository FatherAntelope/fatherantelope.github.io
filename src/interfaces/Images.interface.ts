import {interfaces} from 'inversify';

export interface ImagesInterface {
  [key: string]: string;
}

export const ImagesInterface: interfaces.ServiceIdentifier<ImagesInterface> = Symbol('ImagesInterface');
