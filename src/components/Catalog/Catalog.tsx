import { Typography } from "../../shared";
import styles from "./Catalog.module.css";
import { Card } from "./components/Card";
import date from "./date.json";
import ellipse1 from "../../../public/Catalog/ellipse-1.png";
import ellipse2 from "../../../public/Catalog/ellipse-2.png";

export const Catalog = () => {
  const cardClasses = ["card1", "card2", "card3"];

  return (
    <div className={styles.wrapper}>
      <Typography className={styles.title} variant="regular100" tag="p">
        Каталог
      </Typography>
      <Typography className={styles.desc} variant="light20" tag="p">
        У нас самый большой выбор цветов, букетов, открыток и подарков. Мы
        всегда поможем вам подобрать букет для вашего события, наш менеджер вас
        проконсультирует и поможет определиться с выбором
        <br />
        <br />
        Ознакомьтесь с нашими разделами каталога
      </Typography>
      {date.map((item, index) => (
        <Card
          key={index}
          title={item.title}
          item={item.list}
          inner={cardClasses[index]}
        />
      ))}

      <Typography tag="p" variant="bold200" className={styles.bouquet}>
        Букеты
      </Typography>
      <Typography tag="p" variant="bold200" className={styles.flowers}>
        Цветы
      </Typography>
      <Typography tag="p" variant="bold200" className={styles.additionally}>
        Дополнит
      </Typography>

      <img className={styles.ellipse1} src={ellipse1} alt="" />
      <img className={styles.ellipse2} src={ellipse2} alt="" />
    </div>
  );
};
