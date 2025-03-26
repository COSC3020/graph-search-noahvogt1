function depthFirstSearch(graph, startNode, targetNode, nodesVisited = []) {
    if (startNode == targetNode) {
        nodesVisited.push(startNode);
        return nodesVisited;
    }

    for (let i = 0; i < graph.length; i++) {
        if (graph[startNode][i] == 1 && startNode != i) {

            nodesVisited.push(startNode);
            let len = nodesVisited.length;

            if (!nodesVisited.includes(i)) {
                nodesVisited = depthFirstSearch(graph, i, targetNode, nodesVisited);
            }

            let len2 = nodesVisited.length;

            if (len == len2) {
                nodesVisited.pop();
            } else {
                return nodesVisited;
            }
        }
    }
    return nodesVisited;
}
