function App() {
  return (
    <>
      <h1 className="text-2xl">Bordas</h1>
      {/* Raio da borda */}
      <div>
        <button className="m-4 p-4 bg-gray-400 rounded-sm">Testando</button>
        <button className="m-4 p-4 bg-gray-400 rounded-xl">Testando</button>
        <button className="m-4 p-4 bg-gray-400 rounded-3xl">Testando</button>
      </div>
      <div>
        <span className="bg-green-600 w-20 h-20 rounded-full block">
          Circulo
        </span>
        <span className="bg-green-600 w-40 h-20 rounded-full block">
          Pílula
        </span>
      </div>
      <br />
      <br />
      {/* largura e cor */}
      <div>
        <span className="bg-green-600 w-20 h-10 text-center text-white border-4 border-pink-400  block">
          Botão
        </span>{' '}
        <span className="bg-green-600 w-20 h-10 text-center text-white border-4 border-pink-400 rounded-lg mt-2 block">
          Botão
        </span>
      </div>
      <br />
      <br />
      {/* opacidade  e estilo da borda   */}
      <div>
        <span className="bg-yellow-600 w-20 h-10 text-center text-white border-4 border-purple-400 border-opacity-25 rounded-lg mt-2 block">
          {' '}
          Botão
        </span>
        <span className="bg-yellow-600 w-20 h-10 text-center text-white border-4 border-purple-400 border-opacity-50 rounded-lg mt-2 block">
          {' '}
          Botão
        </span>
        <span className="bg-yellow-600 w-20 h-10 text-center text-white border-4 border-purple-400 border-opacity-75 rounded-lg mt-2 block">
          Botão
        </span>
        <span className="bg-yellow-600 w-20 h-10 text-center text-white border-4 border-purple-400 border-opacity-100 rounded-lg mt-2 block">
          Botão
        </span>
      </div>
      <br />
      <br />
      {/* divide */}
      <div className="grid grid-cols-4 divide-x-4 divide-emerald-500">
        <div className="text-center">1</div>
        <div className="text-center">2</div>
        <div className="text-center">3</div>
        <div className="text-center">4</div>
      </div>
      <br />
      <br />
      <div className="  divide-y-4 divide-emerald-500">
        <p>1</p>
        <p>2</p>
        <p>3</p>
        <p>4</p>
      </div>
      <br />
      <br />
      {/* box-shadow */}
      <div className="w-20 h-20 shadow-xl m-2">Sombra pequena</div>
      <div className="w-20 h-20 shadow m-2">Sombra média</div>
      <div className="w-20 h-20 shadow-2xl m-2">Sombra grande</div>
    </>
  );
}

export default App;
