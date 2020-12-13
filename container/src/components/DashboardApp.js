import { mountModule as mountDashboardApp } from "dashboard/DashboardApp";
import React, { useEffect, useRef } from "react";

export default () => {
  const ref = useRef(null);

  useEffect(() => {
    mountDashboardApp(ref.current);
  }, []);
  return <div ref={ref}></div>;
};
