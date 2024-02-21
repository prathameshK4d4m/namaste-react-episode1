
const parent = React.createElement("div", {id:"parent"}, [
    React.createElement("div", {id:"child"}, [
        React.createElement("h1", {}, "Here is h1 tag"),
        React.createElement("h2", {}, "Here is h2 tag")
    ]),
    React.createElement("div", {id:"child2"}, [
        React.createElement("h1", {}, "Here is h1 ta2g"),
        React.createElement("h2", {}, "Here is h2 tag2")
    ]),

]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
