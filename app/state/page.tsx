'use client';
import Footer from "@/components/Footer";
import MenuBar from "@/components/MenuBar";
import {useState} from "react";

export default function StatePage() {
    const [isLightOn, setIsLightOn] = useState(false)
    return (
        <div className="text-center">
            <MenuBar/>
            {/*section 1*/}
            <div className="section1-box">
                <h1 className="section1-name ibm-plex-sans-thai-bold">State Page</h1>
                <img className="section1-profile-img" src="https://cms.dmpcdn.com/moviearticle/2024/01/30/049ebed0-bf2d-11ee-8c12-75bbd15bc531_webp_original.webp" alt="Profile-img" />
                <p className="section1-caption ibm-plex-sans-thai-extralight">เนื้อหางาน week3 จะเป็นการสอนเพิ่มเติมเกี่ยวกับ css และการเริ่มต้นสอนใช้ framework ต่างๆ"</p>
                <p className="section1-caption ibm-plex-sans-thai-extralight">โดยเฉพาะ tailwind ที่จะทำมาใช้เพื่อแทนการเขียน css และเริ่มใช้ Next.js</p>
            </div>
            <div className="bg-red-300 text-black"><br></br>
                <h1 className="text-center text-2xl">Switch ไฟ</h1>
                <p className="text-center text-2xl">เรียนรู้การ toggle state</p><br></br>
                <div className="flex justify-center">
                    <button className="bg-red-600 p-4 rounded-2xl text-3xl" onClick={() => setIsLightOn((prve) => !prve)}>เปิด / ปิดไฟ</button>
                </div>
                {isLightOn ? <p className="text-center text-2xl">ไฟดับ</p> : <p className="text-center text-2xl">ไฟสว่าง</p>}
            </div>
            <Footer/>
        </div>
    );
}