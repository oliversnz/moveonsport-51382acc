import { Product } from '@/contexts/CartContext';

export const products: Product[] = [
  {
    id: 1,
    name: "EcoFlex Running Tee",
    price: 45.00,
    image: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=400&h=400&fit=crop",
    category: "Camisetas",
    description: "Camiseta de running hecha con 85% materiales reciclados. Transpirable y ligera.",
    sizes: ["XS", "S", "M", "L", "XL"],
    eco: "85% Reciclado"
  },
  {
    id: 2,
    name: "GreenStride Leggings",
    price: 68.00,
    image: "https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=400&h=400&fit=crop",
    category: "Leggins",
    description: "Leggins de alto rendimiento fabricados con plástico oceánico reciclado.",
    sizes: ["XS", "S", "M", "L", "XL"],
    eco: "Plástico Oceánico"
  },
  {
    id: 3,
    name: "Terra Sports Bra",
    price: 52.00,
    image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=400&h=400&fit=crop",
    category: "Tops",
    description: "Sujetador deportivo de alto impacto con fibras de bambú orgánico.",
    sizes: ["XS", "S", "M", "L", "XL"],
    eco: "Bambú Orgánico"
  },
  {
    id: 4,
    name: "NatureRun Shorts",
    price: 55.00,
    image: "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=400&h=400&fit=crop",
    category: "Shorts",
    description: "Shorts ligeros de running con tela reciclada de botellas PET.",
    sizes: ["XS", "S", "M", "L", "XL"],
    eco: "100% Reciclado"
  },
  {
    id: 5,
    name: "EcoWarm Hoodie",
    price: 89.00,
    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&h=400&fit=crop",
    category: "Sudaderas",
    description: "Sudadera con capucha de algodón orgánico certificado GOTS.",
    sizes: ["XS", "S", "M", "L", "XL"],
    eco: "GOTS Certified"
  },
  {
    id: 6,
    name: "BioDry Tank Top",
    price: 38.00,
    image: "https://images.unsplash.com/photo-1434682881908-b43d0467b798?w=400&h=400&fit=crop",
    category: "Tops",
    description: "Tank top de entrenamiento con tecnología de secado rápido eco-friendly.",
    sizes: ["XS", "S", "M", "L", "XL"],
    eco: "Proceso Sostenible"
  },
  {
    id: 7,
    name: "ForestFlex Joggers",
    price: 75.00,
    image: "https://images.unsplash.com/photo-1552902865-b72c031ac5ea?w=400&h=400&fit=crop",
    category: "Pantalones",
    description: "Joggers versátiles hechos con fibras de eucalipto sostenible.",
    sizes: ["XS", "S", "M", "L", "XL"],
    eco: "Fibra Eucalipto"
  },
  {
    id: 8,
    name: "OceanBreeze Jacket",
    price: 120.00,
    image: "https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?w=400&h=400&fit=crop",
    category: "Chaquetas",
    description: "Chaqueta deportiva impermeable hecha con redes de pesca recicladas.",
    sizes: ["XS", "S", "M", "L", "XL"],
    eco: "Redes Recicladas"
  }
];
