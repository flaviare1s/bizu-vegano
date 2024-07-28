export const Farmacias = () => {
  const itens = [
    { nome: "Vegan Pharma", link: "https://instagram.com/veganpharma?igshid=MzRlODBiNWFlZA==" }
  ]

  return (
    <section className="flex flex-col m-auto bg-branco-quente text-verde-escuro w-full sm:max-w-[450px] md:max-w[600px] lg:max-w-[800px] rounded p-5">
      <h2 className="text-2xl font-bold p-2 text-center">Farmácias</h2>
      <ul>
        {itens.map((item, index) => (
          <li key={index}>
            <a href={item.link} target="_blank" rel="noopener noreferrer">{item.nome}</a>
          </li>
        ))}
      </ul>
    </section>
  )
}
