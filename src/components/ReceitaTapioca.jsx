export const ReceitaTapioca = () => {
  return (
    <section className="flex flex-col m-auto bg-white text-gray-800 w-full sm:max-w-[450px] md:max-w-[600px] lg:max-w-[800px] rounded-2xl p-8 shadow-lg">
      <h2 className="text-2xl md:text-3xl font-bold p-2 sm:text-center text-verde-escuro">Receitinha rápida e prática para substituir o pão</h2>
      <h3 className="text-xl font-semibold mt-4 text-verde-oliva">Tapioca de Cuscuz</h3>
      <h4 className="text-xl font-semibold mt-6 mb-3 text-verde-escuro">Ingredientes:</h4>
      <ul className="list-disc list-inside mt-2 space-y-1 text-gray-700">
        <li>1 xícara (chá) de farinha de milho flocada</li>
        <li>1/2 xícara (chá) de água</li>
        <li>1 xícara (chá) de goma de tapioca</li>
        <li>Sal, pimenta do reino e ervas secas a gosto</li>
      </ul>
      <h4 className="text-xl font-semibold mt-6 mb-3 text-verde-escuro">Preparo:</h4>
      <p className="mt-2 text-gray-700 leading-relaxed">Misture a farinha de milho flocada com o sal e a água e deixe hidratando por 10 minutos.</p>
      <p className="mt-2 text-gray-700 leading-relaxed">Adicione a goma de tapioca e os temperos e misture bem.</p>
      <p className="mt-2 text-gray-700 leading-relaxed">Unte uma frigideira com azeite e disponha a massa. Deixe durante 4 minutos de cada lado.</p>
      <h4 className="text-xl font-semibold mt-6 mb-3 text-verde-escuro">Dicas:</h4>
      <p className="mt-2 text-gray-700 leading-relaxed">
        Eu gosto de comer com legumes assados com azeite no forno (receita abaixo) e também com molho de tomate, azeitonas,
        alcaparras e queijo vegetal (tipo uma pizza).
      </p>
      <p className="mt-2 text-gray-700 leading-relaxed">Também gosto de fazer ela bem crocante e comer com pastinhas de castanha e legumes.</p>
      <h4 className="text-xl font-semibold mt-6 mb-3 text-verde-escuro">Legumes assados:</h4>
      <p className="mt-2 text-gray-700 leading-relaxed">
        É só cortar os legumes que tiver na geladeira (cenoura, abobrinha, batata, berinjela, tomate), temperar com sal,
        pimenta, ervas secas e azeite e levar ao forno pré-aquecido até ficarem macios.
      </p>
      <p className="mt-2 text-gray-700 leading-relaxed font-semibold">Simples, rápido e delicioso!</p>
    </section>
  )
}
