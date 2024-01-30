import Link from "next/link";

export function Card({ article }) {
  return (
    <Link href={article.link} className="p-4 border rounded hover:bg-slate-50">
      <img src={article.image} className="object-cover mb-4 rounded aspect-video" />
      <div className="p-2">
        <span className="px-[10px] py-1 text-blue-700 bg-blue-200 rounded text-sm mb-4 inline-block">{article.category}</span>
        <h2 className="mb-5 text-lg font-bold">{article.title}</h2>
        <div className="text-gray-600">{article.date}</div>
      </div>
    </Link>
  );
}
