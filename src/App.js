
import React, { useState } from "react";
import "./App.css";

function App() {
  const [inventario, setInventario] = useState([]);
  const [saldo, setSaldo] = useState(0);
  const [mensagem, setMensagem] = useState("");
  const [moedaSelecionada1, setMoedaSelecionada1] = useState(null);
  const [moedaSelecionada2, setMoedaSelecionada2] = useState(null);

  const moedasDisponiveis = [
    { nome: "Dracma Grega", valor: 500, imagem: "https://en.ucoin.net/coin_photos/GR/32/32152.jpg" },
    { nome: "Denário Romano", valor: 800, imagem: "https://en.ucoin.net/coin_photos/IT/65/65001.jpg" },
    { nome: "Real Português Antigo", valor: 1000, imagem: "https://en.ucoin.net/coin_photos/PT/25/25001.jpg" },
    { nome: "Libra Esterlina 1800", valor: 1200, imagem: "https://en.ucoin.net/coin_photos/GB/180/180001.jpg" }
  ];

  const adicionarAoInventario = (moeda) => {
    setInventario([...inventario, moeda]);
  };

  const venderMoeda = (index) => {
    const moeda = inventario[index];
    const novoInventario = [...inventario];
    novoInventario.splice(index, 1);
    setInventario(novoInventario);
    const ganho = Math.floor(moeda.valor / 10);
    setSaldo(saldo + ganho);
    setMensagem(`Você vendeu ${moeda.nome} por ${ganho} coins.`);
  };

  const batalharMoedas = () => {
    if (!moedaSelecionada1 || !moedaSelecionada2) {
      setMensagem("Selecione duas moedas para batalhar.");
      return;
    }
    const vencedor =
      moedaSelecionada1.valor >= moedaSelecionada2.valor
        ? moedaSelecionada1
        : moedaSelecionada2;
    setMensagem(`A moeda vencedora é: ${vencedor.nome}`);
  };

  return (
    <div className="App">
      <h1>BattleCoin Histórico</h1>
      <p>Saldo: {saldo} coins</p>

      <h2>Moedas disponíveis</h2>
      <div className="moedas">
        {moedasDisponiveis.map((moeda, index) => (
          <div key={index} className="moeda">
            <img src={moeda.imagem} alt={moeda.nome} height="100" />
            <p>{moeda.nome}</p>
            <p>Valor: {moeda.valor}</p>
            <button onClick={() => adicionarAoInventario(moeda)}>
              Adquirir
            </button>
          </div>
        ))}
      </div>

      <h2>Inventário</h2>
      <div className="moedas">
        {inventario.map((moeda, index) => (
          <div key={index} className="moeda">
            <img src={moeda.imagem} alt={moeda.nome} height="100" />
            <p>{moeda.nome}</p>
            <p>Valor: {moeda.valor}</p>
            <button onClick={() => setMoedaSelecionada1(moeda)}>Batalha 1</button>
            <button onClick={() => setMoedaSelecionada2(moeda)}>Batalha 2</button>
            <button onClick={() => venderMoeda(index)}>Vender</button>
          </div>
        ))}
      </div>

      <button onClick={batalharMoedas}>Iniciar Batalha</button>
      <p>{mensagem}</p>
    </div>
  );
}

export default App;
