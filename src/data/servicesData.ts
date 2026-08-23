export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  badge?: string;
  borderColorClass: string; 
}

export const servicesData: ServiceItem[] = [
  {
    id: "psicologia",
    title: "Psicología",
    description: "Espacio de escucha y acompañamiento terapéutico.",
    borderColorClass: "border-t-primary"
  },
];