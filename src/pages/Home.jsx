import Animation from "../components/Animation/Animation";
import styles from "./index.module.scss"

function Home() {
  return (
    <>
      <Animation>
        <h1 className={styles.title}>Home</h1>
      </Animation>
    </>
  )
}
export default Home;
