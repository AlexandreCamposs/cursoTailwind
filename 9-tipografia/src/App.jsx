function App() {
  return (
    <>
      <h1>Tipografia</h1>
      {/* tipo fonte */}
      <p className="text-xl font-serif">Testando fonte serif</p>
      <p className="text-xl font-sans">Testando fonte sans</p>
      <p className="text-xl font-mono">Testando fonte mono</p>
      <p className="text-xl font-Arialll">Testando fonte mono</p>
      <br />
      <br />
      <br />
      {/* Tamanho fonte */}
      <p className="font-Arialll text-xs">Testando tamanho</p>
      <p className="font-Arialll text-lg">Testando tamanho</p>
      <p className="font-Arialll text-2xl">Testando tamanho</p>
      <p className="font-Arialll text-6xl">Testando tamanho</p>
      <p className="font-Arialll text-12xl">Testando tamanho</p>
      <br />
      <br />
      <br />
      {/* Estilo e peso */}
      <p className="text-xl italic ">Testando italic</p>
      <p className="text-xl italic font-bold">Testando italic + bold</p>
      <p className="text-xl font-extralight">Testando weight 200</p>
      <p className="text-xl font-black">Testando weight 900</p>
      <br />
      <br />
      <br />
      {/* espaçamento entre letras e linhas */}
      <p className="text-3xl tracking-tighter">
        Espaçamento entre letras menor
      </p>
      <p>Espaçamento entre letras comparativo</p>
      <p className="text-3xl tracking-widest">Espaçamento entre letras maior</p>
      <br />
      <p className="text-2xl w-64">
        Espaçamento entre linhas padrão, testando espaçamento
      </p>
      <br />
      <p className="text-2xl w-64 leading-loose">
        Espaçamento entre linhas padrão, testando espaçamento Maior
      </p>
      <br />
      <p className="text-2xl w-64 leading-none">
        Espaçamento entre linhas padrão, testando espaçamento Menor
      </p>
      <br />
      {/* tipo de lista e posição */}
      <ul className="list-disc m-10 bg-red-200">
        <li>carro</li>
        <li>barco</li>
        <li>avião</li>
        <li>navio</li>
      </ul>

      <ul className="list-disc m-10 bg-red-200 list-inside">
        <li>carro</li>
        <li>barco</li>
        <li>avião</li>
        <li>navio</li>
      </ul>
      <br />
      <br />
      {/* placehholder */}

      <div className="bg-gray-700 p-8">
        <input
          type="text"
          placeholder="Este é o placeholder"
          className="placeholder-blue-700  m-2"
        />

        <input
          type="text"
          placeholder="Este é o placeholder"
          className="placeholder-blue-700 placeholder-opacity-25 m-2 "
        />

        <input
          type="text"
          placeholder="Este é o placeholder"
          className="placeholder-blue-700 placeholder-opacity-100 m-2"
        />
      </div>
      <br />
      <br />
      {/* alinhamento de texto */}
      <p className="bg-green-400 text-2xl text-white text-left">
        Texto a esquerda{' '}
      </p>
      <p className="bg-green-400 text-2xl text-white text-center">
        Texto no centro{' '}
      </p>
      <p className="bg-green-400 text-2xl text-white text-end">
        Texto a direita{' '}
      </p>
      <br />
      <br />
      {/* cor texto */}
      <p className="text-blue-200">Mudando a cor do texto</p>
      <p className="text-blue-900">Mudando a cor do texto</p>
      <p className="text-red-600">Mudando a cor do texto</p>
      <br />
      <br />
      {/* Decorações */}
      <p className="underline">Testando decorações a textos</p>
      <p className="line-through">Testando decorações a textos</p>
      <p className="uppercase">Testando decorações a textos</p>
    </>
  );
}

export default App;
