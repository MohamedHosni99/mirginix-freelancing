import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";


export default function ScrollBehaviorManager() {
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    const doc = document.documentElement;
    const body = document.body;

   
    const prevDocBehavior = doc.style.scrollBehavior;
    const prevBodyBehavior = body.style.scrollBehavior;

    if (pathname === "/" || pathname === "/#hero") {
      doc.style.scrollBehavior = "smooth";
      body.style.scrollBehavior = "smooth";

    } else {
      
      doc.style.scrollBehavior = "auto";
      body.style.scrollBehavior = "auto";

      doc.scrollTop = 0;
      body.scrollTop = 0;
      if (typeof window !== "undefined") {
        window.scrollTo(0, 0);
      }
    }

    return () => {
      doc.style.scrollBehavior = prevDocBehavior || "";
      body.style.scrollBehavior = prevBodyBehavior || "";
    };
  }, [pathname]);

  return null;
}
