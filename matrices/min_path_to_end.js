function reachTheEnd(grid, maxTime) {
  let minTime = Infinity;
  const visited = Array.from({ length: grid.length }, () =>
    Array(grid[0].length).fill(false)
  );

  const traverse = (n, m, time) => {
    if (n < 0 || n >= grid.length || m < 0 || m >= grid[0].length) return;
    if (visited[n][m]) return;
    if (grid[n][m] === "#") return;
    if (n === grid.length - 1 && m === grid[0].length - 1) {
      minTime = Math.min(minTime, time);
      return;
    }

    visited[n][m] = true;
    traverse(n + 1, m, time + 1);
    traverse(n - 1, m, time + 1);
    traverse(n, m + 1, time + 1);
    traverse(n, m - 1, time + 1);
    visited[n][m] = false;
  };

  traverse(0, 0, 0);
  console.log(minTime);
  return minTime <= maxTime ? "Yes" : "No";
}

const grid = ["..##", "#.##", "#..."];
const grid1 = [".....", "####.", ".....", ".####", "....."];

console.log(reachTheEnd(grid, 5));
console.log(reachTheEnd(grid, 4));
console.log(reachTheEnd(grid, 6));
console.log(reachTheEnd(grid1, 15));
console.log(reachTheEnd(grid1, 17));
