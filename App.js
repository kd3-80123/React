const heading = React.createElement("div",{ id: "parent"},
[
    React.createElement("div",{id:"child1"},
[ React.createElement("h1",{},"In the h1 tag"),
React.createElement("h2",{},"Inside the h2 tag"),
]),
React.createElement("div",{id:"child2"},
[ React.createElement("h1",{},"In the h1 tag"),
React.createElement("h2",{},"Inside the h2 tag"),
])

]
);
        const root = ReactDOM.createRoot(document.getElementById("root"))
        root.render(heading);y