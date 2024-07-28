import { ReceitaLegumesAoForno } from "./ReceitaLegumesAoForno"
import { ReceitaTapioca } from "./ReceitaTapioca"

export const Receitas = () => {
  return (
    <section className="flex flex-col gap-4">
      <ReceitaTapioca />
      <ReceitaLegumesAoForno />
    </section>
  )
}
