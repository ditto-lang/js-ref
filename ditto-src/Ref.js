/**
 * @template T
 * @param {T} initialValue
 * @returns {Effect<Ref<T>>}
 */
export function new_impl(initialValue) {
  return () => ({ current: initialValue });
}

/**
 * @template T
 * @param {Ref<T>} ref
 * @returns {Effect<T>}
 */
export function get_impl(ref) {
  return () => {
    return ref.current;
  };
}

/**
 * @template T
 * @param {Ref<T>} ref
 * @param {T} value
 * @returns {Effect<void>}
 */
export function set_impl(ref, value) {
  return () => {
    ref.current = value;
  };
}

/**
 * @template T
 * @param {Ref<T>} ref
 * @param {(value: T) => T} fn
 * @returns {Effect<T>}
 */
export function modify_impl(ref, fn) {
  return () => {
    const value = ref.current;
    ref.current = fn(value);
    return value;
  };
}

/**
 * @template T
 * @typedef {object} Ref
 * @property {T} current
 */

/**
 * @template T
 * @callback Effect
 * @return {T}
 */
