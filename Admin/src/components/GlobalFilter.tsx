import { useState } from "react";
import { Input } from "./ui/input";
const GlobalFilter = ({ filter, setFilter }) => {
  const [value, setValue] = useState(filter);
  const onChange = (e) => {
    setValue(e.target.value);

    setFilter(e.target.value || undefined);
    console.log(filter);
  };
  return (
    <div>
      <Input value={value || ""} onChange={onChange} placeholder="search..." />
    </div>
  );
};

export default GlobalFilter;
