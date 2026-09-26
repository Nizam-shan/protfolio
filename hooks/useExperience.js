import { useState, useEffect } from "react";
import { getExperience } from "../utils/experience";

export function useExperience() {
  // Initialize with deterministic default matching current date
  const [exp, setExp] = useState(() => getExperience());

  useEffect(() => {
    // Recalculate on mount to ensure exact client date match
    setExp(getExperience());
  }, []);

  return exp;
}

export default useExperience;
