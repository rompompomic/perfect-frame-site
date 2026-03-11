import Container6mImage from "@/assets/container-6m.png";
import Container7mImage from "@/assets/container-7m.png";
import Container8mImage from "@/assets/container-8m.png";
import Container9mImage from "@/assets/container-9m.png";
import Container10mImage from "@/assets/container-10m.png";
import Container12mImage from "@/assets/container-12m.png";
import Container15mImage from "@/assets/container-15m.png";
import Container20mImage from "@/assets/container-20m.png";
import { Container } from "./type";

export const CONTAINERS: Container[] = [
  {
    id: 1,
    size: 6,
    dimensions: { height: 175, width: 185, length: 260 },
    weight: "~150 kg",
    image: Container6mImage,
  },
  {
    id: 2,
    size: 7,
    dimensions: { height: 175, width: 185, length: 300 },
    weight: "~180 kg",
    image: Container7mImage,
  },
  {
    id: 3,
    size: 8,
    dimensions: { height: 175, width: 185, length: 340 },
    weight: "~200 kg",
    image: Container8mImage,
  },
  {
    id: 4,
    size: 9,
    dimensions: { height: 175, width: 185, length: 380 },
    weight: "~220 kg",
    image: Container9mImage,
  },
  {
    id: 5,
    size: 10,
    dimensions: { height: 175, width: 185, length: 420 },
    weight: "~250 kg",
    image: Container10mImage,
  },
  {
    id: 6,
    size: 12,
    dimensions: { height: 175, width: 185, length: 500 },
    weight: "~300 kg",
    image: Container12mImage,
  },
  {
    id: 7,
    size: 15,
    dimensions: { height: 175, width: 185, length: 620 },
    weight: "~370 kg",
    image: Container15mImage,
  },
  {
    id: 8,
    size: 20,
    dimensions: { height: 175, width: 185, length: 800 },
    weight: "~480 kg",
    image: Container20mImage,
  },
];
