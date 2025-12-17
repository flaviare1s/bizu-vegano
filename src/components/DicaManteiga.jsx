import { Link } from "react-router-dom"

export const DicaManteiga = () => {
  return (
    <section className="flex flex-col m-auto bg-white text-gray-800 w-full sm:max-w-[450px] md:max-w-[600px] lg:max-w-[800px] rounded-2xl p-8 shadow-lg">
      <h2 className="text-2xl md:text-3xl font-bold p-2 sm:text-center text-verde-escuro">Quero veganizar, mas o que eu vou passar no pão??</h2>
      <p className="my-4 text-gray-700 leading-relaxed">
        Essa é uma dificuldade que ocorre com algumas pessoas que se tornam veganas e que estão acostumadas a ingerir manteiga e outros lácteos. Vou dar algumas dicas que me ajudam e que eu uso bastante em casa.
      </p>
      <p className="mb-4 text-gray-700 leading-relaxed">
        Uma boa pedida é fazer o pão no forno só com azeite mesmo. Também gosto de incrementar com ervas finas ou outras ervas, que são encontradas para vender facilmente em qualquer supermercado.
      </p>
      <p className="mb-4 text-gray-700 leading-relaxed">
        Nos supermercados também encontramos certa variedade de homus, pastas, patês e antepastos sem ingredientes de origem animal.
      </p>
      <p className="mb-4 text-gray-700 leading-relaxed">
        <Link to="/emporios" className="text-verde-oliva hover:text-verde-escuro underline font-semibold">Clique aqui</Link> para ser direcionado à seção de Antepastos e Empórios.
      </p>
      <p className="mb-4 text-gray-700 leading-relaxed">
        Algumas manteigas boas e acessíveis são a da <a className="text-verde-oliva hover:text-verde-escuro underline font-semibold" href="https://instagram.com/jayna_depalma?igshid=MzRlODBiNWFlZA==" target="_blank" rel="noopener noreferrer">Jayna</a>, que sempre encontro no supermercado Pinheiro, e a QualiCoco, que vejo em quase todos os supermercados. Gosto muito da consistência da Jayna.
      </p>
    </section>
  )
}
