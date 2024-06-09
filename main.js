var promisePool = async function(functions, n) {
    async function evaluateNext() {
        if (functions.length === 0) return;
        const fn = functions.shift();
        await fn();
        await evaluateNext();
    }
    const nPromises = new Array(n).fill().map(evaluateNext);
    await Promise.all(nPromises);
};

promisePool([() => new Promise(res => setTimeout(res, 300)), () => new Promise(res => setTimeout(res, 400)), () => new Promise(res => setTimeout(res, 200))],2);
promisePool([() => new Promise(res => setTimeout(res, 300)), () => new Promise(res => setTimeout(res, 400)), () => new Promise(res => setTimeout(res, 200))],5);
promisePool([() => new Promise(res => setTimeout(res, 300)), () => new Promise(res => setTimeout(res, 400)), () => new Promise(res => setTimeout(res, 200))],1);
