import arrayShuffle from "../array/arrayShuffle";
import _name from "./data/_name";

/**
 * Mengambil nama acak dari file CSV berdasarkan jenis kelamin yang dipilih.
 * 
 * Fungsi ini membaca file CSV yang berisi nama-nama, lalu mengacak daftar nama tersebut.
 * Jika parameter `gender` disertakan, hanya nama yang sesuai dengan jenis kelamin yang akan dipilih.
 * Nama-nama dipisahkan dengan koma di dalam file CSV, dengan kolom kedua menyimpan informasi jenis kelamin.
 * 
 * - Jika `gender` tidak disertakan, fungsi akan memilih nama acak tanpa mempertimbangkan jenis kelamin.
 * - Jika `gender` disertakan sebagai "M", hanya nama laki-laki yang akan dipilih.
 * - Jika `gender` disertakan sebagai "W", hanya nama perempuan yang akan dipilih.
 * 
 * @param gender - Parameter opsional yang menentukan jenis kelamin nama yang akan dipilih ("M" untuk laki-laki, "W" untuk perempuan).
 * @returns Promise<string> - Nama acak yang dipilih sesuai dengan jenis kelamin yang diberikan (atau acak tanpa filter jenis kelamin).
 * 
 * @example
 * // Mendapatkan nama acak tanpa filter jenis kelamin
 * const randomName = getRandomName();
 * 
 * // Mendapatkan nama acak untuk laki-laki
 * const maleName = getRandomName("M");
 * 
 * // Mendapatkan nama acak untuk perempuan
 * const femaleName = getRandomName("W");
 */
export default (gender?: "M" | "W"): string => {
  let buffer = arrayShuffle(_name);
  if (gender) buffer = buffer.filter(data => data[1] === gender);

  return buffer[0][0];
}
