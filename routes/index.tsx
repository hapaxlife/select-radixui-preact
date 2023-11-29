import SelectDemo from "../islands/Select.tsx";
import SelectBasic from "../islands/SelectBasic.tsx";

export default function Home() {
  return (
    <div class="px-4 py-8 mx-auto bg-[#86efac]">
      <b>Select freezes screen</b>
      <p>Basic</p>
      <SelectBasic />
      <p>Demo</p>
        <SelectDemo  />
    </div>
  );
}
