// import React, { useState, useEffect } from 'react';

// const ProductList = () => {
//   const [products, setProducts] = useState([]);
//   const [sortOrder, setSortOrder] = useState('asc'); // Estado para rastrear el orden de clasificación

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch('https://fakestoreapi.com/products');
//         const data = await response.json();
//         setProducts(data);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     };

//     fetchData();
//   }, []);

//   // Función para cambiar el orden de clasificación
//   const toggleSortOrder = () => {
//     setSortOrder((prevOrder) => (prevOrder === 'asc' ? 'desc' : 'asc'));
//   };

//   // Función para ordenar los productos por rating
//   const sortProductsByRating = () => {
//     const productsCopy = [...products];
//     const sortedProducts = productsCopy.sort((a, b) => {
//       return sortOrder === 'asc' ? a.rating - b.rating : b.rating - a.rating;
//     });
//     setProducts(sortedProducts);
//   };

//   // Lógica para ordenar al cargar el componente si es necesario
//   useEffect(() => {
//     if (sortOrder === 'desc') {
//       sortProductsByRating();
//     }
//   }, [sortOrder]);

//   return (
//     <div>
//       <h2>Product List</h2>
//       <button onClick={toggleSortOrder}>
//         Toggle Sorting Order: {sortOrder === 'asc' ? 'Ascending' : 'Descending'}
//       </button>
//       <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around' }}>
//         {products.map((product) => (
//           <div key={product.id} style={productItemStyle}>
//             <img src={product.image} alt={product.title} style={productImageStyle} />
//             <h3>{product.title}</h3>
//             <p>{product.description}</p>
//             <p>Price: ${product.price}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// const productItemStyle = {
//   border: '1px solid #ddd',
//   margin: '10px',
//   padding: '15px',
//   width: '250px',
// };

// const productImageStyle = {
//   maxWidth: '100%',
//   height: 'auto',
// };

// export default ProductList;
