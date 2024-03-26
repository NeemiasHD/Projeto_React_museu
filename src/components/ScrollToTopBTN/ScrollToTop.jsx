import React from "react";
import "./Scroll.css"
function ScrollToTop() {
  window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
      document.querySelector(".scrollToTop").style.opacity = 1;
    } else {
      document.querySelector(".scrollToTop").style.opacity = 0;
    }
  });
  return (
    <div
      className="scrollToTop"
      onClick={() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }}
    >
      <i class="bx bxs-chevron-up"></i>
    </div>
  );
}

export default ScrollToTop;
