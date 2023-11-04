function App() {
  return (
    <>
      <h1 className="mb-8">Grid</h1>

      {/* grid */}
      <div className="bg-orange-200 grid grid-cols-4">
        <div className="bg-orange-700 p-2 m-2">1</div>
        <div className="bg-orange-700 p-2 m-2">2</div>
        <div className="bg-orange-700 p-2 m-2">3</div>
        <div className="bg-orange-700 p-2 m-2">4</div>
      </div>

      <div className="bg-pink-200 grid grid-cols-3">
        <div className="bg-pink-700 p-2 m-2">1</div>
        <div className="bg-pink-700 p-2 m-2">2</div>
      </div>

      <div className="grid grid-cols-3 mt-20 p-10 bg-yellow-300">
        <div className="bg-purple-300 p-2 m-2">1</div>
        <div className="bg-orange-700 p-2 m-2">2</div>
        <div className="bg-purple-300 p-2 m-2">3</div>
        <div className="bg-orange-700 p-2 m-2">4</div>
        <div className="bg-purple-300 p-2 m-2">5</div>
        <div className="bg-orange-700 p-2 m-2">6</div>
        <div className="bg-purple-300 p-2 m-2">7</div>
        <div className="bg-orange-700 p-2 m-2">8</div>
        <div className="bg-purple-300 p-2 m-2">9</div>
      </div>

      {/* largura */}

      <div className="grid grid-cols-6 m-2">
        <div className="col-span-1 bg-orange-300">
          <ul>
            <li>Home</li>
            <li>Produtos</li>
            <li>Blog</li>
          </ul>
        </div>
        <div className="col-span-5 bg-blue-300">
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut quis
            doloremque magnam iste mollitia optio odio numquam vero enim
            consequatur corrupti asperiores perspiciatis, eveniet consectetur
            nesciunt amet doloribus consequuntur. Hic. Commodi numquam saepe
            molestiae, illum perferendis voluptate! At esse veritatis similique
            dolorem cumque fuga ipsam molestiae nemo molestias accusantium
            provident eum doloribus illum rem odit ut eveniet ea, ipsum est.
            Natus, sequi animi voluptatibus doloribus voluptate ipsum vitae id
            magnam mollitia repellendus quidem culpa enim praesentium sint.
            Consequatur maiores totam quaerat ab repellendus! Ipsa accusamus
            similique itaque nesciunt aspernatur magnam? Porro hic nulla odit
            beatae amet quis quo et aperiam in unde? Nihil iure porro, atque
            deserunt fuga ipsum asperiores ab! Ullam voluptates omnis earum
          </p>
        </div>
      </div>
      <div className="grid grid-cols-4 m-2">
        <div className="col-span-4 bg-red-700">
          <p>Barra lateral direita</p>
        </div>
        <div className="col-span-1 bg-red-300">
          <p>Barra lateral esquerda</p>
        </div>
        <div className="col-span-2 bg-blue-300">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam odit
            nam, assumenda eaque minima officiis, repellendus nisi, cupiditate
            quo incidunt quibusdam eligendi nihil possimus rem tempora illo
            esse! Pariatur, quo. Similique ad harum soluta, aliquid iure at
            laborum repudiandae error laboriosam, corrupti repellendus eveniet!
            Deleniti distinctio id eius neque, quasi repudiandae officia
            dolores. Ab, nemo cum impedit deserunt fugit reprehenderit? Corrupti
            vero libero dignissimos expedita error adipisci consequatur fugiat
            nulla iure, deserunt cum non sequi fuga debitis facilis explicabo
            quo ipsam at, labore optio excepturi omnis maiores eum? Itaque,
            deserunt! Doloremque consequatur fuga molestias expedita dolor iste
            minima libero odio corrupti quibusdam culpa ut hic adipisci, dolores
            illum nobis minus veniam vel. Doloribus vitae exercitationem, amet
            eligendi autem ipsa id? Accusantium placeat quis laboriosam hic
            repellendus! Voluptatem aspernatur illo necessitatibus veniam ipsum
            porro vel, nostrum laboriosam? Soluta quia provident ea pariatur
            voluptatem eaque minima rem incidunt, voluptates velit. Dicta,
            labore! Molestias, nemo fugiat architecto mollitia cum optio
            corporis. Quas sapiente corporis, blanditiis non neque excepturi
            alias sed. Incidunt saepe autem quod iusto nostrum? Quae consectetur
            eos deserunt obcaecati quisquam! Illo. Voluptate id harum facere?
            Aperiam voluptates officiis qui excepturi dolor totam, nesciunt
            neque quod deleniti rem corporis tempore non iusto ut accusantium
            veniam ab tempora consectetur vitae temporibus! Veniam, consectetur!
            Consequatur laudantium quasi mollitia, itaque eum libero voluptatem
            tenetur repellat quidem reiciendis officiis, id aliquid beatae
            aspernatur? Molestias impedit corrupti ad animi maxime dignissimos
            mollitia, quibusdam, explicabo aliquid, perspiciatis sed. Cupiditate
            molestiae impedit similique a, pariatur quos doloribus cumque! Iste
            doloremque, at deleniti vero non, perspiciatis quia, illo sequi
            cumque rem veritatis explicabo repellat. Laborum sint nisi doloribus
            minus saepe. Cupiditate voluptatem ad, saepe ducimus error vel,
            nostrum reprehenderit ipsa vero velit rem similique nisi atque iusto
            sunt voluptas accusamus, sint neque quae placeat expedita earum
            quos. Rem, a placeat.
          </p>
        </div>
        <div className="col-span-1 bg-red-300">
          <p>Barra lateral direita</p>
        </div>
        <div className="col-span-4 bg-red-700">footer</div>
      </div>

      <div className="grid grid-cols-4 bg-purple-600">
        <div className="col-span-4">navegação</div>
        <div className="col-span-1">
          <ul>
            <li>home</li>
            <li>sobre</li>
            <li>contato</li>
          </ul>
        </div>
        <div className="col-span-3">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio
          fugiat deserunt, ipsam aliquam quos fuga ipsum, ullam vel et
          blanditiis facere aut illum, eaque atque itaque pariatur provident eos
          doloremque?*10
        </div>
      </div>

      {/* rows */}
      <div className="grid grid-rows-5 grid-flow-col m-4">
        <div className="bg-orange-300">1</div>
        <div className="bg-orange-900">2</div>
        <div className="bg-orange-300">3</div>
        <div className="bg-orange-900">4</div>
        <div className="bg-orange-300">5</div>
        <div className="bg-orange-900">6</div>
        <div className="bg-orange-300">7</div>
        <div className="bg-orange-900">8</div>
        <div className="bg-orange-300">9</div>
        <div className="bg-orange-900">10</div>
      </div>

      {/* gap */}
      <div className="grid grid-cols-3  gap-2 m-4">
        <div className="bg-pink-300">1</div>
        <div className="bg-pink-900">2</div>
        <div className="bg-pink-300">3</div>
        <div className="bg-pink-900">4</div>
        <div className="bg-pink-300">5</div>
        <div className="bg-pink-900">6</div>
        <div className="bg-pink-300">7</div>
        <div className="bg-pink-900">8</div>
        <div className="bg-pink-300">9</div>
        <div className="bg-pink-900">10</div>
      </div>
      <div className="grid grid-cols-2 mb-10 gap-2">
        <div className="bg-red-900 p-2 ">x</div>
        <div className="bg-red-200 p-2 ">x</div>
        <div className="bg-red-900 p-2 ">x</div>
        <div className="bg-red-200 p-2 ">x</div>
      </div>
    </>
  );
}

export default App;
