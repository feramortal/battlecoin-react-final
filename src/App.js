import React from "react";

const moedas = [
  { nome: "Dólar Americano", valor: 1.0, imagem: "https://upload.wikimedia.org/wikipedia/commons/4/41/US_one_dollar_bill%2C_obverse.jpg" },
  { nome: "Euro", valor: 1.2, imagem: "https://upload.wikimedia.org/wikipedia/commons/6/65/Euro_banknotes_2002.jpg" },
  { nome: "Iene Japonês", valor: 0.007, imagem: "https://upload.wikimedia.org/wikipedia/commons/7/79/1000_yen_banknote_2004.jpg" },
  { nome: "Real Brasileiro", valor: 0.20, imagem: "https://upload.wikimedia.org/wikipedia/commons/f/fc/200_reais.jpg" },
  { nome: "Libra Esterlina", valor: 1.3, imagem: "https://upload.wikimedia.org/wikipedia/commons/0/0b/New_20_Pound_note_%282020%29.jpg" }
];

function App() {
  const [result, setResult] = React.useState(null);

  const rollMoeda = () => {
    const moeda = moedas[Math.floor(Math.random() * moedas.length)];
    setResult(moeda);
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
    </div>
  );
}

export default App;
