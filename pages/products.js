import Head from 'next/head'
import Header from '../components/Header'

export default function Products() {
  return (
    <div className="page">
      <Head>
        <title>Products</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main>
        <h1>Products Page</h1>
      </main>
      <style jsx>{`
        .page {
          height: 100%;
        }
        main {
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
        }
      `}</style>

    </div>
  )
}
