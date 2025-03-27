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
The complexity should be $\Theta(V^3)$  with the V being the number of vertices.
My reasoning is that the worst case for the recursion would run through every vertex,
giving us a $\Theta(V)$. Then we have a for loop that runs over each edge to that vertex
which is actually the number of vertices, giving us another $\Theta(V)$. Then the .includes()
actually has to run through all of the all of the vertices we have already itterated over, giving
us another $\Theta(V)$. All together, this is how I reached the conclusion that the worst case big $\Theta$ 
would be $\Theta(V)$.

## Bonus

Implement and analyze breadth-first search.
