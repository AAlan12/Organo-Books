import styles from './styles.module.css';
import Logo from '../../assets/img/logo.png'
import { FaFacebookSquare } from 'react-icons/fa';
import { FaTwitterSquare } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';

function Footer() {

    return (
        <footer className={styles.footer_container}>
            <section>
                <ul>
                    <li>
                        <a href="facebook.com" target="_blank">
                            <FaFacebookSquare size={30} style={{ fill: 'red' }} />
                        </a>
                    </li>
                    <li>
                        <a href="twitter.com" target="_blank">
                            <FaTwitterSquare size={30} style={{ fill: 'red' }} />
                        </a>
                    </li>
                    <li>
                        <a href="instagram.com" target="_blank">
                            <FaInstagram size={30} style={{ fill: 'red' }} />
                        </a>
                    </li>
                </ul>
            </section>
            <section>
                <img src={Logo} alt="" />
            </section>
            <section>
                <p>
                    Desenvolvido por <a href="https://github.com/AAlan12">Alan</a>.
                </p>
            </section>

        </footer>
    );
}

export default Footer;