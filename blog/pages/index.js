import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Link href="/articles">Blog</Link>

      <br />

      <Link href="/contact-us">Contact</Link>

      <br />

      <a href="/articles">With a tag</a>
    </div>
  );
}
