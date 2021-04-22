import Head from 'next/head'
import { Grid } from 'semantic-ui-react'
import Nav from '../components/Nav'
import styles from '../styles/Home.module.css'

export default function Home() {

  return (
    <div className={styles.container}>
      <div className={styles.overlay}>
        <Head>
          <title>Create Next App</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Nav />
        <Grid centered stackable className={styles.main}>
          <Grid.Row columns={3}>
            <Grid.Column className={styles.col}>
              Col 1            
            </Grid.Column>
            <Grid.Column className={styles.col}>
              Col 2
            </Grid.Column>
            <Grid.Column className={styles.col}>
              Col 3
            </Grid.Column>
          </Grid.Row>

          <Grid.Row columns={3}>
            <Grid.Column className={styles.col}>
              Col 4
            </Grid.Column>
            <Grid.Column className={styles.col}>
              Col 5
            </Grid.Column>
            <Grid.Column className={styles.col}>
              Col 6
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    </div>
  )
}