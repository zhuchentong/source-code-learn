type OmitResult<T, K extends string> = K extends `${infer F}.${infer R}`
  ? F extends keyof T
    ? Omit<T, F> & { [P in F]: OmitResult<T[F], R> }
    : T
  : K extends keyof T
  ? Omit<T, K>
  : T;

/**
 * 删除对象中的字段
 * @param obj
 * @param keys
 * @returns
 */
export function omit<T extends Record<string, any>, K extends string>(
  obj: T,
  keys: K[]
): OmitResult<T, K> {
  const target = Object.assign({}, obj);

  for (let key of keys) {
    if (Object.hasOwn(target, key)) {
      delete target[key];
    }

    if (typeof key === "string" && key.includes(".")) {
      let [current, ...rest] = key.split(".");

      if (current in obj) {
        Object.assign(target, {
          [current]: omit(obj[current], [rest.join(".")]),
        });
      }
    }
  }

  return target as OmitResult<T, K>;
}
