import styles from './styles.module.css';
import ImgBanner from '../../assets/img/books.jpg'


function Banner() {
  return (
    <div>
        <img src={ImgBanner} alt="Livros" />
        <p>Organo Books</p>
    </div>
  );
}

export default Banner;