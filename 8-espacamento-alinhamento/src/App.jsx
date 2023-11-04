function App() {
  return (
    <>
      <h1 className="text-5xl">Espaçamento e alinhamento</h1>

      {/* alterando espaçamento do item */}
      <div className="flex justify-end  bg-gray-300 p-2 my-4 mt-4">
        <div className="bg-orange-700 p-8 m-2">1</div>
        <div className="bg-orange-700 p-8 m-2">2</div>
        <div className="bg-orange-700 p-8 m-2">3</div>
        <div className="bg-orange-700 p-8 m-2">4</div>
      </div>

      <div className="flex justify-center  bg-gray-300 p-2 my-4 mt-4">
        <div className="bg-purple-700 p-8 m-2">1</div>
        <div className="bg-purple-700 p-8 m-2">2</div>
        <div className="bg-purple-700 p-8 m-2">3</div>
        <div className="bg-purple-700 p-8 m-2">4</div>
      </div>

      <div className="flex justify-start  bg-gray-300 p-2 my-4 mt-4">
        <div className="bg-pink-700 p-8 m-2">1</div>
        <div className="bg-pink-700 p-8 m-2">2</div>
        <div className="bg-pink-700 p-8 m-2">3</div>
        <div className="bg-pink-700 p-8 m-2">4</div>
      </div>

      <div className="flex justify-around  bg-gray-300 p-2 my-4 mt-4">
        <div className="bg-yellow-500 p-8 m-2">1</div>
        <div className="bg-yellow-500 p-8 m-2">1</div>
        <div className="bg-yellow-500 p-8 m-2">1</div>
        <div className="bg-yellow-500 p-8 m-2">1</div>
      </div>

      <div className="flex justify-between  bg-gray-300 p-2 my-4 mt-4">
        <div className="bg-pink-700 p-8 m-2">1</div>
        <div className="bg-pink-700 p-8 m-2">2</div>
        <div className="bg-pink-700 p-8 m-2">3</div>
        <div className="bg-pink-700 p-8 m-2">4</div>
      </div>

      {/* content */}

      <div className="bg-purple-500 h-40 flex flex-wrap content-start my-4 mt-4">
        <div className="bg-purple-900 h-10 p-2 mx-4">1</div>
        <div className="bg-purple-900 h-10 p-2 mx-4">2</div>
        <div className="bg-purple-900 h-10 p-2 mx-4">3</div>
        <div className="bg-purple-900 h-10 p-2 mx-4">4</div>
      </div>

      <div className="bg-purple-500 h-40 flex flex-wrap content-center my-4 mt-4">
        <div className="bg-purple-900 h-10 p-2 mx-4">1</div>
        <div className="bg-purple-900 h-10 p-2 mx-4">2</div>
        <div className="bg-purple-900 h-10 p-2 mx-4">3</div>
        <div className="bg-purple-900 h-10 p-2 mx-4">4</div>
      </div>

      <div className="bg-purple-500 h-40 flex flex-wrap content-end my-4 mt-4">
        <div className="bg-purple-900 h-10 p-2 mx-4">1</div>
        <div className="bg-purple-900 h-10 p-2 mx-4">2</div>
        <div className="bg-purple-900 h-10 p-2 mx-4">3</div>
        <div className="bg-purple-900 h-10 p-2 mx-4">4</div>
      </div>

      {/* alinhamento itens */}

      <div className="bg-orange-500 h-40 flex items-start my-4 mt-4">
        <div className="bg-teal-900 h-10 p-2 mx-4">1</div>
        <div className="bg-teal-900 h-10 p-2 mx-4">2</div>
        <div className="bg-teal-900 h-10 p-2 mx-4">3</div>
        <div className="bg-teal-900 h-10 p-2 mx-4">4</div>
      </div>

      <div className="bg-orange-500 h-40 flex items-center my-4 mt-4">
        <div className="bg-teal-900 h-10 p-2 mx-4">1</div>
        <div className="bg-teal-900 h-10 p-2 mx-4">2</div>
        <div className="bg-teal-900 h-10 p-2 mx-4">3</div>
        <div className="bg-teal-900 h-10 p-2 mx-4">4</div>
      </div>

      <div className="bg-orange-500 h-40 flex items-end my-4 mt-4">
        <div className="bg-teal-900 h-10 p-2 mx-4">1</div>
        <div className="bg-teal-900 h-10 p-2 mx-4">2</div>
        <div className="bg-teal-900 h-10 p-2 mx-4">3</div>
        <div className="bg-teal-900 h-10 p-2 mx-4">4</div>
      </div>

      <div className="bg-gray-500 h-40 flex flex-col items-start my-4 mt-4">
        <div className="bg-emerald-300 h-10 p-2 mx-4">1</div>
        <div className="bg-emerald-300 h-10 p-2 mx-4">2</div>
        <div className="bg-emerald-300 h-10 p-2 mx-4">3</div>
        <div className="bg-emerald-300 h-10 p-2 mx-4">4</div>
      </div>

      <div className="bg-gray-500 h-40 flex flex-col items-center my-4 mt-4">
        <div className="bg-emerald-300 h-10 p-2 mx-4">1</div>
        <div className="bg-emerald-300 h-10 p-2 mx-4">2</div>
        <div className="bg-emerald-300 h-10 p-2 mx-4">3</div>
        <div className="bg-emerald-300 h-10 p-2 mx-4">4</div>
      </div>

      <div className="bg-gray-500 h-40 flex flex-col items-end my-4 mt-4">
        <div className="bg-emerald-300 h-10 p-2 mx-4">1</div>
        <div className="bg-emerald-300 h-10 p-2 mx-4">2</div>
        <div className="bg-emerald-300 h-10 p-2 mx-4">3</div>
        <div className="bg-emerald-300 h-10 p-2 mx-4">4</div>
      </div>

      {/* grid content*/}

      <div className="bg-blue-500 grid grid-cols-3 h-40 place-content-start my-4 mt-4">
        <div className="bg-teal-900 h-10 p-2 mx-4 m-2">1</div>
        <div className="bg-teal-900 h-10 p-2 mx-4 m-2">2</div>
        <div className="bg-teal-900 h-10 p-2 mx-4 m-2">3</div>
        <div className="bg-teal-900 h-10 p-2 mx-4 m-2">4</div>
        <div className="bg-teal-900 h-10 p-2 mx-4 m-2">5</div>
        <div className="bg-teal-900 h-10 p-2 mx-4 m-2">6</div>
      </div>

      <div className="bg-blue-500 grid grid-cols-3 h-40 place-content-center my-4 mt-4">
        <div className="bg-teal-900 h-10 p-2 mx-4 m-2">1</div>
        <div className="bg-teal-900 h-10 p-2 mx-4 m-2">2</div>
        <div className="bg-teal-900 h-10 p-2 mx-4 m-2">3</div>
        <div className="bg-teal-900 h-10 p-2 mx-4 m-2">4</div>
        <div className="bg-teal-900 h-10 p-2 mx-4 m-2">5</div>
        <div className="bg-teal-900 h-10 p-2 mx-4 m-2">6</div>
      </div>

      <div className="bg-blue-500 grid grid-cols-3 h-40 place-content-end my-4 mt-4">
        <div className="bg-teal-900 h-10 p-2 mx-4 m-2">1</div>
        <div className="bg-teal-900 h-10 p-2 mx-4 m-2">2</div>
        <div className="bg-teal-900 h-10 p-2 mx-4 m-2">3</div>
        <div className="bg-teal-900 h-10 p-2 mx-4 m-2">4</div>
        <div className="bg-teal-900 h-10 p-2 mx-4 m-2">5</div>
        <div className="bg-teal-900 h-10 p-2 mx-4 m-2">6</div>
      </div>

      {/* grind items */}
      <div className="bg-gray-500 grid grid-cols-3 h-40 place-items-start my-4 mt-4">
        <div className="bg-teal-900 h-10 p-2 mx-4 p-2">1</div>
        <div className="bg-teal-900 h-10 p-2 mx-4 p-2">2</div>
        <div className="bg-teal-900 h-10 p-2 mx-4 p-2">3</div>{' '}
        <div className="bg-teal-900 h-10 p-2 mx-4 p-2">1</div>
        <div className="bg-teal-900 h-10 p-2 mx-4 p-2">2</div>
        <div className="bg-teal-900 h-10 p-2 mx-4 p-2">3</div>
      </div>

      <div className="bg-gray-500 grid grid-cols-3 h-40 place-items-center my-4 mt-4">
        <div className="bg-teal-900 h-10 p-2 mx-4 p-2">1</div>
        <div className="bg-teal-900 h-10 p-2 mx-4 p-2">2</div>
        <div className="bg-teal-900 h-10 p-2 mx-4 p-2">3</div>{' '}
        <div className="bg-teal-900 h-10 p-2 mx-4 p-2">1</div>
        <div className="bg-teal-900 h-10 p-2 mx-4 p-2">2</div>
        <div className="bg-teal-900 h-10 p-2 mx-4 p-2">3</div>
      </div>

      <div className="bg-gray-500 grid grid-cols-3 h-40 place-items-end my-4 mt-4">
        <div className="bg-teal-900 h-10 p-2 mx-4 p-2">1</div>
        <div className="bg-teal-900 h-10 p-2 mx-4 p-2">2</div>
        <div className="bg-teal-900 h-10 p-2 mx-4 p-2">3</div>{' '}
        <div className="bg-teal-900 h-10 p-2 mx-4 p-2">1</div>
        <div className="bg-teal-900 h-10 p-2 mx-4 p-2">2</div>
        <div className="bg-teal-900 h-10 p-2 mx-4 p-2">3</div>
      </div>

      {/* padding */}
      <div className="bg-pink-300   p-10">
        <span className="bg-blue-900 p-8 m-2">Padding</span>
        <span className="bg-blue-900 py-8 m-2">Padding</span>
        <span className="bg-blue-900 px-8 m-2">Padding</span>
        <span className="bg-blue-900 pl-8 m-2">Padding</span>
        <span className="bg-blue-900 pr-8 m-2">Padding</span>
      </div>

      {/* margin */}
      <div className="bg-blue-300   p-10">
        <div className="bg-blue-900 m-8  ">Padding</div>
        <div className="bg-blue-900 my-8  ">Padding</div>
        <div className="bg-blue-900 mx-8 ">Padding</div>
        <div className="bg-blue-900 ml-8 ">Padding</div>
        <div className="bg-blue-900 mr-8 ">Padding</div>
      </div>

      {/* largura */}

      <div className="bg-blue-900 text-white font-bold p-4  my-4">
        default width
      </div>

      <div className="bg-blue-900 text-white font-bold p-4 max-w-5xl my-4">
        Max width
      </div>

      <div className="bg-blue-900 text-white font-bold p-4 w-40 my-4">
        Min width
      </div>

      {/* altura */}

      <div className="bg-red-900 text-white font-bold p-4  h-20 my-4 min-h-full">
        default width
      </div>

      <div className="bg-red-900 text-white font-bold p-4 min-h-screen  my-4">
        Min width
      </div>

      <div className="bg-red-900 text-white font-bold p-4 max-h-screen my-4">
        Max width
      </div>

      <div className="m-40">espaçamento</div>
      <div className="m-40">espaçamento</div>
      <div className="m-40">espaçamento</div>
      <div className="m-40">espaçamento</div>
      <div className="m-40">espaçamento</div>
      <div className="m-40">espaçamento</div>
      <div className="m-40">espaçamento</div>
    </>
  );
}

export default App;
