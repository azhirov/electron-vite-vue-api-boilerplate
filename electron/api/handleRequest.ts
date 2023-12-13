import type { IpcMainInvokeEvent } from 'electron';
import type { IApiRequest } from '../../shared/api.ts';
import api, { type TApi } from './index.ts';

async function handleEvent(_event: IpcMainInvokeEvent, request: IApiRequest<keyof TApi>) {
  const fn = api[request.method];
  if (!fn) return;
  try {
    return await (fn as any).apply(null, request.data);
  } catch (e) {
    console.error(e);
    return e;
  }
}

export default handleEvent;
