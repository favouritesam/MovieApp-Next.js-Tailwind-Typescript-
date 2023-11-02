import Head from "next/head";
import MovieSearch from "./components/MovieSearch";
import FetchMovie from "./components/FetchMovie";



export default function Home() {
 
  return (
   <div className="bg-black min-h-screen">
  <Head>
    <title>Movie Database</title>
    <meta className="description" content="A simple movie database for user"/>
  </Head>
  <main className="container mx-auto py-10 px-4 flex flex-col items-center justify-center">
    <h1 className="text-4xl font-bold mb-8 text-white">Welcome to Movie Zone</h1>
    <h6 className="text-2xl font-bold mb-5" style={{ color: 'blue' }}>
  Zone your way to your favorite movies here
</h6>
    {/* <h6 className="text-2xl font-bold mb-5 text-white">Zone your way to your favourite movies here</h6> */}
    {/* <MovieSearch/> */}

    <MovieSearch/>
    <FetchMovie/> 
    
    

  
  </main>
 </div>

  )
}

