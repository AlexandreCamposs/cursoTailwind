function App() {
  return (
    <>
      <h1 className="bg-green-500 text-red-300 hover:bg-red-300 hover:text-green-500">
        Conceitos
      </h1>

      <button className="btn-blue">Ativar</button>
      <button className="btn-red">Cancelar</button>

      <div className="w-4 md:w-6 lg:w-10 xl:w-20 h-4 md:h-6 lg:h-10 xl:h-20  m-4 bg-red-500"></div>

      <div>
        <input
          type="text"
          placeholder="Clique aqui"
          className="bg-gray-200 text-gray-900 focus:bg-red-500 focus:text-white"
        />
      </div>
    </>
  );
}

export default App;
