import InfiniteScroll from "react-infinite-scroll-component";
import { useEffect, useState } from 'react';
import CatsCard from './CatsCard';
const CatsCards = (props) => {
    const [ cats, setCats ] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [ httpError, setHttpError ] = useState();
    const [ page, setPage ] = useState(2);
    const [hasMore, sethasMore] = useState(true);
    const getCats = async ()=> {
        const response = await fetch (`https://api.thecatapi.com/v1/images/search?limit=5&page=1&order=DESC`);

        const responseData = await response.json();
        const cardUrl = [];


        for (const key in responseData) {
            cardUrl.push({
                id: responseData[key].id,
                url: responseData[key].url, 
                amount: 1
            })
        }
        setCats(cardUrl);
        setIsLoading(false);

    }
   
    useEffect(() => {
       getCats().catch((error) => {
            setIsLoading(false);
            setHttpError(error.message)
        })
    }, [])

    const fetchCats = async () => {
        const response = await fetch (
            `https://api.thecatapi.com/v1/images/search?limit=5&page=${page}&order=DESC`
        );
        const responseData = await response.json();
        return responseData;
    }

    const fetchMoreCats = async () => {
        const catsOnServer = await fetchCats();

        setCats([...cats, ...catsOnServer]);
        if(catsOnServer.length === 0) {
            sethasMore(false);
        }
        setPage(page+1);
    }

    if(isLoading) {
        return(
            <section>
                <p>Загрузка...</p>
            </section>
        )
    }
    if(httpError) {
        return(
            <section>
                <p>{httpError}</p>
            </section>
        )
    }



    return (
        <InfiniteScroll
        dataLength={cats.length}
        next={fetchMoreCats}
        hasMore={hasMore}
        loader={<h4>Loading...</h4>}
        >
            <ul>
                {cats.map((cat) => {
                    return <CatsCard addFav={props.addFav} removeFav={props.removeFav} amount={cat.amount} key={cat.id} cat={cat} id={cat.id} url={cat.url}/>
                })}
            </ul>
        </InfiniteScroll>
    )
}

export default CatsCards