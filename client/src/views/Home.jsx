import ProductList from '../components/ProductList';
const Home = (props) => {
  
  return (
    <>
      <section className='text-gray-600 body-font overflow-hidden'>
        <div className='container px-5 py-24 mx-auto'>
          <ProductList/>
        </div>
      </section>
    </>
  );
};

export default Home;