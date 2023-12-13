import type {TApi} from './api';

type CallApiFunction = <M extends keyof TApi>(
  method: M,
  ...args: Parameters<TApi[M]>
) => Promise<ReturnType<TApi[M]>>;

// Used in Renderer process, expose in `preload.ts`
declare global {
  interface Window {
    ipcRenderer: import('electron').IpcRenderer
    callApi: CallApiFunction
  }
}
