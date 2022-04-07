import styled from "styled-components";

const ProductDataEntryFormStyles = styled.form`
    width: 380px;
    input:focus, textarea:focus
    {
      border-color:cornflowerblue;
      background-color: #eff6ff;
      outline-color: cornflowerblue;
    }
    fieldset{
      display:flex;
      gap: 1rem;
      margin-bottom: 1.5rem;
    }
`;

const ProductImage = styled.div`
  
`;

const ProductName = styled.div`
  flex:3.5;
`;

const ProductPrice = styled.div`
  flex: 1.5;
`;

const ProductDescription = styled.div`

`;

const ProductColors = styled.div`
  width: 100px;
`;

const ProductStatus = styled.div`

`;

export { ProductDataEntryFormStyles, ProductImage, ProductDescription, ProductName, ProductPrice, ProductStatus, ProductColors };
