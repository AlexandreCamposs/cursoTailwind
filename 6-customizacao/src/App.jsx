function App() {
  return (
    <>
      <h1 className="text-3xl text-red">Custom</h1>
      <h1 className="text-3xl text-blue">Custom</h1>

      <h2 className="text-5xl text-red tablet:text-purple-400">Custom</h2>
      <h2 className="text-5xl text-blue cel:text-purple-700">Custom</h2>

      {/* extendendo */}
      <h3 className="text-7xl text-new-blue cel:text-purple-700">Custom</h3>
      <h3 className="text-7xl text-gray-900   ">Custom</h3>

      {/* spacing */}
      <p className="p-10 m-99">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam, non?
        Cupiditate error consequatur dolorem placeat incidunt consequuntur!
        Soluta eum eos voluptatem in, nesciunt sit, quaerat quia distinctio
        nobis quidem sunt!
      </p>
    </>
  );
}

export default App;
