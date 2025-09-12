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
    datetime: "2025-11-14T18:30:00", // ISO format for countdown and main reference
    displayDate: "Sexta, 14 de novembro de 2025, às 18:30",
    displayDateOnly: "Sexta, 14 de novembro de 2025"
  },

  // Location Information
  location: {
    venue: "Espaço Fênix",
    address: "Rua 5, QD 21 LT 46 - Jardim Universitário",
    googleMapsUrl: "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3926.6085196291438!2d-48.88411332496598!3d-10.212411889904105!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTDCsDEyJzQ0LjciUyA0OMKwNTInNTMuNSJX!5e0!3m2!1sen!2sbr!4v1757630345079!5m2!1sen!2sbr",
    venueImage: "./assets/venue-image.jpeg",
  },

  // Hero Section
  hero: {
    backgroundImage: "./assets/hero-background.png",
    subtitle: ""
  },

  // Texts and Descriptions
  texts: {
    welcomeMessage: "Com muita alegria no coração, convidamos você para partilhar do nosso casamento. Um momemto íntimo, verdadeiro e inesquecível em nossas vidas.",
    ceremonyDescription: "Depois do momento do nosso casamento no civil, com muito carinho convidamos você para comemorar e celebrar conosco esse novo capítulo da nossa história.",
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
