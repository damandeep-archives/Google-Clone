import Head from 'next/head';
import { useRouter } from 'next/router';
import Header from '../components/Header';
import SearchResults from '../components/SearchResults';
import Responce from '../Responce';


function Search({results}) {
    
    const router=useRouter();
    
    
    return <div>
        <Head>
            <title>{router.query.term} - Google Search</title>
            <link rel='icon' href='/favicon.ico' />
        </Head>

        {/*Header*/}
        <Header/>
        {/*Search Results */}
        <SearchResults results={results}/>

    </div>
    
}

export default Search

export async function getServerSideProps(context){
    const useDummyData=false;
    const startIndex=context.query.start || "0";
   
    const data= useDummyData?Responce:await fetch
    (`https://www.googleapis.com/customsearch/v1?key=${process.env.REACT_APP_API_KEY}&cx=${process.env.REACT_APP_CONTEXT_KEY}&q=${context.query.term}&start=${startIndex}`).then((responce)=>responce.json());

    
    //After the server has rendered pass the results to client
    return{
    props:{
        results:data
     }
    }
    
}