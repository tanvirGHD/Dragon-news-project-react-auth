import { useEffect, useState } from "react";

const LeftNavbar = () => {
    const [categories, setCategories] = useState([]);
    useEffect(()=>{
        fetch("https://openapi.programming-hero.com/api/news/categories")
        .then(res=> res.json())
        .then(data => setCategories(data.data.news_category))
    },[])

    // {
    //     "category_id": "02",
    //     "category_name": "Regular News"
    //  }

    return (
        <div className="mb-10">
            <h2 className="font-semibold mb-5">All Category ({categories.length})</h2>
            <div className="flex flex-col gap-5">
            {
                categories.map(category => 
                <button className="btn " key={category.category_id}>
                {category.category_name}</button>)
            }
            </div>
        </div>
    );
};

export default LeftNavbar;