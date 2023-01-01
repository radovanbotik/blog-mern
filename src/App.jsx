import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { RootLayout, FrontPage, PostPage, CreatePost } from "./pages";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<FrontPage />} />
      <Route path="post/:id" element={<PostPage />} />
      <Route path="create-post" element={<CreatePost />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
