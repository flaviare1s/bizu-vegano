export const ProdutosNaturais = () => {
  const itens = [
    { nome: "Phas", link: "https://instagram.com/phasprodutosnaturais?igshid=MzRlODBiNWFlZA==" },
    { nome: "Quitandinha", link: "https://instagram.com/quitandinha.artesanal?igshid=YTQwZjQ0NmI0OA==" },
    { nome: "Divina Terra", link: "https://instagram.com/divinaterrafortaleza?igshid=MzRlODBiNWFlZA==" },
    { nome: "Armazém Fit Store", link: "https://instagram.com/armazemfitstore.fortaleza?igshid=YTQwZjQ0NmI0OA==" },
    { nome: "Mundo Verde", link: "https://instagram.com/mundoverdefortaleza?igshid=MzRlODBiNWFlZA==" },
    { nome: "De Bem Com a Vida", link: "https://instagram.com/lojadebemcomavida?igshid=YTQwZjQ0NmI0OA==" },
    { nome: "Bienutrir", link: "https://instagram.com/bienutrirdelivery?igshid=YTQwZjQ0NmI0OA==" },
    { nome: "Grão Santo", link: "https://instagram.com/graosantoprodutosnaturais?igshid=YTQwZjQ0NmI0OA==" },
    { nome: "Loja Semear", link: "https://instagram.com/lojasemear?igshid=YTQwZjQ0NmI0OA==" },
    { nome: "La Granel", link: "https://instagram.com/lojalagranel?igshid=YTQwZjQ0NmI0OA==" },
    { nome: "Seleto a Granel", link: "https://instagram.com/seletoagraneloficial?igshid=YTQwZjQ0NmI0OA==" },
    { nome: "Sementes Grãos", link: "https://instagram.com/sementesgraos?igshid=YTQwZjQ0NmI0OA==" },
    { nome: "Vivendo Bem Mais", link: "https://instagram.com/vivendobemais?igshid=YTQwZjQ0NmI0OA==" },
    { nome: "Sellene", link: "https://instagram.com/sellenemegadiet?igshid=YTQwZjQ0NmI0OA==" },
    { nome: "Natulandia", link: "https://www.instagram.com/natulandiaoficial?igshid=YTQwZjQ0NmI0OA==" },
    { nome: "Naturebas Fit", link: "https://www.instagram.com/naturebasfitfortaleza?igsh=bHU2MGdvZmQxcnpz" },
    { nome: "Bio Mundo Shopping Benfica", link: "https://instagram.com/biomundoshoppingbenfica?igshid=YTQwZjQ0NmI0OA==" },
    { nome: "Emporium", link: "https://www.instagram.com/emporium.produtos?igsh=MmxmeXRsMmRsZzFn" },
    { nome: "Multigrãos", link: "https://www.instagram.com/multigraos23?igsh=MTQ1ZXBpOHdubjMxMw==" }
  ]

  return (
    <section className="flex flex-col m-auto bg-branco-quente text-verde-escuro w-full sm:max-w-[450px] md:max-w[600px] lg:max-w-[800px] rounded p-5">
      <h2 className="text-2xl font-bold p-2 text-center">Produtos Naturais</h2>
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
