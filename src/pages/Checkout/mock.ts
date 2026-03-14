export interface ContainerSummary {
  id: string;
  size: string;
  address: string;
  service: string;
  piegade?: string;
  izvesana: string;
  price: number;
}

export const MOCK_CONTAINERS: ContainerSummary[] = [
  {
    id: "1",
    size: "6 m³",
    address: "Citadeles iela 6A, Riga, LV-1010",
    service: "Uzstādīt jaunu konteineru",
    piegade: "12.08.2025",
    izvesana: "20.08.2025",
    price: 46.08,
  },
  {
    id: "2",
    size: "6 m³",
    address: "Citadeles iela 6A, Riga, LV-1010",
    service: "Esošā konteinera izvešana",
    izvesana: "20.08.2025",
    price: 46.08,
  },
  {
    id: "3",
    size: "9 m³",
    address: "Citadeles iela 6A, Riga, LV-1010",
    service: "Esošā konteinera maiņa",
    piegade: "12.08.2025",
    izvesana: "20.08.2025",
    price: 46.08,
  },
  {
    id: "4",
    size: "9 m³",
    address: "Citadeles iela 6A, Riga, LV-1010",
    service: "Esošā konteinera maiņa",
    piegade: "12.08.2025",
    izvesana: "20.08.2025",
    price: 46.08,
  },
];

export const MOCK_PRICING = {
  buvnieciba: 174.0,
  noma: 0.0,
  atlaide: 20.0,
  kopaBezPvn: 154.0,
  pvn: 32.34,
  kopaArPvn: 186.34,
};
