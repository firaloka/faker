import readText from "@/utils/readText";
import arrayShuffle from "src/array/arrayShuffle";

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
 * const randomName = await getRandomName();
 * 
 * // Mendapatkan nama acak untuk laki-laki
 * const maleName = await getRandomName("M");
 * 
 * // Mendapatkan nama acak untuk perempuan
 * const femaleName = await getRandomName("W");
 */
export default async (gender?: "M" | "W"):Promise<string> => {
  const path = "data/person/names.csv";

  let names:string[] = (await readText(path)).split("\n");
  names = arrayShuffle(names);
  if (gender) names = names.filter(data => data.split(",")[1].includes(gender));

  return names[0].split(",")[0];
}
