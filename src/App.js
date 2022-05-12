import React from 'react';

function App() {
  return (
    <div className="flex h-screen">
      <div className="flex flex-col w-72 px-8 py-8 bg-white border-r">
        <h2 className="text-3xl mx-3 mt-4 mb-9 font-semibold text-gray-800">VideoLab</h2>
        <div className="flex-col justify-between flex-1 mt-6">
          <nav>
            <button className="flex items-center px-4 py-2 mt-3 text-gray-700 bg-gray-200 duration-200 hover:bg-gray-300 rounded-md"
            >
              <svg width="18" height="18" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"
                className="side-icon">
                <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M14.53.47a.75.75 0 0 1 0 1.06l-2.72 2.72H17c.966 0 1.75.784 1.75 1.75v10.5A1.75 1.75 0 0 1 17 18.25H3a1.75 1.75 0 0 1-1.75-1.75V6c0-.966.784-1.75 1.75-1.75h4.894L5.85 2.581a.75.75 0 0 1 .948-1.162L9.95 3.99l3.52-3.52a.75.75 0 0 1 1.061 0ZM9.997 5.75H17a.25.25 0 0 1 .25.25v10.5a.25.25 0 0 1-.25.25H3a.25.25 0 0 1-.25-.25V6A.25.25 0 0 1 3 5.75h6.997ZM7.5 13.25a.75.75 0 0 0 0 1.5h5a.75.75 0 0 0 0-1.5h-5Z"
                  fill="#0C0D0F"></path>
              </svg>
              <span className="mx-4 font-medium">TV</span>
            </button>

            <button className="flex items-center px-4 py-2 mt-3 text-gray-600 transition-colors duration-200 transform rounded-md hover:bg-gray-200 hover:text-gray-700"
            >
              <svg width="18" height="18" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"
                className="side-icon">
                <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M2.663 9.25h4.174a3.251 3.251 0 0 1 6.326 0h4.174a7.376 7.376 0 0 0-14.674 0Zm14.674 1.5h-4.174a3.251 3.251 0 0 1-6.326 0H2.663a7.376 7.376 0 0 0 14.674 0ZM1.125 10a8.875 8.875 0 1 1 17.75 0 8.875 8.875 0 0 1-17.75 0ZM10 8.25a1.75 1.75 0 1 0 0 3.5 1.75 1.75 0 0 0 0-3.5Z"
                  fill="#0C0D0F"></path>
              </svg>
              <span className="mx-4 font-medium">Game</span>
            </button>

            <button className="flex items-center px-4 py-2 mt-3 text-gray-600 transition-colors duration-200 transform rounded-md hover:bg-gray-200 hover:text-gray-700"
            >
              <svg width="18" height="18" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"
                className="side-icon">
                <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M9.491 1.76a.75.75 0 0 1-.627.856 7.375 7.375 0 1 0 4.386.666v6.623a3.25 3.25 0 1 1-1.5-2.74V2.171a.75.75 0 0 1 .98-.713A8.875 8.875 0 1 1 1.125 9.905c.001-4.438 3.258-8.114 7.512-8.771a.75.75 0 0 1 .855.627Zm2.259 8.145a1.75 1.75 0 1 0-3.5 0 1.75 1.75 0 0 0 3.5 0Z"
                  fill="#0C0D0F"></path>
              </svg>
              <span className="mx-4 font-medium">Music</span>
            </button>


            <button className="flex items-center px-4 py-2 mt-3 text-gray-600 transition-colors duration-200 transform rounded-md hover:bg-gray-200 hover:text-gray-700"
            >
              <svg width="18" height="18" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"
                className="side-icon">
                <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M2.625 10a7.375 7.375 0 1 1 13.796 3.63.75.75 0 0 0 1.305.74A8.843 8.843 0 0 0 18.875 10a8.875 8.875 0 1 0-4.707 7.837c.577-.307 1.192-.313 1.621-.039l1.308.834a.75.75 0 0 0 .806-1.264l-1.307-.834c-1-.639-2.213-.51-3.133-.02A7.375 7.375 0 0 1 2.625 10ZM8.75 6.75a1.25 1.25 0 1 0 2.5 0 1.25 1.25 0 0 0-2.5 0Zm0 6.5a1.25 1.25 0 1 0 2.5 0 1.25 1.25 0 0 0-2.5 0Zm-2-2a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5Zm6.5 0a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5Z"
                  fill="#0C0D0F"></path>
              </svg>
              <span className="mx-4 font-medium">Movie</span>
            </button>
          </nav>
        </div>
      </div>
      <div className="flex w-full px-6 py-8 bg-gray-100 overflow-y-scroll">
        <div className="flex flex-wrap h-min gap-6">
          <div className="w-72 bg-white rounded-md shadow-md overflow-hidden duration-200 hover:scale-[102%]">
            <button>
              <div className="relative w-72 h-[10.125rem]">
                <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url(' + require('./img/test2.jpg') + ')' }}>
                </div>
                <div
                  className="absolute inset-0 bg-black/0 hover:bg-black/50 text-white/0 hover:text-white z-10 duration-200 flex justify-center items-center font-medium text-lg">
                  Play
                </div>
              </div>
              <div className="flex flex-col grow-0 p-3">
                <p className="truncate font-medium text-base text-gray-700 duration-200 hover:text-gray-500">
                  映画『ゆるキャン△』2022年初夏、全国ロードショー</p>
                <p className="mt-1 text-sm text-gray-500">01:11 · 7.4K views</p>
              </div>
            </button>
          </div>
          <div className="w-72 bg-white rounded-md shadow-md overflow-hidden duration-200 hover:scale-[102%]">
            <button>
              <div className="relative w-72 h-[10.125rem]">
                <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url(' + require('./img/test.jpg') + ')' }}>
                </div>
                <div
                  className="absolute inset-0 bg-black/0 hover:bg-black/50 text-white/0 hover:text-white z-10 duration-200 flex justify-center items-center font-medium text-lg">
                  Play
                </div>
              </div>
              <div className="flex flex-col grow-0 p-3">
                <p className="truncate font-medium text-base text-gray-700 duration-200 hover:text-gray-500">
                  Happy Lunar New Year! (2022 ver)</p>
                <p className="mt-1 text-sm text-gray-500">02:22 · 9.4K views</p>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
