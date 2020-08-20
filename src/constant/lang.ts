const LANGS = {
  ID: {
    components: {
      current_environmet: "Kondisi kandang",
      day_now: (d: string | number) => `Hari ke-${d}`,
      day_less: (d: string | number) => `${d} hari lagi`,
    },
    alerts: {
      dont_open: "Pintu Penetasan jangan dibuka",
      let_quail_healt: "Biarkan semua menteas dengan sempurna",
      humidity_helping_quail:
        "Tingkatkan kelembaban, kelembaban akan mempermudah penetasan",
    },
    tasks: {
      open_box: "Selamat sudah memetas semua!, saatnya dipindahan ke kandang",
      open_box_if_quail_healt:
        "Selamat!, saatnya dipindahan burung ke kandang jika sudah segar",
      return_egg: "Balikkan Telur",
    },
  },
}

export const LANG = LANGS.ID
