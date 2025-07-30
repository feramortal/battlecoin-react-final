import React, { useEffect, useState } from "react";


const rarities = {
  comum: "#B0B0B0",
  incomum: "#1E90FF",
  rara: "#4169E1",
  epica: "#8A2BE2",
  lendaria: "#FFD700",
  mitica: "#FF69B4",
  antiga: "#CD7F32",
  divina: "#00FFFF",
  suprema: "#FF4500",
  unica: "#FFFFFF"
};



const moedas = [
  { nome: "Dólar Americano", valor: 1.0, imagem: "https://upload.wikimedia.org/wikipedia/commons/4/41/US_one_dollar_bill%2C_obverse.jpg" },
  { nome: "Euro", valor: 1.2, imagem: "https://upload.wikimedia.org/wikipedia/commons/6/65/Euro_banknotes_2002.jpg" },
  { nome: "Iene Japonês", valor: 0.007, imagem: "https://upload.wikimedia.org/wikipedia/commons/7/79/1000_yen_banknote_2004.jpg" },
  { nome: "Real Brasileiro", valor: 0.20, imagem: "https://upload.wikimedia.org/wikipedia/commons/f/fc/200_reais.jpg" },
  { nome: "Libra Esterlina", valor: 1.3, imagem: "https://upload.wikimedia.org/wikipedia/commons/0/0b/New_20_Pound_note_%282020%29.jpg" }
];

function App() {
  const [result, setResult] = useState(null);
  const [inventory, setInventory] = useState([]);

  // Carregar inventário salvo
  useEffect(() => {
    const saved = localStorage.getItem("battlecoin-inventory");
    if (saved) {
      setInventory(JSON.parse(saved));
    }
  }, []);

  const rollMoeda = () => {
    const moeda = moedas[Math.floor(Math.random() * moedas.length)];
    setResult(moeda);

    const novoInventario = [...inventory, moeda];
    setInventory(novoInventario);
    localStorage.setItem("battlecoin-inventory", JSON.stringify(novoInventario));
  };

  return (
    <div className="p-8 min-h-screen bg-gradient-to-br from-yellow-100 to-yellow-300">
      <h1 className="text-3xl font-bold text-yellow-800 mb-6">BattleCoin (sem login)</h1>

      <button
        onClick={rollMoeda}
        className="bg-green-600 text-white px-6 py-2 rounded-xl hover:bg-green-700"
      >
        🎲 Roletar Moeda
      </button>

      {result && (
        <div className="mt-6 p-4 bg-white rounded-xl shadow-lg w-fit">
          <h3 className="text-lg font-bold">Você conseguiu:</h3>
          <p className="text-xl">{result.nome} - ${result.valor.toFixed(2)}</p>
          <img src={result.imagem} alt={result.nome} className="w-60 mt-2" />
        </div>
      )}

      {inventory.length > 0 && (
        <div className="mt-10">
          <h2 className="text-2xl font-semibold text-yellow-800 mb-4">Seu Inventário</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {inventory.map((m, index) => (
              <div key={index} className="p-4 bg-white rounded-xl shadow-md">
                <p className="font-semibold">{m.nome} - ${m.valor.toFixed(2)}</p>
                <img src={m.imagem} alt={m.nome} className="w-full mt-2 rounded" />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
