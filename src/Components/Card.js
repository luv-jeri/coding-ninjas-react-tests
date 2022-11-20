import styles from '../Styles/card.module.css';

const Card = (props) => {
  return (
    <div className={styles.card}>
      <div>
        <img className={styles.img} src={props.image} alt={props.title} />
      </div>
      <div>
        <a href={props.url}>
          <h2>{props.title}</h2>
        </a>
        <a href={props.url}>
          <button className={styles.btn}>See More...</button>
        </a>
      </div>
    </div>
  );
};

export default Card;
