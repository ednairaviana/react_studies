import styles from "./Card.module.css";

function CardModule() {
  return (
    <div className={styles.cardModule}>
      This card has been styled from Card.module.css. It&apos;s good for
      especific components.It generates an unique class to avoid name conflicts.
    </div>
  );
}

export default CardModule;
