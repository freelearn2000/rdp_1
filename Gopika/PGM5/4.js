const Header = () => {
    return (
        <header>
            <div class="ui three item menu">
  <a class="active item">Editorials</a>
  <a class="item">Reviews</a>
  <a class="item">Upcoming Events</a>
</div>
        </header>
    );
};

const Main = () => {
    return (
        <div className='main'>
            <div class="ui star rating" data-rating="3"></div>
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
                <Footer/>
            </div>
        );
    }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);