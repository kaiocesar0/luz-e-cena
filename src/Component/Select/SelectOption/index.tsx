interface SelectOption extends React.OptionHTMLAttributes<HTMLOptionElement>{
  value: string;
  label: string;
}


const SelectOption= ({value, label, ...res}: SelectOption) =>{
    return(
      <option value={value} {...res}> 
        {label}      
      </option>
    );
  };

export default SelectOption