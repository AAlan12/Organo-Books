// @ts-ignore
import React from 'react';
import styles from './styles.module.css';


interface ButtonsProps {
  txt: string;
}

const Buttons: React.FC<ButtonsProps> = ({ txt }) => {
  return (
    <button className={styles.section_buttons}>
      {txt}
    </button>
  );
}

export default Buttons;