import styles from './styles.module.css';

function Input({ mandatory, label, type, placeholder, val, onChanged }) {

    const modPlaceholder = `${placeholder}...`

    const onType = (event) => {
        onChanged(event.target.value) 
    }

    return (
        <div className={styles.input_container}>
            <label>{label}</label>
            <input  value={val}
                    onChange={onType}
                    type={type} 
                    required={mandatory}  
                    placeholder={modPlaceholder} />
        </div>
    );
}

export default Input;