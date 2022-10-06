import React from "react";
import { useContext } from "react";
import { DarkModeContext } from "../context";

export default function Hero() {
  const [darkMode, setDarkMode] = useContext(DarkModeContext);
  return (
    <>
      <main>
        {/* 
        I will change the text if it is dark mode, i will make it white, 
        if it is light mode i will make it dark. Iwill use the error condition for that 
        something for the element that needs changes. The same if it is dark 
        i will change it to if it is light mode i will change text color to the black. 
        */}
        <h2 style={{ color: darkMode ? "#fff" : "#000" }}>
          Lorem ipsum <span className="right-job">dolor sit</span> amet
          consectetur
        </h2>
        <p style={{ color: darkMode ? "#fff" : "#000" }}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry
        </p>
      </main>

      <form action="">
        <div
          className="main-container"
          style={{ backgroundColor: darkMode ? "#fff" : "#f5f5f5" }}
        >
          <div className="container input1">
            <svg
              version="1.1"
              id="Capa_1"
              width="16px"
              height="16px"
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              viewBox="0 0 487.95 487.95"
            >
              <g>
                <g>
                  <path
                    d="M481.8,453l-140-140.1c27.6-33.1,44.2-75.4,44.2-121.6C386,85.9,299.5,0.2,193.1,0.2S0,86,0,191.4s86.5,191.1,192.9,191.1
              c45.2,0,86.8-15.5,119.8-41.4l140.5,140.5c8.2,8.2,20.4,8.2,28.6,0C490,473.4,490,461.2,481.8,453z M41,191.4
              c0-82.8,68.2-150.1,151.9-150.1s151.9,67.3,151.9,150.1s-68.2,150.1-151.9,150.1S41,274.1,41,191.4z"
                  />
                </g>
              </g>
            </svg>
            <input type="text" placeholder="title or keyword" />
          </div>
          <div className="border"></div>
          <div className="container input2">
            <svg
              version="1.1"
              id="Capa_1"
              width="16px"
              height="16px"
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              viewBox="0 0 264.018 264.018"
            >
              <g>
                <path
                  d="M132.009,0c-42.66,0-77.366,34.706-77.366,77.366c0,11.634,2.52,22.815,7.488,33.24c0.1,0.223,0.205,0.442,0.317,0.661
          l58.454,113.179c2.146,4.154,6.431,6.764,11.106,6.764c4.676,0,8.961-2.609,11.106-6.764l58.438-113.148
          c0.101-0.195,0.195-0.392,0.285-0.591c5.001-10.455,7.536-21.67,7.536-33.341C209.375,34.706,174.669,0,132.009,0z
           M132.009,117.861c-22.329,0-40.495-18.166-40.495-40.495c0-22.328,18.166-40.494,40.495-40.494s40.495,18.166,40.495,40.494
          C172.504,99.695,154.338,117.861,132.009,117.861z"
                />
                <path
                  d="M161.81,249.018h-59.602c-4.143,0-7.5,3.357-7.5,7.5c0,4.143,3.357,7.5,7.5,7.5h59.602c4.143,0,7.5-3.357,7.5-7.5
          C169.31,252.375,165.952,249.018,161.81,249.018z"
                />
              </g>
            </svg>
            <input type="text" placeholder="Ankara, Turkey" />
          </div>
          <input type="submit" />
        </div>
      </form>

      {/* dark mode is equal to use context and 
      we will use our context */}
      {!darkMode ? (
   
        /**
         * we wil toggle that one according to the state we have 
         * for example if the if we have dark mode then this should this is svg
         */
        <svg
          width="35px"
          height="35px"
          viewBox="0 0 35 35"
          fill="#888"
          /**
           * we will use the onclick so that when the button clicks or 
           * when we click on the svg the dark mode should toggle should be
           */
          onClick={() => setDarkMode(true)}
          data-name="Layer 2"
          style={{
            marginRight: "16px",
            cursor: "pointer",
            position: "absolute",
            right: "40px",
            bottom: "40px",
          }}
          id="Layer_2"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M18.44,34.68a18.22,18.22,0,0,1-2.94-.24,18.18,18.18,0,0,1-15-20.86A18.06,18.06,0,0,1,9.59.63,2.42,2.42,0,0,1,12.2.79a2.39,2.39,0,0,1,1,2.41L11.9,3.1l1.23.22A15.66,15.66,0,0,0,23.34,21h0a15.82,15.82,0,0,0,8.47.53A2.44,2.44,0,0,1,34.47,25,18.18,18.18,0,0,1,18.44,34.68ZM10.67,2.89a15.67,15.67,0,0,0-5,22.77A15.66,15.66,0,0,0,32.18,24a18.49,18.49,0,0,1-9.65-.64A18.18,18.18,0,0,1,10.67,2.89Z" />
        </svg>
      ) 
      // 
      : (
        <svg
          version="1.1"
          id="Capa_1"
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="35px"
          fill="#888"
          /**
           * the other svgs will we should do the sam thing but we should return their give the value false 
           * now we have that one you can see that we can total succes.
           */
          onClick={() => {
            setDarkMode(false);
          }}
          style={{
            cursor: "pointer",
            position: "absolute",
            right: "40px",
            bottom: "40px",
          }}
          height="35px"
          viewBox="0 0 876 876"
        >
          <g>
            <circle cx="438" cy="438" r="246" />
            <path
              d="M420.5,163h35c11.046,0,20-8.954,20-20V20c0-11.046-8.954-20-20-20h-35c-11.046,0-20,8.954-20,20v123
      C400.5,154.046,409.454,163,420.5,163z"
            />
            <path
              d="M713,420.5v35c0,11.046,8.954,20,20,20h123c11.046,0,20-8.954,20-20v-35c0-11.046-8.954-20-20-20H733
      C721.954,400.5,713,409.454,713,420.5z"
            />
            <path
              d="M455.5,876c11.046,0,20-8.954,20-20V733c0-11.046-8.954-20-20-20h-35c-11.046,0-20,8.954-20,20v123
      c0,11.046,8.954,20,20,20H455.5z"
            />
            <path
              d="M20,475.5h123c11.046,0,20-8.954,20-20v-35c0-11.046-8.954-20-20-20H20c-11.046,0-20,8.954-20,20v35
      C0,466.546,8.954,475.5,20,475.5z"
            />
            <path
              d="M644.829,255.92c7.811,7.81,20.474,7.811,28.284,0l86.975-86.974c7.811-7.812,7.811-20.474,0-28.284l-24.749-24.749
      c-7.811-7.811-20.474-7.811-28.284,0l-86.975,86.974c-7.812,7.81-7.812,20.474,0,28.284L644.829,255.92z"
            />
            <path
              d="M735.338,760.087l24.749-24.749c7.811-7.81,7.811-20.474,0-28.284l-86.975-86.974c-7.812-7.811-20.475-7.811-28.284,0
      l-24.749,24.749c-7.812,7.811-7.812,20.474,0,28.284l86.975,86.974C714.865,767.898,727.528,767.898,735.338,760.087z"
            />
            <path
              d="M168.946,760.087l86.975-86.974c7.812-7.811,7.812-20.475,0-28.284l-24.749-24.749c-7.811-7.811-20.474-7.811-28.284,0
      l-86.975,86.974c-7.811,7.812-7.811,20.475,0,28.284l24.749,24.749C148.472,767.898,161.135,767.898,168.946,760.087z"
            />
            <path
              d="M202.887,255.92c7.811,7.811,20.474,7.81,28.284,0l24.749-24.749c7.812-7.81,7.812-20.474,0-28.284l-86.975-86.974
      c-7.811-7.811-20.474-7.811-28.284,0l-24.749,24.749c-7.811,7.81-7.811,20.474,0,28.284L202.887,255.92z"
            />
          </g>
        </svg>
      )}
    </>
  );
}
