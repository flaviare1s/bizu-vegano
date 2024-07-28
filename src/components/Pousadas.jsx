export const Pousadas = () => {
  const pousadas = [
    { nome: "Pousada Itacupa", link: "https://www.instagram.com/itacupa_vegan_center?igsh=ZTBxNDd2Y2h3bGR3" },
    { nome: "Hotel Jardim do Vento", link: "https://www.instagram.com/jardimdovento?igsh=MXQ4ZDdxODY3cXlyaA==" },
    { nome: "Casaveg", link: "https://www.instagram.com/casaveg.eco?igsh=MTZ4NW55ZHMwN21kdg==" },
    { nome: "Eco Aldeia Flecha da Mata", link: "https://www.instagram.com/flechadamata/" },
    { nome: "Sítio do Vale da Biodiversidade", link: "https://instagram.com/valedabiodiversidade?igshid=YTQwZjQ0NmI0OA==" },
    { nome: "Benzida", link: "https://www.instagram.com/benzida_?igsh=MXg3Z2llYm45bDN2Zw==" },
    { nome: "Mezza Luna", link: "https://www.instagram.com/mezzaluna_canoa?igsh=bnY2bmFvd2VzZ2R2" },
    { nome: "All Massas", link: "https://www.instagram.com/allmassas?igsh=dXZrcDA4eDIyM2hy" },
    { nome: "Korea Station Brasil", link: "https://www.instagram.com/korea.station.br?igsh=dmtxZHI3ZjdtajRy" }
  ]

  return (
    <section className="flex flex-col m-auto bg-branco-quente text-verde-escuro w-full sm:max-w-[450px] md:max-w[600px] lg:max-w-[800px] rounded p-5">
      <h2 className="text-2xl font-bold p-2 text-center">Pousadas & Opções Veganas em Outros Municípios Cearenses</h2>
      <ul>
        {pousadas.map((pousada, index) => (
          <li key={index}>
            <a href={pousada.link} target="_blank" rel="noopener noreferrer">{pousada.nome}</a>
          </li>
        ))}
      </ul>
    </section>
  )
}
