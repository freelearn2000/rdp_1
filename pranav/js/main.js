const Header = () => {
    return (
        <header>
            <div className="ui breadcrumb">
                <a className="section">Home</a>
                <div className="divider"> / </div>
                <a className="section">Store</a>
                <div className="divider"> / </div>
                <div className="active section">T-Shirt</div>
            </div>
        </header>
    );
};

const Profile = () => {
    return (

        <div className="container">
            <div className="ui link cards">
                <div className="card">
                    <div className="image">
                        <img src="img/matthew.png" />
                    </div>
                    <div className="content">
                        <div className="header">Matt Giampietro</div>
                        <div className="meta">
                            <a>Friends</a>
                        </div>
                        <div className="description">
                            Matthew is an interior designer living in New York.
                        </div>
                    </div>
                    <div className="extra content">
                        <span className="right floated">
                            Joined in 2013
                        </span>
                        <span>
                            <i className="user icon"></i>
                            75 Friends
                        </span>
                    </div>
                </div>
                <div className="card">
                    <div className="image">
                        <img src="img/molly.png" />
                    </div>
                    <div className="content">
                        <div className="header">Molly</div>
                        <div className="meta">
                            <span className="date">Coworker</span>
                        </div>
                        <div className="description">
                            Molly is a personal assistant living in Paris.
                        </div>
                    </div>
                    <div className="extra content">
                        <span className="right floated">
                            Joined in 2011
                        </span>
                        <span>
                            <i className="user icon"></i>
                            35 Friends
                        </span>
                    </div>
                </div>
                <div className="card">
                    <div className="image">
                        <img src="img/elyse.png" />
                    </div>
                    <div className="content">
                        <div className="header">Elyse</div>
                        <div className="meta">
                            <a>Coworker</a>
                        </div>
                        <div className="description">
                            Elyse is a copywriter working in New York.
                        </div>
                    </div>
                    <div className="extra content">
                        <span className="right floated">
                            Joined in 2014
                        </span>
                        <span>
                            <i className="user icon"></i>
                            151 Friends
                        </span>
                    </div>
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

class App extends React.Component {
    render() {
        return (
            <div className='app'>
                <Header />
                <Main />
                <Profile />
                <Footer />
            </div>
        );
    }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);