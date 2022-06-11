import Layout from "../components/Layout";
import "../styles/index.scss";
import "@fortawesome/fontawesome-free/css/all.css";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
