import Search from './Search.js';
import VideoList from './VideoList.js';
import VideoPlayer from './VideoPlayer.js';
import exampleVideoData from '../data/exampleVideoData.js';
import searchYouTube from '../lib/searchYouTube.js';

class App extends React.Component {
  constructor () {
    super();

    this.state = {
      currentVideo: exampleVideoData[0],
      videos: exampleVideoData
    };

    this.search = searchYouTube.bind(this);
  }

  updateVideos (videos) {
    this.setState({
      currentVideo: videos[0],
      videos: videos,
    });
  }

  componentDidMount() {
    console.log('componentDidMount', this);

    this.search('wimbledon',
      data => { this.updateVideos(data); });
  }

  handleTitleClick (video) {
    this.setState({
      currentVideo: video
    });
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
            <VideoList videos={this.state.videos} handleClick={this.handleTitleClick.bind(this)}/>
          </div>
        </div>
      </div>
    );
  }
}
// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;
