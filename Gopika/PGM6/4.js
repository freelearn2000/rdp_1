const Header = () => {
    return (
        <header>
           <div class="ui inverted menu">
  <a class="active item">
    Home
  </a>
  <a class="item">
    About us
  </a>
  <a class="item">
    Team
  </a>
   <a class="item">
    Contact us
  </a>
</div>
        </header>
    );
};

const Main = () => {
    return (
        <>
        <div class="ui link cards">
        <div class="card">
          <div class="image">
            <img src="/images/matthew.png" />
          </div>
          <div class="content">
            <div class="header">Matt Giampietro</div>
            <div class="meta">
              <a>Friends</a>
            </div>
            <div class="description">
              Matthew is an interior designer living in New York.
            </div>
          </div>
          <div class="extra content">
            <span class="right floated">
              Joined in 2013
            </span>
            <span>
              <i class="user icon"></i>
              75 Friends
            </span>
          </div>
        </div>
        <div class="card">
          <div class="image">
            <img src="images/molly.png" />
          </div>
          <div class="content">
            <div class="header">Molly</div>
            <div class="meta">
              <span class="date">Coworker</span>
            </div>
            <div class="description">
              Molly is a personal assistant living in Paris.
            </div>
          </div>
          <div class="extra content">
            <span class="right floated">
              Joined in 2011
            </span>
            <span>
              <i class="user icon"></i>
              35 Friends
            </span>
          </div>
        </div>
        <div class="card">
          <div class="image">
            <img src="/images/elyse.png" />
          </div>
          <div class="content">
            <div class="header">Elyse</div>
            <div class="meta">
              <a>Coworker</a>
            </div>
            <div class="description">
              Elyse is a copywriter working in New York.
            </div>
          </div>
          <div class="extra content">
            <span class="right floated">
              Joined in 2014
            </span>
            <span>
              <i class="user icon"></i>
              151 Friends
            </span>
          </div>
        </div>
      </div>
      </>
    );
}

const Footer = () => {
    return (
        <footer>
<h3>copyright@CDIT</h3>
        </footer>
    );
}

class App extends React.Component{
    render( ){
        return (
            <div className='Container'>
                <Header />
                <Main/>
                <Footer/>
            </div>
        );
    }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);