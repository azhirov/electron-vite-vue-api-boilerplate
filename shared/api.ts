import { ipcRenderer } from 'electron';
import type { TApi } from '../electron/api';

export const API_CHANNEL = 'api';

export type IApiRequest<M extends keyof TApi> = {
  method: M;
  data: TApi[M] extends (...args: infer Args) => any ? Args : never;
};

export function callApi<M extends keyof TApi>(method: M, ...args: TApi[M] extends (...args: infer Args) => any ? Args : never) {
  const request: IApiRequest<M> = {
    method,
    data: args,
  }
  return ipcRenderer.invoke(API_CHANNEL, request);
}
