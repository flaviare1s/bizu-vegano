import { OutrosMunicipiosCearenses } from "../components/OutrosMunicipiosCearenses"
import { Receitas } from "../components/Receitas"
import { DicasPraticas } from "../components/DicasPraticas"
import { DicasPorCategoria } from "../components/DicasPorCategoria"

export const Dicas = () => {
  return (
    <main className="mb-8 p-4">
      <section className="flex flex-col gap-6">
        <DicasPorCategoria />
        <OutrosMunicipiosCearenses />
      </section>
      <section className="flex flex-col gap-6 mt-6">
        <Receitas />
      </section>
      <section className="flex flex-col gap-6 mt-6">
        <DicasPraticas />
      </section>
    </main>
  )
}
