function App() {
  return (
    <>
      <h1>Iteratividade</h1>
      <br />
      {/* Aparência */}
      <div className="m-4">
        <select>
          <option value="">Teste</option>
          <option value="">Teste</option>
          <option value="">Teste</option>
          <option value="">Teste</option>
        </select>
      </div>
      <div className="m-4  ">
        <select className="appearance-none">
          <option value="">Teste</option>
          <option value="">Teste</option>
          <option value="">Teste</option>
        </select>
      </div>
      <br />
      <br />
      {/* Cursor */}
      <div className="cursor-pointer h-20 bg-yellow-300"></div>
      <div className="cursor-wait h-20 my-2 bg-yellow-300"></div>
      <div className="cursor-not-allowed h-20 my-2 bg-yellow-300"></div>
      <br />
      {/* outline */}
      <div className="bg-green-300">
        <input
          type="text"
          placeholder="clica aqui"
          className="outline-none m-2"
        />
        <input type="text" placeholder="clica aqui" className="outline-none" />
        <p className="p-10">Espaçamento</p>
        <p className="p-10">Espaçamento</p>
      </div>
      <br />
      <br />
      {/* Point events */}
      <div className="m-4 bg-gray-600 p-8">
        <select className="pointer-events-none">
          <option value="">Teste points</option>
        </select>
        <select>
          <option value="">Teste points</option>
        </select>
        <div>
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            className="m-2 pointer-events-none"
          ></textarea>
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            className="m-2"
          ></textarea>
        </div>
      </div>
      <br />
      <br />
      {/* Resize */}
      <div className="m-4 bg-gray-600 p-8">
        <textarea
          name=""
          id=""
          cols="30"
          rows="10"
          className="m-2  resize-none"
        ></textarea>
        <textarea
          name=""
          id=""
          cols="30"
          rows="10"
          className="m-2 resize-x"
        ></textarea>{' '}
        <textarea
          name=""
          id=""
          cols="30"
          rows="10"
          className="m-2 resize-y"
        ></textarea>{' '}
        <textarea
          name=""
          id=""
          cols="30"
          rows="10"
          className="m-2 resize "
        ></textarea>
      </div>
      <br />
      <br />
      {/* Removendo seleção */}
      <div className="m-4 bg-red-300">
        <p className="select-none">Este parágrafo não pode ser selecionado</p>
      </div>
    </>
  );
}

export default App;
