import { useState } from 'react';

import styles from './customselect.module.scss';
import SelectItem from './SelectItem';

const CustomSelect = ({ selectedValue, data, changeValueFn, placeholder }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleChangeValue = (value) => {
    changeValueFn(value);
    setIsOpen(false);
  };

  return (
    <div className={styles.container}>
      <div className={styles.header} onClick={handleToggleDropdown}>
        {selectedValue ? selectedValue : placeholder}
      </div>
      {isOpen && (
        <ul className={styles.dropdownList}>
          {data.map((el) => (
            <SelectItem
              key={el}
              item={el}
              change={() => handleChangeValue(el)}
            />
          ))}
        </ul>
      )}
    </div>
  );
};

export default CustomSelect;
