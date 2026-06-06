import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // Ha van #azonosító az URL-ben, ne ugorjon a tetejére, hanem keresse meg az elemet
    if (hash) {
      const element = document.getElementById(hash.substring(1));
      if (element) {
        setTimeout(() => element.scrollIntoView({ behavior: 'smooth' }), 100);
      }
    } else {
      // Egyébként mehet a tetejére
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
}
