import BtnSwitch from './../btnSwitch';
import TextComponent from './../textComponent';
import styles from './styles.module.css';

export default function SwitchLanguage() {
  return (
    <div className={styles.container}>
      <TextComponent />
      <BtnSwitch />
    </div>
  );
}
