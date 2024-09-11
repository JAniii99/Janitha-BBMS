import React from 'react';
import { Routes, Route } from 'react-router-dom'; 
import routerss from './routers/routerss'; 

function AppRoute() {
  return (
    <Routes>
      {routerss.map((item) => {
        return (
          <Route
            key={item.path}
            path={item.path}
            element={item.element}
          />
        );
      })}
    </Routes>
  );
}

export default AppRoute;
