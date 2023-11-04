function App() {
  const image = '../public/img/bg_cidade.jpg';
  return (
    <>
      <h1 className="text-2xl text-blue-400 ">Background</h1>
      {/* background */}
      <div
        className="h-48 overflow-auto bg-local"
        style={{ backgroundImage: `url('/img/bg_cidade.jpg')` }}
      >
        <p className="p-10">Testando</p>
        <p className="p-10">Testando</p>
        <p className="p-10">Testando</p>
        <p className="p-10">Testando</p>
        <p className="p-10">Testando</p>
        <p className="p-10">Testando</p>
        <p className="p-10">Testando</p>
        <p className="p-10">Testando</p>
        <p className="p-10">Testando</p>
        <p className="p-10">Testando</p>
        <p className="p-10">Testando</p>
      </div>
      <p className="p-10">Testando</p>
      <p className="p-10">Testando</p>
      <p className="p-10">Testando</p>{' '}
      <div
        className="h-48 overflow-auto bg-fixed  "
        style={{ backgroundImage: `url('/img/bg_cidade.jpg')` }}
      ></div>
      <br />
      <br />
      <p className="p-10">Testando</p>
      <p className="p-10">Testando</p>
      <p className="p-10">Testando</p>
      <p className="p-10">Testando</p>
      <br />
      <br />
      {/* Background e opacity */} <div className="bg-gray-100 py-10"> </div>
      <div className="bg-gray-200 py-10"> </div>
      <div className="bg-gray-300 py-10"> </div>
      <div className="bg-gray-400 py-10"> </div>
      <div className="bg-gray-500 py-10"> </div>
      <div className="bg-gray-600 py-10"> </div>
      <div className="bg-gray-700 py-10"> </div>
      <div className="bg-gray-800 py-10"> </div>
      <div className="bg-gray-900 bg-opacity-0 py-10"> </div>
      <div className="bg-gray-900 bg-opacity-25 py-10"> </div>
      <div className="bg-gray-900 bg-opacity-75 py-10"> </div>
      <br />
      <br />
      {/* pocição e repetição */}
      <div
        className="h-48 overflow-auto  bg-center  "
        style={{ backgroundImage: `url('/img/bg_cidade.jpg')` }}
      ></div>
      <br />
      <br />
      <p className="p-10">Testando</p>
      <p className="p-10">Testando</p>
      <p className="p-10">Testando</p>
      <p className="p-10">Testando</p>
      <br />
      <div
        className="h-48 overflow-auto  bg-bottom"
        style={{ backgroundImage: `url('/img/bg_cidade.jpg')` }}
      >
        {' '}
        <p className="p-10">Testando</p>
        <p className="p-10">Testando</p>
        <p className="p-10">Testando</p>
      </div>
      <br />
      <br />
      <div
        className="h-48  overflow-auto bg-center bg-no-repeat"
        style={{ backgroundImage: `url('/img/tailwind.png')` }}
      >
        {' '}
        <p className="p-10">Testando</p>
        <p className="p-10">Testando</p>
        <p className="p-10">Testando</p>
        <p className="p-10">Testando</p>
      </div>
      <br />
      <br />
      {/* tamanho do background */}
      <div
        className="h-48   bg-cover bg-bottom  "
        style={{ backgroundImage: `url('/img/bg_cidade.jpg')` }}
      ></div>
      <br />
      <br />
      <div
        className="h-48   bg-cover bg-center  "
        style={{ backgroundImage: `url('/img/bg_cidade.jpg')` }}
      ></div>
      <br />
      <div
        className="h-48   bg-contain bg-center bg-no-repeat "
        style={{ backgroundImage: `url('/img/bg_cidade.jpg')` }}
      ></div>
      <br />
      <br />
      {/* gradient */}
      <div className="h-48 bg-gradient-to-tr from-gray-700 to-red-400"></div>
      <div className="h-48 bg-gradient-to-b from-blue-700 via-green-700 to-red-400"></div>
      <div
        className="h-48   bg-cidade bg-cover"
        style={{ backgroundImage: `url('/img/bg_cidade.jpg')` }}
      ></div>
      <br />
      <div className="h-48 bg-tailwind bg-cover bg-center"></div>
    </>
  );
}

export default App;
