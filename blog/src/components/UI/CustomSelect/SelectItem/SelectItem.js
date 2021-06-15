import styles from './selectItem.module.scss';

const SelectItem = ({ item, change }) => {
  return (
    <div className={styles.item} onClick={change}>
      <li>{item}</li>
    </div>
  );
};

export default SelectItem;
