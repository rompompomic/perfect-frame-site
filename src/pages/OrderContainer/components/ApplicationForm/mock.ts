import SEBicon from "@/assets/banks/SEB.png";
import Swedbankicon from "@/assets/banks/Swedbank.png";
import Luminoricon from "@/assets/banks/luminor.png";
import Citadeleicon from "@/assets/banks/Citadele.png";

export type PersonType = "fiziska" | "juridiska";
export type ServiceKind = "noma" | "izvešana" | "maina";
export type PaymentMethod = "tiessaiste" | "vietas" | "epasts";
export type PaymentType = "internetbanka" | "karte" | "googlepay";
export type Bank = "seb" | "swedbank" | "luminor" | "citadele";

export interface ApplicationFormData {
  personType: PersonType;
  serviceKind: ServiceKind;
  name: string;
  phone: string;
  email: string;
  comment: string;
  needsCertificate: boolean;
  cadastreNumber: string;
  paymentMethod: PaymentMethod;
  paymentType: PaymentType;
  bank: Bank | null;
  agreeTerms: boolean;
  agreeMarketing: boolean;
  companySearch: string;
  companyName: string;
  legalAddress: string;
  registrationNumber: string;
  pvnNumber: string;
}

export const SERVICE_OPTIONS: { value: ServiceKind; label: string }[] = [
  { value: "noma", label: "Konteineru noma" },
  { value: "izvešana", label: "Konteineru izvešana" },
  { value: "maina", label: "Konteineru maiņa" },
];

export const PAYMENT_METHODS: { value: PaymentMethod; label: string }[] = [
  { value: "tiessaiste", label: "Apmaksa tiešsaistē" },
  { value: "vietas", label: "Samaksa uz vietas ar stingras uzskaites kviti" },
  { value: "epasts", label: "Saņemt rēķinu uz e-pastu" },
];

export const PAYMENT_TYPES: { value: PaymentType; label: string }[] = [
  { value: "internetbanka", label: "Internetbanka" },
  { value: "karte", label: "Kredītkarte/debatkarte" },
  { value: "googlepay", label: "Google Pay/Apple Pay" },
];

export const BANKS: { value: Bank; label: string; logo: string }[] = [
  { value: "seb", label: "SEB", logo: SEBicon },
  { value: "swedbank", label: "Swedbank", logo: Swedbankicon },
  { value: "luminor", label: "Luminor", logo: Luminoricon },
  { value: "citadele", label: "Citadele", logo: Citadeleicon },
];
