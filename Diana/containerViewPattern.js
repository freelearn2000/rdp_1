class NewsContainer extends React.Component {
  state = { loading: true, model: null, error: null };

  render() {
    console.log("render container");
    return <NewsView {...this.state} {...this.props} />;
  }

  getModelSuccessCallback = (model) => {
    this.setState({ loading: false, model: model.data, error: null });
  };

  getModelErrorCallback = (model) => {
    this.setState({ loading: false, model: null, error: error });
  };

  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/posts/1")
      .then(this.getModelSuccessCallback)
      .catch(this.getModelErrorCallback);
    console.log("componentDidMount");
  }
}

class NewsView extends React.Component {
  renderLoading() {
    return (
      <div>
        <p>LOADING....</p>
      </div>
    );
  }

  renderSuccess() {
    return (
      <div>
        <h2>{this.props.model?.title}</h2>
        <p>{this.props.model?.body}</p>
      </div>
    );
  }

  renderError() {
    return (
      <div>
        <h3>Sorry,There was an error!</h3>
        <p>{this.props.error?.message}</p>
      </div>
    );
  }

  render() {
    console.log("render view");
    if (this.props.loading) {
      return this.renderLoading();
    } else if (this.props.model) {
      return this.renderSuccess();
    } else {
      return this.renderError;
    }
  }
}

class App extends React.Component {
  render() {
    return (
      <div>
        <h2>App Component</h2>
        <NewsContainer />
      </div>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
