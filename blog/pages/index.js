import { Card } from "@/components/Card";
import { Loader } from "@/components/Loader";
import { useEffect, useState } from "react";

export default function Home() {
  const [articles, setArticles] = useState();
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    fetch("https://dev.to/api/articles?username=j471n&per_page=9&page=1&tag=discuss")
      .then((response) => response.json())
      .then((data) => {
        setArticles(data);
      });
  }, []);

  function loadNext() {
    fetch(`https://dev.to/api/articles?username=j471n&per_page=9&page=${currentPage + 1}`)
      .then((response) => response.json())
      .then((data) => {
        setArticles([...articles, ...data]);
        setCurrentPage(currentPage + 1);
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
