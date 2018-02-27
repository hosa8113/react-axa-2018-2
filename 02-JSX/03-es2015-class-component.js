class HelloComponent extends React.Component {
    render() {
        return (
            <div className="green">
                <h1>Hello from React component!</h1>
            </div>
        );
    }
}

ReactDOM.render(
    <HelloComponent/>,
    document.getElementById('component3')
);


// DEMO:
// - Pass message as prop to component
// - Add nested content
// - Remove nested content and add content as children prop
// - Create props object and spread it into JSX declaration