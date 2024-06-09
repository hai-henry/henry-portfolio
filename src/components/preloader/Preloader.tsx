import { useEffect } from "react";
import gsap from "gsap";
import "./preloader.css";

const Preloader = () => {
  const load = gsap.timeline({ paused: true });
  load.to("#percent,#bar", { duration: 0.2, opacity: 0, zIndex: -1 });
  load.to(".progress", {
    duration: 0.8,
    width: "0%",
  });
  load.from(
    ".main__page__content",
    {
      duration: 0.8,
      opacity: 0,
      ease: "power4.out",
    },
    "-=.5",
  );
  load.from(
    ".main__page__content h1",
    {
      duration: 0.5,
      y: 50,
      skewY: 10,
      opacity: 0,
    },
    "-=1",
  );

  var id,
    width = 1;
  function frame() {
    if (width >= 100) {
      clearInterval(id);
      load.play();
    } else {
      width++;
      document.getElementById("bar__confirm").style.width = width + "%";
      document.getElementById("percent")?.innerHTML = width + "%";
    }
    window.onload = function () {
      loading();
    };
  }
  function loading() {
    id = setInterval(frame, 25);
  }

  return (
    <>
      <div className="loader">
        <div className="progress">
          <div id="bar">
            <div id="bar__confirm"></div>
          </div>
          <div id="percent">0%</div>
        </div>
      </div>
      <div className="main__page">
        <div className="main__page__content">
          <h1>Henry Portfolio</h1>
        </div>
      </div>
    </>
  );
};

export default Preloader;
