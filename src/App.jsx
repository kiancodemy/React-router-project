import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import RootLayout from "./layout/layout";
import Home from "./pages/Home";
import About from "./pages/about";
function App() {
  const rout = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<RootLayout></RootLayout>}>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
      </Route>
    )
  );
  return <RouterProvider router={rout}></RouterProvider>;
}

export default App;
