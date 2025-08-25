import "./App.css";
import sprite from "./assets/sprite.svg";
import aire from "../public/aire.jpg";
import chill from "../public/chill.jpg";
import abrazo from "../public/abrazo.jpg";
import patitas from "../public/patitas.jpg";
import { BsCheckCircleFill } from "react-icons/bs";
import { useState, useEffect } from "react";

const App = () => {
  const [indice, setIndice] = useState(0);
  const imagenes = [patitas, aire, chill, abrazo];
  useEffect(() => {
    const intervalo = setInterval(() => {
      // pasa a la siguiente imagen, vuelve al inicio si llega al final
      setIndice((item) => (item === imagenes.length - 1 ? 0 : item + 1));
    }, 4000);

    return () => clearInterval(intervalo); // limpia intervalo
  }, [imagenes.length]);

  return (
    <div className=" border-black min-h-dvh bg-gradient-to-t from-[#f7e583] via-amber-500 to-orange-600 items-center justify-center">
      <section className=" flex flex-col items-center justify-center z-10">
        <img
          src={imagenes[indice]}
          alt="dexter en el aire"
          className="h-130 object-cover mask-radial-at-center mask-radial-from-60% mask-radial-to-70%"
        />

        <section className="flex flex-col justify-center items-center -mt-5 gap-2">
          <span className="flex text-sky-800 text-xl font-mono gap-1 px-3 py-1 items-center border border-orange-600/50 rounded-full shadow-md bg-white/30 cursor-crosshair">
            @dexMorgan <BsCheckCircleFill />
          </span>

          <h1 className="text-3xl font-extrabold text-gray-900 leading-tight mt-1 mb-1">
            Dexter "Bigotes" Morgan
          </h1>
        </section>
        <section className="flex gap-2 justify-center">
          <a
            className="bg-pink-100 p-2 size-12 sm:size-16 flex items-center justify-center rounded-full hover:scale-110 transition-transform "
            href="https://twitch.tv/"
            target="_blank"
            aria-label="Twitch"
            title="Ir a Twitch"
          >
            <svg width={28} height={28}>
              <use href={`${sprite}#twitch`} />
            </svg>
          </a>

          <a
            className="bg-gray-900 p-2 size-12 sm:size-16 flex items-center justify-center rounded-full hover:scale-110 transition-transform "
            href="https://github.io/"
            target="_blank"
            aria-label="Github"
            title="Ir a Github"
          >
            <svg width={28} height={28}>
              <use href={`${sprite}#github`} />
            </svg>
          </a>

          <a
            className="bg-linear-to-tr from-yellow-300 via-pink-600 to bg-purple-600 to-[#8B2CAD] from p-2 size-12 sm:size-16 flex items-center justify-center rounded-full hover:scale-110 transition-transform "
            href="https://www.instagram.com/"
            target="_blank"
            s
            aria-label="Instagram"
            title="Ir a Instagram"
          >
            <svg width={28} height={28}>
              <use href={`${sprite}#instagram`} />
            </svg>
          </a>

          <a
            className="bg-white from p-2 size-12 sm:size-16 flex items-center justify-center rounded-full hover:scale-110 transition-transform "
            href="https://youtube.com"
            target="_blank"
            aria-label="Youtube"
            title="Ir a Youtube"
          >
            <svg width={28} height={28}>
              <use href={`${sprite}#youtube`} />
            </svg>
          </a>

          <a
            className="bg-black from p-2 size-12 sm:size-16 flex items-center justify-center rounded-full hover:scale-110 transition-transform "
            href="https://x.com/home"
            target="_blank"
            aria-label="X"
            title="Ir a X"
          >
            <svg width={28} height={28}>
              <use href={`${sprite}#x`} />
            </svg>
          </a>

          <a
            className="bg-white p-2 size-12 sm:size-16 flex items-center justify-center rounded-full hover:scale-110 transition-transform "
            href="https://www.linkedin.com/"
            target="_blank"
            aria-label="Linkedin"
            title="Ir a Linkedin"
          >
            <svg width={28} height={28}>
              <use href={`${sprite}#linkedin`} />
            </svg>
          </a>
        </section>
        <p className="text-center mt-4 text-sm text-gray-600 justify-center">
          Gato manchado que un día apareció en casa por arte de magia.
          Excéntrico devorador de alimentos y máximo temor de roedores.
        </p>
      </section>
    </div>
  );
};

export default App;
