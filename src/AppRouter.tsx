// src/AppRouter.tsx
import { Routes, Route } from "react-router-dom";
import FortunePage from "./pages/FortunePage";

export default function AppRouter() {
  return (
    <Routes>
      {/* 기본 진입 시 1번 운세 보여주기 */}
      <Route path="/" element={<FortunePage />} />
      {/* 나중에 NFC용으로 /fortune/1, /fortune/2 이런 식으로 쓸 수 있게 */}
      <Route path="/fortune/:id" element={<FortunePage />} />
    </Routes>
  );
}
