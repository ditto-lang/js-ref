/**
 * @typedef {object} Ref
 * @template T
 * @property {() => T} get
 * @property {(value: T) => void} set
 * @property {(fn: (value: T) => T) => T} modify
 */

/**
 * @template T
 * @param {T} value
 * @returns {Ref<T>}
 */
export function new_impl(value) {
  return () => ({
    value,
    get() {
      return this.value;
    },
    set(value) {
      this.value = value;
    },
    modify(fn) {
      const next = fn(this.value);
      this.value = next;
      return next;
    },
  });
}

/**
 * @callback Effect
 * @template T
 * @returns {T}
 */

/**
 * @template T
 * @param {Ref<T>} ref
 * @returns {Effect<T>}
 */
export function get_impl(ref) {
  return () => {
    return ref.get();
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
    ref.set(value);
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
    return ref.modify(fn);
  };
}
