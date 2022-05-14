import React from 'react';
import "./App.css";


function Tab(props) {
  return (
    <button className={props.selected ? "flex items-center px-4 py-2 mt-3 bg-gray-200 text-gray-700 duration-200 rounded-md hover:bg-gray-300" : "flex items-center px-4 py-2 mt-3 text-gray-700 duration-200 rounded-md hover:bg-gray-200"} onClick={props.onClick}>
      {props.icon}
      <p className="mx-4 font-medium"> {props.name}</p>
    </button>
  );
}

function User(props) {
  return (
    <div className="flex flex-wrap h-min gap-6">

    </div>
  );
}

function VideoPreview(props) {
  return (<button className="w-72 bg-white rounded-md shadow-md overflow-hidden duration-200 hover:scale-[102%]">
    <div className="relative w-72 h-[10.125rem]">
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url(' + props.video.cover + ')' }}>
      </div>
      <div
        className="absolute inset-0 bg-black/0 hover:bg-black/50 text-white/0 hover:text-white z-10 duration-200 flex justify-center items-center font-medium text-lg">
        Play
      </div>
    </div>
    <div className="flex-col h-18 content-start grow-0 p-3">
      <p className="flex truncate font-medium text-left text-base text-gray-700 duration-200 hover:text-gray-500">
        <p className="min-w-0 truncate">
          {props.video.title}
        </p>
      </p>
      <p className="flex mt-1 text-sm text-gray-400">
        {props.video.lengthStr}{props.video.recommended ? ' · Recommended for you' : ""}
      </p>
    </div>
  </button>);
}

function RecommendMore(props) {
  const recommendable = (<button className="w-72 h-[14.625rem] bg-white rounded-md shadow-md overflow-hidden duration-200 text-gray-400 hover:text-gray-500 hover:scale-[102%]" onClick={props.onClick}>
    <p className="font-extrabold text-7xl mb-4">
      …
    </p>
    <p className="font-medium text-xl mb-4">
      Show more videos recommended for you
    </p>
  </button>)
  const nothingToRecommend = (<div className="flex flex-col justify-center w-72 h-[14.625rem] bg-white rounded-md shadow-md overflow-hidden duration-200 text-gray-300 text-center">
    <p className="font-extrabold text-7xl mb-4">
      :(
    </p>
    <p className="font-medium text-xl mb-4">
      There's nothing more to recommend now
    </p>
  </div>)
  return props.anythingToRecommend ? recommendable : nothingToRecommend;
}

function VideoList(props) {
  return (
    <div className="flex flex-wrap h-min gap-6">
      {props.videoList.map((item, i) =>
        <VideoPreview video={item}></VideoPreview>
      )}
      <RecommendMore anythingToRecommend={props.anythingToRecommend} onClick={props.onRecClick}></RecommendMore>
    </div>
  );
}

class Player extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      liked: false,
    }
  }

  render() {
    return (
      <div className="flex flex-col w-full h-full items-center gap-6">
        <div className="flex w-[90%] h-[90%] bg-white rounded-md shadow-md overflow-hidden duration-200 text-gray-300 text-center">
          <iframe className="w-full" src="https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        <div className="inline-flex place-content-between items-center font-medium text-base w-[90%] h-[10%] bg-white rounded-md overflow-hidden shadow-md">
          <button className="flex w-36 h-full justify-center items-center text-gray-400 duration-200 hover:text-gray-500 hover:bg-gray-200">&lt; Back</button>
          <div className="flex truncate h-full justify-center items-center text-center">
            <p className="min-w-0 truncate">映画『ゆるキャン△』2022年初夏、全国ロードショー2333333
            </p>
          </div>
          <button className="flex w-36 h-full justify-center items-center text-gray-400 duration-200 hover:text-gray-500 hover:bg-gray-200">👍 Like</button>
        </div>
      </div>
    ); // {this.props.title}
  }
}


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tabList: [
        {
          name: "User",
          icon: <svg width="18" height="18" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" p-id="1250"><path d="M512 74.666667C270.933333 74.666667 74.666667 270.933333 74.666667 512S270.933333 949.333333 512 949.333333 949.333333 753.066667 949.333333 512 753.066667 74.666667 512 74.666667zM288 810.666667c0-123.733333 100.266667-224 224-224S736 686.933333 736 810.666667c-61.866667 46.933333-140.8 74.666667-224 74.666666s-162.133333-27.733333-224-74.666666z m128-384c0-53.333333 42.666667-96 96-96s96 42.666667 96 96-42.666667 96-96 96-96-42.666667-96-96z m377.6 328.533333c-19.2-96-85.333333-174.933333-174.933333-211.2 32-29.866667 51.2-70.4 51.2-117.333333 0-87.466667-72.533333-160-160-160s-160 72.533333-160 160c0 46.933333 19.2 87.466667 51.2 117.333333-89.6 36.266667-155.733333 115.2-174.933334 211.2-55.466667-66.133333-91.733333-149.333333-91.733333-243.2 0-204.8 168.533333-373.333333 373.333333-373.333333S885.333333 307.2 885.333333 512c0 93.866667-34.133333 177.066667-91.733333 243.2z" p-id="1251"></path></svg>,
        },
        {
          name: "Videos",
          icon: <svg width="18" height="18" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M14.53.47a.75.75 0 0 1 0 1.06l-2.72 2.72H17c.966 0 1.75.784 1.75 1.75v10.5A1.75 1.75 0 0 1 17 18.25H3a1.75 1.75 0 0 1-1.75-1.75V6c0-.966.784-1.75 1.75-1.75h4.894L5.85 2.581a.75.75 0 0 1 .948-1.162L9.95 3.99l3.52-3.52a.75.75 0 0 1 1.061 0ZM9.997 5.75H17a.25.25 0 0 1 .25.25v10.5a.25.25 0 0 1-.25.25H3a.25.25 0 0 1-.25-.25V6A.25.25 0 0 1 3 5.75h6.997ZM7.5 13.25a.75.75 0 0 0 0 1.5h5a.75.75 0 0 0 0-1.5h-5Z" fill="#0C0D0F"></path></svg>,
        }
      ],
      currentTab: 1,
      videoList: fetchDefault(0),
      anythingToRecommend: true,
      playing: false,
    }
  };

  handleNavClick(i) {
    this.setState({
      currentTab: i,
      videoList: fetchDefault(i),
      anythingToRecommend: true,
    })
  }

  handleRecClick() {
    const fetchRecommend = recommendMore();
    const videoList = this.state.videoList.slice();
    if (fetchRecommend) {
      this.setState({
        videoList: videoList.concat(fetchRecommend),
      })
    } else {
      this.setState({
        anythingToRecommend: false,
      })
    };
  }

  handleVideoClick() {

  }

  render() {
    return (
      <div className="flex h-screen" >
        <div className="flex flex-col w-72 px-8 py-8 bg-white border-r">
          <h2 className="text-3xl mx-3 mt-4 mb-9 font-semibold text-gray-800">VideoLab</h2>
          <nav className="flex flex-col content-start flex-1 mt-6">
            {this.state.tabList.map((item, i) =>
              <Tab name={item.name} selected={this.state.currentTab === i} onClick={() => this.handleNavClick(i)} icon={item.icon}></Tab>
            )}
          </nav>
        </div>
        <div className="flex w-full px-6 py-8 bg-gray-100 overflow-y-scroll">
          {this.state.currentTab === 0 ? <User></User> : (this.state.playing ? <Player id={null}></Player> : <VideoList videoList={this.state.videoList} anythingToRecommend={this.state.anythingToRecommend} onRecClick={() => this.handleRecClick()}></VideoList>)}
        </div>
      </div>
    );
  }
}

