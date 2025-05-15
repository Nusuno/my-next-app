"use client";

import Footer from "@/components/Footer";
import MenuBar from "@/components/MenuBar";
import MovieCard from "@/components/MovieCard";
import axios from "axios";
import { fdatasync } from "fs";
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

      <div className=" bg-blue-200 text-center p-4">
        <h1 className="text-6xl text-center ibm-plex-sans-thai-bold">
          UseEffect
        </h1>
        <p className="text-center text-3xl ibm-plex-sans-thai-extralight  text-black">
          useEffect หรือ react Hook เป็นการติดต่อกับ System ภายนอก (API)
        </p>

        <div className="justify-items-center p-4">
          {movieList.map(
            (
              item: {
                title?: string;
                name?: string;
                overview?: string;
                poster_path?: string;
              },
              index
            ) => (
              <div className="p-4 w-100 bg-blue-300">
                <div className="bg-blue-400 p-4">
                  <MovieCard src={item.poster_path} />
                  <h2 className="text-2xl text-black ibm-plex-sans-thai-bold">
                    {item.title}
                  </h2>
                  <h2 className="text-2xl text-black ibm-plex-sans-thai-bold">
                    {item.name}
                  </h2>
                  <p className="text-xl text-black ibm-plex-sans-thai-extralight">
                    {item.overview}
                  </p>
                </div>
              </div>
            )
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}