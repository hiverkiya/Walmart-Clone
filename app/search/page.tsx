import React from "react";
type Props = {
  searchParams: {
    q: string;
  };
};
async function SearchPage({ searchParams: { q } }: Props) {
  // Fetch the Search Results
  const results = await fetchSearch(q);
  return <div>SearchPage</div>;
}

export default SearchPage;
