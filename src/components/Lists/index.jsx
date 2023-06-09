import styles from './styles.module.css';

function Lists({ mandatory, label, itens, val, onChanged }) {
  return (
    <div className={styles.container_lists}>
        <label>{label}</label>
        <select onChange={event => onChanged(event.target.value)} required={mandatory} value={val}>
            <option />
            {itens.map(item => <option key={item}>{item}</option>)}
        </select>
    </div>
  );
}

export default Lists;