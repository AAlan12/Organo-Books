import styles from './styles.module.css';

function Input({ label, type, placeholder }) {
    return (
        <div className={styles.input_container}>
            <label>{label}</label>
            <input type={type} placeholder={placeholder} />
        </div>
    );
}

export default Input;