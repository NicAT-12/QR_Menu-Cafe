import type { Receta } from "../types/Receta";

import espressoImg from "../assets/images/espresso-image.jpg";
import doppioImg from "../assets/images/doppio-image.jpg";
import americanoImg from "../assets/images/americano-image.jpg";
import cappuccinoImg from "../assets/images/cappuccino-image.jpg";
import latteImg from "../assets/images/latte-image.jpg";
import mochaImg from "../assets/images/mocha-image.jpg";
import cortadoImg from "../assets/images/cortado-image.avif";
import flatWhiteImg from "../assets/images/flat-white-image.jpg";
import macchiatoImg from "../assets/images/macchiato-image.jpg";
import conPannaImg from "../assets/images/con-panna-image.jpg";
import affogatoImg from "../assets/images/affogato-image.jpg";
import irishCoffeeImg from "../assets/images/irish-coffee-image.jpg";

export const recetasCafeteria: Receta[] = [
    {
        id: 1,
        nombre: "Espresso",
        descripcion: "Una sola carga de café concentrado extraído bajo presión.",
        taza: "Taza pequeña de espresso",
        ingredientes: ["Espresso"],
        imagen: espressoImg
    },
    {
        id: 2,
        nombre: "Doppio",
        descripcion: "Un espresso doble que ofrece el doble de volumen e intensidad.",
        taza: "Taza pequeña de espresso",
        ingredientes: ["Espresso doble"],
        imagen: doppioImg
    },
    {
        id: 3,
        nombre: "Americano",
        descripcion: "Un espresso suavizado al completarse con una porción generosa de agua caliente.",
        taza: "Taza estándar / mediana",
        ingredientes: ["Espresso", "Agua caliente"],
        imagen: americanoImg
    },
    {
        id: 4,
        nombre: "Cappuccino",
        descripcion: "Combinación equilibrada de espresso, leche al vapor y una capa definida de espuma de leche.",
        taza: "Taza de cerámica mediana",
        ingredientes: ["Espresso", "Leche vaporizada", "Espuma de leche"],
        imagen: cappuccinoImg
    },
    {
        id: 5,
        nombre: "Latte",
        descripcion: "Una base de espresso con una abundante porción de leche al vapor y un toque ligero de espuma.",
        taza: "Taza grande o vaso alto de vidrio",
        ingredientes: ["Espresso", "Leche vaporizada", "Espuma de leche"],
        imagen: latteImg
    },
    {
        id: 6,
        nombre: "Mocha",
        descripcion: "Bebida dulce que combina espresso, chocolate caliente, leche vaporizada y espuma.",
        taza: "Taza grande",
        ingredientes: ["Espresso", "Chocolate caliente", "Leche vaporizada", "Espuma de leche"],
        imagen: mochaImg
    },
    {
        id: 7,
        nombre: "Cortado",
        descripcion: "Espresso cortado con una cantidad equivalente de leche vaporizada para reducir la acidez.",
        taza: "Taza pequeña o vaso tipo Gibraltar",
        ingredientes: ["Espresso", "Leche vaporizada"],
        imagen: cortadoImg
    },
    {
        id: 8,
        nombre: "Flat White",
        descripcion: "Bebida similar al latte pero con una mayor proporción de café y una textura de leche sumamente sedosa.",
        taza: "Taza de cerámica mediana",
        ingredientes: ["Espresso", "Leche vaporizada"],
        imagen: flatWhiteImg
    },
    {
        id: 9,
        nombre: "Macchiato",
        descripcion: "Un shot de espresso complementado únicamente con una sutil capa superior de espuma de leche.",
        taza: "Taza pequeña de espresso",
        ingredientes: ["Espresso", "Espuma de leche"],
        imagen: macchiatoImg
    },
    {
        id: 10,
        nombre: "Con Panna",
        descripcion: "Un espresso clásico servido con una deliciosa y suave capa de crema batida encima.",
        taza: "Taza pequeña de espresso",
        ingredientes: ["Espresso", "Crema"],
        imagen: conPannaImg
    },
    {
        id: 11,
        nombre: "Affogato",
        descripcion: "Un postre-café consistente en una bola de helado ahogada por un shot de espresso caliente.",
        taza: "Copa pequeña o taza de espresso amplia",
        ingredientes: ["Helado", "Espresso"],
        imagen: affogatoImg
    },
    {
        id: 12,
        nombre: "Irish Coffee",
        descripcion: "Cóctel que fusiona espresso, una medida de whisky irlandés y una capa flotante de crema.",
        taza: "Copa de vidrio templado con asa",
        ingredientes: ["Espresso", "Whisky", "Crema"],
        imagen: irishCoffeeImg
    }
];