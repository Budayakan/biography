import Image from "next/image";
import {
  Github,
  Linkedin,
  Twitter,
  Instagram, 
  Youtube,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
} from "lucide-react";

// --- Komponen Navbar ---
const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white dark:bg-gray-900 shadow-md z-10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <span className="text-2xl font-bold text-black dark:text-white">
              Budayakan
            </span>
          </div>
          <div className="hidden sm:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a
                href="#hero"
                className="text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
              >
                Home
              </a>
              {/* <a
                href="#experience"
                className="text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
              >
                Experience
              </a> */}
              <a
                href="#projects"
                className="text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
              >
                Proyek
              </a>
              <a
                href="#education"
                className="text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
              >
                Pendidikan
              </a>
              <a
                href="#contact"
                className="text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

// --- Komponen Hero (Dashboard Utama) ---
const Hero = () => {
  return (
    <section
      id="hero"
      className="flex flex-col sm:flex-row items-center gap-8 sm:gap-16 pt-32 pb-16"
    >
      <div className="w-48 h-48 rounded-full overflow-hidden flex-shrink-0 border-4 border-gray-200 dark:border-gray-700">
        <Image
          src="/IMG-20251020-WA0181.jpg" // Ganti dengan path gambar Anda
          alt="Foto Profil"
          width={192}
          height={192}
          className="object-cover w-full h-full"
          priority
        />
      </div>
      <div className="flex flex-col items-center sm:items-start gap-3 text-center sm:text-left">
        <h1 className="text-4xl font-bold tracking-tight text-black dark:text-zinc-50">
          Abu Zaahid Ahmad {/* --- GANTI NAMA ANDA DI SINI --- */}
        </h1>
        <h2 className="text-2xl font-medium text-gray-700 dark:text-zinc-300">
          Fresh Graduate{/* --- GANTI JABATAN ANDA DI SINI --- */}
        </h2>
        <h2 className="text-2xl font-medium text-gray-700 dark:text-zinc-300">
          GPA : 3.33/4.00{/* --- GANTI JABATAN ANDA DI SINI --- */}
        </h2>
        <p className="max-w-md text-lg leading-7 text-zinc-600 dark:text-zinc-400">
          {/* --- GANTI DESKRIPSI SINGKAT ANDA DI SINI --- */}
          With full name Abu Zaahid Ahmad, known as Abu or Zaahid. Currently looking for work to fullfill his life and his small family. Little bit shy but can be attractive and active. He can work as a team or individual. 
        </p>
      </div>
    </section>
  );
};

// // --- Komponen Pengalaman Kerja ---
// const WorkExperience = () => {
//   // --- GANTI DATA PENGALAMAN KERJA DI SINI ---
//   const experiences = [
//     {
//       role: "Senior Frontend Developer",
//       company: "Tech Corp",
//       period: "2022 - Sekarang",
//       description:
//         "Memimpin pengembangan UI/UX untuk produk SaaS utama perusahaan menggunakan React dan TypeScript.",
//     },
//     {
//       role: "Web Developer",
//       company: "Startup XYZ",
//       period: "2020 - 2022",
//       description:
//         "Membangun dan memelihara aplikasi web e-commerce menggunakan Next.js dan Tailwind CSS.",
//     },
//   ];

//   return (
//     <section id="experience" className="py-16">
//       <h2 className="text-3xl font-bold mb-8 text-center sm:text-left text-black dark:text-white">
//         Pengalaman Kerja
//       </h2>
//       <div className="flex flex-col gap-6">
//         {experiences.map((exp, index) => (
//           <div
//             key={index}
//             className="p-6 rounded-lg bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700"
//           >
//             <div className="flex justify-between items-center mb-2">
//               <h3 className="text-xl font-semibold text-black dark:text-white">
//                 {exp.role}
//               </h3>
//               <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
//                 {exp.period}
//               </span>
//             </div>
//             <h4 className="text-lg font-medium text-gray-700 dark:text-gray-300 mb-3">
//               {exp.company}
//             </h4>
//             <p className="text-base text-zinc-600 dark:text-zinc-400">
//               {exp.description}
//             </p>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// --- KOMPONEN: PROYEK ---
const Projects = () => {
  // --- GANTI DATA PROYEK ANDA DI SINI ---
  const projects = [
    {
      name: "Penjualan dan Inventaris pada CV. HAFFYTECH",
      description:
        "Membangun Sistem Informasi Penjualan dan Inventaris dari awal menggunakan Laravel dan React untuk CV. Haffytech.",
      stack: ["Laravel", "React", "MySQL", "Tailwind CSS"],
      link: "https://github.com/Budayakan/Tugas-akhir",
    },
  ];

  return (
    <section id="projects" className="py-16">
      <h2 className="text-3xl font-bold mb-8 text-center sm:text-left text-black dark:text-white">
        Proyek Saya
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="p-6 rounded-lg bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 flex flex-col"
          >
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-xl font-semibold text-black dark:text-white">
                {project.name}
              </h3>
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-shrink-0 text-gray-500 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400"
                  aria-label="Link ke proyek"
                >
                  <ExternalLink size={20} />
                </a>
              )}
            </div>
            <p className="text-base text-zinc-600 dark:text-zinc-400 mb-4 flex-grow">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 text-xs font-medium rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

