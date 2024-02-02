import { useEffect, useState } from "react";
import axios from "axios";
import Tabs from "./Tabs";
import NewsItem from "./NewsItem";

const News = () => {
  const [data, setData] = useState([]);
  const [activeKeyword, setActiveKeyword] = useState("BTS");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios(
          `https://newsapi.org/v2/everything?q=${activeKeyword}&from=2024-01-27&sortBy=publishedAt&apiKey=${
            import.meta.env.VITE_NEWS_API_KEY
          }`
        );
        setData(result.data.articles);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };
    fetchData();
  }, [activeKeyword]);

  return (
    <div className="bg-white text-left font-m-plus-rounded p-10">
      <Tabs activeKeyword={activeKeyword} setActiveKeyword={setActiveKeyword} />
      {data.map((item, index) => (
        <NewsItem key={index} item={item} />
      ))}
    </div>
  );
};

export default News;
