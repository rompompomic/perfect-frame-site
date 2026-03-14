export const orders = [
  {
    id: "12345678",
    date: "02.10.2025 14:00",
    price: "€208.42",
    type: "Free rental",
    paymentStatus: "Awaiting payment",
    paymentPaid: false,
    positions: [
      {
        address: "Citadeles iela 6A, Riga, LV-1010",
        date: "02.10.2025 14:00",
        container: "6 m³ (x2)",
        price: "€208.42",
      },
      {
        address: "Citadeles iela 6A, Riga, LV-1010",
        date: "02.10.2025 14:00",
        container: "6 m³ (x2)",
        price: "€208.42",
      },
    ],
    active: true,
  },
];

export const archiveOrders = [
  {
    id: "12345677",
    date: "02.10.2025 14:00",
    price: "€208.42",
    type: "Free rental",
    paymentStatus: "Payed",
    paymentPaid: true,
    positions: [
      {
        address: "Citadeles iela 6A, Riga, LV-1010",
        date: "02.10.2025 14:00",
        container: "6 m³ (x2)",
        price: "€208.42",
      },
    ],
    active: false,
  },
  {
    id: "12345676",
    date: "02.10.2025 14:00",
    price: "€208.42",
    type: "Free rental",
    paymentStatus: "Payed",
    paymentPaid: true,
    positions: [
      {
        address: "Citadeles iela 6A, Riga, LV-1010",
        date: "02.10.2025 14:00",
        container: "6 m³ (x2)",
        price: "€208.42",
      },
    ],
    active: false,
  },
];
