import styled from "styled-components";

const TopProduct = () => {
  const topProducts = [
    {
      product: "Camera Mi 360°",
      image: "https://via.placeholder.com/50",
      soldAmount: 432,
      unitPrice: 120,
      revenue: 51840,
      rating: 4.81,
    },
    {
      product: "Massage Gun",
      image: "https://via.placeholder.com/50",
      soldAmount: 120,
      unitPrice: 112,
      revenue: 25440,
      rating: 3.44,
    },
    {
      product: "Vacuum-Mop 2 Pro",
      image: "https://via.placeholder.com/50",
      soldAmount: 221,
      unitPrice: 320,
      revenue: 15123,
      rating: 3.22,
    },
    {
      product: "Vacuum-Mop 2",
      image: "https://via.placeholder.com/50",
      soldAmount: 223,
      unitPrice: 234,
      revenue: 32812,
      rating: 3.0,
    },
  ];

  return (
    <Container>
      <Header>
        <h3>Top Products</h3>
        <FullResultsButton>Full results</FullResultsButton>
      </Header>
      <Table>
        <thead>
          <tr>
            <th>Product</th>
            <th>Sold amount</th>
            <th>Unit price</th>
            <th>Revenue</th>
            <th>Rating</th>
          </tr>
        </thead>
        <tbody>
          {topProducts.map((product, index) => (
            <tr key={index}>
              <td>
                <ProductInfo>
                  <img src={product.image} alt={product.product} />
                  <span>{product.product}</span>
                </ProductInfo>
              </td>
              <td>{product.soldAmount}</td>
              <td>${product.unitPrice}</td>
              <td>${product.revenue.toLocaleString()}</td>
              <td>
                <Rating>
                  <Star>⭐</Star>
                  {product.rating.toFixed(2)}
                </Rating>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
  padding: 20px;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;

  h3 {
    font-size: 20px;
    font-weight: bold;
  }
`;

const FullResultsButton = styled.button`
  background: transparent;
  border: none;
  color: #007bff;
  cursor: pointer;
  font-size: 14px;

  &:hover {
    text-decoration: underline;
  }
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  text-align: left;

  th,
  td {
    padding: 10px 15px;
    border-bottom: 1px solid #ddd;
  }

  th {
    font-size: 14px;
    color: #555;
  }

  td {
    font-size: 14px;
  }

  tbody tr:hover {
    background-color: #f9f9f9;
  }
`;

const ProductInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  img {
    width: 40px;
    height: 40px;
    border-radius: 5px;
  }

  span {
    font-size: 14px;
    font-weight: bold;
  }
`;

const Rating = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

const Star = styled.span`
  color: #ffc107;
`;

export default TopProduct;
