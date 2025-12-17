export const Sobre = () => {
  return (
    <main className='w-[90%] md:max-w-4xl mx-auto px-8 py-10 bg-white my-8 rounded-2xl shadow-lg'>
      <section className='mb-8'>
        <h1 className='text-3xl md:text-4xl font-bold mb-6 text-verde-escuro text-center'>Sobre Bizu Vegano</h1>
        <p className='mb-4 text-gray-700 leading-relaxed'>
          O Bizu Vegano foi criado para mapear estabelecimentos veganos em Fortaleza, além de locais que oferecem opções veganas em seus cardápios. Meu objetivo é fortalecer a comunidade vegana e ajudar vegetarianos e curiosos a encontrar deliciosas opções de comida na cidade. Quero facilitar o acesso a informações sobre onde comer de forma consciente e apoiar empreendedores veganos locais.
        </p>
      </section>

      <section className='mb-8'>
        <h2 className='text-2xl md:text-3xl font-bold mb-6 text-verde-escuro text-center'>Diferença entre Veganismo e Vegetarianismo</h2>
        <p className='mb-4 text-gray-700 leading-relaxed'>
          O veganismo vai além de uma dieta; é uma filosofia de vida que busca eliminar todas as formas de exploração e crueldade contra os animais, seja na alimentação, vestuário ou outros produtos. Por isso, veganos não consomem produtos de origem animal, incluindo carne, laticínios, ovos e mel.
        </p>
        <p className='mb-4 text-gray-700 leading-relaxed'>
          Já o vegetarianismo refere-se especificamente a uma dieta baseada em plantas, sem carne. Existem variações, como o lactovegetarianismo, que inclui laticínios, e o ovolactovegetarianismo, que inclui ovos e laticínios.
        </p>
        <p className='mb-4 text-gray-700 leading-relaxed'>
          É importante notar que o veganismo é motivado por razões éticas relacionadas ao bem-estar animal. Assim, uma dieta estritamente vegetariana seguida apenas por razões de saúde não é considerada veganismo.
        </p>
        <p className='mb-4 text-gray-700 leading-relaxed'>
          Um exemplo disso é que um hambúrguer 100% vegetal produzido por uma empresa cuja principal fonte de lucro é o abate de animais pode ser considerado vegetariano, mas não vegano.
        </p>
        <p className='mb-4 text-gray-700 leading-relaxed'>
          No entanto, é importante lembrar que extremismos não são produtivos. Às vezes, por motivos de praticidade ou necessidade, podemos consumir produtos de empresas que exploram animais. O importante é fazer o nosso melhor para apoiar produtores veganos, que muitas vezes oferecem produtos mais naturais, saudáveis, e saborosos. Dessa forma, contribuímos para a proposta vegana e mantemos a coerência com nossos valores.
        </p>
        <p className='text-center font-bold mt-6 text-verde-escuro text-lg'>
          Se alimente conscientemente!
        </p>
      </section>
    </main>
  );
}
