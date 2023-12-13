import usePrefix from './usePrefix';
import fooApi from './modules/foo';
import barApi from './modules/bar';

/**
 * foo:hello(), bar:sum() etc.
 */
const api = {
  ...usePrefix(fooApi, 'foo'),
  ...usePrefix(barApi, 'bar'),
};

export type TApi = typeof api;
export default api;
