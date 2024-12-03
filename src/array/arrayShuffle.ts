/**
 * Fungsi ini menerima sebuah array dan mengacak urutan elemen-elemen di dalamnya.
 * Fungsi ini menggunakan pendekatan `Math.random()` untuk memberikan urutan acak
 * dan kemudian mengembalikan array yang teracak berdasarkan urutan acak tersebut.
 * 
 * @param data - Array yang akan diacak.
 * 
 * @returns Array yang berisi elemen-elemen dari parameter `data` yang sudah diacak.
 * 
 * @template T - Tipe elemen yang ada dalam array input dan output.
 * 
 * Contoh Penggunaan:
 * ```typescript
 * const numbers = [1, 2, 3, 4, 5];
 * const shuffled = arrayShuffle(numbers); // [3, 1, 5, 2, 4] (Contoh hasil acak)
 * ```
 */
export default <T>(data: T[]): T[] => {
  return data
    .map((a) => ({ sort: Math.random(), value: a }))
    .sort((a, b) => a.sort - b.sort)
    .map((a) => a.value);
}