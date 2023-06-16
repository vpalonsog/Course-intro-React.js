import React, { useState } from "react";

function useStorageListener(syncronize) {
  const [storageChange, setStorageChange] = useState(false);

  window.addEventListener("storage", (change) => {
    if (change.key === "TODOS_V1") {
      console.log("Hubo cambios en TODOS_V1");
      setStorageChange(true);
    }
  });

  const toggleShow = () => {
    syncronize();
    setStorageChange(false);
  };

  return {
    show: storageChange,

    toggleShow,
  };
}

export { useStorageListener };
