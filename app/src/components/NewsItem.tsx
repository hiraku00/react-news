import React from "react";

interface NewsItemProps {
  item: any;
}

const NewsItem: React.FC<NewsItemProps> = ({ item }) => {
  const date = new Date(item.publishedAt);
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const now = new Date();
  const diffInHours = Math.abs(now.getTime() - date.getTime()) / 36e5;

  let publish_date = "";
  if (diffInHours < 24) {
    publish_date = `${item.source.name}・${Math.floor(diffInHours)}時間前`;
  } else {
    publish_date = `${item.source.name}・${year}/${month}/${day}`;
  }

  return (
    <div
      onClick={() => window.open(item.url, "_blank")}
      className="h-auto w-full border border-gray-200 flex cursor-pointer rounded p-2 items-start"
    >
      <div className="w-1/4 min-w-[150px] mr-2">
        <img
          className="w-full h-[120px] object-contain"
          src={item.urlToImage}
          alt={item.title}
        />
      </div>
      <div className="flex-1 p-4 space-y-2 ml-2">
        <p className="text-lg text-left">{item.title}</p>
        <p className="text-sm text-gray-600 mt-2 text-left">{publish_date}</p>
      </div>
    </div>
  );
};

export default NewsItem;
