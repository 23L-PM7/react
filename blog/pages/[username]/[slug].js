import Head from "next/head";

export default function Home({ details }) {
  return (
    <div className="container mx-auto">
      <Head>
        <meta property="og:title" content={details.title} />
        <meta property="og:image" content={details.cover_image} />
        <meta property="og:description" content={details.description} />
      </Head>

      <h1 className="my-10 text-2xl font-bold text-center">{details.title}</h1>
      <div className="mx-auto prose" dangerouslySetInnerHTML={{ __html: details.body_html }}></div>
    </div>
  );
}

export async function getServerSideProps({ query }) {
  const res = await fetch(`https://dev.to/api/articles/${query.username}/${query.slug}`);
  const details = await res.json();
  return { props: { details } };
}
