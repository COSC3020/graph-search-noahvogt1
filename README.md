# Search in Graphs
I certify that I have listed all sources used to complete this exercise, including the use of any Large Language Models. All of the work is my own, except where stated otherwise. I am aware that plagiarism carries severe penalties and that if plagiarism is suspected, charges may be filed against me without prior notice.

I wrote everything myself. I only had help on the .includes() because I asked if there was a better way to do it and Gage told me about that method. Then I also looked to previous years test code to see how they did it(not what they did), I used my own logic to try and prove that the program worked properly. All I used from the last years was the assert line because I was still slightly confused on how to check a condition.

Recall the pseudocode for Depth-First Search:

Given a graph, a start node, and a node we're looking for:
- starting at the start node, while unvisited nodes remain
    - if current vertex $v$ is the node we're looking for, return it
    - mark $v$ as visited
    - for each edge $(v,w)$
        - recursively process $w$ unless marked visited

Implement the algorithm. You can choose any of the data structures we covered
(adjacency matrix or adjacency list) for the implementation. Your function
should return the list of nodes on the path from the start to the target (not
the list of nodes that you looked at during the search). If start and target are
the same, it should return a list with only that node. If there is no path from
the start to the target, it should return an empty list. Start with the template
I provided in `code.js` and test your new function.

I have not provided any test code, but you can base yours on test code from
other exercises. Your tests must check the correctness of the result of running
the function and run automatically when you commit through a GitHub action.

## Runtime Analysis

What is the worst-case big $\Theta$ complexity of your implementation? 
The complexity should be $\Theta(V^3)$  with the V being the number of vertices
and E being the number of edges. My reasoning is that at worst case you will need
to visit each vertex which gives us $\Theta(V)$. Then for each vertex there is 
a for loop that will itterate over each possible vertext as well which ends up being
the number of vertices in the graph giving us another $\Theta(V)$. Then finally, the
.include() will give us a final $\Theta(V)$ because at worst case it will need to itterate
V/2 to check if it has already been searched. Overall, this gives us $Theta(V * V * V/2) \in \Theta(V^3)$.
I know that this seems odd because I have looked up what the usual complexity is for
a depth first search algorithm is $\Theta(V + E)$ and I believe mine is different because
I use a list to hold my searched vertices instead of a set.

## Bonus

Implement and analyze breadth-first search.
