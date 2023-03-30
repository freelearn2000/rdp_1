const Header = () => {
    return (
        <header>
            <div class="ui pointing menu">
			<a class="item">
				Home
			</a>
			<a class="item">
				Messages
			</a>
			<a class="item active">
				Friends
			</a>
			<div class="right menu">
				<div class="item">
				<div class="ui transparent icon input">
					<input type="text" placeholder="Search..."/>
					<i class="search link icon"></i>
				</div>
				</div>
			</div>
			</div>
			<div class="ui segment">
			<p></p>
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
