import Head from "next/head";
import axios from "axios";
import { Stock } from "../components/Stock";
import { Header } from "../components/Header";
import { Box, Stack, Text } from "@chakra-ui/react";
import StockContextProvider from "../contexts/StockContext";

const Home = ({ items }) => {
  return (
    <Box>
      <StockContextProvider>
        <Head>
          <title>大丸白衣 在庫表</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Header />

        <Stack spacing={3} direction="column" alignItems="center" mt={16}>
          <Text fontSize="3xl" as="h2" fontWeight="bold">
            在庫検索
          </Text>
          <Text fontSize="xl" as="h3" px={3}>
            品番を入力して在庫検索ができます。
          </Text>
        </Stack>
        <Stock items={items} />
      </StockContextProvider>
    </Box>
  );
};
export default Home;

export async function getStaticProps() {
  const res = await axios.get(
    "https://docs.google.com/spreadsheets/d/e/2PACX-1vTPID0Oyeo8FwNN6lDPETgrhd8OsmrRJ6RZy5EO80G4uGgkj7ZRhCZ9OXsUNDFF0c5YWfwSrBaEh9_P/pub?gid=1399239958&single=true&output=csv"
  );
  const splitItems = await res.data.split("\n");
  const itemKeys = await splitItems[0].trim().split(",");
  let jsonDatas = [];
  for (let i = 1; i < splitItems.length; i++) {
    let csvObject = new Object();
    let itemValues = splitItems[i].split(",");
    for (let j = 0; j < itemKeys.length; j++) {
      csvObject[itemKeys[j]] = itemValues[j];
    }
    jsonDatas.push(csvObject);
  }

  return {
    props: {
      items: jsonDatas,
    },
  };
}

// export async function getStaticProps() {
//   const res = await fetch(
//     "https://daimaru-hakui.microcms.io/api/v1/catalog?limit=200",
//     {
//       headers: { "X-API-KEY": process.env.API_KEY },
//     }
//   );
//   const data = await res.json();
//   return {
//     props: {
//       catalogs: data.contents,
//     },
//   };
// }
