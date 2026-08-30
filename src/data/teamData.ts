export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
  badge?: string;
  license?: string;
  topics?: string[];
  whatsappUrl?: string;
}

export const teamData: TeamMember[] = [
  {
    id: "pro-1",
    name: "Marina Cruz",
    role: "Lic. en Psicología",
    image: "/assets/marina-cruz.jpeg",
    badge: "Presencial & Virtual",
    topics: [
      "Especialista en consumos problemáticos",
      "Terapia individual y de pareja",
      "Orientación a padres y familias",
      "Psicotécnicos, aptos psicologicos y evaluación laboral",
    ],
    whatsappUrl: "https://wa.me/5491131982012?text=Hola!%20Quisiera%20consultar%20por%20un%20turno%20con%20Marina.",
  },
  {
    id: "pro-2",
    name: "Natalia Machetti",
    role: "Lic. en Psicología",
    image: "/assets/natalia-machetti.jpeg",
    badge: "Presencial & Virtual",
    topics: [
      "Terapia Cognitivo Conductual (TCC)",
      "Especialista en atención infanto-juvenil y adultos",
      "Estimulación temprana y orientación vocacional",
      "Orientación a familias, psicotécnicos y aptos psicologicos",
    ],
    whatsappUrl: "https://wa.me/5491156228779?text=Hola!%20Quisiera%20consultar%20por%20un%20turno%20con%20Natalia.",
  },
  {
    id: "pro-3",
    name: "Alejandra Granito",
    role: "Lic. en Psicología",
    image: "/assets/alejandra-granito.jpeg",
    badge: "Presencial & Virtual",
    topics: [
      "Especialista en crisis de ansiedad, depresión y duelo",
      "Atención a niños, adolescentes y adultos",
      "Evaluación y abordaje clínico individual",
      "Orientación a padres y acompañamiento",
    ],
    whatsappUrl: "https://wa.me/5491153256543?text=Hola!%20Quisiera%20consultar%20por%20un%20turno%20con%20Alejandra.",
  },
];