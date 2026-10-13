import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/Layout";
import StudentListPage from "./pages/StudentListPage";
import FavouritesPage from "./pages/FavouritesPage";

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<StudentListPage />} />
        <Route path="/favourites" element={<FavouritesPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Layout>
  );
}