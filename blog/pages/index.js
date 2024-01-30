import { Card } from "@/components/Card";
import Link from "next/link";

const sampleArticle = {
  title: "The Impact of Technology on the Workplace: How Technology is Changing",
  date: "August 20, 2022",
  category: "Design",
  image: "https://images.unsplash.com/photo-1697162103256-dad37889d979",
  link: "/one",
};

const exampleArticle = {
  title: "Technology on the Workplace: How Technology is Changing",
  date: "August 20, 2022",
  category: "Development",
  image: "https://images.unsplash.com/photo-1697162103256-dad37889d979",
  link: "/one",
};

const articles = [
  {
    id: 1,
    title: "The Impact of Technology on the Workplace: How Technology is Changing",
    date: "August 20, 2022",
    category: "Design",
    image: "https://images.unsplash.com/photo-1697162103256-dad37889d979",
    link: "/one",
  },
  {
    id: 2,
    title: "Technology on the Workplace: How Technology is Changing",
    date: "August 20, 2022",
    category: "Development",
    image: "https://images.unsplash.com/photo-1697162103256-dad37889d979",
    link: "/two",
  },
];

export default function Home() {
  return (
    <>
      <div>
        <Link href="/articles">Blog</Link>

        <br />

        <Link href="/contact-us">Contact</Link>

        <br />

        <a href="/articles">With a tag</a>
      </div>

      <div className="w-96"></div>

      <div className="container mx-auto">
        <div className="grid grid-cols-3 gap-5">
          <Card article={sampleArticle} />
          <Card article={exampleArticle} />

          {articles.map((article) => (
            <Card key={article.id} article={article} />
          ))}
        </div>
      </div>
    </>
  );
}
