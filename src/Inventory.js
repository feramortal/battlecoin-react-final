import React from "react";

function Inventory({ inventory }) {
  if (!inventory || inventory.length === 0) {
    return <p className="mt-8 text-yellow-700">Você ainda não possui moedas no inventário.</p>;
  }

  return (
    <div className="mt-10">
      <h2 className="text-xl font-bold text-yellow-800 mb-4">🪙 Inventário de Moedas</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {inventory.map((moeda, index) => (
          <div
            key={index}
            className="bg-white p-4 rounded-xl shadow-md hover:shadow-xl transition-all"
          >
            <img src={moeda.imagem} alt={moeda.nome} className="w-full h-32 object-cover rounded-md" />
            <p className="mt-2 font-semibold">{moeda.nome}</p>
            <p className="text-sm text-gray-600">${moeda.valor.toFixed(2)}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Inventory;
