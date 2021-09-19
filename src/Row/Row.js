import React, { useState, useEffect } from "react";
import axios from "../axios";

// import "./row.css";
//above it is axios not from main library but the axios.js we created and it is renamed from instance to axios.
function Row(props) {
  /*we use state via react hook because directly we cannot use state in function made component as they are stateless.*/
  const [news, setNews] = useState([]);
  // A snippet of code which runs based on a specific condition,basically it is too a hook

  useEffect(() => {
    //if [] 2nd argument ,means run once when the row loads, and don't run again.but now after every time news loads the row loads.
    //if we pass any variable outside this block inside useEffect then we need to pass it as 2nd argument because we need to notify the useEffect every time the outside scope variable changes.
    async function fetchData() {
      const request = await axios.get(props.fetchUrl);
      // console.log(request.data.articles);
      setNews(request.data.articles);
      return request;
    }
    fetchData();
  }, [props.fetchUrl]);
  console.table(news);
  //<img classNameNameNameName="flex" src={ele.urlToImage} alt={ele.author}/>
  //whenever we need to bring javascript code in jsx we need to enclose it within {}
  return (
    <div classNameName="container">
      <h2
        className="page-header bold bg-primary"
        style={{ padding: 20 + "px" }}
      >
        {props.title}
      </h2>
      <div classNameName="container">
        {news.map((ele) => (
          <div
            className="card  shadow-lg p-3 mb-5 bg-white rounded"
            style={{
              width: "auto",
              alignContent: "center",
              marginBottom: 2 + "rem",
            }}
          >
            <img
              src={ele.urlToImage}
              className="card-img-top"
              alt={ele.author}
            />
            <div className="card-body">
              <h3 className="card-title">{ele.title}</h3>
              <p className="card-text">{ele.content}</p>
              <a href={ele.url} target="_blank" className="btn btn-primary">
                Go To
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Row;
