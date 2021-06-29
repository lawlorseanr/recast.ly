import Search from './Search.js';
import VideoList from './VideoList.js';
import VideoPlayer from './VideoPlayer.js';
import exampleVideoData from '../data/exampleVideoData.js';
import searchYouTube from '../lib/searchYouTube.js';

class App extends React.Component {
  constructor () {
    super();

    var emptyVideo = {
      etag: '',
      id: {
        videoId: ''
      },
      snippet: {
        title: '',
        description: '',
        thumbnails: {
          default: {
            url: '',
          }
        }
      }
    };

    this.state = {
      searchTerm: 'wimbledon',
      currentVideo: emptyVideo,
      videos: [],
      // currentVideo: exampleVideoData[0],
      // videos: exampleVideoData
    };

    this.handleTitleClick = (video) => {
      this.setState({
        currentVideo: video
      });
    };

    this.updateSearch = (term) => {
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
    searchYouTube(this.state.searchTerm,
      data => { this.updateVideos(data); });
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
