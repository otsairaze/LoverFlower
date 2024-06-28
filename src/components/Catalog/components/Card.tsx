import { Typography } from "../../../shared";
import styles from "./Card.module.css";

interface CardProps {
  title: string;
  item: string[];
  inner: string;
}

export const Card = ({ title, item, inner }: CardProps) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles[inner]}>
        <Typography className={styles.title} tag="h3" variant="bold30">
          {title}
        </Typography>
        <ul className={styles.list}>
          {item.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};
