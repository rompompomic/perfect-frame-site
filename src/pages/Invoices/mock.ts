export type InvoiceStatus = "awaiting" | "payed";
export type InvoiceType = "Advance" | "Final";

export interface Invoice {
  id: string;
  number: string;
  address: string;
  status: InvoiceStatus;
  type: InvoiceType;
  date: string;
  orders: number;
  amount: string;
}

export interface InvoicePosition {
  orderId: string;
  address: string;
  container: string;
  promo: { discount: string; from: string; to: string; code: string } | null;
  originalPrice: number;
  priceWithPromo: number;
  vat: number;
  rentalDays: number;
  processingFee: number;
}

export interface InvoiceDetail {
  number: string;
  status: InvoiceStatus;
  daysUntilPayment: number;
  paymentStatus: string;
  type: string;
  createdAt: string;
  paymentPeriod: string;
  relatedOrders: string[];
  positions: InvoicePosition[];
  totalVat: number;
  totalMinusVat: number;
  totalPrice: number;
}

export const MOCK_INVOICES: Invoice[] = [
  {
    id: "1",
    number: "12345678",
    address: "Citadeles iela 6A, Riga, LV-1010",
    status: "awaiting",
    type: "Advance",
    date: "02.10.2025",
    orders: 1,
    amount: "€208.42",
  },
  {
    id: "2",
    number: "12345677",
    address: "Citadeles iela 6A, Riga, LV-1010",
    status: "payed",
    type: "Final",
    date: "02.10.2025",
    orders: 1,
    amount: "€208.42",
  },
  {
    id: "3",
    number: "12345676",
    address: "Citadeles iela 6A, Riga, LV-1010",
    status: "payed",
    type: "Final",
    date: "02.10.2025",
    orders: 1,
    amount: "€208.42",
  },
  {
    id: "4",
    number: "12345675",
    address: "Citadeles iela 6A, Riga, LV-1010",
    status: "payed",
    type: "Final",
    date: "02.10.2025",
    orders: 1,
    amount: "€208.42",
  },
  {
    id: "5",
    number: "12345674",
    address: "Citadeles iela 6A, Riga, LV-1010",
    status: "payed",
    type: "Final",
    date: "02.10.2025",
    orders: 1,
    amount: "€208.42",
  },
];

export const MOCK_INVOICE_DETAIL: InvoiceDetail = {
  number: "12345678",
  status: "awaiting",
  daysUntilPayment: 12,
  paymentStatus: "Awaiting payment",
  type: "Advance",
  createdAt: "12.03.24 16:00",
  paymentPeriod: "30 days",
  relatedOrders: Array(25).fill("LV25-12/12126"),
  positions: [
    {
      orderId: "12345679",
      address: "Citadeles iela 6A, Riga, LV-1010",
      container: "6 m³ (x2)",
      promo: { discount: "-25 €", from: "€208.42", to: "€233.42", code: "NEWYEAR2026" },
      originalPrice: 244,
      priceWithPromo: 208,
      vat: 28,
      rentalDays: 2,
      processingFee: 20,
    },
    {
      orderId: "12345678",
      address: "Citadeles iela 6A, Riga, LV-1010",
      container: "6 m³ (x2)",
      promo: { discount: "-25 €", from: "€208.42", to: "€233.42", code: "NEWYEAR2026" },
      originalPrice: 244,
      priceWithPromo: 208,
      vat: 28,
      rentalDays: 2,
      processingFee: 20,
    },
  ],
  totalVat: 56,
  totalMinusVat: 360.84,
  totalPrice: 416.84,
};
