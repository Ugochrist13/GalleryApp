import React from "react";
import { Routes, Route } from "react-router-dom";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import ImageGallery from "./pages/ImageGallery";
import Home from "./pages/Home";

const App: React.FC = () => {
  return (
    <DndProvider backend={HTML5Backend}>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<ImageGallery images={[]} />} />
        </Routes>
      </div>
    </DndProvider>
  );
};

export default App;
