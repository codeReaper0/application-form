type InputTypes = {
  type: string;
  id: string;
  placeholder: string;
  label: string;
};

export const Input = ({type, id, placeholder, label}: InputTypes) => {
  return (
    <div className="py-4 grid grid-cols-[1fr,2fr] items-center w-full">
      <label htmlFor={id}>{label}</label>
      <input
        type={type}
        id={id}
        placeholder={placeholder}
        className="outline-none p-1 border-b border-b-black font-normal"
      />
    </div>
  );
};

export const SelectInput = ({type, id, placeholder, label}: InputTypes) => {
  return (
    <div className="py-4 grid grid-cols-[1fr,2fr] items-center w-full">
      <label htmlFor={id}>
        <span>{label}</span>
        <span></span>
      </label>
      <input
        type={type}
        id={id}
        placeholder={placeholder}
        className="outline-none p-1 border-b border-b-black font-normal"
      />
    </div>
  );
};
