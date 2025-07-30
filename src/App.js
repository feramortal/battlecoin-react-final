import React, { useEffect, useState } from "react";

const moedas = [
 const moedas = [
  { nome: "Dólar Americano", valor: 1.0, imagem: "...", raridade: "Comum" },
  { nome: "Euro", valor: 1.2, imagem: "...", raridade: "Comum" },
  { nome: "Real Brasileiro", valor: 0.20, imagem: "...", raridade: "Comum" },
  { nome: "Franco Suíço", valor: 1.1, imagem: "...", raridade: "Incomum" },
  { nome: "Rupia Indiana", valor: 0.012, imagem: "...", raridade: "Incomum" },
  { nome: "Dólar Canadense Comemorativo", valor: 2.5, imagem: "...", raridade: "Rara" },
  { nome: "Bitcoin Física", valor: 30000, imagem: "...", raridade: "Muito Rara" },
  { nome: "Moeda Olímpica Brasil", valor: 10.0, imagem: "...", raridade: "Épica" },
  { nome: "Dracma Grego", valor: 1000.0, imagem: "...", raridade: "Antiga" },
  { nome: "Denário Romano", valor: 1200.0, imagem: "...", raridade: "Antiga" },
  { nome: "Shekel de Prata Antigo", valor: 900.0, imagem: "...", raridade: "Sagrada" },
  { nome: "Moeda com erro de cunhagem", valor: 800.0, imagem: "...", raridade: "Mítica" },
  { nome: "Moeda Única NFT", valor: 1000000, imagem: "...", raridade: "Única" }
];


function App() {const coresRaridade = {
  "Comum": "text-gray-700",
  "Incomum": "text-green-700",
  "Rara": "text-blue-700",
  "Muito Rara": "text-purple-700",
  "Épica": "text-pink-700",
  "Lendária": "text-yellow-600",
  "Mítica": "text-indigo-800",
  "Antiga": "text-amber-800",
  "Sagrada": "text-red-700",
  "Única": "text-black font-bold"
};

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
