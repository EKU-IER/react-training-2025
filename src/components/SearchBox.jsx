import { useId } from "react";

export function SearchBox({
  placeholder = "Placeholder",
  label = "Label",
  type = "text",
  value = "",
  onChange,
}) {
  const id = useId();

  const handleChange = (e) => onChange(e.target.value);

  return (
    <div>
      <label className="form-label" htmlFor={id}>
        {label}
      </label>
      <input
        placeholder={placeholder}
        className="form-control"
        onChange={handleChange}
        value={value}
        type={type}
        id={id}
      />
    </div>
  );
}
