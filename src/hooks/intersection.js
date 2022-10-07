import { useEffect, useState } from "react";

function useOnIntersect(elem = null) {
  const [show, setShow] = useState(false);
  useEffect(() => {
    if (window.IntersectionObserver) {
      if (elem.current) {
        const options = {
          threshold: 0,
        };
        const elemObserver = new IntersectionObserver((entries) => {
          const currentImage = entries[0];
          if (!currentImage.isIntersecting) return;
          setShow(true);
          elemObserver.unobserve(currentImage.target);
        }, options);
        elemObserver.observe(elem?.current);
      }
    } else {
      setShow(true);
    }
  }, [elem]);
  return show;
}

export default useOnIntersect;
