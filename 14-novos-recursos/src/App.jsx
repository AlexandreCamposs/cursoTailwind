import { useState } from 'react';

function App() {
  const [dark, setDark] = useState(false);

  const handleClick = () => {
    setDark((prevState) => !prevState);
  };

  return (
    <>
      <h1 className="text-3xl text-blue-400 text-center">Novos recursos</h1>
      {/* Cores novas */}
      <div className="bg-blue-700 p-2 text-white">
        <p>Testando cores</p>
        <p className="text-amber-300">Testando cores</p>
        <p className="text-rose-400">Testando cores</p>
      </div>
      <br />
      {/* Dark */}
      <div
        className={`bg-gray-200 p-2 text-black ${
          dark ? 'dark:bg-gray-800 dark:text-white' : ''
        }`}
      >
        <p>Dark mode com media</p>
      </div>
      <br />

      <div
        className={`${dark ? 'bg-gray-800 text-white' : 'bg-green-400'} p-8`}
      >
        <p>Dark mode com manual</p>
      </div>
      <button
        onClick={handleClick}
        className={`${dark ? 'btn' : 'btn-test '} p-8`}
      >
        {dark ? 'Desativar modo dark' : 'Ativar modo dark'}
      </button>
      <br />
      <br />

      {/* Ring */}
      <div class="m-6">
        <button class="py-2 px-4 bg-amber-400 hover:bg-pink-600 text-white ring-4 ring-amber-600 rounded">
          Ring externo
        </button>
        <button class="py-2 px-4 bg-purple-500 text-white mx-4 ring-4 ring-purple-700 ring-inset rounded-full">
          Ring Interno
        </button>
        <button class="py-2 px-4 bg-blue-500 text-white mx-4 ring-4 focus:ring-blue-700 focus:outline-none ring-inset rounded-full">
          Ring Interno
        </button>
      </div>

      {/* Line height padrão */}
      <div class="m-6">
        <h1 class="text-3xl">Line height padrão</h1>
        <h1 class="text-3xl">Line height padrão</h1>
        <h1 class="text-3xl leading-3">Line height modificado</h1>
        <h1 class="text-3xl leading-3">Line height modificado</h1>
        <h1 class="text-3xl leading-normal">Line height modificado</h1>
        <h1 class="text-3xl leading-normal">Line height modificado</h1>
      </div>
      <br />

      {/* Espaçamento e opacidade */}
      <div className=" bg-gray-900 text-white p-2">
        <p className="m-2">Testando espaçamento</p>
      </div>
      <div className="opacity-30 bg-blue-900">
        <p className="m-2">Testando espaçamento</p>
      </div>
      <br />
      {/* overflow */}
      <p class="overflow-hidden overflow-ellipsis max-w-xs m-6 p-6 mx-auto bg-red-200 text-red-500 font-medium rounded-lg">
        Lorem ipsum dolor, sit amet consectetur adipisicing
        elitasdfggçqweeusadjsadijasidjasdjasidjasidjaidjaisdjaisdjaisd? Dolores
        praesentium temporibus perspiciatis laboriosam consectetur eos suscipit
        dolorum ut illo. Facere error itaque voluptatibus iure dolores dicta
        pariatur beatae, hic suscipit.
      </p>
      <p class="overflow-hidden overflow-clip max-w-xs m-6 p-6 mx-auto bg-green-200 text-green-500 font-medium rounded-lg">
        Lorem ipsum dolor, sit amet consectetur adipisicing
        elitasdfggçqweeusadjsadijasidjasdjasidjasidjaidjaisdjaisdjaisd? Dolores
        praesentium temporibus perspiciatis laboriosam consectetur eos suscipit
        dolorum ut illo. Facere error itaque voluptatibus iure dolores dicta
        pariatur beatae, hic suscipit.
      </p>
    </>
  );
}

export default App;
