import styles from "./Navbar.module.css";
import logo from "../../../public/Navbar/logo.png";
import date from "./date.json";
import { Typography } from "../../shared";

export const Navbar = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.inner}>
        <img src={logo} alt="logo" className={styles.img} />
        <ul className={styles.ul}>
          {date.map((item, index) => (
            <li key={index} className={styles.li}>
              <a href="#">{item.item}</a>
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.block}>
        <div>
          <Typography className={styles.text} variant="regular16" tag="p">
            zakaz@loverflower.by
          </Typography>
          <Typography className={styles.delivery} tag="p" variant="regular16">
            Доставка 24/7 по договоренности с оператором
          </Typography>
        </div>
        <div>
          <Typography className={styles.address} variant="regular16" tag="p">
            ул. Тимирязева 67
          </Typography>
          <Typography className={styles.time} tag="p" variant="regular16">
            10:00 до 21:00 без выходных
          </Typography>
        </div>
      </div>
    </div>
  );
};
