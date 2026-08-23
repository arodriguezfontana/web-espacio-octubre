export interface FaqItem {
  id: string;
  category: "Turnos & Modalidad" | "Obras Sociales & Pagos" | "Primera Consulta";
  question: string;
  answer: string;
}

export const faqCategories = [
  "Todas",
  "Turnos & Modalidad",
  "Obras Sociales & Pagos",
  "Primera Consulta"
] as const;

export const faqData: FaqItem[] = [
  {
    id: "faq-1",
    category: "Turnos & Modalidad",
    question: "¿Cómo solicito una primera consulta o turno?",
    answer: "Podés coordinar un turno haciendo clic en el botón de WhatsApp o escribiéndonos directamente. Nos indicás el motivo de consulta o especialidad que buscás y te ofrecemos los días y horarios disponibles."
  },
  {
    id: "faq-2",
    category: "Turnos & Modalidad",
    question: "¿Qué diferencia hay entre la atención presencial y virtual?",
    answer: "La atención presencial se realiza en nuestro consultorio en un espacio acondicionado para cada franja etaria. La modalidad virtual se ofrece mediante plataformas seguras para sesiones de psicología, orientación a padres o seguimientos en adultos que por distancia o tiempos prefieran esta opción."
  },
  {
    id: "faq-3",
    category: "Obras Sociales & Pagos",
    question: "¿Atienden por obras sociales o prepagas?",
    answer: "Trabajamos de manera particular / reintegro. Emitimos factura profesional oficial para que puedas tramitar el reintegro en tu obra social o prepaga, sujeto a la cobertura y plan que tengas contratado."
  },
  {
    id: "faq-4",
    category: "Obras Sociales & Pagos",
    question: "¿Cuáles son los medios de pago aceptados?",
    answer: "Aceptamos transferencia bancaria, Mercado Pago y efectivo en el consultorio. Los honorarios se abonan o confirman según las pautas acordadas al momento de agendar el turno."
  },
  {
    id: "faq-5",
    category: "Primera Consulta",
    question: "¿Cómo es la primera sesión para un niño o adolescente?",
    answer: "Habitualmente la primera entrevista se realiza con los padres o tutores a cargo. En este primer encuentro se releva el motivo de consulta, la historia de desarrollo y se acuerda la estrategia de evaluación e intervención para las siguientes sesiones con el/la paciente."
  }
];