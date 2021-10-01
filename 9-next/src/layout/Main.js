import Footer from 'cmp/Footer'
import Header from 'cmp/Header'
import Sidebar from 'cmp/Sidebar'

function Main ({ children }) {
  return (
    <div>
      <Header />
      <section style={{ display: 'flex' }}>
        <Sidebar />
        <article>{children}</article>
      </section>
      <Footer />
    </div>
  )
}

export default Main
