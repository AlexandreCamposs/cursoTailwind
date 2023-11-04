function App() {
  return (
    <div className="mb-96">
      <h1 className="text-center">layout</h1>
      <div className="container bg-red-800 mx-auto p-4 my-4"></div>

      <div className="container bg-green-400 mx-auto p-4 md:bg-blue-500"></div>

      <div className="container mx-auto bg-green-400 my-4 p-6 border-box">
        Border box
      </div>

      <div className="container mx-auto bg-fuchsia-500 p-10 box-content">
        Box content
      </div>

      {/* Display */}

      <div className="container mx-auto">
        <span className="block bg-purple-200 my-5 ">
          Não são elemento de bloco
        </span>
        <span className="block bg-red-500">Não são elemento de bloco</span>
        <div className="bg-blue-400 inline-block mr-5">block</div>
        <div className="bg-blue-400 inline-block">block</div>
      </div>

      <div className="container my-10 mx-auto bg-blue-200 p-8">
        <div className="bg-red-800 mb-2 inline p-5">1</div>
        <div className="bg-blue-500 mb-2 inline  p-5">2</div>
        <div className="bg-yellow-400 inline  p-5">3</div>
      </div>

      <div className="bg-blue-300 float-right">right</div>
      <div className="bg-orange-300 float-left">left</div>
      <div className="clearfix"></div>
      <div className="bg-blue-300 float-right">right</div>
      <div className="bg-orange-300 float-left">left</div>

      {/* overflow */}

      <div className="container overflow-auto h-16 bg-orange-300 mt-24">
        <p>testendo overflow</p>
        <p>testendo overflow</p>
        <p>testendo overflow</p>
        <p>testendo overflow</p>
        <p>testendo overflow</p>
      </div>

      <div className="container overflow-hidden h-16 bg-green-400 mt-2">
        <p>testendo overflow</p>
        <p>testendo overflow</p>
        <p>testendo overflow</p>
        <p>testendo overflow</p>
        <p>testendo overflow</p>
      </div>

      <div className=" container overflow-x-hidden h-16 bg-purple-400 mt-2 ">
        <p>
          testendoooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooovvvvvvvvvvvvvvvvvvvvvvvvvvvvooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo
        </p>
      </div>

      <div className=" container overflow-x-auto h-16 bg-purple-400 mt-2 ">
        <p>
          testendoooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooovvvvvvvvvvvvvvvvvvvvvvvvvvvvooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo
        </p>
      </div>

      {/* Positions */}

      <div className="relative bg-yellow-300 p-10 m-2 ">
        <div className="absolute bg-red-900 p-2 top-0 left-0"></div>
      </div>

      <div className="relative h-32 bg-blue-400 ">
        <div className="absolute bottom-0 right-0 bg-red-500 p-5"></div>
      </div>

      {/*  visibility */}
      <div className="bg-lime-800 p-10 invisible">
        invisible para ocutar porém ainda esta na tela
      </div>

      {/* z-index */}
      <div className="container relative p-14 bg-red-400 mb-8">
        <div className="bg-red-300 h-20 w-20 p-6 absolute top-0 left-0 z-10"></div>
        <div className="bg-red-900 h-20 w-20 p-6 absolute top-0 left-0"></div>
      </div>

      <div className="container relative bg-slate-600 p-20">
        <div className="absolute bg-red-300 p-2 z-30">1</div>
        <div className="absolute bg-yellow-300 p-2 z-40">2</div>
        <div className="absolute bg-orange-900 p-2 z-50">3</div>
      </div>
    </div>
  );
}

export default App;
