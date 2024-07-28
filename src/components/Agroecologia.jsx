export const Agroecologia = () => {
  
  const itens = [
    { nome: "Feira Agroecológica do Benfica", link: "https://instagram.com/feiragroecologicabenfica?igshid=MzRlODBiNWFlZA==" },
    { nome: "Rede EcoCeará", link: "https://instagram.com/redeecoceara?igshid=MzRlODBiNWFlZA==" },
    { nome: "Fundação Cepema", link: "https://instagram.com/cepemafundacao?igshid=MzRlODBiNWFlZA==" },
    { nome: "Feira Caroá", link: "https://instagram.com/feiracaroa?igshid=MzRlODBiNWFlZA==" },
    { nome: "Muda Meu Mundo", link: "https://instagram.com/mudameumundo?igshid=YmMyMTA2M2Y=" },
    { nome: "Portal do Orgânico", link: "https://instagram.com/portaldoorganico?igshid=YmMyMTA2M2Y=" },
    { nome: "Origem Orgânicos", link: "https://www.instagram.com/origem.mercado?igsh=MXI4dnJucXowc3lneQ==" },
    { nome: "La Feira Orgânica", link: "https://instagram.com/lafeiraorganica?igshid=YmMyMTA2M2Y=" },
    { nome: "Ecobox", link: "https://instagram.com/ecoboxce?igshid=YmMyMTA2M2Y=" },
    { nome: "Eco Sítio Juazeiro", link: "https://instagram.com/ecositiojuazeiro?igshid=YmMyMTA2M2Y=" },
    { nome: "Nagaura Orgânicos", link: "https://instagram.com/nagauraorganicos?igshid=YmMyMTA2M2Y=" },
    { nome: "Sítio Tanques", link: "https://instagram.com/sitiotanques?igshid=YmMyMTA2M2Y=" },
    { nome: "Sítio Pachamama", link: "https://instagram.com/sitio_pachamama?igshid=YmMyMTA2M2Y=" },
    { nome: "Centro Frei Humberto", link: "https://instagram.com/centrofreihumberto?igshid=YmMyMTA2M2Y=" },
    { nome: "Vale da Biodiversidade", link: "https://instagram.com/valedabiodiversidade?igshid=YTQwZjQ0NmI0OA==" },
    { nome: "Cooperativa Capistrano", link: "https://instagram.com/cooperativa.capistrano?igshid=YTQwZjQ0NmI0OA==" },
    { nome: "Cetra", link: "https://instagram.com/cetraceara?igshid=YTQwZjQ0NmI0OA==" },
    { nome: "Centinho do Orgânico", link: "https://instagram.com/cantinho.organico.fortaleza?igshid=YTQwZjQ0NmI0OA==" },
    { nome: "Adao Alimentos Orgânicos", link: "https://instagram.com/adaoorganicos?igshid=YTQwZjQ0NmI0OA==" }
  ]

  return (
    <section className="flex flex-col m-auto bg-branco-quente text-verde-escuro w-full sm:max-w-[450px] md:max-w[600px] lg:max-w-[800px] rounded p-5">
      <h2 className="text-2xl font-bold p-2 text-center">Orgânicos & Agroecologia</h2>
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
