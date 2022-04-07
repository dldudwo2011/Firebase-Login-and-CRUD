import styled from "styled-components";

const ProductPreviewStyles = styled.div`
  max-width: 360px;
  align-self: stretch;
  padding: 3rem 2rem;
  background-color: #f8fafc;
`;

const ProductStatus = styled.p`
  font-size:13px;
  color: #0ea5e9
`;

const ProductImage = styled.div`
  margin: 1rem auto 0;
  width: 300px;
  img
  {
    width: 100%;
    height: auto;
  }
`;

const ProductName = styled.h2`
  font-size:2.25rem;
  font-weight: 700;
  line-height: 2.5rem;
  letter-spacing: -0.5px;
  color: #1e293b;
  word-wrap: break-word;
`;

const ProductColors = styled.p`
  font-size:13px;
  color: #94a3b8;
`;

const ProductPrice = styled.p`
  font-size:2.25rem;
  font-weight: 100;
  letter-spacing: -1px;
  color: #64748b;
  margin-top: -0.3rem;
  margin-bottom: 0.25rem;
`;
const ProductDescription = styled.p`
  font-size:13px;
  color: #94a3b8;
`;

export { ProductPreviewStyles, ProductName, ProductPrice, ProductDescription, ProductImage,ProductStatus, ProductColors };
