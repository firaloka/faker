/**
 * Fungsi ini menghasilkan nilai antara true dan false secara acak.
 * 
 * @returns {boolean} - Boolean yang dipilih secara acak.
 *
 * @example
 * const value = randomBoolean(1, 10); // Output: true or false
 */
export default (): boolean => {
  return Math.random() >= 0.5;
}