import React from "react";
const coresRaridade = {
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
          ><p className="text-sm text-gray-600">${moeda.valor.toFixed(2)}</p>
<p className={`text-xs ${coresRaridade[moeda.raridade]}`}>
  {moeda.raridade}
</p>
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
