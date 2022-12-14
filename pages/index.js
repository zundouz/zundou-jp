import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>zundou</title>
        <meta name="description" content="Generated by create next app" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          zundou
        </h1>
          <h2>event log</h2>
          <ul>
            <li>unity 1 週間ゲームジャム(2022.09 「ためる」) 参加作品</li>
            <a href="https://unityroom.com/games/borobaketsu_bakkun">
              <img 
                src="/u1w_baketsu.gif"
                alt="u1w_baketsu"
                width="40%"
                height="40%"
              />
            </a>
            <li>Twitterの時間制限付き制作イベント</li>
              <ul>
                <li>
                  <a href="https://twitter.com/search?q=%23%E6%B7%B1%E5%A4%9C%E3%81%AE2%E6%99%82%E9%96%93DTM%20from%3A%40zundou_&src=typed_query&f=live">
                    「#深夜の2時間DTM」 過去の参加作品一覧
                  </a>
                </li>
                <li>
                  <a href="https://twitter.com/search?q=%2310%E5%88%86%E3%83%89%E3%83%83%E3%83%88%20from%3A%40zundou_&src=typed_query&f=live">
                    「#10分ドット」 過去の参加作品一覧
                  </a>
                </li>
              </ul>
          </ul>
          <h2>other link</h2>
            <a href="https://unityroom.com/users/mlcw42qtxj1hvk5upa3z">
              <img 
                src="/urcon.png"
                alt="unityroom_link"
                width="10%"
                height="10%"
              />
            </a>
            <a href="https://soundcloud.com/zundou">
              <img 
                src="/scicon.png"
                alt="soundcloud_link"
                width="10%"
                height="10%"
              />
            </a>
            <a href="https://twitter.com/zundou_">
              <img 
                src="/twicon.png"
                alt="twitter_link"
                width="10%"
                height="10%"
              />
            </a>
      </main>

      <footer className={styles.footer}>
      </footer>
    </div>
  )
}
