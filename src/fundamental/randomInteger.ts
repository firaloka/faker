/**
 * Fungsi ini menghasilkan angka acak antara nilai minimum (min) dan maksimum (max).
 * Nilai acak tersebut akan berada dalam rentang [min, max), di mana min inklusif dan max eksklusif.
 *
 * @param min - Nilai minimum dari rentang angka acak yang dihasilkan.
 * @param max - Nilai maksimum dari rentang angka acak yang dihasilkan.
 * @returns {number} - Angka acak yang dihasilkan dalam rentang [min, max).
 *
 * @example
 * // Menghasilkan angka acak antara 1 dan 10
 * const randomValue = getRandomInRange(1, 10);
 */
export default (min: number, max: number): number => {
  return Math.random() * (max - min) + min;
}