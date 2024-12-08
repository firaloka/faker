# @firaloka/faker
**@firaloka/faker** adalah paket npm yang berisi kumpulan fungsi utilitas untuk mempermudah pengembangan aplikasi JavaScript/TypeScript. Fungsi-fungsi yang ada dalam paket ini dirancang untuk menangani berbagai operasi umum seperti menghasilkan nama acak, angka acak, manipulasi data, dan lainnya.

Paket ini dibuat dengan menggunakan runtime **bun**, yang memberikan performa cepat dalam pengelolaan paket dan eksekusi kode JavaScript.

## Instalasi
Untuk menggunakan paket ini, kamu bisa menggunakan bun, pnpm, yarn, atau npm.

### Menggunakan bun
```bash
bun add @firaloka/faker
```
### Menggunakan pnpm
```bash
pnpm install @firaloka/faker
```
### Menggunakan yarn
```bash
yarn install @firaloka/faker
```
### Menggunakan npm
```bash
npm install @firaloka/faker
```

## Semua Fungsi yang Tersedia
- `randomName`
- `randomGender`
- `randomInteger`
- `arrayShuffle`
- `randomElementOfArray`

## Penggunaan
Setelah berhasil menginstal paket **@firaloka/faker**, kamu dapat mulai menggunakannya dalam proyek JavaScript atau TypeScript. Berikut adalah beberapa contoh penggunaan dasar dari paket ini:

### Mengimpor Paket
Untuk mulai menggunakan paket, kamu perlu mengimpor fungsi-fungsi yang tersedia. Berikut adalah cara mengimpornya:

```typescript
import { randomInteger } from '@firaloka/faker';
```

### Menghasilkan Angka Acak
Fungsi `randomInteger()` memungkinkan kamu untuk menghasilkan angka dengan batasan yang dapat diatur:

```typescript
import { randomInteger } from '@firaloka/faker';

const min = 0;
const max = 100;
const result = randomInteger(min, max);

console.log(result);
```

### Menghasilkan Nama Acak
Fungsi `randomName()` memungkinkan kamu untuk menghasilkan nama acak dengan dapat memilih jenis kelamin, dan secara default adalah acak:

```typescript
import { randomName } from '@firaloka/faker';

async run() {
  let result = await randomName(); // Acak, baik nama lelaki maupun perempuan
  console.log(result);

  result = await randomName("M"); // Nama lelaki
  console.log(result);

  result = await randomName("W"); // Nama perempuan
  console.log(result);
}

run();
```

### Menghasilkan Jenis Kelamin Acak
Fungsi `randomGender()` memungkinkan kamu untuk menghasilkan acak jenis kelamin dan dapat diatur bahasanya:

```typescript
import { randomGender } from '@firaloka/faker';

let result = randomGender();
console.log(result); // Man atau Woman

result = randomGender(true);
console.log(result); // Pria atau Wanita
```

### Menghasilkan Element Acak dari Array
Fungsi `randomElementOfArray()` memungkinkan untuk menghasilkan satu elemen acak dari sebuah array:

```typescript
import { randomElementOfArray } from '@firaloka/faker';

const friends = ["Eko", "Budi", "Andi"];
const result = randomElementOfArray(friends);

console.log(result);
```

## Dokumentasi Lengkap
Untuk melihat daftar lengkap fungsi yang tersedia dalam paket **@firaloka/faker**, kamu bisa mengunjungi dokumentasi resminya di [npm](https://www.npmjs.com/package/@firaloka/faker) atau melihat kode sumber di GitHub.

Semoga ini membantu! Jika ada pertanyaan lebih lanjut, jangan ragu untuk bertanya.
