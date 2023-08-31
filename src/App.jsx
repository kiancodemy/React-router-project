import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import { careersLoader } from "./pages/careers/career";
import CareersLayout from "./layout/careerlayout";
import Careers from "./pages/careers/career";
import Faq from "./pages/Help/faq";
import Contact from "./pages/Help/contact";
import HelpLayout from "./layout/helplayout";
import RootLayout from "./layout/layout";
import Home from "./pages/Home";
import About from "./pages/about";
import NotFound from "./pages/Help/notfound";
function App() {
  const rout = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route path="/" element={<Home />}></Route>
        <Route path="about" element={<About />}></Route>

        <Route path="help" element={<HelpLayout />}>
          <Route path="faq" element={<Faq />}></Route>
          <Route path="contact" element={<Contact />}></Route>
        </Route>

        <Route path="careers" element={<CareersLayout />}>
          <Route index loader={careersLoader} element={<Careers />}></Route>
        </Route>
        <Route path="*" element={<NotFound />}></Route>
      </Route>
    )
  );
  return <RouterProvider router={rout}></RouterProvider>;
}

export default App;
