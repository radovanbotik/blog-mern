import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import {
  RootLayout,
  FrontPage,
  PostPage,
  CreatePost,
  UserSettings,
  Login,
  Register,
  AllPostsPage,
  MyPostsPage,
} from "./pages";
import { useBlogData } from "./context/BlogContext";

function App() {
  const {
    globalState: { user },
  } = useBlogData();
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={user ? <FrontPage /> : <Register />} />
        <Route path="login" element={user ? <FrontPage /> : <Login />} />
        <Route
          path="create-post"
          element={user ? <CreatePost /> : <Register />}
        />
        <Route path="post/:id" element={<PostPage />} />
        <Route path="user" element={user ? <UserSettings /> : <Register />} />
        <Route path="register" element={<Register />} />
        <Route path="posts" element={<AllPostsPage />} />
        <Route path="my-posts" element={<MyPostsPage />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
}

export default App;