// --- KOMPONEN: PENDIDIKAN ---
const Education = () => {
  // --- GANTI DATA PENDIDIKAN ANDA DI SINI ---
  const educationHistory = [
    {
      institution: "SMA Daar El-Qolam",
      degree: "Jurusan IPA",
      period: "2018 - 2021",
    },
    {
      institution: "ITB STIKOM Bali",
      degree: "Sistem Komputer",
      period: "2021 - 2025",
    },
    {
      institution: "MSIB Merdeka Belajar Kampus Merdeka GreatEdu",
      degree: "Online Bootcamp UI/UX Designer",
      period: "2023",
    },
  ];

  return (
    <section id="education" className="py-16">
      <h2 className="text-3xl font-bold mb-8 text-center sm:text-left text-black dark:text-white">
        Riwayat Pendidikan
      </h2>
      <div className="flex flex-col gap-6">
        {educationHistory.map((edu, index) => (
          <div
            key={index}
            className="p-6 rounded-lg bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700"
          >
            <div className="flex justify-between items-center mb-1">
              <h3 className="text-xl font-semibold text-black dark:text-white">
                {edu.institution}
              </h3>
              <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
                {edu.period}
              </span>
            </div>
            <h4 className="text-lg font-normal text-gray-700 dark:text-gray-300">
              {edu.degree}
            </h4>
          </div>
        ))}
      </div>
    </section>
  );
};

// --- Komponen Link Sosial Media ---
const SocialLinks = () => {
  // --- GANTI LINK SOSIAL MEDIA ANDA DI SINI ---
  const socials = [
    {
      name: "GitHub",
      url: "https://github.com/Budayakan",
      icon: <Github size={24} />,
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/abu-zaahid-ahmad-a361471a3",
      icon: <Linkedin size={24} />,
    },
    {
      name: "Twitter",
      url: "https://twitter.com/budayakan_",
      icon: <Twitter size={24} />,
    },
    // --- DATA BARU DITAMBAHKAN ---
    {
      name: "Instagram",
      url: "https://instagram.com/za.ahd",
      icon: <Instagram size={24} />,
    },
    {
      name: "Youtube",
      url: "https://youtube.com/@Budayakan",
      icon: <Youtube size={24} />,
    },
  ];

  return (
    <section id="socials" className="py-16">
      <h2 className="text-3xl font-bold mb-8 text-center sm:text-left text-black dark:text-white">
        Sosial Media
      </h2>
      <div className="flex flex-wrap justify-center sm:justify-start gap-4">
        {socials.map((social) => (
          <a
            key={social.name}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 h-12 px-5 rounded-full text-base font-medium transition-colors bg-gray-100 dark:bg-gray-800 text-black dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 border border-solid border-black/[.08] dark:border-white/[.145]"
          >
            {social.icon}
            {social.name}
          </a>
        ))}
      </div>
    </section>
  );
};

// --- Komponen Tabel Kontak ---
const ContactTable = () => {
  // --- GANTI INFO KONTAK ANDA DI SINI ---
  const contacts = [
    {
      name: "Email",
      value: "abudicky75@gmail.com",
      href: "mailto:emailanda@example.com",
      icon: <Mail size={20} />,
    },
    {
      name: "Telepon",
      value: "+62 851 8304 1214",
      href: "tel:+6281234567890",
      icon: <Phone size={20} />,
    },
    {
      name: "Lokasi",
      value: "Tangerang, Banten, Indonesia",
      href: "#",
      icon: <MapPin size={20} />,
    },
  ];

  return (
    <section id="contact" className="py-16">
      <h2 className="text-3xl font-bold mb-8 text-center sm:text-left text-black dark:text-white">
        Kontak Saya
      </h2>
      <div className="overflow-x-auto">
        <div className="min-w-full bg-white dark:bg-gray-800 rounded-lg shadow border border-gray-200 dark:border-gray-700">
          <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
            <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
              {contacts.map((contact) => (
                <tr key={contact.name}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                    <div className="flex items-center gap-3">
                      {contact.icon}
                      {contact.name}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 dark:text-gray-300">
                    <a
                      href={contact.href}
                      className="hover:underline hover:text-blue-500"
                    >
                      {contact.value}
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

// --- Halaman Utama (Home) ---
export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center bg-zinc-50 font-sans dark:bg-black">
      <Navbar />
      <main className="flex w-full max-w-5xl flex-col px-6 sm:px-8 lg:px-12 py-16">
        {/* Ini adalah bagian utama yang merender semua komponen */}
        <Hero />
        {/* <WorkExperience /> */}
        <Projects />
        <Education />
        <SocialLinks /> {/* Komponen ini sekarang otomatis menyertakan Instagram */}
        <ContactTable />
      </main>
      <footer className="w-full py-8 text-center text-zinc-600 dark:text-zinc-400 border-t border-gray-200 dark:border-gray-800">
        © {new Date().getFullYear()} Abu Zaahid Ahmad. All rights reserved.
      </footer>
    </div>
  );
}