import Footer from "@/components/Footer";
import MenuBar from "@/components/MenuBar";
import ImageProfile from "@/components/imageProfile";

export default function PropsPage() {
  return (
    <div>
      <MenuBar page={"Props"} />
      <div className="bg-amber-800 p-4">
        <h1 className="text-6xl text-center ibm-plex-sans-thai-bold">Props</h1>
        <h1 className="text-center text-3xl p-4 font-extrabold">
          Components รูป
        </h1>
        <ImageProfile src="https://cms.dmpcdn.com/moviearticle/2024/01/30/049ebed0-bf2d-11ee-8c12-75bbd15bc531_webp_original.webp" />
        <ImageProfile src="https://th.bing.com/th/id/R.9f2834318da4cd3d0b8ada7412ec3f20?rik=RJAxC0bVKAKqfw&pid=ImgRaw&r=0" />
        <p className="text-center text-3xl p-4 ibm-plex-sans-thai-extralight">
          Props เป็นเหมือน function ที่มีการรับ input จากภายในเพื่อคุม system
          ภายใน
        </p>
      </div>
      <Footer />
    </div>
  );
}
