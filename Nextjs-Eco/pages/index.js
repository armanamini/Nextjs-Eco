import Head from "next/head";
import Image from "next/image";
import Features from "../components/features";
import axios from "axios";
import { handleError } from "../lib/helper";
import { useEffect } from "react";
import { toast } from "react-toastify";
import ProductsTab from "../components/Product/ProductsTab";
import About from "../components/About/About";
import ContactForm from "../components/Contact/ContactForm";
import dynamic from "next/dynamic";

const Map = dynamic(() => import("../components/Contact/Map"),{
  ssr:false
});

export default function Home({ productTab, error }) {
  useEffect(() => {
    error && toast.error(error);
  }, [error]);
  return (
    <div>
      <Features />
      {productTab && <ProductsTab tabs={productTab} />}
      <About />
      <section className="book_section layout_padding">
        <div className="container">
          <div className="heading_container">
            <h2>تماس با ما</h2>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="form_container">
                <ContactForm />
              </div>
            </div>
            <div className="col-md-6">
              <div className="map_container">
                <Map />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export async function getServerSideProps() {
  try {
    const res = await axios.get("/products/products-tabs");
    console.log(res);
    return {
      props: {
        productTab: res.data.data,
      },
    };
  } catch (err) {
    return {
      props: {
        error: handleError(err),
      },
    };
  }
}
