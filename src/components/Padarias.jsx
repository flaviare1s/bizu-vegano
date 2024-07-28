export const Padarias = () => {
  const itens = [
    { nome: "Livremente", link: "https://instagram.com/viva.livremente?igshid=MzRlODBiNWFlZA==" },
    { nome: "Pâine", link: "https://instagram.com/paineartesanal?igshid=MzRlODBiNWFlZA==" },
    { nome: "Grão D'Alino", link: "https://instagram.com/graodalinoartesanal?igshid=MzRlODBiNWFlZA==" },
    { nome: "Pequena Padaria Caseira", link: "https://instagram.com/pequenapadariacaseira?igshid=YTQwZjQ0NmI0OA==" }
  ]

  return (
    <section className="flex flex-col m-auto bg-branco-quente text-verde-escuro w-full sm:max-w-[450px] md:max-w[600px] lg:max-w-[800px] rounded p-5">
      <h2 className="text-2xl font-bold p-2 text-center">Padarias</h2>
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
