import { Link } from "react-router-dom"

export const DicaManteiga = () => {
  return (
    <section className="flex flex-col m-auto bg-branco-quente text-verde-escuro w-full sm:max-w-[450px] md:max-w[600px] lg:max-w-[800px] rounded p-5">
      <h2 className="text-2xl font-bold p-2 text-center">Quero veganizar, mas o que eu vou passar no pão??</h2>
      <p className="my-2">
        Essa é uma dificuldade que ocorre com algumas pessoas que se tornam veganas e que estão acostumadas a ingerir manteiga e outros lácteos. Vou dar algumas dicas que me ajudam e que eu uso bastante em casa.
      </p>
      <p className="mb-2">
        Uma boa pedida é fazer o pão no forno só com azeite mesmo. Também gosto de incrementar com ervas finas ou outras ervas, que são encontradas para vender facilmente em qualquer supermercado.
      </p>
      <p className="mb-2">
        Nos supermercados também encontramos certa variedade de homus, pastas, patês e antepastos sem ingredientes de origem animal. 
      </p>
      <p className="mb-2">
      <Link to="/emporios" className="underline font-semibold">Clique aqui</Link> para ser direcionado à seção de Antepastos e Empórios.
      </p>
      <p className="mb-2">
        Algumas manteigas boas e acessíveis são a da <a className="underline font-semibold" href="https://instagram.com/jayna_depalma?igshid=MzRlODBiNWFlZA==" target="_blank">Jayna</a>, que sempre encontro no supermercado Pinheiro, e a QualiCoco, que vejo em quase todos os supermercados. Gosto muito da consistência da Jayna.
      </p>
    </section>
  )
}
