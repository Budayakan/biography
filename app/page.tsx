// page.tsx

"use client"; // Diperlukan untuk state menu mobile

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
  Menu, // <-- Ditambahkan untuk ikon hamburger
  X, // <-- Ditambahkan untuk ikon 'tutup'
} from "lucide-react";
import { useState } from "react"; // <-- Ditambahkan untuk mengelola state Navbar

// --- Komponen Navbar (Sudah Diperbarui) ---
const Navbar = () => {
  // State untuk melacak status menu mobile (terbuka/tertutup)
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "#hero" },
    // { name: "Experience", href: "#experience" },
    { name: "Proyek", href: "#projects" },
    { name: "Pendidikan", href: "#education" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-white dark:bg-gray-900 shadow-md z-10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* --- Logo/Nama --- */}
          <div className="flex-shrink-0">
            <span className="text-2xl font-bold text-black dark:text-white">
              Budayakan
            </span>
          </div>

          {/* --- Menu Desktop --- */}
          <div className="hidden sm:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>

          {/* --- Tombol Hamburger (Hanya Mobile) --- */}
          <div className="sm:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Buka menu utama</span>
              {/* Ganti ikon berdasarkan state */}
              {isOpen ? (
                <X className="block h-6 w-6" />
              ) : (
                <Menu className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* --- Menu Mobile (Dropdown) --- */}
      {/* Tampilkan/sembunyikan berdasarkan state 'isOpen' */}
      <div
        className={`${isOpen ? "block" : "hidden"} sm:hidden`}
        id="mobile-menu"
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => setIsOpen(false)} // Tutup menu saat link diklik
              className="text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium"
            >
              {item.name}
            </a>
          ))}
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
          With full name Abu Zaahid Ahmad, known as Abu or Zaahid. Currently
          looking for work to fullfill his life and his small family. Little
          bit shy but can be attractive and active. He can work as a team or
          individual.
        </p>
      </div>
    </section>
  );
};

// // --- Komponen Pengalaman Kerja ---
// const WorkExperience = () => {
//   // ... (Kode pengalaman kerja Anda tetap di sini jika ingin dipakai)
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

// --- KOMPONEN: PENDIDIKAN (Sudah Diperbarui) ---
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
            {/* --- Bagian Ini Sudah Diperbarui --- */}
            <div className="flex flex-col sm:flex-row justify-between sm:items-center mb-1 gap-1 sm:gap-0">
              <h3 className="text-xl font-semibold text-black dark:text-white">
                {edu.institution}
              </h3>
              <span className="text-sm font-medium text-gray-600 dark:text-gray-400 flex-shrink-0">
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
  // --- Info kontak Anda ---
  const contacts = [
    {
      name: "Email",
      value: "abudicky75@gmail.com",
      href: "mailto:abudicky75@gmail.com",
      icon: <Mail size={20} />,
    },
    {
      name: "Telepon",
      value: "+62 851 8304 1214",
      href: "tel:+6285183041214",
      icon: <Phone size={20} />,
    },
    {
      name: "Lokasi",
      value: "Tangerang, Banten, Indonesia",
      href: "#", // Anda bisa ganti dengan link Google Maps jika mau
      icon: <MapPin size={20} />,
    },
  ];

  return (
    <section id="contact" className="py-16">
      <h2 className="text-3xl font-bold mb-8 text-center sm:text-left text-black dark:text-white">
        Kontak Saya
      </h2>

      {/* --- TAMPILAN MOBILE: LIST (BARU) ---
        'sm:hidden' berarti ini akan HILANG di layar besar (desktop)
      */}
      <div className="flex flex-col gap-4 sm:hidden">
        {contacts.map((contact) => (
          <a
            key={contact.name}
            href={contact.href}
            target="_blank"
            rel="noopener noreferrer"
            // Setiap item kontak adalah 'kartu' yang bisa diklik
            className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow border border-gray-200 dark:border-gray-700 flex flex-col gap-2 transition-transform active:scale-[0.98] active:bg-gray-100 dark:active:bg-gray-700"
          >
            <div className="flex items-center gap-3 text-sm font-medium text-gray-900 dark:text-white">
              {contact.icon}
              {contact.name}
            </div>
            <div className="text-base text-gray-600 dark:text-gray-300 break-words">
              {/* 'break-words' agar email atau teks panjang bisa pindah baris */}
              {contact.value}
            </div>
          </a>
        ))}
      </div>

      {/* --- TAMPILAN DESKTOP: TABLE (KODE LAMA ANDA) ---
        'hidden sm:block' berarti ini akan TERSEMBUNYI di mobile
        dan tampil sebagai 'block' di layar 'sm' (desktop) ke atas.
      */}
      <div className="hidden sm:block overflow-x-auto">
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
                      target="_blank"
                      rel="noopener noreferrer"
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