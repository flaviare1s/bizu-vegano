import { Link } from "react-router-dom";
import notFound from "../assets/bizu-vegano.png";

export const NotFound = () => {
  return (
    <section className="flex flex-col justify-center items-center m-auto h-screen">
      <h1 className="text-center text-3xl md:text-5xl uppercase font-semibold text-branco-quente mb-4">
        Página não encontrada!
      </h1>
      <figure className="flex justify-center h-[200px] md:h-[400px]">
        <img
          className="h-full"
          src={notFound}
          alt="Imagem do site Bizu Vegano"
        />
      </figure>
      <Link
        to="/"
        className="text-center text-xs sm:text-base font-semibold text-branco-quente mt-4 flex items-center gap-3"
      >
        <span className="material-symbols-outlined">arrow_back</span>Voltar para
        a página inicial
      </Link>
    </section>
  );
};
