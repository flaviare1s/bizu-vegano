import { OutrosMunicipiosCearenses } from "../components/OutrosMunicipiosCearenses"
import { Receitas } from "../components/Receitas"
import { Sopas } from "../components/Sopas"
import { DicasPraticas } from "../components/DicasPraticas"
import { DicasPorCategoria } from "../components/DicasPorCategoria"

export const Dicas = () => {
  return (
    <main className="mb-4 p-2">
      <section className="flex flex-col gap-4">
        <DicasPorCategoria />
        <OutrosMunicipiosCearenses />
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
