import { NbMenuItem } from "@nebular/theme";

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: "MAIN NAVIGATION",
    group: true,
  },
  {
    title: "Beranda",
    icon: "home-outline",
    link: "beranda",
  },
  {
    title: "eSurat",
    group: true,
  },
  {
    title: "Surat Masuk",
    icon: "inbox",
    link: "kotak-masuk",
  },
  {
    title: "Disposisi",
    icon: "menu-outline",
    children: [
      {
        title: "Daftar Disposisi",
        icon: "menu-outline",
        link: "daftar-disposisi",
      },
    ],
  },
  {
    title: "Naskah Dinas Korespondensi",
    icon: "file-text-outline",
    children: [
      {
        title: "Nota Dinas",
        icon: "menu-outline",
        children: [
          {
            title: "Daftar Nota Dinas",
            icon: "menu-outline",
            link: "nota-dinas",
          },
          {
            title: "Draft Nota Dinas",
            icon: "menu-outline",
            link: "draft-nota-dinas",
          },
          {
            title: "Riwayat Surat",
            icon: "menu-outline",
            link: "not-found",
          },
        ],
      },
    ],
  },
  // {
  //   title: "eRemunerasi",
  //   group: true,
  // },
  // {
  //   title: "Dashboard Penilaian Kinerja Pegawai",
  //   icon: "pie-chart",
  //   link: "not-found",
  // },
  // {
  //   title: "Dashboard Anggaran Remunerasi Pegawai",
  //   icon: "pie-chart",
  //   link: "not-found",
  // },
  // {
  //   title: "Rekapitulasi Penilaian Kinerja Pegawai",
  //   icon: "file-text-outline",
  //   link: "not-found",
  // },
  // {
  //   title: "Master",
  //   icon: "archive",
  //   children: [
  //     {
  //       title: "Master Faktor Penimbang",
  //       icon: "menu-outline",
  //       link: "not-found",
  //     },
  //     {
  //       title: "Master Tugas Pokok Jabatan",
  //       icon: "menu-outline",
  //       link: "not-found",
  //     },
  //     {
  //       title: "Master Uraian Tugas Jabatan",
  //       icon: "menu-outline",
  //       link: "not-found",
  //     },
  //     {
  //       title: "Master Tanggung Jawab Jabatan",
  //       icon: "menu-outline",
  //       link: "not-found",
  //     },
  //     {
  //       title: "Master Indikator Jabatan",
  //       icon: "menu-outline",
  //       link: "not-found",
  //     },
  //     {
  //       title: "Mapping Pemetetaan Kegiatan Indikator Jabatan",
  //       icon: "menu-outline",
  //       link: "not-found",
  //     },
  //   ],
  // },
  // {
  //   title: "OTHER NAVIGATION",
  //   group: true,
  // },
  // {
  //   title: "Aplikasi CSSD",
  //   icon: "list-outline",
  //   children: [
  //     {
  //       title: "Order Sterilisasi Alat",
  //       icon: "menu-outline",
  //       link: "not-found",
  //     },
  //   ],
  // },
  // {
  //   title: "Aplikasi Laundry",
  //   icon: "list-outline",
  //   children: [
  //     {
  //       title: "Order Laundry",
  //       icon: "menu-outline",
  //       link: "not-found",
  //     },
  //   ],
  // },
  // {
  //   title: "Aplikasi SDM",
  //   icon: "list-outline",
  //   children: [
  //     {
  //       title: "Monitoring Absensi",
  //       icon: "menu-outline",
  //       link: "not-found",
  //     },
  //   ],
  // },
];
