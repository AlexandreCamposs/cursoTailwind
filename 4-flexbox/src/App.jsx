function App() {
  return (
    <div className="mb-32">
      {/* flex row */}
      <h1 className="text-blue-500 text-center">FlexBox</h1>
      <div className="flex flex-row bg-teal-950 p-2">
        <div className="bg-blue-700 p-4 m-2">1</div>
        <div className="bg-blue-700 p-4 m-2">2</div>
        <div className="bg-blue-700 p-4 m-2">3</div>
      </div>

      <div className="flex flex-col bg-zinc-600 p-4 my-2">
        <div className="bg-orange-400 p-4 m-2">1</div>
        <div className="bg-orange-400 p-4 m-2">2</div>
        <div className="bg-orange-400 p-4 m-2">3</div>
      </div>

      <div className="flex flex-row-reverse bg-teal-950 p-2">
        <div className="bg-fuchsia-600 p-4 m-2">1</div>
        <div className="bg-fuchsia-600 p-4 m-2">2</div>
        <div className="bg-fuchsia-600 p-4 m-2">3</div>
      </div>

      <div className="flex flex-col-reverse bg-teal-950 p-2">
        <div className="bg-pink-700 p-4 m-2">1</div>
        <div className="bg-pink-700 p-4 m-2">2</div>
        <div className="bg-pink-700 p-4 m-2">3</div>
      </div>

      {/* flex wrap */}
      <div className="flex flex-wrap  bg-teal-950 p-2">
        <div className="bg-fuchsia-600 p-4 m-2">1</div>
        <div className="bg-fuchsia-600 p-4 m-2">2</div>
        <div className="bg-fuchsia-600 p-4 m-2">3</div>
        <div className="bg-fuchsia-600 p-4 m-2">1</div>
        <div className="bg-fuchsia-600 p-4 m-2">2</div>
        <div className="bg-fuchsia-600 p-4 m-2">3</div>
        <div className="bg-fuchsia-600 p-4 m-2">1</div>
        <div className="bg-fuchsia-600 p-4 m-2">2</div>
        <div className="bg-fuchsia-600 p-4 m-2">3</div>
      </div>

      {/* flex */}
      <div className="container flex   bg-teal-950 p-2">
        <div className="flex-1 bg-pink-700 p-4 m-2">1</div>
        <div className="flex-1 bg-pink-700 p-4 m-2">2</div>
        <div className=" flex-none bg-pink-700 p-4 m-2">3</div>
      </div>

      {/* order */}
      <div className="flex flex-row bg-teal-950 p-2">
        <div className="bg-blue-700 p-4 m-2 order-last">1</div>
        <div className="bg-blue-700 p-4 m-2 order-4">2</div>
        <div className="bg-blue-700 p-4 m-2 order-3">3</div>
        <div className="bg-blue-700 p-4 m-2 order-2">4</div>
        <div className="bg-blue-700 p-4 m-2 order-first">5</div>
      </div>

      <div className="flex  p-2">
        <div className="flex-1 bg-orange-400 p4 m-2 lg:order-last">1</div>
        <div className="flex-1 bg-orange-400 p4 m-2 lg: ">2</div>
        <div className="flex-1 bg-orange-400 p4 m-2 lg:order-first">3</div>
      </div>
    </div>
  );
}

export default App;
