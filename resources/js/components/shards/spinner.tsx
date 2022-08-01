import React from "react";



export const Spinner = ({ timeDelay  = 0 }: any) => {
  const [ready, setReady] = React.useState(timeDelay === 0);
  React.useEffect(() => {
    let timeout: any = null;
    if (!ready) {
      timeout = setTimeout(() => setReady(true), timeDelay);
    }
    return () => {
      if (timeout) clearTimeout(timeout);
    };
  }, []);
  if (!ready) return null;
  return (
    <div>
      <svg className="animate-spin h-5 w-5 mr-3 ..." viewBox="0 0 24 24">
      </svg>
      Loading...
    </div>
  );
};
