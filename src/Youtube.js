import React, { Component } from 'react'


const API = 'AIzaSyAOYG1Ai4mZy6L-ifZgQ8bzS87vA6v3JdA'
// my api key of youtube 
// AIzaSyDJ4LBmMXU4AEcHDkg_g6SaD53GMwBI-h0 
const channelID = 'UCq-Fj5jknLsUf-MWSy4_brA'
// UCq-Fj5jknLsUf-MWSy4_brA
const result = 21;

// https://www.googleapis.com/youtube/v3/search?key=AIzaSyAOYG1Ai4mZy6L-ifZgQ8bzS87vA6v3JdA&channelId=UCXgGY0wkgOzynnHvSEVmE3A&part=snippet,id&order=date&maxResults=10

var finalURL = `https://www.googleapis.com/youtube/v3/search?key=${API}&channelId=${channelID}&part=snippet,id&order=date&maxResults=${result}`;



export default class Youtube extends Component {
        constructor(props){
        super(props);
        this.state = {
            resultyt: []
        };
        this.clicked=this.clicked.bind(this);
    }

    clicked(){
        fetch(finalURL)
        .then((response) => response.json())
        .then((responseJson) => {
            const resultyt = responseJson.items.map(obj => "https://www.youtube.com/embed/"+obj.id.videoId)
            this.setState({resultyt})
            
        })
        .catch((error) => {
          console.error(error);
        });
    }
  render() {

    const frame = this.state.resultyt.map((link, i) => {
            return (
            
                        <div key={i} className="youtube">
                            <iframe width="425" height="250" src={link} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                        </div>     
                    
    )});

    return (
    <div>
        <button onClick={this.clicked}> Get Youtube Videos of T Series </button>
           <div className="container">
                    
                        {frame}
                    
                
            </div>
        
            
           
    </div>
    )
  }
}
