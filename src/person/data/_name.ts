type TyName = [string, "M" | "W"];

const _name: TyName[] = [
  ["Andi Eko", "M"],
  ["Budi Santoso", "M"],
  ["Candra Wijaya", "M"],
  ["Dedi Kurniawan", "M"],
  ["Eko Prasetyo", "M"],
  ["Firman Hadi", "M"],
  ["Guntur Jaya", "M"],
  ["Heru Setiawan", "M"],
  ["Irfan Nugroho", "M"],
  ["Joko Subagyo", "M"],
  ["Kurniawan Adi", "M"],
  ["Luthfi Ibrahim", "M"],
  ["Mahendra Putra", "M"],
  ["Nando Pratama", "M"],
  ["Oki Raharja", "M"],
  ["Pandu Saputra", "M"],
  ["Qomaruddin", "M"],
  ["Rafi Ardiansyah", "M"],
  ["Sandi Wijanarko", "M"],
  ["Tony Haryanto", "M"],
  ["Udin Ramli", "M"],
  ["Vian Saputra", "M"],
  ["Wira Kusuma", "M"],
  ["Xander Tan", "M"],
  ["Yudi Santosa", "M"],
  ["Zaki Rizki", "M"],
  ["Anisa Sari", "W"],
  ["Bella Anindya", "W"],
  ["Citra Dewi", "W"],
  ["Dinda Putri", "W"],
  ["Eliza Wijayanti", "W"],
  ["Fani Nurul", "W"],
  ["Gita Pratiwi", "W"],
  ["Hana Suryani", "W"],
  ["Intan Puspita", "W"],
  ["Jihan Rahayu", "W"],
  ["Karina Sari", "W"],
  ["Lala Cahyani", "W"],
  ["Mira Putri", "W"],
  ["Nia Prasetya", "W"],
  ["Oka Andini", "W"],
  ["Putri Ayu", "W"],
  ["Qistina Marisa", "W"],
  ["Rina Hartini", "W"],
  ["Sinta Maulani", "W"],
  ["Tika Nuraini", "W"],
  ["Ulfa Pratiwi", "W"],
  ["Vina Putri", "W"],
  ["Wulandari Eka", "W"],
  ["Xena Arista", "W"],
  ["Yani Pratiwi", "W"],
  ["Zahra Fitri", "W"],
  ["Adam Wijaya", "M"],
  ["Bima Santoso", "M"],
  ["Chandra Ardiansyah", "M"],
  ["Damar Kurniawan", "M"],
  ["Emir Hidayat", "M"],
  ["Farhan Rizki", "M"],
  ["Grego Prasetyo", "M"],
  ["Hendri Pratama", "M"],
  ["Iqbal Haryanto", "M"],
  ["Jimi Aditya", "M"],
  ["Kamil Setiawan", "M"],
  ["Lian Budi", "M"],
  ["Mario Alamsyah", "M"],
  ["Niko Santosa", "M"],
  ["Oka Nugroho", "M"],
  ["Putra Dwi", "M"],
  ["Qaisar Akbar", "M"],
  ["Riki Hidayat", "M"],
  ["Syaiful Anwar", "M"],
  ["Taufik Kurnia", "M"],
  ["Ujang Mahendra", "M"],
  ["Vicky Adi", "M"],
  ["Wawan Suhendi", "M"],
  ["Xander Hermawan", "M"],
  ["Yudha Fajri", "M"],
  ["Zainul Huda", "M"],
  ["Amelia Indah", "W"],
  ["Bunga Rosita", "W"],
  ["Celine Pramesti", "W"],
  ["Della Fitria", "W"],
  ["Ella Nadya", "W"],
  ["Fira Rizka", "W"],
  ["Gita Oktavia", "W"],
  ["Hanny Anggraini", "W"],
  ["Inka Safitri", "W"],
  ["Jelita Bening", "W"],
  ["Kendra Dewi", "W"],
  ["Laila Ayu", "W"],
  ["Mei Prameswari", "W"],
  ["Nessa Purwani", "W"],
  ["Oktavia Sari", "W"],
  ["Poppy Oktaviani", "W"],
  ["Quina Mariana", "W"],
  ["Rasyida Fikri", "W"],
  ["Sari Novitasari", "W"],
  ["Tania Salsabila", "W"],
  ["Uni Safira", "W"],
  ["Vita Larasati", "W"],
  ["Aisha Zahra", "W"],
  ["Amira Nurul", "W"],
  ["Anggela Pratiwi", "W"],
  ["Anggita Saraswati", "W"],
  ["Anita Nuraini", "W"],
  ["Arum Dwi", "W"],
  ["Astrid Melinda", "W"],
  ["Bella Savira", "W"],
  ["Citra Ramadhani", "W"],
  ["Dahlia Wulandari", "W"],
  ["Dita Hanifah", "W"],
  ["Diva Mustika", "W"],
  ["Elda Rahayu", "W"],
  ["Farah Yuliana", "W"],
  ["Fenny Marinda", "W"],
  ["Fitriani Maharani", "W"],
  ["Gisela Kurnia", "W"],
  ["Hilda Maharani", "W"],
  ["Indira Aulia", "W"],
  ["Irena Sari", "W"],
  ["Irma Lestari", "W"],
  ["Isyana Septiani", "W"],
  ["Janna Fadhila", "W"],
  ["Kania Puspita", "W"],
  ["Karina Dwi", "W"],
  ["Kartika Hapsari", "W"],
  ["Kenanga Putri", "W"],
  ["Kenzi Rahayu", "W"],
  ["Klarissa Ayu", "W"],
  ["Lely Anggraini", "W"],
  ["Lila Sundari", "W"],
  ["Lilis Purnama", "W"],
  ["Lintang Wahyuni", "W"],
  ["Manda Permata", "W"],
  ["Melinda Sari", "W"],
  ["Monica Fajri", "W"],
  ["Nabila Anggraeni", "W"],
  ["Nadya Pratiwi", "W"],
  ["Nadia Farhana", "W"],
  ["Nia Ayunda", "W"],
  ["Niken Pramesti", "W"],
  ["Ninda Ramadhani", "W"],
  ["Ocha Dwi", "W"],
  ["Olivia Safira", "W"],
  ["Putri Ayu", "W"],
  ["Puspa Dwi", "W"],
  ["Qila Zahra", "W"],
  ["Rika Sofiani", "W"],
  ["Rika Putri", "W"],
  ["Rina Dwi", "W"],
  ["Salsabila Pertiwi", "W"],
  ["Safira Mawarni", "W"],
  ["Sari Damayanti", "W"],
  ["Selvi Novitasari", "W"],
  ["Shafira Zulaikha", "W"],
  ["Shinta Mawar", "W"],
  ["Siska Wijayanti", "W"],
  ["Siti Fadilah", "W"],
  ["Sofianna Fitri", "W"],
  ["Sofiana Nurul", "W"],
  ["Surya Pratiwi", "W"],
  ["Tania Kamilia", "W"],
  ["Tara Pratiwi", "W"],
  ["Tika Ayu", "W"],
  ["Titi Safira", "W"],
  ["Triyani Amalia", "W"],
  ["Umi Nurjanah", "W"],
  ["Winda Oktaviani", "W"],
  ["Windy Safitri", "W"],
  ["Yanti Larasati", "W"],
  ["Yasmin Ayu", "W"],
  ["Yuliana Arista", "W"],
  ["Yunita Sari", "W"],
  ["Zita Safira", "W"],
  ["Zahira Anggraini", "W"],
  ["Zara Muthia", "W"],
  ["Anita Lestari", "W"],
  ["Amelia Savira", "W"],
  ["Ayu Fitria", "W"],
  ["Bella Rahmawati", "W"],
  ["Cindy Putri", "W"],
  ["Danita Dwi", "W"],
  ["Devina Aulia", "W"],
  ["Dwi Puspita", "W"],
  ["Eni Pramesti", "W"],
  ["Farida Mutiara", "W"],
  ["Fitria Hanifa", "W"],
  ["Gita Kirana", "W"],
  ["Hana Fadilah", "W"],
  ["Harumi Kurnia", "W"],
  ["Indah Pratiwi", "W"],
  ["Intan Putri", "W"],
  ["Iqra Anindya", "W"],
  ["Kartika Safira", "W"],
  ["Kenzi Zulaikha", "W"],
  ["Laili Hasna", "W"],
  ["Lensa Dwi", "W"],
  ["Livia Putri", "W"],
  ["Lyana Safitri", "W"],
  ["Melia Suci", "W"],
  ["Melika Fadhila", "W"],
  ["Melisa Sari", "W"],
  ["Nadine Pramesti", "W"],
  ["Natasya Savira", "W"],
  ["Nia Safira", "W"],
  ["Nindy Pertiwi", "W"],
  ["Nurina Shanty", "W"],
  ["Olivia Savira", "W"],
  ["Putri Safira", "W"],
  ["Puspa Yuliana", "W"],
  ["Qoryana Wulandari", "W"],
  ["Rida Larasati", "W"],
  ["Rismawati Aulia", "W"],
  ["Riska Indah", "W"],
  ["Sabilah Munira", "W"],
  ["Salma Azzahra", "W"],
  ["Sari Lestari", "W"],
  ["Selina Pertiwi", "W"],
  ["Shakira Fitri", "W"],
  ["Sharlita Devina", "W"],
  ["Shinta Fadilah", "W"],
  ["Siti Fatin", "W"],
  ["Sofiah Khairunnisa", "W"],
  ["Suci Anggraini", "W"],
  ["Tania Fitria", "W"],
  ["Tantri Safira", "W"],
  ["Tika Anggraeni", "W"],
  ["Titi Puspita", "W"],
  ["Tyas Rahayu", "W"],
  ["Ulfah Hanifah", "W"],
  ["Umi Khairunisa", "W"],
  ["Wina Andriana", "W"],
  ["Windy Sari", "W"],
  ["Windi Arista", "W"],
  ["Yanti Fitri", "W"],
  ["Yasmin Safira", "W"],
  ["Yulia Oktaviani", "W"],
  ["Zulaika Safira", "W"],
  ["Zainab Akhtar", "W"],
  ["Zahira Aulia", "W"],
  ["Zayra Mutiara", "W"],
  ["Adila Safira", "W"],
  ["Alia Putri", "W"],
  ["Anisa Wulandari", "W"],
  ["Asmahan Lestari", "W"],
  ["Bella Yasmin", "W"],
  ["Citra Safira", "W"],
  ["Dalia Maulana", "W"],
  ["Dena Safira", "W"],
  ["Diya Salsabila", "W"],
  ["Elsa Dwi", "W"],
  ["Fadila Safira", "W"],
  ["Fara Amira", "W"],
  ["Galih Pratiwi", "W"],
  ["Gisella Amalia", "W"],
  ["Hani Sofira", "W"],
  ["Ika Aulia", "W"],
  ["Intan Safira", "W"],
  ["Iva Maharani", "W"],
  ["Jariyah Nurul", "W"],
  ["Kalila Kurnia", "W"],
  ["Kanya Pertiwi", "W"],
  ["Kinasih Anggraini", "W"],
  ["Lela Fadilah", "W"],
  ["Lila Safira", "W"],
  ["Lova Siti", "W"],
  ["Maira Aulia", "W"],
  ["Maya Khairunisa", "W"],
  ["Nadia Fadhila", "W"],
  ["Naila Safira", "W"],
  ["Najwa Salsabila", "W"],
  ["Nessa Pramesti", "W"],
  ["Oviya Damayanti", "W"],
  ["Priscilla Dewi", "W"],
  ["Puspita Nita", "W"],
  ["Rasyida Arista", "W"],
  ["Rina Dwi", "W"],
  ["Sari Pertiwi", "W"],
  ["Shinta Dwi", "W"],
  ["Siska Devina", "W"],
  ["Siti Anggraini", "W"],
  ["Sofiya Fadilah", "W"],
  ["Stefani Amalia", "W"],
  ["Tania Rahayu", "W"],
  ["Tasha Putri", "W"],
  ["Tari Salsabila", "W"],
  ["Ulya Anggraini", "W"],
  ["Vina Maharani", "W"],
  ["Wira Safira", "W"],
  ["Wina Puspita", "W"],
  ["Windy Melisa", "W"],
  ["Yulianti Aulia", "W"],
  ["Yuliana Melati", "W"],
  ["Zahrina Fadhila", "W"],
  ["Zahira Putri", "W"],
  ["Zakiya Khairunnisa", "W"],
  ["Zulaikha Amira", "W"],
  ["Aulia Zahra", "W"],
  ["Alesha Amalia", "W"],
  ["Aditya Salsabila", "W"],
  ["Abdurrahman", "M"],
  ["Adi Pratama", "M"],
  ["Ahmad Zaki", "M"],
  ["Alif Rahman", "M"],
  ["Alvin Septian", "M"],
  ["Andi Saputra", "M"],
  ["Arief Prabowo", "M"],
  ["Arya Putra", "M"],
  ["Aswan Fadli", "M"],
  ["Bagus Kurniawan", "M"],
  ["Budi Santoso", "M"],
  ["Cahyadi Prabowo", "M"],
  ["Dedi Suryanto", "M"],
  ["Denny Maulana", "M"],
  ["Dito Ramadhan", "M"],
  ["Eko Setiawan", "M"],
  ["Farhan Rizki", "M"],
  ["Fadil Prasetyo", "M"],
  ["Faisal Arief", "M"],
  ["Fikri Hidayat", "M"],
  ["Firaizal Mahendra", "M"],
  ["Guntur Prabowo", "M"],
  ["Gunawan Hendra", "M"],
  ["Hadi Saputra", "M"],
  ["Haris Anggara", "M"],
  ["Herianto Wibowo", "M"],
  ["Iqbal Nugroho", "M"],
  ["Irfan Kurniawan", "M"],
  ["Ismail Setiawan", "M"],
  ["Ivan Maulana", "M"],
  ["Jacky Darmawan", "M"],
  ["Joko Suryanto", "M"],
  ["Johan Arianto", "M"],
  ["Kamil Hidayat", "M"],
  ["Kurnia Wijaya", "M"],
  ["Lukman Hakim", "M"],
  ["Malik Akbar", "M"],
  ["Muhammad Rizky", "M"],
  ["Mulyadi", "M"],
  ["M. Arief", "M"],
  ["Nabil Fadli", "M"],
  ["Naufal Azhar", "M"],
  ["Nando Setiawan", "M"],
  ["Nizar Akbar", "M"],
  ["Oka Anggara", "M"],
  ["Oki Kurniawan", "M"],
  ["Oktavianus", "M"],
  ["Prasetyo Wibowo", "M"],
  ["Prio Aditya", "M"],
  ["Rafli Prabowo", "M"],
  ["Rangga Putra", "M"],
  ["Rayhan Fadila", "M"],
  ["Rizki Arif", "M"],
  ["Riza Safri", "M"],
  ["Ridho Permana", "M"],
  ["Rendi Suryadi", "M"],
  ["Reza Maulana", "M"],
  ["Ricky Haryanto", "M"],
  ["Riyan Setiawan", "M"],
  ["Riko Prasetyo", "M"],
  ["Rio Suryanto", "M"],
  ["Rian Pratama", "M"],
  ["Rudi Setiawan", "M"],
  ["Riyan Santoso", "M"],
  ["Sandi Putra", "M"],
  ["Satria Prasetyo", "M"],
  ["Sigit Wibowo", "M"],
  ["Syaiful Fadhil", "M"],
  ["Syaiful Hidayat", "M"],
  ["Sandi Haryanto", "M"],
  ["Teguh Prabowo", "M"],
  ["Taufik Arif", "M"],
  ["Taresh Pramudya", "M"],
  ["Thomas Hidayat", "M"],
  ["Ubay Rachman", "M"],
  ["Udin Prasetyo", "M"],
  ["Umar Iqbal", "M"],
  ["Utomo Saputra", "M"],
  ["Vian Suryanto", "M"],
  ["Vicky Arif", "M"],
  ["Wahyu Setiawan", "M"],
  ["Wira Anggara", "M"],
  ["Widiansyah", "M"],
  ["Yadi Setiawan", "M"],
  ["Yanuar Hakim", "M"],
  ["Yoga Arif", "M"],
  ["Yohan Prasetyo", "M"],
  ["Yudha Prabowo", "M"],
  ["Zainal Arifin", "M"],
  ["Zaki Prasetyo", "M"],
  ["Zain Saputra", "M"],
  ["Abimanyu Satria", "M"],
  ["Alfian Fadil", "M"],
  ["Alif Fadli", "M"],
  ["Andra Hidayat", "M"],
  ["Arda Rizki", "M"],
  ["Arya Vino", "M"],
  ["Aziz Shamsi", "M"],
  ["Bima Setiawan", "M"],
  ["Bagus Prabowo", "M"],
  ["Cakra Hadi", "M"],
  ["Candra Putra", "M"],
  ["Diki Permana", "M"],
  ["Dimas Riki", "M"],
  ["Denny Arif", "M"],
  ["Faizal Syahrul", "M"],
  ["Fajar Hidayat", "M"],
  ["Fikri Naufal", "M"],
  ["Fariz Akbar", "M"],
  ["Gading Maulana", "M"],
  ["Geri Pratama", "M"],
  ["Harif Alamsyah", "M"],
  ["Hamzah Rizki", "M"],
  ["Heru Prasetyo", "M"],
  ["Ikhsan Fadhil", "M"],
  ["Indra Setiawan", "M"],
  ["Irsyad Nugroho", "M"],
  ["Iskandar Ramadhan", "M"],
  ["Iwan Setiawan", "M"],
  ["Jayantho Saputra", "M"],
  ["Jodi Arif", "M"],
  ["Kahar Afriandi", "M"],
  ["Kabil Hadi", "M"],
  ["Kalvin Wijaya", "M"],
  ["Luthfi Fadhil", "M"],
  ["Lutfi Anwar", "M"],
  ["Laskar Prasetyo", "M"],
  ["Mario Hidayat", "M"],
  ["Miko Rasyid", "M"],
  ["Mudi Setiawan", "M"],
  ["Miko Fikri", "M"],
  ["Mufid Iqbal", "M"],
  ["Nabil Ilham", "M"],
  ["Nabil Fadli", "M"],
  ["Nana Rachmat", "M"],
  ["Nando Setiawan", "M"],
  ["Nicky Wijaya", "M"],
  ["Noval Hidayat", "M"],
  ["Ogi Suryanto", "M"],
  ["Omran Nur", "M"],
  ["Osa Prasetyo", "M"],
  ["Reza Asad", "M"],
  ["Ricky Rizal", "M"],
  ["Riko Sudarma", "M"],
  ["Rendy Pratama", "M"],
  ["Ridwan Kurnia", "M"],
  ["Rifan Rizki", "M"],
  ["Romi Subekti", "M"],
  ["Rendra Hakim", "M"],
  ["Roni Santoso", "M"],
  ["Satria Prasetya", "M"],
  ["Sekar Fadil", "M"],
  ["Sandi Rachmat", "M"],
  ["Syaiful Huda", "M"],
  ["Surya Prasetyo", "M"],
  ["Teguh Arif", "M"],
  ["Taufik Ramadhan", "M"],
  ["Tegar Hidayat", "M"],
  ["Timmy Kurniawan", "M"],
  ["Tantri Prasetyo", "M"],
  ["Tony Harsono", "M"],
  ["Ubel Fadhil", "M"],
  ["Udin Fadli", "M"],
  ["Ulfi Alamsyah", "M"],
  ["Viko Ramadhan", "M"],
  ["Wariyo Prasetyo", "M"],
  ["Wendi Rahayu", "M"],
  ["Wahyu Setyo", "M"],
  ["Widodo Suryo", "M"],
  ["Yugo Maulana", "M"],
  ["Yeri Kurniawan", "M"],
  ["Yusran Hidayat", "M"],
  ["Zaki Fikri", "M"],
  ["Zain Ramadhan", "M"],
  ["Zikri Rizki", "M"],
  ["Ahsan Arif", "M"],
  ["Abidin Ardi", "M"],
  ["Bagas Setiawan", "M"],
  ["Bimo Hidayat", "M"],
  ["Candra Fadli", "M"],
  ["Dimas Bagus", "M"],
  ["Dwi Pratama", "M"],
  ["Danu Rizky", "M"],
  ["Fauzan Rizal", "M"],
  ["Fandy Fikri", "M"],
  ["Fajar Maulana", "M"],
  ["Guntur Akbar", "M"],
  ["Ghufran Hadi", "M"],
  ["Harith Putra", "M"],
  ["Ikhwan Setiawan", "M"],
  ["Irfan Ramadhan", "M"],
  ["Iqbal Naufal", "M"],
  ["Jacky Widodo", "M"],
  ["Jimi Kurniawan", "M"],
  ["Kamil Bagus", "M"],
  ["Krishnan Hadi", "M"],
  ["Luthfi Rizky", "M"],
  ["Luki Setiawan", "M"],
  ["Micky Anggara", "M"],
  ["Miro Rizki", "M"]
];

export default _name;