export const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-verde-escuro to-gray-900 text-branco-quente">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold mb-4 text-logo font-logomarca">Bizu Vegano</h3>
            <p className="text-sm text-gray-300 leading-relaxed">
              Seu guia completo para encontrar as melhores opções veganas em Fortaleza e região.
              Descubra restaurantes, lanchonetes, confeitarias e muito mais!
            </p>
          </div>

          <div className="text-center">
            <h4 className="text-lg font-semibold mb-4 text-logo">Links Rápidos</h4>
            <nav className="flex flex-col gap-2">
              <a href="/restaurantes" className="text-sm text-gray-300 hover:text-logo transition-colors">Restaurantes</a>
              <a href="/lanchonetes" className="text-sm text-gray-300 hover:text-logo transition-colors">Lanchonetes</a>
              <a href="/dicas" className="text-sm text-gray-300 hover:text-logo transition-colors">Dicas</a>
              <a href="/sobre" className="text-sm text-gray-300 hover:text-logo transition-colors">Sobre</a>
            </nav>
          </div>

          <div className="text-center md:text-right">
            <h4 className="text-lg font-semibold mb-4 text-logo">Siga-nos</h4>
            <div className="flex justify-center md:justify-end gap-4 mb-4">
              <a
                href="https://www.instagram.com/bizu_vegano_fortaleza?igsh=MWxhdXpkdHJybTlxeA=="
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 flex items-center justify-center"
                aria-label="Instagram do Bizu Vegano"
              >
                <i className="fa-brands fa-instagram text-logo hover:text-4xl text-3xl"></i>
              </a>
            </div>
            <p className="text-xs text-gray-400">
              <i className="fa-solid fa-location-dot mr-1"></i>
              Fortaleza - CE
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            <p>© {new Date().getFullYear()} Bizu Vegano. Todos os direitos reservados.</p>
            <p>
              Desenvolvido por{' '}
              <a
                className="font-semibold text-logo hover:text-logo transition-colors"
                href="https://mail.google.com/mail/?view=cm&fs=1&to=flaviarster@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Flávia Reis
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
