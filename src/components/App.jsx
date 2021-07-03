import Search from './Search.js';
import VideoList from './VideoList.js';
import VideoPlayer from './VideoPlayer.js';
import exampleData from '../data/exampleVideoData.js';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      video: exampleData[0],
      videos: exampleData
    };

  }

  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <Search />
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <VideoPlayer video={this.state.video}/>
          </div>
          <div className="col-md-5">
            <VideoList videos={this.state.videos}/>
          </div>
        </div>
      </div>
    );
  }
}


    this.updateSearch = (term) => {
      if (new Date() - this.state.lastSearch >= 500) {
        searchYouTube(term,
          data => { this.updateVideos(data); });
        this.state.lastSearch = new Date();
      }

      this.setState({
        searchTerm: term,
      });
    };
  }

  updateVideos (videos) {

    this.setState({
      currentVideo: videos[0],
      videos: videos,
    });
  }

  componentDidMount() {
    this.updateSearch('wimbledon');
  }

  render () {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            {/* <div><h5><em>search</em> view goes here</h5></div> */}
            <Search />
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <VideoPlayer video={this.state.currentVideo}/>
          </div>
          <div className="col-md-5">
            <VideoList videos={this.state.videos} handleClick={this.handleTitleClick}/>
          </div>
        </div>
      </div>
    );
  }
}
// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;
