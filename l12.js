// DFS : DEPTH FIRST SEARCH
const graph = {
  a: ["b", "d"],
  b: [],
  c: [],
  d: ["e", "g"],
  e: ["c"],
  f: [],
  g: ["f"],
};
const dfs = (graph, source) => {
  const stack = [];
  stack.push(source);
    while (stack.length) {
      const node = stack.pop();
        console.log(node.toUpperCase());
      if (graph[node])
        graph[node].forEach((neighbour) => {
          stack.push(neighbour);
        });
    }
};

dfs(graph, "a");
