"use client";
import Footer from "@/components/Footer";
import MenuBar from "@/components/MenuBar";
import { useState } from "react";

export default function StatePage() {
  const [count, setCount] = useState(0);
  const [isLightOn, setIsLightOn] = useState(false);
  const [animal, setAnimal] = useState("?");
  return (
    <div className="text-center">
      <MenuBar />
      {/*section 1*/}
      <div className="section1-box">
        <h1 className="section1-name ibm-plex-sans-thai-bold">State Page</h1>
        <img
          className="section1-profile-img"
          src="https://cms.dmpcdn.com/moviearticle/2024/01/30/049ebed0-bf2d-11ee-8c12-75bbd15bc531_webp_original.webp"
          alt="Profile-img"
        />
        <p className="section1-caption ibm-plex-sans-thai-extralight">
          เนื้อหางาน week3 จะเป็นการสอนเพิ่มเติมเกี่ยวกับ css สอนและเริ่มต้นใช้
          framework ต่างๆ"
        </p>
        <p className="section1-caption ibm-plex-sans-thai-extralight">
          โดยเฉพาะ tailwind ที่นำมาใช้เพื่อแทนการเขียน css และเริ่มใช้ Next.js
        </p>
      </div>
      <div className="bg-red-300 text-black">
        <br></br>
        <h1 className="text-center text-2xl ibm-plex-sans-thai-bold">
          Switch ไฟ
        </h1>
        <p className="text-center text-2xl ibm-plex-sans-thai-bold">
          เรียนรู้การ toggle state
        </p>
        <p className="text-center text-2xl ibm-plex-sans-thai-bold">
          state เป็นเหมือน Memory ในการเก็บข้อมูลไว้ จะเป็น boolen text number
          อะไรก็ตาม
        </p>
        <br></br>

        <div className="flex justify-center">
          <button
            className="bg-red-600 p-4 rounded-2xl text-3xl"
            onClick={() => setIsLightOn((prve) => !prve)}
          >
            เปิด / ปิดไฟ
          </button>
        </div>
        <div className="flex justify-center p-4">
          {isLightOn ? (
            <img src="https://www.w3schools.com/js/pic_bulbon.gif"></img>
          ) : (
            <img src="https://www.w3schools.com/js/pic_bulboff.gif"></img>
          )}
        </div>
        <div className="p-4">
          <h2 className="text-3xl text-center font-bold">เพิ่ม / ลดเลข</h2>
          <p className="tex-center font-bold">เรียนรู้การเพิ่ม / ลด state</p>
          <h1 className="text-center font-bold text-6xl mt-4 text-red-500">
            {count}
          </h1>
          <div className="flex justify-center gap-4 mt-4">
            <button
              className="p-4 font-bold text-2xl bg-yellow-600 rounded-xl"
              type="button"
              onClick={() => setCount((prev) => prev -1)}
            >
              -1
            </button>
            <button
              className="p-4 font-bold text-2xl bg-green-600 rounded-xl"
              type="button"
              onClick={() => setCount(count + 1)}
            >
              +1
            </button>
            <button
              className="p-4 font-bold text-2xl bg-blue-600 rounded-xl"
              type="button"
              onClick={() => setCount(count * 2)}
            >
              *2
            </button>
            <button
              className="p-4 font-bold text-2xl bg-red-600 text-white rounded-xl"
              type="button"
              onClick={() => setCount((prev) => 0)}
            >
              Reset
            </button>
          </div>
          <div className="text-center mt-4">
            <h1 className="text-center text-3xl font-bold">สัตว์ที่ชอบคือ</h1>
            <h1 className="text-2xl font-bold">{animal}</h1>
          </div>
          <div className="flex justify-center gap-4 mt-4">
          <button
              className="p-4 font-bold text-2xl bg-orange-500 rounded-xl"
              type="button"
              onClick={() => setAnimal((prev) => "Fox")}
            >
              Fox
            </button>
            <button
              className="p-4 font-bold text-2xl bg-gray-400 rounded-xl"
              type="button"
              onClick={() => setAnimal((prev) => "Wolf")}
            >
              Wolf
            </button>
            <button
              className="p-4 font-bold text-2xl bg-purple-400 rounded-xl"
              type="button"
              onClick={() => setAnimal((prev) => "Cat")}
            >
              Cat
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
