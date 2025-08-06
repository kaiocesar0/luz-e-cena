import React from "react";
import styles from "./SelectGroup.module.css";

interface SelectGroup extends React.SelectHTMLAttributes<HTMLSelectElement> {
  icon?: React.ReactNode;
}

const SelectGroup = ({ icon, children, ...rest }: SelectGroup) => {
  return (
      <div className={styles.container}>
        {icon && <div className={styles.icone}>{icon}</div>}
      <select className={styles.select} {...rest}>
        {children}
      </select>
    </div>
  );
};

export default SelectGroup;