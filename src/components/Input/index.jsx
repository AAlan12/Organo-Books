import styles from './styles.module.css';

function Input({ label, type, mandatory,  placeholder }) {

    return (
        <div className={styles.input_container}>
            <label>{label}</label>
            <input  type={type} required={mandatory}  
                    placeholder={placeholder} />
        </div>
    );
}

export default Input;