import { Button, Typography } from "../../shared";
import styles from "./Header.module.css";
import background from "../../../public/Header/bg.png";
import fEllipse from "../../../public/Header/ellipse-1.png";
import sEllipse from "../../../public/Header/ellipse-2.png";

export const Header = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.inner}>
        <Typography className={styles.title} tag="h1" variant="light200">
          Lover Flower
        </Typography>
        <p className={styles.desc}>
          Создаём для тех, кто ценит свежесть и изящество цветка
        </p>
        <Button className={styles.button} variant="contained">
          Смотреть каталог
        </Button>
        <img className={styles.img} src={background} alt="background" />
        <img src={fEllipse} alt="ellipse" className={styles.ellipse1} />
        <img src={sEllipse} alt="ellipse" className={styles.ellipse2} />
      </div>
    </div>
  );
};
