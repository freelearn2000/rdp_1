const Header = () => {
    return (
        <header>
            <div class="ui breadcrumb">
                <a class="section">Home</a>
                <div class="divider"> / </div>
                <a class="section">Store</a>
                <div class="divider"> / </div>
                <div class="active section">T-Shirt</div>
            </div>
        </header>
    );
};

const Profile = () => {
    return(
        <div class="ui link cards">
            <div class="card">
                <div class="image">
                <img src="/images/avatar2/large/matthew.png" />
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
                <img src="/images/avatar2/large/molly.png" />
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
                <img src="/images/avatar2/large/elyse.png" />
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
    );
}
// for main sectionfdgdfdg
// sdasfsd
const Main = () => {
    return (
        <div className='main'>
            <div className="ui star rating" data-rating="3"></div>
        </div>
    );
}

const Footer = () => {
    return (
        <footer>

        </footer>
    );
}

class App extends React.Component{
    render( ){
        return (
            <div className='app'>
                <Header />
                <Main/>
                <Profile />
                <Footer/>
            </div>
        );
    }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);