import { useState, useEffect } from "react";

export function useScrollTrigger() {
  const [pageIndex, setPageIndex] = useState(0);
  const [currentPageScrollY, setCurrentPageScrollY] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onScroll = (e) => {
    // const y = e.target.scrollTop;
    const y = window.scrollY;
    setCurrentPageScrollY(y % window.innerHeight);
    const pageIndex = Math.floor(y / window.innerHeight);
    setPageIndex(pageIndex);
  };

  return { pageIndex, currentPageScrollY };
}
