import { useState, useEffect, useRef } from "react";

const useLazyLoad = (src) => {
  const [source, setSource] = useState(null);
  const imgRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setSource(src);
          observer.disconnect();
        }
      });
    });

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => {
      if (imgRef.current) {
        observer.unobserve(imgRef.current);
      }
    };
  }, [src]);

  return [source, imgRef];
};

export default useLazyLoad;
