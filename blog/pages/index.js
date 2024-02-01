import { Card } from "@/components/Card";
import { Loader } from "@/components/Loader";
import { useEffect, useState } from "react";

export default function Home() {
  const [articles, setArticles] = useState();

  useEffect(() => {
    fetch("https://dev.to/api/articles?username=j471n")
      .then((response) => response.json())
      .then((data) => {
        setArticles(data);
      });
  }, []);

  if (articles === undefined) return <Loader />;

  return (
    <>
      <div className="container mx-auto">
        <div className="grid grid-cols-3 gap-5">
          {articles.map((article) => (
            <Card key={article.id} article={article} />
          ))}
        </div>
      </div>
    </>
  );
}
