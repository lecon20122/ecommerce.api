import { lazy } from "react";

export const lazyDelayed = (path: string, delay = 300) => {
  return lazy(() => Promise.all([
    import(path),
    new Promise((resolve) => setTimeout(resolve, delay)) // ensures minimal delay
  ]).then(([module]) => module));
}

// const Food = lazyDelayed('./components/Food')
