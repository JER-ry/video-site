import React, { Component } from "react"
import { Formik, Form, Field, ErrorMessage } from "formik"
import "./App.css"

function Tab(props) {
  return (
    <button
      className={
        props.selected
          ? "flex items-center px-4 py-2 mt-3 bg-gray-200 text-gray-700 duration-200 rounded-md hover:bg-gray-300"
          : "flex items-center px-4 py-2 mt-3 text-gray-700 duration-200 rounded-md hover:bg-gray-200"
      }
      onClick={props.onClick}
    >
      {props.icon}
      <p className="mx-4 font-medium"> {props.name}</p>
    </button>
  )
}

class User extends Component {
  constructor(props) {
    super(props)
    this.state = {
      status: this.props.userId ? 2 : 0, // 0 - login, 1 - register, 2 - logged in
    }
  }

  handleLogin(values) {
    this.setState({
      status: 2
    })
    this.props.updateUserId(values.userId)
  }

  handleRegister() {
    this.setState({
      status: 1
    })
  }

  handleRegisterSubmit(values) {
    this.setState({
      status: 2
    })
    this.props.updateUserId(registerNewUserId(values.interstedCategories))
  }

  render() {
    if (this.state.status === 0) {
      return (
        <Login
          handleLogin={(userId) => this.handleLogin(userId)}
          handleRegister={() => this.handleRegister()}
        />
      )
    } else if (this.state.status === 1) {
      return (
        <Register
          handleRegisterSubmit={(userId) => this.handleRegisterSubmit(userId)}
        />
      )
    } else {
      return (
        <div className="flex w-full h-full items-center justify-center">
          <div className="flex flex-col overflow-hidden bg-white rounded-lg shadow-md px-10 py-10 text-left gap-2">
            <h2 className="flex text-2xl font-bold text-gray-700">
              ✅ Your user ID: {this.props.userId}
            </h2>
            <p className="flex text-base text-gray-400">
              Go to the Videos tab and watch something.
            </p>
          </div>
        </div>
      )
    }
  }
}

class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <div className="flex w-full h-full items-center justify-center">
        <div className="overflow-hidden bg-white rounded-lg shadow-md">
          <div className="px-10 pt-10 pb-8 space-y-6">
            <h2 className="text-2xl font-bold text-left text-gray-700">
              Welcome to VideoLab
            </h2>
            <Formik
              initialValues={{ userId: "" }}
              validate={(values) => {
                const errors = {}
                if (!values.userId) errors.userId = "Enter your user ID."
                else if (!checkUserId(values.userId))
                  errors.userId = "This ID doesn't exist."
                return errors
              }}
              onSubmit={(userId) => this.props.handleLogin(userId)}
            >
              <Form>
                <div className="flex justify-between">
                  <Field
                    className="w-[65%] px-4 py-3 text-gray-700 placeholder-gray-400 bg-white border rounded-md duration-200 focus:border-gray-300 focus:ring-opacity-40 focus:ring focus:ring-gray-300 focus:outline-none"
                    id="userId"
                    name="userId"
                    placeholder="User ID"
                  />
                  <button
                    className="w-[30%] px-4 py-3 text-center text-white duration-200 bg-gray-700 rounded hover:bg-gray-600 focus:ring-opacity-40 focus:ring focus:ring-gray-300 focus:outline-none"
                    type="submit"
                  >
                    Login
                  </button>
                </div>
                <ErrorMessage
                  name="userId"
                  component="div"
                  className="mt-4 text-red-500 text-sm"
                />
              </Form>
            </Formik>
          </div>
          <div className="items-center justify-center py-4 text-center bg-gray-50">
            <button
              className="mx-1 text-sm font-bold duration-200 text-gray-400 hover:text-gray-500"
              onClick={(values) => this.props.handleRegister(values)}
            >
              Register here
            </button>
            <span className="text-sm text-gray-400">
              if you don&apos;t have an account.
            </span>
          </div>
        </div>
      </div>
    )
  }
}

class Register extends Component {
  constructor(props) {
    super(props)
    this.state = {
      catList: ["cat1", "cat2", "cat3", "cat4", "cat5", "cat6", "cat7"]
    }
  }

