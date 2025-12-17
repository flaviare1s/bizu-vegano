import { Link } from "react-router-dom";

export const NotFound = () => {
  return (
    <section className="flex flex-col justify-center items-center min-h-screen px-4 py-12 bg-gradient-to-b from-branco-quente to-gray-50">
      <div className="max-w-2xl w-full text-center">
        <div className="mb-8">
          <div className="inline-flex items-center justify-center w-36 h-36 bg-gradient-to-br from-verde-salvia to-verde-escuro rounded-full shadow-xl">
            <span className="text-6xl font-bold text-white">404</span>
          </div>
        </div>

        <h1 className="text-4xl md:text-6xl font-bold text-verde-escuro mb-4">
          Página não encontrada
        </h1>
        <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-md mx-auto">
          Ops! Parece que esta página não existe ou foi removida.
        </p>

        <Link
          to="/"
          className="inline-flex items-center gap-3 bg-gradient-to-br from-verde-salvia to-verde-escuro text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 shadow-md hover:shadow-xl"
        >
          <i className="fa-solid fa-arrow-left"></i>
          Voltar para a página inicial
        </Link>

        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-sm text-gray-500 mb-4">Que tal explorar:</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/restaurantes" className="text-verde-oliva hover:text-verde-escuro font-medium transition-colors">
              Restaurantes
            </Link>
            <span className="text-gray-300">•</span>
            <Link to="/lanchonetes" className="text-verde-oliva hover:text-verde-escuro font-medium transition-colors">
              Lanchonetes
            </Link>
            <span className="text-gray-300">•</span>
            <Link to="/dicas" className="text-verde-oliva hover:text-verde-escuro font-medium transition-colors">
              Dicas
            </Link>
            <span className="text-gray-300">•</span>
            <Link to="/sobre" className="text-verde-oliva hover:text-verde-escuro font-medium transition-colors">
              Sobre
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
