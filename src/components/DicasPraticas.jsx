import { DicaJantarSeisTempos } from "./DicaJantarSeisTempos"
import { DicaManteiga } from "./DicaManteiga"

export const DicasPraticas = () => {
  return (
    <section className="flex flex-col gap-4">
      <DicaManteiga />
      <DicaJantarSeisTempos />
    </section>
  )
}