  render() {
    return (
      <div className="flex w-full h-full items-center justify-center">
        <div className="max-w-lg p-10 space-y-6 overflow-hidden bg-white rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-left text-gray-700">
            Choose 3 categories of your interest
          </h2>
          <div className="flex flex-col gap-8">
            <Formik
              initialValues={{ interstedCategories: [] }}
              onSubmit={(values) => this.props.handleRegisterSubmit(values)}
              validate={(values) => {
                const errors =
                  values.interstedCategories.length === 3
                    ? {}
                    : {
                        interstedCategories: "Choose exactly 3 categories."
                      }
                return errors
              }}
            >
              <Form className="flex flex-col gap-6">
                <div className="flex flex-wrap h-min gap-6">
                  {this.state.catList.map((item, i) => (
                    <div key={i}>
                      <Field
                        className="hidden peer"
                        type="checkbox"
                        name="interstedCategories"
                        value={item}
                        id={i}
                      />
                      <label
                        className="block px-4 py-3 border rounded-lg cursor-pointer duration-200 text-gray-700 peer-checked:border-gray-500 hover:bg-gray-50 peer-checked:bg-gray-50 peer-checked:ring peer-checked:ring-gray-300"
                        htmlFor={i}
                      >
                        {item}
                      </label>
                    </div>
                  ))}
                </div>
                <ErrorMessage
                  name="interstedCategories"
                  component="div"
                  className="text-red-500 text-sm"
                />
                <button
                  className="py-3 text-center text-white duration-200 bg-gray-700 rounded hover:bg-gray-600 focus:ring-opacity-40 focus:ring focus:ring-gray-300 focus:outline-none"
                  type="submit"
                >
                  Submit
                </button>
              </Form>
            </Formik>{" "}
          </div>
        </div>
      </div>
    )
  }
}

function VideoPreview(props) {
  return (
    <button
      className="w-72 bg-white rounded-md shadow-md overflow-hidden duration-200 hover:scale-[102%]"
      onClick={props.onClick}
    >
      <div className="relative w-72 h-[10.125rem]">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url(" + props.video.cover + ")" }}
        />
        <div className="absolute inset-0 bg-black/0 hover:bg-black/50 text-white/0 hover:text-white z-10 duration-200 flex justify-center items-center font-medium text-lg">
          Play
        </div>
      </div>
      <div className="flex-col h-18 content-start grow-0 p-3">
        <p className="flex truncate font-medium text-left text-base text-gray-700 duration-200 hover:text-gray-500">
          <p className="min-w-0 truncate">{props.video.title}</p>
        </p>
        <p className="flex mt-1 text-sm text-gray-400">
          {props.video.lengthStr} · {props.video.category}
          {props.video.recommended ? " · For you" : ""}
        </p>
      </div>
    </button>
  )
}

function RecommendMore(props) {
  const recommendable = (
    <button
      className="w-72 h-[14.625rem] bg-white rounded-md shadow-md overflow-hidden duration-200 text-gray-400 hover:text-gray-500 hover:scale-[102%]"
      onClick={props.onClick}
    >
      <p className="font-extrabold text-7xl mb-4">…</p>
      <p className="font-medium text-xl mb-4">
        Show more videos recommended for you
      </p>
    </button>
  )
  const nothingToRecommend = (
    <div className="flex flex-col justify-center w-72 h-[14.625rem] bg-white rounded-md shadow-md overflow-hidden duration-200 text-gray-300 text-center">
      <p className="font-extrabold text-7xl mb-4">:(</p>
      <p className="font-medium text-xl mb-4">
        There&apos;s nothing more to recommend for now
      </p>
    </div>
  )
  return props.anythingToRecommend ? recommendable : nothingToRecommend
}

class VideoList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      videoList,
      anythingToRecommend: true,
      playing: false,
      videoToPlay: null
    }
  }

  componentDidMount() {
    if (videoList.length === 0) {
      recommendMore(this.props.userId)
      this.setState({
        videoList
      })
    }
  }

  handleRecClick() {
    if (recommendMore(this.props.userId)) {
      this.setState({
        videoList
      })
    } else {
      this.setState({
        anythingToRecommend: false
      })
    }
  }

  handleVideoClick(i) {
    this.setState({
      playing: true,
      videoToPlay: i
    })
  }

  handleBackClick() {
    this.setState({
      playing: false,
      videoToPlay: null
    })
  }

  handleLike() {
    // Upload to server
    const videoList = this.state.videoList.slice()
    videoList[this.state.videoToPlay].liked = true
    this.setState({
      videoList
    })
  }

  handleUnlike() {
    // Upload to server
    const videoList = this.state.videoList.slice()
    videoList[this.state.videoToPlay].liked = false
    this.setState({
      videoList
    })
  }

  render() {
    return this.state.playing ? (
      <Player
        videoToPlay={this.state.videoList[this.state.videoToPlay]}
        handleBackClick={() => this.handleBackClick()}
        handleLike={() => this.handleLike()}
        handleUnlike={() => this.handleUnlike()}
      />
    ) : (
      <div className="flex flex-wrap h-min gap-6">
        {this.state.videoList.map((item, i) => (
          <VideoPreview
            key={i}
            video={item}
            onClick={() => this.handleVideoClick(i)}
          />
        ))}
        <RecommendMore
          anythingToRecommend={this.state.anythingToRecommend}
          onClick={() => this.handleRecClick()}
        />
      </div>
    )
  }
}

