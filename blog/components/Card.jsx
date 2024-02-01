import Link from "next/link";

export function Card({ article, profileShown }) {
  return (
    <Link href={article.path} className="p-4 border rounded hover:bg-slate-50">
      <img src={article.cover_image} className="object-cover mb-4 rounded aspect-video" />
      <div className="p-2">
        <div className="flex flex-wrap gap-2 mb-4">
          {article.tag_list.map((tag) => (
            <span key={tag} className="px-[10px] py-1 text-blue-700 bg-blue-200 rounded text-sm inline-block">
              {tag}
            </span>
          ))}
        </div>

        <h2 className="mb-5 text-lg font-bold">{article.title}</h2>
        {profileShown && <div>Profile</div>}
        <div className="text-gray-600">{article.readable_publish_date}</div>
      </div>
    </Link>
  );
}
