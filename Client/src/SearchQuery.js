import React, { Component } from 'react'
import SearchForm from './SearchForm';

export class SearchQuery extends Component {
  constructor(props) {
    // Pass props to parent class
    super(props);
    // Set initial state
    
    this.state = {
      articles: [],
      searchquery: ''
    };
  }

  // Lifecycle method
  componentWillMount() {
    this.getArticles(this.props.default);
  }

  componentWillReceiveProps(nextProps) {
    <SearchForm handleData={this.handleParentData}/>
    if (nextProps !== this.props) {
      this.setState({ url: `https://newsapi.org/v2/everything?q=${this.state.myName}&apiKey=${process.env.REACT_APP_API_KEY}` });

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
    const apiKey = '8a52c5367bb942d59170096fa552a8da';
    <SearchForm handleData={this.handleParentData}/>
    // Make HTTP reques with Axios
    axios
      .get(`https://newsapi.org/v2/everything?q=${this.state.myName}&apiKey=${apiKey}`)
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

  handleParentData = (e) => {
    this.setState({myName: e})
      }
  
  render() {
    return(
     
      <div class="card-deck">
    {this.state.articles.map((news, i) => {
  return(
    <div class="col-md-4 card-deck mb-5 mx-auto">
      <div class="card  ml-5"  key={i} >
       <div class="row g-0">
        <div class="col-md-11 col-lg-11 col-sm-8 col-xs-8 mx-auto">
        <img
        src={news.urlToImage}
        class="card-img-top img-fluid"
        alt="..."/>
         </div>
         <div class="col-md-11 col-lg-11 col-sm-8 col-xs-8 mx-auto">
      <div class="card-body text-dark bg-white">
        <h3 class="card-title "><a href={news.url} class="text-info" target="_blank" rel="noopener noreferrer">
                    {news.title}
                  </a></h3>
        <p class="card-text"><h5>{news.description}</h5>
        
        </p>
        <p class="text-success">
                    By <i>{news.author ? news.author : this.props.default}</i>
                    </p>
                  <p> <b><large class="text-danger">{this.formatDate(news.publishedAt)}</large></b></p>
                  
      </div>
     
      {/* <div class="card-footer bg-warning">
      <small class="text-primary">{this.formatDate(news.publishedAt)}</small>
    </div> */}
      </div>
      
      </div>
      </div>
      </div>
    
    );
    
    })}
     </div>
    ); 
   
  }
}

export default SearchQuery
