/**
 * Navigation links used across Navbar and Footer.
 */
export const NAV_LINKS = [
  { label: 'Beranda', href: '#home' },
  { label: 'Tentang', href: '#about' },
  { label: 'Program', href: '#programs' },
  { label: 'Tim', href: '#team' },
  { label: 'Kontak', href: '#contact' },
];

/**
 * Organization identity and metadata.
 */
export const ORG_INFO = {
  name: 'NusantaraCode',
  tagline: 'Membangun Komunitas Developer Indonesia',
  description:
    'Kami adalah organisasi teknologi yang berdedikasi untuk membangun ekosistem developer di Indonesia melalui edukasi, inovasi, dan kolaborasi yang berkelanjutan.',
  founded: 2020,
  email: 'hello@nusantaracode.org',
  phone: '+62 812 3456 7890',
  address: 'Jl. Teknologi No. 42, Jakarta Selatan, DKI Jakarta 12345',
};

/**
 * About section data: vision, mission, and history.
 */
export const ABOUT_DATA = {
  vision:
    'Menjadi komunitas teknologi terdepan di Asia Tenggara yang mencetak talenta digital berkualitas global dan mendorong inovasi berkelanjutan.',
  missions: [
    'Menyediakan program edukasi teknologi berkualitas tinggi yang aksesibel untuk semua kalangan.',
    'Membangun jaringan kolaborasi antar developer, startup, dan industri teknologi.',
    'Mendorong inovasi melalui hackathon, riset, dan pengembangan proyek open-source.',
    'Memberdayakan komunitas lokal dengan keterampilan digital yang relevan dengan kebutuhan industri.',
  ],
  history: [
    {
      year: 2020,
      title: 'Awal Perjalanan',
      description:
        'Dimulai dari komunitas kecil dengan 15 orang developer yang memiliki visi besar untuk ekosistem tech Indonesia.',
    },
    {
      year: 2021,
      title: 'Pertumbuhan Pesat',
      description:
        'Berhasil mengadakan 50+ workshop dan menjangkau 2.000+ peserta dari berbagai kota di Indonesia.',
    },
    {
      year: 2022,
      title: 'Ekspansi Nasional',
      description:
        'Membuka chapter di 10 kota besar dan meluncurkan program mentorship dengan 100+ mentor industri.',
    },
    {
      year: 2023,
      title: 'Dampak Global',
      description:
        'Menghasilkan 500+ alumni yang bekerja di perusahaan teknologi global dan meluncurkan 20+ proyek open-source.',
    },
  ],
  stats: [
    { value: '5,000+', label: 'Anggota Aktif' },
    { value: '200+', label: 'Event Diselenggarakan' },
    { value: '15', label: 'Kota di Indonesia' },
    { value: '500+', label: 'Alumni Berkarir' },
  ],
};

/**
 * Programs/activities offered by the organization.
 */
export const PROGRAMS_DATA = [
  {
    id: 1,
    title: 'Coding Bootcamp',
    description:
      'Program pelatihan intensif 12 minggu yang mencakup Full-Stack Web Development, Mobile Development, dan Data Science dengan kurikulum berbasis industri.',
    icon: 'Code2',
    color: 'from-[#1D546D] to-[#5F9598]',
    features: ['Kurikulum industri', 'Mentorship 1-on-1', 'Sertifikat'],
  },
  {
    id: 2,
    title: 'Tech Workshop Series',
    description:
      'Workshop mingguan yang membahas teknologi terkini seperti AI/ML, Cloud Computing, DevOps, dan Blockchain dengan pembicara dari industri.',
    icon: 'Lightbulb',
    color: 'from-[#5F9598] to-[#7aacaf]',
    features: ['Hands-on practice', 'Expert speakers', 'Free access'],
  },
  {
    id: 3,
    title: 'Hackathon Nasional',
    description:
      'Kompetisi inovasi tahunan yang mempertemukan developer, designer, dan entrepreneur untuk membangun solusi teknologi berdampak sosial.',
    icon: 'Trophy',
    color: 'from-[#0e3347] to-[#5F9598]',
    features: ['Total hadiah Rp100jt', '48 jam tantangan', 'Networking'],
  },
  {
    id: 4,
    title: 'Mentorship Program',
    description:
      'Program bimbingan karir selama 6 bulan dengan mentor profesional dari perusahaan teknologi terkemuka di Indonesia dan Asia.',
    icon: 'Users',
    color: 'from-[#2a6a7e] to-[#7aacaf]',
    features: ['100+ mentor', 'Career guidance', 'Portfolio review'],
  },
  {
    id: 5,
    title: 'Open Source Initiative',
    description:
      'Kolaborasi pengembangan proyek open-source yang berdampak bagi komunitas developer dan masyarakat Indonesia secara luas.',
    icon: 'GitBranch',
    color: 'from-[#1D546D] to-[#4a7a7d]',
    features: ['20+ projects', 'Global impact', 'Contribution guide'],
  },
  {
    id: 6,
    title: 'Community Meetup',
    description:
      'Pertemuan rutin komunitas di berbagai kota untuk berbagi ilmu, pengalaman, dan membangun koneksi antar developer.',
    icon: 'MessageCircle',
    color: 'from-[#5F9598] to-[#1D546D]',
    features: ['15 kota', 'Monthly events', 'Networking'],
  },
];

/**
 * Team members data with roles and social links.
 */
export const TEAM_DATA = [
  {
    id: 1,
    name: 'Andi Pratama',
    role: 'Founder & CEO',
    bio: 'Ex-Google Engineer dengan 10+ tahun pengalaman di industri teknologi. Passionate tentang edukasi dan community building.',
    avatar: 'AP',
    socials: { linkedin: '#', github: '#', twitter: '#' },
  },
  {
    id: 2,
    name: 'Siti Rahayu',
    role: 'CTO',
    bio: 'Full-Stack Developer dan Cloud Architect dengan expertise di AWS dan GCP. Kontributor aktif di beberapa proyek open-source.',
    avatar: 'SR',
    socials: { linkedin: '#', github: '#', twitter: '#' },
  },
  {
    id: 3,
    name: 'Budi Santoso',
    role: 'Head of Education',
    bio: 'Mantan dosen universitas top dengan passion di edtech. Telah mendesain kurikulum untuk 50+ program pelatihan.',
    avatar: 'BS',
    socials: { linkedin: '#', github: '#' },
  },
  {
    id: 4,
    name: 'Diana Putri',
    role: 'Head of Community',
    bio: 'Community builder berpengalaman yang telah membangun komunitas tech di 15+ kota. Speaker di berbagai konferensi.',
    avatar: 'DP',
    socials: { linkedin: '#', twitter: '#' },
  },
  {
    id: 5,
    name: 'Rizky Aditya',
    role: 'Lead Developer',
    bio: 'Senior Software Engineer yang ahli di React dan Node.js. Mentor aktif di program bootcamp NusantaraCode.',
    avatar: 'RA',
    socials: { linkedin: '#', github: '#' },
  },
  {
    id: 6,
    name: 'Maya Indah',
    role: 'Head of Design',
    bio: 'UI/UX Designer dengan latar belakang di product design. Alumni program design Google dan Meta.',
    avatar: 'MI',
    socials: { linkedin: '#', github: '#', twitter: '#' },
  },
];
