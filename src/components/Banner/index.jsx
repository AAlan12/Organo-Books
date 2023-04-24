import styles from './styles.module.css';
import ImgBanner from '../../assets/img/books.jpg'
import Logo from '../../assets/img/logo.png'


function Banner() {
    return (
        <div className={styles.container_banner}>
            <div className={styles.container_logo}>
                <img src={Logo} alt="Logo da Organo Books" />
                <h2>Organo Books</h2>
            </div>
            <div className={styles.container_box}>
                <div className={styles.container_subtitle}>
                    <h3>Seus livros, quadrinhos e mangás</h3>
                    <p>organizados em um só lugar!</p>
                </div>
                <img src={ImgBanner} alt="Livros" />
            </div>
        </div>
    );
}

export default Banner;