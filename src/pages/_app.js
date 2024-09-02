import Layout from "@/components/layout/Layout";
import "@/styles/globals.css";
import Script from "next/script";

export default function App({ Component, pageProps }) {
  return(
    <>
    <Layout>
      <Component {...pageProps} />
    </Layout>
        <Script src="https://code.jquery.com/jquery-3.4.1.min.js"/>
        <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js"/>
        </>
  ) 
}
