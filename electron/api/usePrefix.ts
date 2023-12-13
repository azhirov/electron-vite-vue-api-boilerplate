export type PrefixedMethod<T, Prefix extends string> = {
  [K in keyof T as `${Prefix}:${string & K}`]: T[K];
};

const usePrefix = <T, Prefix extends string>(obj: T, prefix: Prefix): PrefixedMethod<T, Prefix> => {
  const result = {} as PrefixedMethod<T, Prefix>;
  for (const key in obj) {
    const originalMethod = obj[key];
    if (typeof originalMethod === 'function') {
      result[`${prefix}:${key}` as keyof PrefixedMethod<T, Prefix>] = originalMethod as any;
    }
  }
  return result;
};

export default usePrefix;
