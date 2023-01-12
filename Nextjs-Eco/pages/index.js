import Head from "next/head";
import Image from "next/image";
import Features from "../components/features";
import axios from "axios";
import { handleError } from "../lib/helper";
import { useEffect } from "react";
import { toast } from "react-toastify";
import ProductsTab from "../components/Product/ProductsTab";

export default function Home({ productTab, error }) {
  useEffect(() => {
    error && toast.error(error);
  }, [error]);
  return (
    <div>
      <Features />
      {productTab && <ProductsTab tabs={productTab}/>}
    </div>
  );
}

export async function getServerSideProps() {
  try {
    const res = await axios.get(
      "/products/products-tabs"
    );
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
