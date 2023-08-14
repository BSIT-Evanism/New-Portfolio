import styles from "./Loader.module.scss"

function Loader() {
  return (
    <div className={styles.bg}>
      <h1 className={styles.title}>Loading</h1>
    </div>
  )
}

export default Loader;
