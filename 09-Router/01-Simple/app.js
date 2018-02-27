const Router = ReactRouterDOM.BrowserRouter;
const Route = ReactRouter.Route;
const Link = ReactRouterDOM.Link;
const Switch = ReactRouterDOM.Switch;

const Home = ({history}) => (
    <div>
        <h2>Home</h2>
        <button onClick={() => history.push('/about')}>Go</button>
    </div>
);

const About = () => (
    <div>
        <h2>About</h2>
    </div>
);

class App extends React.Component {

    render() {
        return (
            <Router>
                <div>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                          {/*<a href="/">Home</a>*/}
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                          {/*<a href="/about">About</a>*/}
                        </li>
                    </ul>

                    <hr />

                    <Switch>
                      <Route path="/" component={Home} />
                      <Route path="/about" component={About} />
                    </Switch>
                </div>
            </Router>
        );
    }
}

ReactDOM.render(
    <App/>,
    document.getElementById('root')
);


