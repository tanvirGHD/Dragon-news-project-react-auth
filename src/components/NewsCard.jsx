
import React from 'react';
import { FaRegBookmark, FaShareAlt } from 'react-icons/fa';

const NewsCard = ({ news }) => {
  console.log(news);

  return (
    <div className="card w-full bg-base-100 shadow-xl mb-6">
      <div className="card-body">
        {/* Author and Actions */}
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <img
              src={news.author.img}
              alt={news.author.name}
              className="w-10 h-10 rounded-full mr-3"
            />
            <div>
              <h3 className="font-bold">{news.author.name}</h3>
              <p className="text-sm text-gray-500">{news.author.published_date}</p>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <FaRegBookmark className="cursor-pointer text-gray-600 hover:text-primary" />
            <FaShareAlt className="cursor-pointer text-gray-600 hover:text-primary" />
          </div>
        </div>

        {/* Title */}
        <h2 className="card-title mt-4">{news.title}</h2>

        {/* Thumbnail Image */}
        <figure className="mt-3">
          <img
            src={news.image_url}
            alt={news.title}
            className="rounded-lg w-full"
          />
        </figure>

        {/* Details */}
        <p className="text-sm mt-3 text-gray-600">
          {news.details.slice(0, 150)}...
        </p>

        {/* Ratings and Views */}
        <div className="flex items-center justify-between mt-4">
          <div className="flex items-center">
            <div className="rating rating-sm">
              <input
                type="radio"
                name="rating"
                className="mask mask-star-2 bg-orange-400"
                checked
                readOnly
              />
            </div>
            <span className="ml-2 text-sm">{news.rating.number} ({news.rating.badge})</span>
          </div>
          <p className="text-gray-500 text-sm">Views: {news.total_view}</p>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
