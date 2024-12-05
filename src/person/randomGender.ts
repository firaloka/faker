import randomElementOfArray from "src/array/randomElementOfArray";

/**
 * Mengembalikan jenis kelamin secara acak berdasarkan bahasa yang dipilih.
 * Fungsi ini menerima parameter opsional `isIndonesia` untuk menentukan apakah akan mengembalikan jenis kelamin dalam bahasa Indonesia atau bahasa Inggris.
 * 
 * @param {boolean} isIndonesia - Parameter opsional yang menentukan bahasa yang digunakan. 
 *                               Jika `true`, hasil akan menggunakan bahasa Indonesia (Pria/Wanita).
 *                               Jika `false` atau tidak diisi, hasil akan menggunakan bahasa Inggris (Man/Woman).
 * @returns {string} - Jenis kelamin yang dipilih secara acak, baik dalam bahasa Indonesia (Pria/Wanita) atau bahasa Inggris (Man/Woman).
 * 
 * @example
 * // Menghasilkan jenis kelamin dalam bahasa Indonesia secara acak
 * randomGender(true); // "Pria" atau "Wanita"
 * 
 * // Menghasilkan jenis kelamin dalam bahasa Inggris secara acak
 * randomGender(false); // "Man" atau "Woman"
 */
export default (isIndonesia: boolean = false) => {
  const genders = isIndonesia? ["Pria", "Wanita"] : ["Man", "Woman"];
  const result = randomElementOfArray(genders);
  return result;
}