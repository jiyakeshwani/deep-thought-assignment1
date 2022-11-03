import React, { useEffect, useState } from "react";


function App() {
  let [tasks, setTasks] = useState([]);

  let fetchData = () => {
    return fetch(
      "https://dev.deepthought.education/assets/uploads/files/others/project.json"
    )
      .then((res) => res.json())
      .then((data) => setTasks(data));
  };

  useEffect(() => {
    fetchData();
  }, []);

  console.log(tasks);
  return (
    <>
      <header>
        <div className="container flex">
          <img
            src="https://deepthought.education/assets/images/logo/logo.svg"
            alt="logo"
          />
          <div className="flex">
            <img className="image" src="/home.png" alt="home" />
            <img className="image" src="/settings.png" alt="home" />
            <img className="image" src="/bell.png" alt="home" />

            <img className="image2" src="/profile-2.png" alt="profile" />

            <div className="three-dots">
              <div className="dot"></div>
              <div className="dot"></div>
              <div className="dot"></div>
            </div>
          </div>
        </div>
      </header>
      <main className="flex main">
        <aside>
          <div class="aside">
            <img src="/hamburger.png" alt="bars" />
          </div>
          <div class="blank-aside">
            <span class="inside-blank-aside">1</span>
          </div>
        </aside>
        <div className="padding">
          <section className="tasks">
            <div className="section-head">
              <p>you are taking challenges of new project </p>
            </div>
            <h1>Demo Task</h1>
            <div className="section">
              <div className="task task1">
                <div className="task-head">
                  <h2>Task Heading 1</h2>
                </div>
                <div className="task-padding">
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type.Lorem Ipsum has been the
                    industry's standard dummy text ever since the 1500s, when an
                    unknown printer took a galley of type.Lorem Ipsum has been
                    the industry's standard dummy text ever since the 1500s,
                    Lorem Ipsum has been the industry's standard dummy text ever
                    since the 1500s, when an unknown printer took a galley of
                    type
                  </p>
                  <img className="arrow" src="/down-arrow.png" alt="arrow" />
                </div>
              </div>
              <div className="task task2">
                <div className="task-head">
                  <h2>Task Heading 2</h2>
                </div>
                <hr className="top" />
                <span>
                  <img
                    className="arrow-up"
                    src="/arrow-up.png"
                    alt="arrow-up"
                  />
                </span>
                <span className="thread">Thread A</span>
                <hr />
                <div className="task-padding">
                  <div className="flex">
                    <div className="sub1">
                      <h3>Sub Thread 1</h3>
                      <textarea
                        className="radius"
                        placeholder="Enter Text Here"
                      ></textarea>
                    </div>
                    <div className="sub1">
                      <h3>Sub Thread 2</h3>
                      <textarea
                        className="radius"
                        placeholder="Enter Text Here"
                      ></textarea>
                    </div>
                  </div>
                  <div className="flex select">
                    <img src="/bulb.png" alt="img" />
                    <img src="/msg.png" alt="img" />
                    <select>
                      <option>Select Category</option>
                    </select>
                    <select>
                      <option>Select Process</option>
                    </select>
                  </div>
                  <button className="sub-btn">+ Sub Thread</button>
                  <div className="sub1 sub2">
                    <h3>Summary for thread A</h3>
                    <textarea
                      className="radius"
                      placeholder="Enter Text here"
                    ></textarea>
                  </div>
                  <div className="flex credit">
                    <div className="flex ">
                      <img src="/infinity.png" alt="img" />
                      <span>Thread Credit</span>
                      <img src="/pencil.png" alt="img" />
                    </div>
                    <select>
                      <option>Select Emotion</option>
                    </select>
                  </div>
                  <button className="sub-btn end">+ New Thread</button>
                  <div>
                    <img className="disc" src="/disc.png" alt="disc" />
                  </div>
                  <hr />

                  <img
                    className="arrow"
                    src="/down-arrow.png"
                    alt="down-arrow"
                  />
                </div>
              </div>

              <div className="task task1">
                <div className="task-head">
                  <h2>Task Heading 3</h2>
                </div>
                <div className="task-padding">
                  <textarea
                    placeholder="Reflect as per given deadlines"
                    cols="60"
                    rows="8"
                  ></textarea>
                  <img className="arrow" src="/down-arrow.png" alt="arrow" />
                </div>
              </div>
              <div className="task task2">
                <div className="task-head">
                  <h2>Task Heading 4</h2>
                </div>
                <div className="task-padding">
                  <iframe
                    src="https://drive.google.com/file/d/1Pxw83bTKE3KkOyYnwm1u6DSVjntSrNTp/preview"
                    width="470"
                    height="580"
                    allow="autoplay"
                  ></iframe>
                </div>
              </div>

              <div className="task task7">
                <div className="task-head">
                  <h2>Task Heading 7</h2>
                </div>
                <div className="clr task-padding">
                  <img src="/pic1.png" alt="up" />
                  <span className="thread">Introduction</span>
                </div>
                <div className="task7-padding1">
                  <textarea
                    className="intro"
                    placeholder="Enter Introduction"
                  ></textarea>
                </div>
                <hr className="top" />
                <span>
                  <img
                    className="arrow-up"
                    src="/arrow-up.png"
                    alt="arrow-up"
                  />
                </span>
                <span className="thread">Thread A</span>
                <hr />
                <div className="task7-padding">
                  <div className="sub1 sub2">
                    <h3>Example 1</h3>
                    <textarea
                      className="radius"
                      placeholder="Enter Text here"
                    ></textarea>
                  </div>
                  <button className="sub-btn">+ Example</button>
                  <div className="sub1 sub2">
                    <h3>Argument for thread A</h3>
                    <textarea
                      className="radius"
                      placeholder="Enter Text here"
                    ></textarea>
                  </div>
                  <button className="sub-btn left">+ New Thread</button>
                </div>
                <div className="clr task-padding">
                  <img src="/pic1.png" alt="up" />
                  <span className="thread">Conclusion</span>
                </div>
                <div className="task7-padding1">
                  <textarea
                    className="intro"
                    placeholder="Enter Conclusion"
                  ></textarea>
                  <img className="disc1" src="/disc.png" alt="disc" />
                </div>
                <hr />
                <img className="arrow" src="/down-arrow.png" alt="down" />
              </div>
              <div className="task task1">
                <div className="task-head">
                  <h2>Task Heading 8</h2>
                </div>
                <iframe
                  className="audio"
                  src="https://drive.google.com/file/d/1dBBYQsz2yt3vc4YMkRmVC3nuTBbq2GON/preview"
                  width="460"
                  height="110"
                  allow="autoplay"
                ></iframe>
              </div>
            </div>
            <div className="task task9">
              <div className="task-head">
                <h2>Task Heading 9</h2>
              </div>
              <iframe
                width="490"
                height="210"
                src="https://www.youtube.com/embed/s8H0Sx7jy7c"
              ></iframe>
              <img className="arrow" src="/down-arrow.png" alt="arrow" />
            </div>
          </section>
        </div>
      </main>
      <button className="btn">Next</button>
    </>
  );
}

export default App;
