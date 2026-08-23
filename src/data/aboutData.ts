export interface AboutHighlight {
  number: string;
  title: string;
  description: string;
}

export interface AboutData {
  title: string;
  foundingDate: string;
  paragraphs: string[];
  highlightsTitle: string;
  highlights: AboutHighlight[];
}

export const aboutData: AboutData = {
  title: "Nuestra Historia",
  foundingDate: "julio de 2026",
  paragraphs: [
    "Espacio Octubre nace del deseo de cada una de nosotras de crear un lugar donde habite nuestro amor por la profesión.",
    "Es un espacio pensado para que quienes nos elijan se sientan acogidas en su singularidad. Aquí combinamos el compromiso profesional con un ambiente cálido y seguro.",
    "Nuestra propuesta es simple: poner al factor humano en el centro."
  ],
  highlightsTitle: " ",
  highlights: [
    {
      number: "+250",
      title: "Pacientes acompañados",
      description: "Experiencia previa acumulada en la atención de niños, adolescentes y adultos."
    },
    {
      number: "100%",
      title: "Ética y confidencialidad",
      description: "Profesionales matriculados con constante supervisión clínica."
    },
    {
      number: "24h",
      title: "Respuesta y coordinación",
      description: "Coordinación ágil de primeros turnos en modalidad presencial u online."
    }
  ]
};