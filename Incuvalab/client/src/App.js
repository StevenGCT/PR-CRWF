import { Routes, Route } from "react-router-dom";
import { HomePage, NotFoundPage, Donate, Confirmation } from "./pages";
import { PostProvider } from "./context/postContext";
import { PostProvider2 } from "./context/postContext2";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div className="bg-neutral-900 min-h-screen flex items-center">
      <div className="px-10 container m-auto py-4">
        <PostProvider>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/new" element={<Donate />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
          <Toaster />
        </PostProvider>
        <PostProvider2>
          <Routes>
            <Route path="/confirm" element={<Confirmation />} />
          </Routes>
          <Toaster />
        </PostProvider2>
      </div>
    </div>
  );
}

export default App;