import { createContext, useContext, useEffect, useMemo, useState } from "react";

const StudentContext = createContext(null);
const STORAGE_KEY = "favourite-student-list-v1";

export function StudentProvider({ children }) {
  const [favourites, setFavourites] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(favourites));
  }, [favourites]);

  const addFavourite = (student) => {
    setFavourites((current) =>
      current.some((item) => item.id === student.id) ? current : [...current, student]
    );
  };

  const removeFavourite = (studentId) => {
    setFavourites((current) => current.filter((student) => student.id !== studentId));
  };

  const isFavourite = (studentId) => favourites.some((student) => student.id === studentId);

  const value = useMemo(
    () => ({ favourites, addFavourite, removeFavourite, isFavourite }),
    [favourites]
  );

  return <StudentContext.Provider value={value}>{children}</StudentContext.Provider>;
}

export function useStudents() {
  const context = useContext(StudentContext);
  if (!context) throw new Error("useStudents must be used inside StudentProvider");
  return context;
}