var defaultVideoList = [
  {
    id: {},
    title: "映画『ゆるキャン△』2022年初夏、全国ロードショー",
    cover: require('./img/test2.jpg'),
    lengthStr: "01:11",
    recommended: false,
  },
  {
    id: {},
    title: "Happy New Year 2022",
    cover: require('./img/test.jpg'),
    lengthStr: "02:24",
    recommended: false,
  },
  {
    id: {},
    title: "I forgot it",
    cover: require('./img/test3.jpg'),
    lengthStr: "00:06",
    viewCount: 18,
    recommended: false,
  },
  {
    id: {},
    title: "Something?",
    cover: require('./img/test4.jpg'),
    lengthStr: "92:01",
    recommended: false,
  },
];

var videoToRecommend = [
  {
    id: {},
    title: "Rubbish bin",
    cover: require('./img/test5.jpg'),
    lengthStr: "03:46",
    recommended: true,
  },
  {
    id: {},
    title: "CSSAUG cares you",
    cover: require('./img/test6.jpg'),
    lengthStr: "05:20",
    recommended: true,
  },
  {
    id: {},
    title: "A photo, where there are mountains, lakes and plants, but not sun yet",
    cover: require('./img/test7.jpg'),
    lengthStr: "01:11",
    recommended: true,
  },
]

function fetchDefault() {
  // Update defaultVideoList here.
  return defaultVideoList;
}

function recommendMore() {
  try {
    // Update videoToRecommend here
    return videoToRecommend.length === 0 ? null : videoToRecommend;
  } finally {
    // Just to show the situation when there is nothing more to recommend.
    // try/finally and the line below should be deleted later on.
    videoToRecommend = [];
  }
}

export default App;
