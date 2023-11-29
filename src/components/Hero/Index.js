import React from "react";
import style from "./style.module.scss";

const HeroSection = () => {
  return (
    <section className={style.sectionContainer}>
      <div className={style.textContainer}>
        <h1>Lorem ipsum dolor sit amet consectetur.</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora sequi
          eius, corporis quam veritatis accusantium natus numquam eaque eveniet
          repudiandae.
        </p>
        <button>Get Started</button>
      </div>
      <div className={style.imageContainer}>
        <div className={style.streamContaner}>
          <div
            className={style.circle}
            style={{ backgroundColor: "purple" }}
          ></div>
          <img
            src="https://bingeddata.s3.amazonaws.com/uploads/2020/12/pooja-hegde.jpg"
            alt=""
          />
        </div>
        <div className={style.streamContaner}>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJ23cVvT6MI1utPhTgQCnBlKoyGImbOINNkMUIoVT0-8P1R-o-1L2n18-PGsIvgCJRz8E&usqp=CAU"
            alt=""
          />
          <div
            className={style.cylinder}
            style={{ backgroundColor: "orange" }}
          ></div>
        </div>
        <div className={style.streamContaner}>
          <div
            className={style.cylinder}
            style={{ backgroundColor: "orange" }}
          ></div>
          <img
            src="https://pbs.twimg.com/media/FqsbIKzWAAA2anX.jpg:large"
            alt=""
          />
          <img
            src="https://m.media-amazon.com/images/M/MV5BZmM3YTg2ZjUtNWMwMi00NWE2LWE1YmMtYWM1ZDViNmYzOWRkXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_.jpg"
            alt=""
          />
        </div>
        <div className={style.streamContaner}>
          <img
            src="https://cdn2.storyasset.link/S5Eevi5qj4d92Uhvv7vGDMZUebs2/c7f9a7c515c8dfa11c2a5343b49617e0-ms-vrzueyfpmo.jpg"
            alt=""
          />
          <div
            className={style.cylinder}
            style={{ backgroundColor: "#fff" }}
          ></div>
        </div>
        <div className={style.streamContaner}>
          <img
            src="https://img-mm.manoramaonline.com/content/dam/mm/mo/web-stories/movies/images/2023/3/20/ritu-singh-1.jpg"
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
