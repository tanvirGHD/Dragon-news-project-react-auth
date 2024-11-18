// import { useLoaderData } from "react-router-dom";

import { useLoaderData } from "react-router-dom";
import NewsCard from "../components/NewsCard";


const CategoryNews = () => {
const {data: news} = useLoaderData();
    console.log("Data in CategoryNews:", news);

    return (
        <div>
            <h1 className="font-semibold">Dragon News Home</h1>
            { news.map(singleNews => (
                <div>
                    <NewsCard key={singleNews.id} news={singleNews} ></NewsCard>
                </div>
            ))}
        </div>
       
    );

};

export default CategoryNews;
