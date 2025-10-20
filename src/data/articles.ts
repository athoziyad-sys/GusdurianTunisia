export interface Article {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  category: string;
  created_at: string;
  updated_at: string;
  image_url: string;
  featured?: boolean;
}

export const articles: Article[] = [
  {
    id: "1",
    title: "Nilai Pluralisme dalam Pemikiran Gus Dur",
    excerpt: "Bagaimana Gus Dur mengajarkan kita untuk menghargai keberagaman dan hidup berdampingan dengan damai.",
    content: `
      <p>Abdurrahman Wahid, atau yang akrab dipanggil Gus Dur, adalah sosok yang luar biasa dalam sejarah Indonesia modern. Beliau dikenal sebagai tokoh yang sangat menjunjung tinggi nilai-nilai pluralisme dan keberagaman.</p>
      
      <h2>Pengertian Pluralisme Menurut Gus Dur</h2>
      <p>Bagi Gus Dur, pluralisme bukan hanya tentang mengakui adanya perbedaan, tetapi juga tentang menghargai dan merayakan keberagaman tersebut. Beliau percaya bahwa dalam perbedaan terletak kekuatan yang dapat memperkaya kehidupan berbangsa dan bernegara.</p>
      
      <h2>Implementasi dalam Kehidupan Sehari-hari</h2>
      <p>Gus Dur menunjukkan bahwa pluralisme harus dipraktikkan dalam kehidupan sehari-hari, bukan hanya sebagai konsep teoritis. Beliau sering berkunjung ke gereja, vihara, dan tempat ibadah lainnya untuk menunjukkan bahwa menghormati agama lain adalah bagian integral dari kehidupan beragama.</p>
      
      <blockquote>"Perbedaan adalah rahmat, bukan ancaman. Kita harus belajar hidup berdampingan dengan damai."</blockquote>
      
      <h2>Relevansi di Tunisia</h2>
      <p>Di Tunisia, nilai-nilai pluralisme Gus Dur sangat relevan. Sebagai negara dengan sejarah panjang dalam dialog antarbudaya dan antaragama, Tunisia dapat menjadi contoh penerapan nilai-nilai kemanusiaan yang diajarkan Gus Dur.</p>
      
      <p>Komunitas Gusdurian Tunisia berkomitmen untuk meneruskan warisan pemikiran ini dengan mengadakan diskusi, seminar, dan kegiatan sosial yang mempromosikan toleransi dan keberagaman.</p>
    `,
    author: "Ahmad Zaini",
    category: "Pemikiran",
    created_at: "2025-01-15",
    updated_at: "2025-01-15",
    image_url: "/placeholder.svg",
    featured: true,
  },
  {
    id: "2",
    title: "Toleransi Beragama: Warisan Gus Dur untuk Dunia",
    excerpt: "Menelusuri jejak toleransi beragama yang diajarkan Gus Dur dan relevansinya di era modern.",
    content: `
      <p>Toleransi beragama adalah salah satu warisan terbesar yang ditinggalkan oleh Gus Dur. Dalam kehidupannya, beliau tidak hanya bicara tentang toleransi, tetapi juga mengamalkannya dengan nyata.</p>
      
      <h2>Definisi Toleransi Menurut Gus Dur</h2>
      <p>Bagi Gus Dur, toleransi bukan berarti menerima begitu saja semua perbedaan tanpa sikap kritis. Toleransi adalah tentang menghormati hak setiap orang untuk menjalankan keyakinannya, sambil tetap menjaga dialog yang konstruktif.</p>
    `,
    author: "Fatima Hassan",
    category: "Keagamaan",
    created_at: "2025-01-10",
    updated_at: "2025-01-10",
    image_url: "/placeholder.svg",
  },
  {
    id: "3",
    title: "Kemanusiaan Universal: Filosofi Gus Dur",
    excerpt: "Memahami konsep kemanusiaan universal yang menjadi inti dari pemikiran Gus Dur.",
    content: `
      <p>Gus Dur selalu menekankan pentingnya kemanusiaan universal yang melampaui batas-batas agama, suku, dan bangsa. Baginya, semua manusia memiliki martabat yang sama dan berhak mendapat perlakuan yang adil.</p>
    `,
    author: "Muhammad Ali",
    category: "Kemanusiaan",
    created_at: "2025-01-05",
    updated_at: "2025-01-05",
    image_url: "/placeholder.svg",
  },
  {
    id: "4",
    title: "Gusdurian Tunisia: Misi dan Visi Kami",
    excerpt: "Mengenal lebih dekat tentang komunitas Gusdurian Tunisia dan tujuan kami.",
    content: `
      <p>Komunitas Gusdurian Tunisia didirikan dengan tujuan untuk meneruskan nilai-nilai luhur yang diajarkan oleh Gus Dur di tanah Tunisia.</p>
    `,
    author: "Laila Amari",
    category: "Komunitas",
    created_at: "2025-01-01",
    updated_at: "2025-01-01",
    image_url: "/placeholder.svg",
  },
  {
    id: "5",
    title: "Dialog Antarbudaya: Jembatan Pemahaman",
    excerpt: "Pentingnya dialog antarbudaya dalam membangun masyarakat yang harmonis.",
    content: `
      <p>Dialog antarbudaya adalah salah satu cara terbaik untuk membangun pemahaman dan mengurangi prasangka antar kelompok masyarakat.</p>
    `,
    author: "Omar Mansour",
    category: "Budaya",
    created_at: "2024-12-28",
    updated_at: "2024-12-28",
    image_url: "/placeholder.svg",
  },
  {
    id: "6",
    title: "Peran Pemuda dalam Menyebarkan Nilai Toleransi",
    excerpt: "Bagaimana generasi muda dapat menjadi agen perubahan dalam mempromosikan toleransi.",
    content: `
      <p>Pemuda memiliki peran penting dalam meneruskan nilai-nilai toleransi dan pluralisme. Dengan energi dan kreativitas mereka, pemuda dapat menjadi motor penggerak perubahan sosial.</p>
    `,
    author: "Salma Fakhri",
    category: "Pemuda",
    created_at: "2024-12-20",
    updated_at: "2024-12-20",
    image_url: "/placeholder.svg",
  },
];
