import fetch from "node-fetch";
import Link from "next/link";
export const getStaticPaths = async () => {
  const res = await fetch(
    "https://daimaru-hakui.microcms.io/api/v1/catalog?limit=200",
    {
      headers: { "X-API-KEY": process.env.API_KEY },
    }
  );
  const data = await res.json();
  const datas = data.contents;

  const paths = datas.map((data: any) => {
    return {
      params: { id: data.id.toString() },
    };
  });
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await fetch(
    "https://daimaru-hakui.microcms.io/api/v1/catalog/" + id,
    {
      headers: { "X-API-KEY": process.env.API_KEY },
    }
  );
  const data = await res.json();
  return {
    props: {
      product: data,
    },
  };
};

const ProductsId = ({ product }) => {
  return (
    <div>
      <Link href="/">
        <a>{product.title}</a>
      </Link>
    </div>
  );
};
export default ProductsId;
