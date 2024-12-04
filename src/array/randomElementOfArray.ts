/**
 * Mengambil elemen acak dari array.
 * 
 * @param array - Array yang berisi elemen-elemen yang ingin diambil secara acak.
 * @returns Elemen acak dari array.
 * 
 * @example
 * const numbers = [1, 2, 3, 4, 5];
 * const randomNumber = getRandomElement(numbers);
 * console.log(randomNumber);  // Output: Elemen acak dari array
 * 
 * const strings = ['apple', 'banana', 'cherry'];
 * const randomString = getRandomElement(strings);
 * console.log(randomString);  // Output: String acak dari array
 */
export default <T>(data: T[]): T => {
  if (data.length === 0) throw Error();
  
  const randomIndex = Math.floor(Math.random() * data.length);
  return data[randomIndex];
}