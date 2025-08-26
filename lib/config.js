// Wedding Configuration File
// All wedding information centralized for easy maintenance

export const weddingConfig = {
  // Couple Information
  couple: {
    bride: "Anna",
    groom: "Marcos",
    fullNames: "Anna & Marcos"
  },

  // Wedding Date and Time
  wedding: {
    datetime: "2025-11-14T19:30:00", // ISO format for countdown and main reference
    displayDate: "Sexta, 14 de novembro de 2025, às 19:30",
    displayDateOnly: "Sexta, 14 de novembro de 2025"
  },

  // Location Information
  location: {
    venue: "Fazenda Meadow Creek",
    address: "123 Country Rd, Anytown, EUA",
    googleMapsUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.1234567890!2d-74.0059413!3d40.7127753!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDBCNDInNDUuMyJOIDc0wrAwMCczMy45Ilc!5e0!3m2!1sen!2sus!4v1234567890123",
    venueImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuDfG7unDOgtdiA4RjLlPYQHyhY6SCLbQL7x4ZZgzw2HFkrf1t_8m-YvnmpjPuNH2KJ05KOv8YQ2TqfsUMbH4IMjCpPOj3Yb6qLcKJnAVk9LZL9bmq7aHDVN4QKVsHvoLE9RfiBURfFCZQM2UJc1pCQM62rjs0ZFj4_mZwZVWdYEVWIPIx87LFwn8nezD3l2vjeQUZaJTCywnK3q2RwATg8zPeeVIgp1gGq87-rcmQ28m_ZPyNzXeUfGByW6dxi_RYkR4wb9nFesaWQ",
    mapImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuDGJcgklJAAg28HeewIg9-6jYPkyMWL8jrlyFky1Ied_0EoMHXcIfHnnQXes0KDp_uZ-r2Qf2QpGrSKD93SYBF_ykHJ_6yYb-NZ4Ss0oHu8oKZyoEimj9N5ubOUvvGXYBJwD2ykt2tpSz8mrLnG5l0DteGw_vkFE9TBTN5Xxb0L9nZGjG0eN5RoGTcRCYbeF-6q-qp7PRVrUl3jZ9RxZ7tFjcKQ430LqeORyIe5-d488ppuZr4IxVl6nfS2zTbU94kEJ0veWWC5bkU"
  },

  // Hero Section
  hero: {
    backgroundImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuA16CjQ2rrsn6rT666FiEAKvfx9wg1pN50qBazLpo1wsNVnBxtRSWoAVAiTeBEzby9ic77qyom2s2zty9qKb6W50D_I6ZhaCh_4gyGP5zdklAiCVHiZxZeb4HbBHGVuI_sClY4gbeb6AQ74JPMeAg7ABUigBZBV-TAAMNeu7FYbYb3A1Tlg23vryS5ZXNgWNHZmnJKP3sDkLQyi2Emk_faQ9Z0AHBYSicijkGeGqw7CXQvTduN74xFK_sreW7fWwiJ9b7ZogBjg2ew",
    subtitle: "VAMOS NOS CASAR"
  },

  // Texts and Descriptions
  texts: {
    welcomeMessage: "Com alegria em nossos corações, convidamos você para celebrar nosso casamento. Junte-se a nós para um dia de amor, risadas e um felizes para sempre em um belo cenário rústico.",
    ceremonyDescription: "Junte-se a nós para a cerimônia de casamento e a recepção na bela Fazenda Meadow Creek. A cerimônia começará às 16:00, seguida por um coquetel e a recepção.",
    ourStoryTitle: "Como nos Conhecemos",
    ourStoryDescription: "Nossa história começou em meio às colinas do campo, onde nosso amor compartilhado pela natureza e agricultura floresceu. Desde o nosso primeiro encontro em uma feira de fazendeiros local até incontáveis aventuras explorando trilhas cênicas, nossa conexão se aprofundou a cada estação que passava.",
    wishlistDescription: "Sua presença em nosso casamento é o maior presente de todos. No entanto, se você deseja nos honrar com um presente, criamos uma lista de itens que adoraríamos ter em nosso novo lar."
  },

  // Our Story Photos Grid
  storyPhotos: [
    {
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCZo5tXghbiYuaNYHRwU3CXpmL5PXGPRnPXaYhcEXLaNNgyUDAEdv2N-ksXWj4gje_x1xoBvqWg_0WYX6zqAKDtPhNnbw6jvv-XkUNOgZw74bXS2o2M3px-0W-Pvuh2WDP-G0LkCd4JEU_sNdcPzYa_5J7k-NIOsuAQpuytoxuESZkbDk3_WNUC04I5Wr_ShIWctVpEhhzFaS0jOqbqW2BM27Ht_UUs-kYGAFlVOmqQmm1XanmadOZHVu-MsUP3cj-d-4C8_0g9uQ4",
      title: "Primeiro Encontro",
      description: "Nossos olhos se encontraram sobre uma cesta de produtos frescos."
    },
    {
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuADAtgpxIO7YoHRkUWIyj0KsqUch3vOSa3xrf3fwk9NA8WUrQKco8Klb1S-GMcE6HGXgcfEgqy0-aHXwvFlzL-L_xeyC7QnqA2NaaJj6XkZRj1Pj7gqjDi2cX1mEln2WkoJb-lAVQH_6Q95YycCt3qM_lVmLNp0GobU1j2oLtbkzlceCbTRuITz5H2X_UZAv2a7jGyFRaa17vYsZuDrKdNCtXGGw_ixwk9e59BIUo6zOxHqNQDZedvZ0fMGKkm2wjr5IldaRyDlO_Q",
      title: "Caminhadas na Natureza",
      description: "Explorando trilhas, nosso laço se tornou mais forte."
    },
    {
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBEqKSvARnbTaDSjDquarh94HbJbe2iV1e0ie5ZKUb438mNxs5ZMjMa19uxImldZP5uNcGSjs_2iliVNSC98yizQHjCMVHxOEsJLth301whmQjSq_-iVreSDwJFror1HquMFmMyfBZbtKLXrEEmfCyH6gOVWfTwrCscj_qBijv4P0pks1vkVX83zsYHuA-dsCwgVF6JbCVs6kA59KQKTPSEWhVpH2i-q_uhxDZ0ZDbKVrFo-tl_h3Jtp-Du3pV4BfZ-dJ_8fXBIv0w",
      title: "Dias de Feira",
      description: "Compartilhando nosso amor por produtos locais e comunidade."
    }
  ]
};
