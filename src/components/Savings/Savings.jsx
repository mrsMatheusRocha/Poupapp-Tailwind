import { IconSavings } from "../Icons";
import ProgressBar from "../ProgressBar/ProgressBar";

export default function Savings() {
  return (
    <div className="flex flex-col gap-10">
      <p className="text-secondary-income flex items-center gap-2 justify-center text-xl leading-[125%]">
        <IconSavings /> Economizar
      </p>
      <ProgressBar percent={40}/>
    </div>
  );
}
