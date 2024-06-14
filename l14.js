// check if path exists between src and dest directed graph 
const graph = {
    "A": ["B", "C"],
    "B": ["F", "D"],
    "C": [],
    "D": ["G", "I"],
    "E": ["H"],
    "F": ["E"],
    "G": ["H"],
    "H": [],
    "I":[]
};
function dfs( src, dst , graph) {
    if (src === dst) return true;

    let ans = false;
    graph[src].forEach((neighbour) => {
      ans = ans|| dfs(neighbour, dst, graph);
    });
    return ans;

}
console.log(dfs("A", "B", graph));