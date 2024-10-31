import "./index.css";
import Info from "./components/Info";
import RandomQuote from "./components/RandomQuote";
import RippleManager from "./components/RippleManager";
import ToggleTheme from "./components/ToggleTheme";

export default function App() {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-center gap-y-4">
        <Info />
        <RandomQuote />
      </main>
      <ToggleTheme />
      <RippleManager />
    </>
  );
}