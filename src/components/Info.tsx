import Name from "./Name";
import Links from "./Links";

export default function Info() {
  return (
    <div className="flex flex-col items-center justify-center gap-y-4">
      <Name />
      <Links />
    </div>
  );
}
