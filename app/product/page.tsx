import React from "react";
type Props = {
  searchParams: {
    url: string;
  };
};
async function ProductPage({ searchParams: { url } }: Props) {
  const product = await fetchProduct(url);
  return <div>ProductPage</div>;
}

export default ProductPage;
