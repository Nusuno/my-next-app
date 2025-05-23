import MenuBar from "@/components/MenuBar";
import Footer from "@/components/Footer";
import ImageProfile from "@/components/imageProfile";
export default function IndexPage() {
  return (
    <div>
      {/*menu*/}
      <MenuBar page={"Home"} />
      {/*section 1*/}
      <div className="section1-box">
        <h1 className="section1-name ibm-plex-sans-thai-bold">
          Hey I'm Nuttawut
        </h1>
        <p className="section1-meta-data ibm-plex-sans-thai-extralight">
          I'm a student at Rajamangala University of Technology Krungthep
        </p>
        <ImageProfile src="https://cms.dmpcdn.com/moviearticle/2024/01/30/049ebed0-bf2d-11ee-8c12-75bbd15bc531_webp_original.webp" />
        <p className="section1-caption ibm-plex-sans-thai-extralight">
          คนที่กำมือแล้วทำให้ดูเหมือนกับมีของบางอย่างอยู่ในมือคือ "นักมายากล"
        </p>
        <p className="section1-caption ibm-plex-sans-thai-extralight">
          และคนที่ต้องทายของในมือให้ถูกก่อนที่จะแบมือเฉลยก็คือ "นักสืบ"
        </p>
      </div>
      {/*section 2*/}
      <div className="section2-box">
        <a
          href="https://web.facebook.com/nath.wut.hi.chay.vththi"
          className="section2-contact-link ibm-plex-sans-thai-bold"
        >
          Facebook
          <br />
        </a>
        <a
          href="https://discord.gg/NpyFuE3y"
          className="section2-contact-link ibm-plex-sans-thai-bold"
        >
          Linkedis
          <br />
        </a>
        <a
          href="https://github.com/Nusuno"
          className="section2-contact-link ibm-plex-sans-thai-bold"
        >
          Github
          <br />
        </a>
      </div>
      {/*section 3*/}
      <div className="section3-box">
        <div className="section3-box-A">
          <h1 className="section3-title-A ibm-plex-sans-thai-bold">
            ประสบการณ์
          </h1>
          <p className="section3-subText-A-1 ibm-plex-sans-thai-bold">
            การศึกษา
          </p>
          <p
            style={{ fontWeight: 300 }}
            className="section3-subText-A-2 ibm-plex-sans-thai-bold"
          >
            ระดับประถมศึกษา
          </p>
          <p className="section3-subText-A-1 ibm-plex-sans-thai-extralight">
            โรงเรียนบ้านคลองสมบูรณ์ จังหวัดสมุทรสงคราม
          </p>
          <p
            style={{ fontWeight: 300 }}
            className="section3-subText-A-2 ibm-plex-sans-thai-bold"
          >
            ระดับมัธยมศึกษา
          </p>
          <p className="section3-subText-A-1 ibm-plex-sans-thai-extralight">
            โรงเรียนบ้านคลองสมบูรณ์ จังหวัดสมุทรสงคราม
          </p>
          <p
            style={{ fontWeight: 300 }}
            className="section3-subText-A-2 ibm-plex-sans-thai-bold"
          >
            ระดับประกาศนียบัตรวิชาชีพ
          </p>
          <p className="section3-subText-A-1 ibm-plex-sans-thai-extralight">
            วิทยาลัยเทคนิคสมุทรสงคราม
          </p>
          <p
            style={{ fontWeight: 300 }}
            className="section3-subText-A-2 ibm-plex-sans-thai-bold"
          >
            ระดับประกาศนียบัตรวิชาชีพชั้นสูง
          </p>
          <p className="section3-subText-A-1 ibm-plex-sans-thai-extralight">
            วิทยาลัยเทคนิคสมุทรสงคราม
          </p>
        </div>
        <div className="section3-box-B">
          <h1 className="section3-title-B ibm-plex-sans-thai-bold">
            Skill &amp; Interests
          </h1>
          <p className="section3-subText-B-1 ibm-plex-sans-thai-extralight">
            ********
          </p>
          <p
            style={{ fontWeight: 300 }}
            className="section3-subText-B-2 ibm-plex-sans-thai-bold"
          >
            ********
          </p>
          <p className="section3-subText-B-1 ibm-plex-sans-thai-extralight">
            ********
          </p>
          <p
            style={{ fontWeight: 300 }}
            className="section3-subText-B-2 ibm-plex-sans-thai-bold"
          >
            ********
          </p>
          <p className="section3-subText-B-1 ibm-plex-sans-thai-extralight">
            ********
          </p>
          <p
            style={{ fontWeight: 300 }}
            className="section3-subText-B-2 ibm-plex-sans-thai-bold"
          >
            ********
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
