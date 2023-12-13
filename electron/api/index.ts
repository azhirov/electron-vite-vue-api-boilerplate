import usePrefix from './usePrefix.ts';
import fooApi from './modules/foo.ts';
import barApi from './modules/bar.ts';

/**
 * foo:hello(), bar:sum() etc.
 */
const api = {
  ...usePrefix(fooApi, 'foo'),
  ...usePrefix(barApi, 'bar'),
};

export type TApi = typeof api;
export default api;
