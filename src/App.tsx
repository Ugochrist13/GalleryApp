import { Routes, Route } from "react-router-dom";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import Home from "./pages/Home";
import MovieDetailPage from "./pages/MovieDetailPage";
import NotFoundPage from "./pages/NotFoundPage";

const App: React.FC = () => {
  return (
    <DndProvider backend={HTML5Backend}>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies/:id" element={<MovieDetailPage />} />
          <Route element={<NotFoundPage />} />
        </Routes>
      </div>
    </DndProvider>
  );
};

export default App;
