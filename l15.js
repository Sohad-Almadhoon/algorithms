// check if path exists between src and dest undirected graph
const graph = {
  A: ["B", "C"],
  B: ["A", "F", "D"],
  C: ["A"],
  D: ["B", "G", "I"],
  E: ["F", "H"],
  F: ["B", "E"],
  G: ["D", "H"],
  H: ["E", "G"],
  I: ["D"],
};
const visited = new Set();
function dfs(src, dst, graph) {
  if (src === dst) return true;
  visited.add(src);
  let ans = false;

  graph[src].forEach((neighbour) => {
    if (!visited.has(neighbour)) ans = ans || dfs(neighbour, dst, graph);
  });
  return ans;
}
console.log(dfs("A", "K", graph));
