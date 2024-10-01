// hooks/useStorageSync.js
import { useEffect, useState } from "react";
import { loadData } from "./localStorage";

const useStorageSync = (key) => {
  const [data, setData] = useState(loadData(key));

  useEffect(() => {
    const handleStorageUpdate = () => {
      const updatedData = loadData(key);
      setData(updatedData);
    };

    window.addEventListener("storageUpdated", handleStorageUpdate);
    window.addEventListener("storage", handleStorageUpdate);

    return () => {
      window.removeEventListener("storageUpdated", handleStorageUpdate);
      window.removeEventListener("storage", handleStorageUpdate);
    };
  }, [key]);

  return data;
};

export default useStorageSync;