class Player extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <div className="flex flex-col w-full h-full items-center gap-6">
        <div className="flex w-[90%] h-[90%] bg-white rounded-md shadow-md overflow-hidden text-gray-300 text-center">
          <iframe
            className="w-full"
            src="https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
        <div className="inline-flex place-content-between items-center font-medium text-base w-[90%] h-[10%] bg-white rounded-md overflow-hidden shadow-md">
          <button
            className="flex w-36 h-full justify-center items-center text-gray-400 duration-200 hover:text-gray-500 hover:bg-gray-200"
            onClick={this.props.handleBackClick}
          >
            &lt; Back
          </button>
          <div className="flex flex-col truncate h-full justify-center items-center text-center">
            <p className="min-w-0 truncate">{this.props.videoToPlay.title}</p>
            <p className="min-w-0 truncate text-sm text-gray-400">
              {this.props.videoToPlay.lengthStr} ·{" "}
              {this.props.videoToPlay.category}
              {this.props.videoToPlay.recommended ? " · For you" : ""}
            </p>
          </div>
          {this.props.videoToPlay.liked ? (
            <button
              className="flex w-36 h-full justify-center items-center text-gray-500 duration-200 hover:text-gray-500 hover:bg-gray-200"
              onClick={() => this.props.handleUnlike()}
            >
              👍 Liked
            </button>
          ) : (
            <button
              className="flex w-36 h-full justify-center items-center text-gray-400 duration-200 hover:text-gray-500 hover:bg-gray-200"
              onClick={() => this.props.handleLike()}
            >
              👍 Like
            </button>
          )}
        </div>
      </div>
    )
  }
}

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      tabList: [
        {
          name: "User",
          icon: (
            <svg
              width="18"
              height="18"
              viewBox="0 0 1024 1024"
              xmlns="http://www.w3.org/2000/svg"
              p-id="1250"
            >
              <path
                d="M512 74.666667C270.933333 74.666667 74.666667 270.933333 74.666667 512S270.933333 949.333333 512 949.333333 949.333333 753.066667 949.333333 512 753.066667 74.666667 512 74.666667zM288 810.666667c0-123.733333 100.266667-224 224-224S736 686.933333 736 810.666667c-61.866667 46.933333-140.8 74.666667-224 74.666666s-162.133333-27.733333-224-74.666666z m128-384c0-53.333333 42.666667-96 96-96s96 42.666667 96 96-42.666667 96-96 96-96-42.666667-96-96z m377.6 328.533333c-19.2-96-85.333333-174.933333-174.933333-211.2 32-29.866667 51.2-70.4 51.2-117.333333 0-87.466667-72.533333-160-160-160s-160 72.533333-160 160c0 46.933333 19.2 87.466667 51.2 117.333333-89.6 36.266667-155.733333 115.2-174.933334 211.2-55.466667-66.133333-91.733333-149.333333-91.733333-243.2 0-204.8 168.533333-373.333333 373.333333-373.333333S885.333333 307.2 885.333333 512c0 93.866667-34.133333 177.066667-91.733333 243.2z"
                p-id="1251"
              />
            </svg>
          )
        }
      ],
      currentTab: 0,
      userId: null
    }
  }

  handleNavClick(i) {
    this.setState({
      currentTab: i
    })
  }

  updateUserId(userId) {
    const tabList = this.state.tabList.slice()
    tabList[0].name = "Logged in"
    tabList.push({
      name: "Videos",
      icon: (
        <svg
          width="18"
          height="18"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M14.53.47a.75.75 0 0 1 0 1.06l-2.72 2.72H17c.966 0 1.75.784 1.75 1.75v10.5A1.75 1.75 0 0 1 17 18.25H3a1.75 1.75 0 0 1-1.75-1.75V6c0-.966.784-1.75 1.75-1.75h4.894L5.85 2.581a.75.75 0 0 1 .948-1.162L9.95 3.99l3.52-3.52a.75.75 0 0 1 1.061 0ZM9.997 5.75H17a.25.25 0 0 1 .25.25v10.5a.25.25 0 0 1-.25.25H3a.25.25 0 0 1-.25-.25V6A.25.25 0 0 1 3 5.75h6.997ZM7.5 13.25a.75.75 0 0 0 0 1.5h5a.75.75 0 0 0 0-1.5h-5Z"
            fill="#0C0D0F"
          />
        </svg>
      )
    })
    this.setState({
      userId: userId,
      tabList
    })
  }

  render() {
    return (
      <div className="flex h-screen">
        <div className="flex flex-col w-72 px-8 py-8 bg-white border-r">
          <h2 className="text-3xl mx-3 mt-4 mb-9 font-semibold text-gray-800">
            VideoLab
          </h2>
          <nav className="flex flex-col content-start flex-1 mt-6">
            {this.state.tabList.map((item, i) => (
              <Tab
                key={i}
                name={item.name}
                selected={this.state.currentTab === i}
                onClick={() => this.handleNavClick(i)}
                icon={item.icon}
              />
            ))}
          </nav>
        </div>
        <div className="flex w-full px-6 py-8 bg-gray-100 overflow-y-scroll">
          {this.state.currentTab === 0 ? (
            <User
              userId={this.state.userId}
              updateUserId={(userId) => this.updateUserId(userId)}
            />
          ) : (
            <VideoList userId={this.state.userId} />
          )}
        </div>
      </div>
    )
  }
}

