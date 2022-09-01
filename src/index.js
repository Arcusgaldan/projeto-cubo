import { render } from "react-dom";
import { 
  BrowserRouter, 
  Routes,
  Route,
} from "react-router-dom";
import App from "./App";
import Page1 from "./routes/page1";
import Page2 from "./routes/page2";


const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route path="page1" element={<Page1 />} />
      <Route path="page2" element={<Page2 />} />
    </Routes>
  </BrowserRouter>,
  rootElement
);