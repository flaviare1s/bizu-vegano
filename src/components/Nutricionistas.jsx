export const Nutricionistas = () => {
  const nutricionistas = [
    { nome: "Bruno Andrade", link: "https://instagram.com/cozinhadaluz?igshid=MzRlODBiNWFlZA==" },
    { nome: "Laura Braga", link: "https://instagram.com/lauranutrivegana?igshid=MzRlODBiNWFlZA==" },
    { nome: "Sara Ortins", link: "https://instagram.com/nutricionista_vegana?igshid=MzRlODBiNWFlZA==" },
    { nome: "Lucas Galinari", link: "https://instagram.com/lucasnutriveg?igshid=YTQwZjQ0NmI0OA==" },
    { nome: "Natália Coelho", link: "https://instagram.com/natcoelho.nutri?igshid=YmMyMTA2M2Y=" }
  ]

  return (
    <section className="flex flex-col m-auto bg-branco-quente text-verde-escuro w-full sm:max-w-[450px] md:max-w[600px] lg:max-w-[800px] rounded p-5">
      <h2 className="text-2xl font-bold p-2 text-center">Nutricionistas</h2>
      <ul>
        {nutricionistas.map((nutricionista, index) => (
          <li key={index}>
            <a href={nutricionista.link} target="_blank" rel="noopener noreferrer">{nutricionista.nome}</a>
          </li>
        ))}
      </ul>
    </section>
  )
}
