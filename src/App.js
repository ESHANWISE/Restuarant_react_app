import logo from './logo.svg';
import './App.css';
import Test from './components/Test';
import Header from './components/Header';
import Banner from './components/Banner';
import Content from './components/Content';
import Footer from './components/Footer';
import { useEffect, useState } from 'react';
import Spinner from './components/Spinner';

function App() {


  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)


  useEffect(()=>{
    fetchMeCategories()
    console.log(data)

  }, [])

  const fetchMeCategories = ()=>{

    fetch("https://www.themealdb.com/api/json/v1/1/categories.php/") //where we are requesting api
    .then( //takes a callback function
        function(response){
            return response.json()
        }
    ) 
    .then(
        function(apiData){
            setData([...apiData.categories]);
            setLoading(false);
        }
    )
    .catch(
        function(err){
            console.log(err)
        }
    )

  }


  return (
    <div className="">
      
      <Header/>
      <main>
        <Banner/>
        {/* we are checking if the data lenth is greater than 0 */}
        {data.length > 0 ? <Content categories={data}/> : <Spinner/>}
      </main>
      <Footer/>

      
    </div>
  );
}

export default App;
