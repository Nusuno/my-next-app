"use client";

import Footer from "@/components/Footer";
import MenuBar from "@/components/MenuBar";
import MovieCard from "@/components/MovieCard";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

export default function UseEffectPage() {
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/trending/all/week?api_key=229a6a0f891df5bf1176a4668af885c6"
      )
      .then((response) => {
        setMovieList(response.data.results);
      })
      .catch(() => {
        alert("Error");
      });
  }, []);

  return (
    <div>
      <MenuBar page={"UseEffect"} />

      <div className="bg-blue-500 text-center p-4">
        <h1 className="text-6xl text-center ibm-plex-sans-thai-bold">
          UseEffect
        </h1>

        {movieList.map((item, index) => (
          <div className="p-4 w-80 bg-blue-300">
            <div className="bg-blue-200 p-4">
              <MovieCard src={item.poster_path} />;
              <h2 className="text-2xl text-black font-bold">{item.title}</h2>
              <p className="text-xl text-black">{item.overview}</p>
            </div>
          </div>
        ))}

        <p className="text-center text-3xl p-4 ibm-plex-sans-thai-extralight">
          useEffect หรือ react Hook เป็นการติดต่อกับ System ภายนอก
        </p>
      </div>

      <Footer />
    </div>
  );
}
