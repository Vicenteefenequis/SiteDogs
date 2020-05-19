import React from 'react';
import logo from './assets/Logovector.png'
import circle from './assets/StylizeCircles.png'
import dog from './assets/BGdog.png'
import blob from './assets/Blob.png'
// import Dog from './assets/Dog.png'

import './App.css';

function App() {
  return (
    <div className="App">
      <div id="home">
        <header className="App-header">
          <div className="top">
            <img src={logo} alt="Logo" />
            <h2>ISADORA</h2>
          </div>
          <div className="top2">
            <h2>logo</h2>
            <h2>logo</h2>
            <h2>logo</h2>
          </div>
        </header>
        <nav className="App-Nav">
          <div className="Items-Nav">
            <p>Services</p>
            <p>Specials</p>
            <p>Facilities</p>
            <p>Reviews</p>
            <p>Shop</p>
            <p>About</p>
          </div>
          <div className="Items-Nav2">
            <p>LOGO1</p>
            <p>LOGO2</p>
          </div>
        </nav>
        <section className="App-Sec">
          <span>Premier dog boarding, </span>
          <span>daycare & day spa</span>
          <div className="myButton">
            <button>MAKE IN APPOINTMENT</button>
          </div>
        </section>
        <div className="myCircles">
          <img src={circle} alt="myCircles" />
        </div>

        <section className="SecCard">
          <div>
            <p id="text-primary">Who we are </p>
            <p id="text">Nemo enim ipsam voluptatem quia voluptas in proident</p>
            <p className="info">Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur.</p>

            <div className="myDog">
              <img id="blob" src={blob} alt="" />
              <img src={dog} alt="" />
            </div>
          </div>

        </section>
        <div className="aboutus">
          <p>OUR PROMISE TO YOU</p>
          <h1>Sed Perspiciatis omnis iste natus</h1>
          <div className="veterinarian">
            <div className="veterinarianc1">
              <div className="contentvet">
                <h1>ICON</h1>
                <h4>24/7 Love & Care</h4>
              </div>
              <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium corrupti quos dolores et quas.</p>
            </div>
            <div className="veterinarianc2">
              <div className="contentvet">
                <h1>ICON</h1>
                <h4>On-site Veterinarian</h4>

              </div>
              <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium corrupti quos dolores et quas.</p>
            </div>
            <div className="veterinarianc3">
              <div className="contentvet">
                <h1>ICON</h1>
                <h4>Live-stream Cameras</h4>
              </div>
              <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium corrupti quos dolores et quas.</p>
            </div>
          </div>
        </div>
        <div className="dogs">
          <div className="contentdogs">
            <h1>Nemo enim ipsam voluptatem quia</h1>
            <h1>voluptas in proident</h1>
            <button>MAKE IN APPOINTMENT</button>
          </div>
        </div>
        <footer className="footerdogs">
          <div className="container">
            <p id="services">OUR SERVICES</p>
            <h1>Sed Perspiciatis omnis iste natus</h1>
            <div className="grid">
              <div className="card">
                <div className="contentsection">
                  <span>ICON</span>
                  <h4>Pet Boarding (No cages)</h4>
                  <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium corrupti quos dolores et quas.</p>
                </div>
              </div>
              <div className="card">
                <div className="contentsection">
                  <span>ICON</span>
                  <h4>Pet Boarding (No cages)</h4>
                  <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium corrupti quos dolores et quas.</p>
                </div>
              </div>
              <div className="card">
                <div className="contentsection">
                  <span>ICON</span>
                  <h4>Pet Boarding (No cages)</h4>
                  <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium corrupti quos dolores et quas.</p>
                </div>
              </div>
            </div>
            <div className="grid">
              <div className="card">
                <div className="contentsection">
                  <span>ICON</span>
                  <h4>Pet Boarding (No cages)</h4>
                  <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium corrupti quos dolores et quas.</p>
                </div>
              </div>
              <div className="card">
                <div className="contentsection">
                  <span>ICON</span>
                  <h4>Pet Boarding (No cages)</h4>
                  <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium corrupti quos dolores et quas.</p>
                </div>
              </div>
              <div className="card">
                <div className="contentsection">
                  <span>ICON</span>
                  <h4>Pet Boarding (No cages)</h4>
                  <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium corrupti quos dolores et quas.</p>
                </div>
              </div>
            </div>
            <div className="button">
              <button>LEARN MORE</button>
            </div>

          </div>
          <div className="containerfooter">
            <div className="gridfooter">
              <div className="cardfooter">
                <div className="sectionfooter">
                  <h4>Make an appointment</h4>
                  <div className="inputs">
                    <input
                      type="text"
                      placeholder="Name"
                    />
                    <input
                      type="text"
                      placeholder="Email"
                    />
                  </div>
                  <div className="inputs">
                    <input
                      type="text"
                      placeholder="Phone Number"
                    />
                    <input
                      type="text"
                      placeholder="Select Service"
                    />
                  </div>
                  <div id="textarea">
                    <textarea name="" id="" cols="30" rows="10" placeholder="Digite uma mensagem ...."></textarea>
                  </div>

                </div>

              </div>
              <div className="contentfooter">
                <div className="pointer">
                <h2>Maxime placeat facere possimus omnis  !!</h2>
                <h1 id="number">5,700+</h1>
                <p>customers serverd</p>
                </div>
                  
              </div>
            </div>
          </div>
        </footer>
      </div>

    </div>

  );
}

export default App;