let videoList = []

function recommendMore(userId) {
  const videoToRecommend = recommendMoreUpdate() // For demonstration purposes only
  if (videoToRecommend.length === 0) {
    return false
  } else {
    videoList = videoList.concat(videoToRecommend)
    return true
  }
}

/* -------------Below: For demonstration purposes only------------- */
let t = -1
const sim = [
  [
    {
      videoId: {},
      title: "Happy New Year 2022",
      cover: require("./img/test.jpg"),
      lengthStr: "02:24",
      category: "Advertisement",
      liked: false,
      recommended: false
    },
    {
      videoId: {},
      title: "映画『ゆるキャン△』2022年初夏、全国ロードショー",
      cover: require("./img/test2.jpg"),
      lengthStr: "01:11",
      category: "Movie",
      liked: false,
      recommended: false
    },
    {
      videoId: {},
      title: "I forgot it",
      cover: require("./img/test3.jpg"),
      lengthStr: "00:06",
      viewCount: 18,
      category: "Short",
      liked: false,
      recommended: false
    }
  ],
  [
    {
      videoId: {},
      title: "Something?",
      cover: require("./img/test4.jpg"),
      lengthStr: "92:01",
      category: "Short",
      liked: false,
      recommended: true
    },
    {
      videoId: {},
      title: "Rubbish bin",
      cover: require("./img/test5.jpg"),
      lengthStr: "03:46",
      category: "Rubbish",
      liked: false,
      recommended: true
    }
  ],
  [
    {
      videoId: {},
      title: "CSSAUG cares you",
      cover: require("./img/test6.jpg"),
      lengthStr: "05:20",
      category: "Rubbish",
      liked: false,
      recommended: true
    },
    {
      videoId: {},
      title:
        "A photo, where there are mountains, lakes and plants, but not sun yet",
      cover: require("./img/test7.jpg"),
      lengthStr: "01:11",
      category: "Nature",
      liked: false,
      recommended: true
    }
  ]
]

function recommendMoreUpdate() {
  t += 1
  return t < sim.length ? sim[t] : []
}

function checkUserId(userId) {
  return userId === "1000"
}

function registerNewUserId(interstedCategories) {
  return "1000"
}
/* -------------Above: For demonstration purposes only------------- */

export default App
