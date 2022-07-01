import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Manga from "./components/Manga";
import Bookshelf from "./pages/Bookshelf";
import Carouselpage from "./pages/Carouselpage";
import HomePage from "./pages/HomePage";
import LatestPage from "./pages/LatestPage";
import ListPage from "./pages/ListPage";
import MangaPage from "./pages/MangaPage";
import PlayGroundPage from "./pages/PlayGroundPage";
import RandomPage from "./pages/RandomPage";
import SearchPage from "./pages/SearchPage";
import ShortvideoPage from "./pages/ShortvideoPage";
import VideoPage from "./pages/VideoPage";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Latest" element={<LatestPage />} />
          <Route path="/List/:producer" element={<ListPage />} />
          <Route path="/Random" element={<RandomPage />} />
          <Route path="/Search" element={<SearchPage />} />
          <Route path="/Video/:series/:id" element={<VideoPage />} />
          <Route path="/Carousel" element={<Carouselpage />} />
          <Route path="/PlayGround" element={<PlayGroundPage />} />
          <Route path="/Shortvideo" element={<ShortvideoPage />} />
          <Route path="/Manga/:name" element={<MangaPage />} />
          <Route path="/Manga/:name/:title" element={<Manga />} />
          <Route path="/Bookshelf" element={<Bookshelf />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
