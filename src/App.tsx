import { BrowserRouter, useRoutes } from "react-router-dom";
import routes from "route-views";
import "./main.scss";
import "./polyfills";

function Routes() {
  return useRoutes(routes);
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  );
}
