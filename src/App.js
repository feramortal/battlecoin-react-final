
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
  { nome: "Dólar Americano", valor: 1.0, imagem: "https://upload.wikimedia.org/wikipedia/commons/4/41/US_one_dollar_bill%2C_obverse.jpg" },
  { nome: "Euro", valor: 1.2, imagem: "https://upload.wikimedia.org/wikipedia/commons/6/65/Euro_banknotes_2002.jpg" },
  { nome: "Iene Japonês", valor: 0.007, imagem: "https://upload.wikimedia.org/wikipedia/commons/7/79/1000_yen_banknote_2004.jpg" },
  { nome: "Real Brasileiro", valor: 0.20, imagem: "https://upload.wikimedia.org/wikipedia/commons/f/fc/200_reais.jpg" },
  { nome: "Libra Esterlina", valor: 1.3, imagem: "https://upload.wikimedia.org/wikipedia/commons/0/0b/New_20_Pound_note_%282020%29.jpg" }
];

function classificarRaridade(valor) {
  return raridades.find(r => valor <= r.limite);
}

function App() {
  const [result, setResult] = useState(null);
  const [inventory, setInventory] = useState([]);

  useEffect(() => {
    const saved = localStorage.getItem("battlecoin-inventory");
    if (saved) setInventory(JSON.parse(saved));
  }, []);

  useEffect(() => {
    localStorage.setItem("battlecoin-inventory", JSON.stringify(inventory));
  }, [inventory]);

  const puxarMoeda = () => {
    const moeda = moedas[Math.floor(Math.random() * moedas.length)];
    setResult(moeda);
    setInventory([...inventory, moeda]);
  };

  return (
    <div className="app-container">
      <h1>BattleCoin</h1>
      <button onClick={puxarMoeda}>Puxar Moeda</button>

      {result && (
        <div className="moeda-destaque" style={{ borderColor: classificarRaridade(result.valor).cor }}>
          <img src={result.imagem} alt={result.nome} />
          <h2>{result.nome}</h2>
          <p>Valor: ${result.valor.toFixed(2)}</p>
          <span className="raridade" style={{ backgroundColor: classificarRaridade(result.valor).cor }}>
            {classificarRaridade(result.valor).nome}
          </span>
        </div>
      )}

      <h2>Sua Coleção</h2>
      <div className="colecao">
        {inventory.map((moeda, index) => {
          const raridade = classificarRaridade(moeda.valor);
          return (
            <div key={index} className="moeda" style={{ borderColor: raridade.cor }}>
              <img src={moeda.imagem} alt={moeda.nome} />
              <div className="info">
                <strong>{moeda.nome}</strong>
                <p>${moeda.valor.toFixed(2)}</p>
                <span style={{ backgroundColor: raridade.cor }}>{raridade.nome}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
