import { useContext } from 'react';
import styles from './styles.module.css';
import LanguageContext from '../../context/LanguageContext';

export default function TextComponent() {
  const { lang } = useContext(LanguageContext);
  return (
    <p>
      {lang === 'en'
        ? 'English language was choosen'
        : 'Был выбран русский язык'}
    </p>
  );
}
