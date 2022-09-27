function fibonacci(n) {
    if (n <= 2) return 1;
    return fibonacci(n - 1) + fibonacci(n - 2);
}

// memorization
function fib(n, memo = {}) {
    if (memo[n]) return memo[n];

    if (n <= 2) return 1;

    let result = fib(n - 1) + fib(n - 2);
    memo[n] = result;
    return result;
}

// tabulation
function fibo(n) {
    if (n <= 2) return 1;

    let memo = [0, 1, 1];

    for (let i = 3; i <= n; i++) {
        memo[i] = memo[i - 1] + memo[i - 2];
    }

    return memo[n];
}