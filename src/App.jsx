import { useCallback, useState } from "react";
import Countdown from "./components/Countdown";
import BirthdayExperience from "./components/BirthdayExperience";

function App() {
  const target =
    new Date("2026-08-18T00:00:00+05:30").getTime();

  const [unlocked, setUnlocked] = useState(true);

  const handleUnlock = useCallback(() => {
    setUnlocked(true);
  }, []);

  return unlocked ? (
    <BirthdayExperience />
  ) : (
    <Countdown onUnlock={handleUnlock} />
  );
}

export default App;