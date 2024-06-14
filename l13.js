// BFS : BREADTH FIRST SEARCH
const graph = {
  a: ["b", "d"],
  b: [],
  c: [],
  d: ["e", "g"],
  e: ["c"],
  f: [],
  g: ["f"],
};
const bfs = (graph, source) => {
  const queue = [];
  queue.push(source);
  while (queue.length) {
    const node = queue.shift();
    console.log(node.toUpperCase());
    if (graph[node])
      graph[node].forEach((neighbour) => {
        queue.push(neighbour);
      });
  }
};

bfs(graph, "a");
