import styles from './styles.module.css';

function Buttons({ txt }) {
  return (
    <button className={styles.section_buttons}>
        {txt}
    </button>
  );
}

export default Buttons;