/**
 * Do something after delay, such as `const text = await after(1000, () => 'Hello, world!');`.
 *
 * @param {number} ms Delay, million seconds.
 * @param {(...args: any) => T} fn Do something after delay.
 * @returns {Promise<T>} Return what fn returns.
 */
export async function delay<T = any>(ms: number, fn?: (...args: any) => T): Promise<T> {
  return new Promise(res => setTimeout(() => {
    res(fn ? fn() : undefined);
  }, ms));
}

export default delay;
