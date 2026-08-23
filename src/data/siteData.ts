export const siteData = {
  name: "Espacio Octubre",
  legalName: "Espacio Octubre",
  subtitle: "Salud Mental Integral",
  description: "Un espacio de escucha, acompañamiento y transformación. Atención especializada para niños, adolescentes y adultos.",
  
  seo: {
    siteUrl: "https://consultoriooctubre.com",
    ogImage: "/og-image.jpg",
    twitterHandle: "@espaciooctubre",
    keywords: ["consultorio integral", "psicologia bernal", "psicologia virtual", "terapia adultos", "salud mental", "terapia infantil"]
  },

  location: {
    address: "Constitución 25",
    city: "Bernal",
    state: "Provincia de Buenos Aires",
    zipCode: "B1876",
    country: "AR",
    geo: {
      latitude: "-34.7067388",
      longitude: "-58.2850108"
    },
    embedMapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3527.641860085459!2d-58.285010799999995!3d-34.706738800000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a333d2d8f1d3c7%3A0xe0e959e5997d7c3b!2sEspacio%20Octubre!5e1!3m2!1ses-419!2sar!4v1786642493235!5m2!1ses-419!2sar",
    googleMapsExternalUrl: `https://www.google.com/maps/place/Espacio+Octubre/@-34.7067388,-58.2850108,810m/data=!3m2!1e3!4b1!4m6!3m5!1s0x95a333d2d8f1d3c7:0xe0e959e5997d7c3b!8m2!3d-34.7067388!4d-58.2850108!16s%2Fg%2F11zd8497gq?entry=ttu&g_ep=EgoyMDI2MDgxMS4wIKXMDSoASAFQAw%3D%3D`
  },

  contact: {
    phone: "+5491131982012",
    phoneDisplay: "+54 9 11 3198-2012",
    whatsappUrl: "https://wa.me/5491131982012?text=Hola!%20Quisiera%20consultar%20por%20un%20turno%20en%20Espacio%20Octubre.",
    email: "contacto@consultoriooctubre.com",
    hours: "Lun a Vie: 8 a 20 hs",
    hourswe: "Sab: 9 a 18 hs",
    modality: "Atención presencial y virtual"
  },

  social: {
    instagram: "https://www.instagram.com/espacio.octubre/",
    facebook: "",
    linkedin: "",
    twitter: "", 
    tiktok: "",
    youtube: ""
  }
} as const;

export type SiteData = typeof siteData;