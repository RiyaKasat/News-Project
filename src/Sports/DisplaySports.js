import React, { Component } from 'react';
import axios from 'axios';
const url1 = 'https://newsapi.org/v2';
class DisplaySports extends Component {
  constructor(props) {
    // Pass props to parent class
    super(props);
    // Set initial state
    this.state = {
      articles: []
    };
  }

  // Lifecycle method
  componentWillMount() {
    this.getArticles(this.props.default);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps !== this.props) {
      this.setState({ url: `https://newsapi.org/v2/top-headlines?sources=${nextProps.default}&category=sports&apiKey=${process.env.REACT_APP_API_KEY}` });

      this.getArticles(nextProps.default);
    }
  }

  formatDate(date) {
    var time = new Date(date);
    var year = time.getFullYear();
    var day = time.getDate();
    var hour = time.getHours();
    var minute = time.getMinutes();
    var month = time.getMonth() + 1;
    var composedTime = day + '/' + month + '/' + year + ' | ' + hour + ':' + (minute < 10 ? '0' + minute : minute);
    return composedTime;
  }

  getArticles(url) {
    const apiKey = '64fdfad349014eebafb3956d3f31c743';
    // Make HTTP reques with Axios
    axios.get(`https://newsapi.org/v2/top-headlines?sources=${url}&category=sports&apiKey=${apiKey}`)
      .then(res => {
        const articles = res.data.articles;
        // Set state with result
        console.log(articles);
        this.setState({ articles: articles });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    return(
      <div className="cardsContainer">
    {this.state.articles.map((news, i) => {
  return(
      <div class="card mb-4 "  key={i} >
       
       <div class="row g-0">
    <div class="col-md-4 col-lg-12">
        
         <img
        src={news.urlToImage}
        class="card-img-bottom img-fluid shadow-2-strong"
        alt="..."/>
       </div>
         <div class="col-md-8 col-lg-12">
        <div class="content">
        <h5 class="card-title text-danger"><a href={news.url} target="_blank" rel="noopener noreferrer">
                    {news.title}
                  </a></h5>
                 
                 
        <p class="card-text">
        {news.description}
        </p>
        <p>
                    By <i>{news.author ? news.author : this.props.default}</i>
                  </p>
                  <p>{this.formatDate(news.publishedAt)}</p>
                  
      </div>
     
      {/* <div class="card-footer bg-warning">
      <small class="text-muted">{this.formatDate(news.publishedAt)}</small>
    </div> */}
      </div>
      </div>
     </div>
      
     
    
    );})}
     </div> 
    ); 
  }
}

export default DisplaySports;
