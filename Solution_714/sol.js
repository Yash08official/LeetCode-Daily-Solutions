class Solution {
    constructor() {
      this.f = [];
      this.prices = [];
      this.fee = 0;
    }
  
    maxProfit(prices, fee) {
      this.prices = prices;
      this.fee = fee;
      for (let i = 0; i < prices.length; i++) {
        this.f[i] = [null, null];
      }
      return this.dfs(0, 0);
    }
  
    dfs(i, j) {
      if (i >= this.prices.length) {
        return 0;
      }
      if (this.f[i][j] !== null) {
        return this.f[i][j];
      }
      let ans = this.dfs(i + 1, j);
      if (j > 0) {
        ans = Math.max(ans, this.prices[i] + this.dfs(i + 1, 0) - this.fee);
      } else {
        ans = Math.max(ans, -this.prices[i] + this.dfs(i + 1, 1));
      }
      return (this.f[i][j] = ans);
    }
  }