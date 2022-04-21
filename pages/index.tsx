import { useEffect } from 'react';
import { auth } from '../firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useRouter } from 'next/router';
import axios from 'axios';
import { Stock } from '../components/Stock';
import { Header } from '../components/Header';
import StockContextProvider from '../contexts/StockContext';
import Head from '../components/HeadMeta';
import MainTitle from '../components/MainTitle';

const Home = (props) => {
  const { items } = props;
  const router = useRouter();
  const [user] = useAuthState(auth);
  useEffect(() => {
    if (user === null) {
      router.push('/login');
    }
  }, [router, user]);
  return (
    <>
      <StockContextProvider>
        <Head
          title={'大丸白衣 在庫表'}
          description={
            'マイユニフォームクラブとセレナーデの商品在庫を検索することができるWEBアプリです。'
          }
        />
        <Header />
        <MainTitle
          h2Title={'在庫検索'}
          h3Title={'品番を入力して在庫検索ができます。'}
        />
        <Stock items={items} />
      </StockContextProvider>
    </>
  );
};
export default Home;

export async function getStaticProps() {
  const [itemsRes] = await Promise.all([
    axios.get(
      'https://docs.google.com/spreadsheets/d/e/2PACX-1vTPID0Oyeo8FwNN6lDPETgrhd8OsmrRJ6RZy5EO80G4uGgkj7ZRhCZ9OXsUNDFF0c5YWfwSrBaEh9_P/pub?gid=1399239958&single=true&output=csv'
    ),
  ]);
  const splitItems = await itemsRes.data.split('\n');
  const itemKeys = await splitItems[0].trim().split(',');
  let items = [];
  for (let i = 1; i < splitItems.length; i++) {
    let csvObject = new Object();
    let itemValues = splitItems[i].split(',');
    for (let j = 0; j < itemKeys.length; j++) {
      csvObject[itemKeys[j]] = itemValues[j];
    }
    items.push(csvObject);
  }
  items = items.map((item, index) => {
    return {
      id: index,
      code: item['商品コード'],
      number: item['品番'],
      name: item['商品名'],
      price: item['上代'],
      size: item['サイズ'],
      stock1: item['在庫数'],
      stock2: item['外部在庫'],
      total: item['TOTAL'],
      // schedule: item["仕掛"],
      quantity: item['数量'],
    };
  });

  return {
    props: {
      items,
    },
  };
}

// export async function getStaticProps() {
//   const res = await axios.get(
//     "https://docs.google.com/spreadsheets/d/e/2PACX-1vTPID0Oyeo8FwNN6lDPETgrhd8OsmrRJ6RZy5EO80G4uGgkj7ZRhCZ9OXsUNDFF0c5YWfwSrBaEh9_P/pub?gid=1399239958&single=true&output=csv"
//   );
//   const splitItems = await res.data.split("\n");
//   const itemKeys = await splitItems[0].trim().split(",");
//   let jsonDatas = [];
//   for (let i = 1; i < splitItems.length; i++) {
//     let csvObject = new Object();
//     let itemValues = splitItems[i].split(",");
//     for (let j = 0; j < itemKeys.length; j++) {
//       csvObject[itemKeys[j]] = itemValues[j];
//     }
//     jsonDatas.push(csvObject);
//   }

//   return {
//     props: {
//       items: jsonDatas,
//     },
//   };
// }

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
