import Link from "next/link";
interface MovieCardProps {
    title:string;
    overview: string;
    posterPath: string;
    // movieKey: number;
    id: number;
}
const MovieCard =({title,overview,posterPath, id}: MovieCardProps) => {
      
    const imageUrl = posterPath ? 
    `https://image.tmdb.org/t/p/w500${posterPath}`
    :'/no-image-available.png';
  const handleClick = ()=>{
    const strKey = id +""
    localStorage.setItem("selectedKey", strKey)
  }
    // console.log("key is --", key)
  return (
    <div className="bg-white rounded shadow p-4">
        <Link href='/news' onClick={handleClick}>
        
        <img className="w-full h-60 rounded mb-4 " src={imageUrl} alt=""/>
        <h2 className="text-2xl font-bold mb-2">{title}</h2>
        <p className="text-sm text-gray-500">{overview.substring(0,150)}</p>
        </Link>
        
    </div>
  )
}

export default MovieCard



