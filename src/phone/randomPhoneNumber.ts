/**
 * Fungsi untuk menghasilkan nomor telepon acak dengan kode negara Indonesia (+62).
 * Nomor telepon yang dihasilkan terdiri dari kode negara diikuti oleh 11 digit angka acak.
 *
 * @returns {string} Nomor telepon acak dengan format "+62XXXXXXXXXX"
 */
export default (): string => {
  // Menetapkan kode negara Indonesia (62) dan menghasilkan 11 digit angka acak
  const countryCode = "62";
  const randomDigits = Math.floor(Math.random() * 10000000000).toString().padStart(10, "0");

  // Menggabungkan kode negara dengan angka acak untuk membuat nomor telepon
  return countryCode + randomDigits;
}