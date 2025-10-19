import { IconSearch } from "../Icons";

export default function SearchInput(props) {
  return (
    <div className="flex items-center bg-neutral-header py-3 px-4 gap-4 rounded-lg">
      <IconSearch />
      <input type="text" className="w-full text-neutral-text leading-[125%] text-[20]" {...props}/>
    </div>
  )
}
