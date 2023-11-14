import styles from './page.module.css'

export default function Home() {
  return (
    <main>
        <div className={styles.titleContainer}>
            <h1 className={styles.h1}>
                Welcome to the <br/>
                <span className={styles.span}>Frontend Quiz!</span>
            </h1>
            <p className={styles.subtitle}>Pick a subject to get started.</p>
        </div>
        <div className="grid-right">
            <a href="" className="grid-items">HTML</a>
            <a href="" className="grid-items">CSS</a>
            <a href="" className="grid-items">Javascript</a>
            <a href="" className="grid-items">Accessibility</a>
        </div>
    </main>
  )
}
