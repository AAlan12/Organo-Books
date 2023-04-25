import styles from './styles.module.css';

function Lists({ label, itens }) {
  return (
    <div className={styles.container_lists}>
        <label>{label}</label>
        <select>
            {itens.map(item => {
                return <option key={item}>{item}</option>
            })}
        </select>
    </div>
  );
}

export default Lists;