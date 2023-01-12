import Head from "next/head";
import Image from "next/image";
import Features from "../components/features";
import axios from "axios";
import { handleError } from "../lib/helper";
import { useEffect } from "react";
import { Toast } from "react-toastify";

export default function Home({ productTab, error }) {
  useEffect(() => {
    error && Toast.error(error);
  }, [error]);
  return (
    <div>
      <Features />
    </div>
  );
}

export async function getServerSideProps() {
  try {
    const res = await axios.get(
      "http://127.0.0.1:8000/api/products/products-tabs"
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
