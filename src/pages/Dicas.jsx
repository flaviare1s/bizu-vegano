import { Agroecologia } from "../components/Agroecologia"
import { Pousadas } from "../components/Pousadas"
import { Kombuchas } from "../components/Kombuchas"
import { Nutricionistas } from "../components/Nutricionistas"
import { Feirinhas } from "../components/Feirinhas"
import { Receitas } from "../components/Receitas"
import { AlimentacaoViva } from "../components/AlimentacaoViva"
import { Padarias } from "../components/Padarias"
import { Farmacias } from "../components/Farmacias"
import { ProdutosNaturais } from "../components/ProdutosNaturais"
import { Sopas } from "../components/Sopas"
import { DicasPraticas } from "../components/DicasPraticas"

export const Dicas = () => {
  return (
    <main className="mb-4 p-2">
      <h2 className="text-2xl text-center text-red-600 font-bold my-5">PÁGINA EM DESENVOLVIMENTO!!!</h2>
      <p className="text-center mb-2 text-branco-quente font-bold">Seja direcionado ao Instagram, ao clicar em cima dos nomes dos estabelecimentos.</p>
      <section className="flex flex-col gap-4">
        <Agroecologia />
        <Pousadas />
        <Kombuchas />
        <Nutricionistas />
        <Feirinhas />
        <AlimentacaoViva />
        <Padarias />
        <Farmacias />
        <ProdutosNaturais />
        <Sopas />
      </section>
      <section className="flex flex-col gap-4 mt-4">
        <Receitas />
      </section>
      <section className="flex flex-col gap-4 mt-4">
        <DicasPraticas />
      </section>
    </main>
  )
}
