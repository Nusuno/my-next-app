import Footer from "@/components/Footer";
import MenuBar from "@/components/MenuBar";

export default function StatePage() {
    return (
        <div className="text-center">
            <MenuBar/>
            {/*section 1*/}
            <div className="section1-box">
                <h1 className="section1-name ibm-plex-sans-thai-bold">State Page</h1>
                <img className="section1-profile-img" src="https://cms.dmpcdn.com/moviearticle/2024/01/30/049ebed0-bf2d-11ee-8c12-75bbd15bc531_webp_original.webp" alt="Profile-img" />
                <p className="section1-caption ibm-plex-sans-thai-extralight">เนื้อหางาน week3 จะเป็นการสอนเพิ่มเติมเกี่ยวกับ css และการเริ่มต้นสอนใช้ framework ต่างๆ"</p>
                <p className="section1-caption ibm-plex-sans-thai-extralight">โดยเฉพาะ tailwind</p>
            </div>
            <Footer/>
        </div>
    );
}