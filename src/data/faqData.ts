export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export const faqData: FaqItem[] = [
  {
    id: "faq-1",
    question: "¿Cómo solicito un turno?",
    answer: "Podés coordinar un turno directamente haciendo clic en el botón de WhatsApp o en la seccion de Equipo. Nos indicás el motivo de consulta y te ofrecemos los días y horarios disponibles."
  },
  {
    id: "faq-2",
    question: "¿De que manera se abona la consulta?",
    answer: "Los honorarios correspondientes a las consultas son abonados de manera particular por el paciente en efectivo o transferencia."
  },
  {
    id: "faq-3",
    question: "¿Trabajan con obras sociales?",
    answer: "No trabajamos directamente con obras sociales. Emitimos la factura necesaria para la gestion del reintegro, segun la cobertura de cada obra social o prepaga."
  },
];