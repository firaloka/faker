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
- `randomInteger`
- `arrayShuffle`

## Penggunaan
Setelah berhasil menginstal paket **@firaloka/faker**, kamu dapat mulai menggunakannya dalam proyek JavaScript atau TypeScript. Berikut adalah beberapa contoh penggunaan dasar dari paket ini:

### 1. Mengimpor Paket
Untuk mulai menggunakan paket, kamu perlu mengimpor fungsi-fungsi yang tersedia. Berikut adalah cara mengimpornya:

```typescript
import { randomInteger } from '@firaloka/faker';
```

### 2. Menghasilkan Angka Acak
Fungsi `randomInteger()` memungkinkan kamu untuk menghasilkan angka dengan batasan yang dapat diatur:

```typescript
const min = 0;
const max = 100;
const result = randomInteger(min, max);

console.log(result);
```

## Dokumentasi Lengkap
Untuk melihat daftar lengkap fungsi yang tersedia dalam paket **@firaloka/faker**, kamu bisa mengunjungi dokumentasi resminya di [npm](https://www.npmjs.com/package/@firaloka/faker) atau melihat kode sumber di GitHub.

Semoga ini membantu! Jika ada pertanyaan lebih lanjut, jangan ragu untuk bertanya.