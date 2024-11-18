// import { useLoaderData } from "react-router-dom";

import { useLoaderData } from "react-router-dom";


const CategoryNews = () => {
    const data = useLoaderData();
    console.log("Data in CategoryNews:", data);

    return (
        <div>
            <h2>Category News paice</h2>
            {data && data.data && data.data.map(news => (
                <div key={news.id}>
                    <h3>{news.title}</h3>
                    <p>{news.details}</p>
                </div>
            ))}
        </div>
    );
};

export default CategoryNews;
