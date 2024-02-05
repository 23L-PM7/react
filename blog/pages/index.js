import { Card } from "@/components/Card";
import { Loader } from "@/components/Loader";
import { useEffect, useState } from "react";

export default function Home() {
  const [articles, setArticles] = useState();
  const [currentPage, setCurrentPage] = useState(1);

  async function fetchInitialArticles() {
    const res = await fetch("https://dev.to/api/articles?username=j471n&per_page=9&page=1&tag=discuss");
    const data = await res.json();
    setArticles(data);
  }

  useEffect(() => {
    fetchInitialArticles();

    console.log("start fetchSoda");
    fetchSoda()
      .then((res) => console.log(res))
      .catch((e) => console.log(e));
    console.log("end fetchSoda");
  }, []);

  function loadNext() {
    fetch(`https://dev.to/api/articles?username=j471n&per_page=9&page=${currentPage + 1}`)
      .then((response) => response.json())
      .then((data) => {
        // success: promise resolved
        setArticles([...articles, ...data]);
        setCurrentPage(currentPage + 1);
      })
      .catch((e) => {
        // error: promise rejected
        console.error(e);
      });
  }

  function fetchSoda() {
    return new Promise((resolve, reject) => {
      // huvtsasaa omsono
      // delguur orno, delguur haalttai baival: reject("Delguur haalttai baisan");
      // undaa baival avna, undaa bhgui bgol: reject("Undaa bhgui bsan")
      // undaa avchirna, zamdaa asgachihval: reject("Asgasan")
      // bagshiin shireen tavibal: resolve();

      const huvtsasBhgui = true;
      if (huvtsasBhgui) {
        reject("huvtsas bhgui");
      } else {
        setTimeout(() => {
          resolve("Bolson");
        }, 1000);
      }
    });
  }

  if (articles === undefined) return <Loader />;

  return (
    <>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-5 px-4 md:grid-cols-2 lg:grid-cols-3">
          {articles.map((article) => (
            <Card key={article.id} article={article} profileShown />
          ))}
        </div>

        <div className="py-8 text-center">
          <button className="p-6 rounded bg-blue-50 hover:bg-blue-200" onClick={loadNext}>
            Load more
          </button>
        </div>
      </div>
    </>
  );
}
