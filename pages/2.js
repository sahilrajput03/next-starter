// https://nextjs.org/docs/basic-features/data-fetching#getstaticprops-static-generation

export default function Two({quotes}) {
  return <div>{quotes ? quotes.map((quote) => <li key={quote}>{quote}</li>) : "Loading..."}</div>;
}

export async function getStaticProps(context) {
  const quotes = await (await fetch("http://localhost:3000/api/quotes")).json();
  return {
    props: {quotes}, // will be passed to the page component as props
  };
}
