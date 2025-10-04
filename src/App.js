import './App.css';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import Footer from './components/Footer';

function App() {
  const productList =[
    {
      price: 150000,
      name: "Macbook Pro",
      quantity: 0,
    },
    {
      price: 30000,
      name: "Oneplus Nord 4",
      quantity: 0,
    },
  ]
  return (
    <>
      <Navbar/>
    <main className='container mt-5'>
      <ProductList productList = {productList} />
    </main>
      <Footer/>
    </>
  );
}

export default App; 
