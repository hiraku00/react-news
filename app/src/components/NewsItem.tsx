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
      style={{
        height: "auto",
        width: "100%",
        borderColor: "lightgray",
        borderWidth: "0.4px",
        display: "flex",
        cursor: "pointer",
        border: "1px solid lightgray",
        borderRadius: "5px",
        padding: "10px",
        alignItems: "flex-start",
      }}
    >
      <div style={{ width: "25%", minWidth: "150px", marginRight: "10px" }}>
        <img
          style={{ width: "100%", height: "120px", objectFit: "contain" }}
          src={item.urlToImage}
          alt={item.title}
        />
      </div>
      <div
        style={{
          flex: 1,
          padding: "16px",
          justifyContent: "space-between",
          marginLeft: "10px",
        }}
      >
        <p style={{ fontSize: "16px", textAlign: "left" }}>{item.title}</p>{" "}
        <p
          style={{
            fontSize: "12px",
            color: "darkgray",
            marginTop: "10px",
            textAlign: "left",
          }}
        >
          {" "}
          {publish_date}
        </p>
      </div>
    </div>
  );
};

export default NewsItem;
