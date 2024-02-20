// import React, { useState, useEffect } from 'react';
// import ProductList from './ProductList';

// const SortedProductList = () => {
//   const [sortedProducts, setSortedProducts] = useState([]);

//   useEffect(() => {
//     const sortProductsByRating = () => {
//       const productsCopy = [...ProductList.defaultProps.products];
//       const sortedProducts = productsCopy.sort((a, b) => b.rating - a.rating);
//       setSortedProducts(sortedProducts);
//     };

//     sortProductsByRating();
//   }, []);

//   return (
//     <div style={{ marginTop: '20px' }}>
//       <h2>Sorted Product List by Rating</h2>
//       <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around' }}>
//         {sortedProducts.map((product) => (
//           <div key={product.id} style={sortedProductItemStyle}>
//             <img src={product.image} alt={product.title} style={productImageStyle} />
//             <h3>{product.title}</h3>
//             <p>{product.description}</p>
//             <p>Price: ${product.price}</p>
//             <p>Rating: {product.rating}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// const sortedProductItemStyle = {
//   border: '1px solid #ddd',
//   margin: '10px',
//   padding: '15px',
//   width: '250px',
// };

// export default SortedProductList;
