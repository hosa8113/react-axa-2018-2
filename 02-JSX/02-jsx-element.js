const element = (
    <div className="red">
        <h1>Hello from JSX element!</h1>
    </div>
);

ReactDOM.render(
    element,
    document.getElementById('component2')
);



// DEMO:
// - Extract content of <h1> to constant and interpolate
// - content can be an array
// - content can be JSX