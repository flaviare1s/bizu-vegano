export const Kombuchas = () => {
  const kombuchas = [
    { nome: "Atma Kombucha", link: "https://instagram.com/atmakombucha?igshid=MzRlODBiNWFlZA==" },
    { nome: "Hugo Teophilo", link: "https://instagram.com/hugotheophilo?igshid=MzRlODBiNWFlZA==" }
  ]

  return (
    <section className="flex flex-col m-auto bg-branco-quente text-verde-escuro w-full sm:max-w-[450px] md:max-w[600px] lg:max-w-[800px] rounded p-5">
      <h2 className="text-2xl font-bold p-2 text-center">Kombuchas</h2>
      <ul>
        {kombuchas.map((kombucha, index) => (
          <li key={index}>
            <a href={kombucha.link} target="_blank" rel="noopener noreferrer">{kombucha.nome}</a>
          </li>
        ))}
      </ul>
    </section>
  )
}
