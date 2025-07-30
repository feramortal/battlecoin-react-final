
import React, { useEffect, useState } from "react";
import "./index.css";

const raridades = [
  { nome: "Comum", cor: "#cccccc", limite: 0.1 },
  { nome: "Incomum", cor: "#aaffaa", limite: 0.3 },
  { nome: "Rara", cor: "#55aaff", limite: 0.6 },
  { nome: "Épica", cor: "#aa55ff", limite: 1 },
  { nome: "Lendária", cor: "#ffaa00", limite: 5 },
  { nome: "Mítica", cor: "#ff55aa", limite: 20 },
  { nome: "Antiga", cor: "#d4af37", limite: 50 },
  { nome: "Exótica", cor: "#00ffff", limite: 100 },
  { nome: "Divina", cor: "#ff0000", limite: 500 },
  { nome: "Única", cor: "#000", limite: Infinity }
];

const moedas = [
  { nome: "Moeda Histórica 1 (Império Persa)", valor: 59.1, pais: "Império Persa", epoca: "Século XX (fim)", imagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/29/coin-0.jpg/200px.png" },
  { nome: "Moeda Histórica 2 (Império Otomano)", valor: 235.05, pais: "Império Otomano", epoca: "Século XX (meados)", imagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/96/coin-1.jpg/200px.png" },
  { nome: "Moeda Histórica 3 (Império Persa)", valor: 137.59, pais: "Império Persa", epoca: "Século V", imagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/84/coin-2.jpg/200px.png" },
  { nome: "Moeda Histórica 4 (Egito Antigo)", valor: 86.43, pais: "Egito Antigo", epoca: "Século XIX", imagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/47/coin-3.jpg/200px.png" },
  { nome: "Moeda Histórica 5 (Reino Unido)", valor: 264.79, pais: "Reino Unido", epoca: "Século XX (meados)", imagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/21/coin-4.jpg/200px.png" },
  { nome: "Moeda Histórica 6 (Império Persa)", valor: 380.87, pais: "Império Persa", epoca: "Século III", imagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/40/coin-5.jpg/200px.png" },
  { nome: "Moeda Histórica 7 (Grécia Antiga)", valor: 105.56, pais: "Grécia Antiga", epoca: "Século XI", imagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/29/coin-6.jpg/200px.png" },
  { nome: "Moeda Histórica 8 (Império Romano)", valor: 431.56, pais: "Império Romano", epoca: "Século I a.C.", imagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/32/coin-7.jpg/200px.png" },
  { nome: "Moeda Histórica 9 (Império Asteca)", valor: 109.12, pais: "Império Asteca", epoca: "Século I a.C.", imagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/12/coin-8.jpg/200px.png" },
  { nome: "Moeda Histórica 10 (Império Otomano)", valor: 440.9, pais: "Império Otomano", epoca: "Século IX", imagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/60/coin-9.jpg/200px.png" },
  { nome: "Moeda Histórica 11 (Império Asteca)", valor: 65.19, pais: "Império Asteca", epoca: "Século XIV", imagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/42/coin-10.jpg/200px.png" },
  { nome: "Moeda Histórica 12 (Portugal)", valor: 477.24, pais: "Portugal", epoca: "Século IX", imagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/50/coin-11.jpg/200px.png" },
  { nome: "Moeda Histórica 13 (Grécia Antiga)", valor: 297.05, pais: "Grécia Antiga", epoca: "Século XVIII", imagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/45/coin-12.jpg/200px.png" },
  { nome: "Moeda Histórica 14 (Rússia Imperial)", valor: 482.38, pais: "Rússia Imperial", epoca: "Século IX", imagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/90/coin-13.jpg/200px.png" },
  { nome: "Moeda Histórica 15 (Alemanha)", valor: 256.41, pais: "Alemanha", epoca: "Século XIX", imagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/25/coin-14.jpg/200px.png" },
  { nome: "Moeda Histórica 16 (Alemanha)", valor: 191.3, pais: "Alemanha", epoca: "Século VI", imagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/66/coin-15.jpg/200px.png" },
  { nome: "Moeda Histórica 17 (Grécia Antiga)", valor: 440.28, pais: "Grécia Antiga", epoca: "Século I a.C.", imagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/31/coin-16.jpg/200px.png" },
  { nome: "Moeda Histórica 18 (Egito Antigo)", valor: 35.47, pais: "Egito Antigo", epoca: "Século XIII", imagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/59/coin-17.jpg/200px.png" },
  { nome: "Moeda Histórica 19 (Egito Antigo)", valor: 88.04, pais: "Egito Antigo", epoca: "Século V", imagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/46/coin-18.jpg/200px.png" },
  { nome: "Moeda Histórica 20 (México)", valor: 135.54, pais: "México", epoca: "Século XVI", imagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/48/coin-19.jpg/200px.png" },
  { nome: "Moeda Histórica 21 (Alemanha)", valor: 498.76, pais: "Alemanha", epoca: "Século III", imagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/60/coin-20.jpg/200px.png" },
  { nome: "Moeda Histórica 22 (Itália (Florença))", valor: 272.47, pais: "Itália (Florença)", epoca: "Século I a.C.", imagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/99/coin-21.jpg/200px.png" },
  { nome: "Moeda Histórica 23 (Reino Unido)", valor: 25.98, pais: "Reino Unido", epoca: "Século XV", imagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/72/coin-22.jpg/200px.png" },
  { nome: "Moeda Histórica 24 (Estados Unidos)", valor: 17.42, pais: "Estados Unidos", epoca: "Século XVI", imagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/56/coin-23.jpg/200px.png" },
  { nome: "Moeda Histórica 25 (Grécia Antiga)", valor: 26.0, pais: "Grécia Antiga", epoca: "Século VI", imagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/18/coin-24.jpg/200px.png" },
  { nome: "Moeda Histórica 26 (Império Bizantino)", valor: 304.43, pais: "Império Bizantino", epoca: "Século XV", imagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/38/coin-0.jpg/200px.png" },
  { nome: "Moeda Histórica 27 (Rússia Imperial)", valor: 68.97, pais: "Rússia Imperial", epoca: "Século XX (meados)", imagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/83/coin-1.jpg/200px.png" },
  { nome: "Moeda Histórica 28 (Egito Antigo)", valor: 64.2, pais: "Egito Antigo", epoca: "Século XV", imagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/67/coin-2.jpg/200px.png" },
  { nome: "Moeda Histórica 29 (China Imperial)", valor: 181.35, pais: "China Imperial", epoca: "Século IX", imagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/14/coin-3.jpg/200px.png" },
  { nome: "Moeda Histórica 30 (Alemanha)", valor: 371.38, pais: "Alemanha", epoca: "Século XVIII", imagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/75/coin-4.jpg/200px.png" },
  { nome: "Moeda Histórica 31 (México)", valor: 259.79, pais: "México", epoca: "Século XX (início)", imagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/78/coin-5.jpg/200px.png" },
  { nome: "Moeda Histórica 32 (Império Persa)", valor: 269.17, pais: "Império Persa", epoca: "Século VI", imagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/44/coin-6.jpg/200px.png" },
  { nome: "Moeda Histórica 33 (Império Otomano)", valor: 75.98, pais: "Império Otomano", epoca: "Século II", imagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/86/coin-7.jpg/200px.png" },
  { nome: "Moeda Histórica 34 (Império Otomano)", valor: 375.38, pais: "Império Otomano", epoca: "Século VI", imagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/34/coin-8.jpg/200px.png" },
  { nome: "Moeda Histórica 35 (Estados Unidos)", valor: 449.47, pais: "Estados Unidos", epoca: "Século IX", imagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/40/coin-9.jpg/200px.png" },
  { nome: "Moeda Histórica 36 (Alemanha)", valor: 214.26, pais: "Alemanha", epoca: "Século XVIII", imagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/90/coin-10.jpg/200px.png" },
  { nome: "Moeda Histórica 37 (México)", valor: 51.22, pais: "México", epoca: "Século I a.C.", imagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/63/coin-11.jpg/200px.png" },
  { nome: "Moeda Histórica 38 (Alemanha)", valor: 469.58, pais: "Alemanha", epoca: "Século XX (início)", imagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/27/coin-12.jpg/200px.png" },
  { nome: "Moeda Histórica 39 (Espanha)", valor: 364.57, pais: "Espanha", epoca: "Século II", imagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/70/coin-13.jpg/200px.png" },
  { nome: "Moeda Histórica 40 (Rússia Imperial)", valor: 346.06, pais: "Rússia Imperial", epoca: "Século XX (fim)", imagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/83/coin-14.jpg/200px.png" },
  { nome: "Moeda Histórica 41 (Império Inca)", valor: 290.1, pais: "Império Inca", epoca: "Século XIII", imagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/33/coin-15.jpg/200px.png" },
  { nome: "Moeda Histórica 42 (Espanha)", valor: 193.52, pais: "Espanha", epoca: "Século XX (meados)", imagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/83/coin-16.jpg/200px.png" },
  { nome: "Moeda Histórica 43 (Índia Mogol)", valor: 446.65, pais: "Índia Mogol", epoca: "Século IX", imagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/43/coin-17.jpg/200px.png" },
  { nome: "Moeda Histórica 44 (Estados Unidos)", valor: 147.31, pais: "Estados Unidos", epoca: "Século XIII", imagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/13/coin-18.jpg/200px.png" },
  { nome: "Moeda Histórica 45 (Itália (Florença))", valor: 187.04, pais: "Itália (Florença)", epoca: "Século XIII", imagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/28/coin-19.jpg/200px.png" },
  { nome: "Moeda Histórica 46 (Reino Unido)", valor: 33.49, pais: "Reino Unido", epoca: "Século III", imagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/61/coin-20.jpg/200px.png" },
  { nome: "Moeda Histórica 47 (Império Asteca)", valor: 443.32, pais: "Império Asteca", epoca: "Século XVIII", imagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/32/coin-21.jpg/200px.png" },
  { nome: "Moeda Histórica 48 (Portugal)", valor: 392.71, pais: "Portugal", epoca: "Século III", imagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/51/coin-22.jpg/200px.png" },
  { nome: "Moeda Histórica 49 (Estados Unidos)", valor: 422.35, pais: "Estados Unidos", epoca: "Século XIX", imagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/62/coin-23.jpg/200px.png" },
  { nome: "Moeda Histórica 50 (Egito Antigo)", valor: 99.54, pais: "Egito Antigo", epoca: "Século II", imagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/12/coin-24.jpg/200px.png" },
  { nome: "Moeda Histórica 51 (Império Asteca)", valor: 384.11, pais: "Império Asteca", epoca: "Século XVIII", imagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/33/coin-0.jpg/200px.png" },
  { nome: "Moeda Histórica 52 (Egito Antigo)", valor: 195.63, pais: "Egito Antigo", epoca: "Século XIV", imagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/21/coin-1.jpg/200px.png" },
  { nome: "Moeda Histórica 53 (China Imperial)", valor: 401.66, pais: "China Imperial", epoca: "Século XI", imagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/84/coin-2.jpg/200px.png" },
  { nome: "Moeda Histórica 54 (Império Bizantino)", valor: 23.95, pais: "Império Bizantino", epoca: "Século XIII", imagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/92/coin-3.jpg/200px.png" },
  { nome: "Moeda Histórica 55 (Índia Mogol)", valor: 313.42, pais: "Índia Mogol", epoca: "Século XVIII", imagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/61/coin-4.jpg/200px.png" },
  { nome: "Moeda Histórica 56 (Império Asteca)", valor: 72.68, pais: "Império Asteca", epoca: "Século XIV", imagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/57/coin-5.jpg/200px.png" },
  { nome: "Moeda Histórica 57 (Rússia Imperial)", valor: 50.6, pais: "Rússia Imperial", epoca: "Século XX (fim)", imagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/28/coin-6.jpg/200px.png" },
  { nome: "Moeda Histórica 58 (Brasil)", valor: 70.56, pais: "Brasil", epoca: "Século XVII", imagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/74/coin-7.jpg/200px.png" },
  { nome: "Moeda Histórica 59 (Egito Antigo)", valor: 380.31, pais: "Egito Antigo", epoca: "Século XVI", imagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/79/coin-8.jpg/200px.png" },
  { nome: "Moeda Histórica 60 (Reino Unido)", valor: 289.4, pais: "Reino Unido", epoca: "Século XI", imagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/66/coin-9.jpg/200px.png" },
  { nome: "Moeda Histórica 61 (Estados Unidos)", valor: 447.19, pais: "Estados Unidos", epoca: "Século XI", imagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/17/coin-10.jpg/200px.png" },
  { nome: "Moeda Histórica 62 (Império Asteca)", valor: 19.44, pais: "Império Asteca", epoca: "Século II", imagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/65/coin-11.jpg/200px.png" },
  { nome: "Moeda Histórica 63 (Índia Mogol)", valor: 487.23, pais: "Índia Mogol", epoca: "Século XX (meados)", imagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/25/coin-12.jpg/200px.png" },
  { nome: "Moeda Histórica 64 (Reino Unido)", valor: 177.1, pais: "Reino Unido", epoca: "Século XIV", imagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/69/coin-13.jpg/200px.png" },
  { nome: "Moeda Histórica 65 (Portugal)", valor: 224.39, pais: "Portugal", epoca: "Século III", imagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/86/coin-14.jpg/200px.png" },
  { nome: "Moeda Histórica 66 (Brasil)", valor: 447.68, pais: "Brasil", epoca: "Século V", imagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/81/coin-15.jpg/200px.png" },
  { nome: "Moeda Histórica 67 (Alemanha)", valor: 393.99, pais: "Alemanha", epoca: "Século XVIII", imagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/21/coin-16.jpg/200px.png" },
  { nome: "Moeda Histórica 68 (Egito Antigo)", valor: 395.46, pais: "Egito Antigo", epoca: "Século XX (início)", imagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/32/coin-17.jpg/200px.png" },
  { nome: "Moeda Histórica 69 (Portugal)", valor: 40.48, pais: "Portugal", epoca: "Século XIV", imagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/65/coin-18.jpg/200px.png" },
  { nome: "Moeda Histórica 70 (Egito Antigo)", valor: 385.49, pais: "Egito Antigo", epoca: "Século XX (fim)", imagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/14/coin-19.jpg/200px.png" },
  { nome: "Moeda Histórica 71 (Império Asteca)", valor: 218.79, pais: "Império Asteca", epoca: "Século XX (fim)", imagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/88/coin-20.jpg/200px.png" },
  { nome: "Moeda Histórica 72 (Império Inca)", valor: 30.14, pais: "Império Inca", epoca: "Século XX (início)", imagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/85/coin-21.jpg/200px.png" },
  { nome: "Moeda Histórica 73 (Estados Unidos)", valor: 263.59, pais: "Estados Unidos", epoca: "Século III", imagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/59/coin-22.jpg/200px.png" },
  { nome: "Moeda Histórica 74 (Egito Antigo)", valor: 378.41, pais: "Egito Antigo", epoca: "Século III", imagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/61/coin-23.jpg/200px.png" },
  { nome: "Moeda Histórica 75 (Império Inca)", valor: 478.34, pais: "Império Inca", epoca: "Século XIX", imagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/73/coin-24.jpg/200px.png" },
  { nome: "Moeda Histórica 76 (Império Romano)", valor: 240.42, pais: "Império Romano", epoca: "Século XVI", imagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/11/coin-0.jpg/200px.png" },
  { nome: "Moeda Histórica 77 (Império Persa)", valor: 159.11, pais: "Império Persa", epoca: "Século XIII", imagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/91/coin-1.jpg/200px.png" },
  { nome: "Moeda Histórica 78 (Império Otomano)", valor: 370.2, pais: "Império Otomano", epoca: "Século I a.C.", imagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/85/coin-2.jpg/200px.png" },
  { nome: "Moeda Histórica 79 (Índia Mogol)", valor: 122.85, pais: "Índia Mogol", epoca: "Século XVIII", imagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/80/coin-3.jpg/200px.png" },
  { nome: "Moeda Histórica 80 (Reino Unido)", valor: 457.22, pais: "Reino Unido", epoca: "Século XIII", imagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/52/coin-4.jpg/200px.png" },
  { nome: "Moeda Histórica 81 (Império Asteca)", valor: 18.26, pais: "Império Asteca", epoca: "Século XVIII", imagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/45/coin-5.jpg/200px.png" },
  { nome: "Moeda Histórica 82 (Império Asteca)", valor: 328.22, pais: "Império Asteca", epoca: "Século I a.C.", imagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/74/coin-6.jpg/200px.png" },
  { nome: "Moeda Histórica 83 (Portugal)", valor: 329.61, pais: "Portugal", epoca: "Século III", imagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/48/coin-7.jpg/200px.png" },
  { nome: "Moeda Histórica 84 (Estados Unidos)", valor: 359.43, pais: "Estados Unidos", epoca: "Século I a.C.", imagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/65/coin-8.jpg/200px.png" },
  { nome: "Moeda Histórica 85 (China Imperial)", valor: 200.24, pais: "China Imperial", epoca: "Século XX (meados)", imagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/24/coin-9.jpg/200px.png" },
  { nome: "Moeda Histórica 86 (Reino Unido)", valor: 344.96, pais: "Reino Unido", epoca: "Século XI", imagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/83/coin-10.jpg/200px.png" },
  { nome: "Moeda Histórica 87 (Império Romano)", valor: 193.69, pais: "Império Romano", epoca: "Século XVIII", imagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/77/coin-11.jpg/200px.png" },
  { nome: "Moeda Histórica 88 (Império Otomano)", valor: 58.06, pais: "Império Otomano", epoca: "Século XX (meados)", imagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/46/coin-12.jpg/200px.png" },
  { nome: "Moeda Histórica 89 (França)", valor: 475.26, pais: "França", epoca: "Século IX", imagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/91/coin-13.jpg/200px.png" },
  { nome: "Moeda Histórica 90 (Alemanha)", valor: 126.98, pais: "Alemanha", epoca: "Século XIV", imagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/39/coin-14.jpg/200px.png" },
  { nome: "Moeda Histórica 91 (Império Otomano)", valor: 294.61, pais: "Império Otomano", epoca: "Século III", imagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/54/coin-15.jpg/200px.png" },
  { nome: "Moeda Histórica 92 (Império Bizantino)", valor: 462.96, pais: "Império Bizantino", epoca: "Século XIX", imagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/69/coin-16.jpg/200px.png" },
  { nome: "Moeda Histórica 93 (Império Inca)", valor: 31.37, pais: "Império Inca", epoca: "Século XVI", imagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/71/coin-17.jpg/200px.png" },
  { nome: "Moeda Histórica 94 (Espanha)", valor: 172.89, pais: "Espanha", epoca: "Século XIX", imagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/15/coin-18.jpg/200px.png" },
  { nome: "Moeda Histórica 95 (Império Romano)", valor: 195.05, pais: "Império Romano", epoca: "Século XIV", imagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/15/coin-19.jpg/200px.png" },
  { nome: "Moeda Histórica 96 (Rússia Imperial)", valor: 166.67, pais: "Rússia Imperial", epoca: "Século XVII", imagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/36/coin-20.jpg/200px.png" },
  { nome: "Moeda Histórica 97 (Itália (Florença))", valor: 113.24, pais: "Itália (Florença)", epoca: "Século XIII", imagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/63/coin-21.jpg/200px.png" },
  { nome: "Moeda Histórica 98 (Egito Antigo)", valor: 498.16, pais: "Egito Antigo", epoca: "Século XV", imagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/59/coin-22.jpg/200px.png" },
  { nome: "Moeda Histórica 99 (Império Inca)", valor: 160.57, pais: "Império Inca", epoca: "Século IX", imagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/27/coin-23.jpg/200px.png" },
  { nome: "Moeda Histórica 100 (Portugal)", valor: 263.01, pais: "Portugal", epoca: "Século I a.C.", imagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/89/coin-24.jpg/200px.png" }
];

function classificarRaridade(valor) {
  return raridades.find(r => valor <= r.limite);
}


function App() {
  const [inventario, setInventario] = React.useState([]);
  const [saldo, setSaldo] = React.useState(0);
  const [mensagem, setMensagem] = React.useState("");

  const adicionarAoInventario = (moeda) => {
    setInventario([...inventario, moeda]);
  };

  const venderMoeda = (index) => {
    const moeda = inventario[index];
    const novoInventario = [...inventario];
    novoInventario.splice(index, 1);
    setInventario(novoInventario);
    setSaldo(saldo + Math.floor(moeda.valor / 10));
    setMensagem(`Você vendeu ${moeda.nome} por ${Math.floor(moeda.valor / 10)} coins.`);
  };

  const batalharMoedas = (m1, m2) => {
    if (!m1 || !m2) return;
    const vencedor = m1.valor >= m2.valor ? m1 : m2;
    setMensagem(`A moeda vencedora é: ${vencedor.nome}`);
  };

  return (
    <div className="app-container">
      <h1>BattleCoin Histórico</h1>
      <button onClick={puxarMoeda}>Puxar Moeda</button>

      {result && (
        <div className="moeda-destaque" style={ borderColor: classificarRaridade(result.valor).cor }>
          <img src={result.imagem} alt={result.nome} />
          <h2>{result.nome}</h2>
          <p>País: {result.pais}</p>
          <p>Época: {result.epoca}</p>
          <p>Valor: ${result.valor.toFixed(2)}</p>
          <span className="raridade" style={ backgroundColor: classificarRaridade(result.valor).cor }>
            {classificarRaridade(result.valor).nome}
          </span>
        </div>
      )}

      <h2>Sua Coleção</h2>
      <div className="colecao">
        {inventory.map((moeda, index) => {
          const raridade = classificarRaridade(moeda.valor);
          return (
            <div key={index} className="moeda" style={ borderColor: raridade.cor }>
              <img src={moeda.imagem} alt={moeda.nome} />
              <div className="info">
                <strong>{moeda.nome}</strong>
                <p>{moeda.pais}</p>
                <p>{moeda.epoca}</p>
                <p>${moeda.valor.toFixed(2)}</p>
                <span style={ backgroundColor: raridade.cor }>{raridade.nome}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
