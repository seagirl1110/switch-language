import { useContext } from 'react';
import styles from './styles.module.css';
import LanguageContext from '../../context/LanguageContext';

export default function BtnSwitch() {
  const { lang, setLang } = useContext(LanguageContext);
  return (
    <button
      className={styles.btn}
      onClick={() => setLang(lang === 'en' ? 'ru' : 'en')}
    >
      Switch language
    </button>
  );
}
