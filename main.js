function simplifyPath(path) {
    const N = path.length;
    let canonicalPath = "/";
    let leftPtr = 1;
    let rightPtr = 1;
    const directoryStack = new Array();
    while (leftPtr < N) {
        //console.log(leftPtr);
        if (path.charAt(leftPtr) === '/')
            leftPtr++;
        else {
            rightPtr = leftPtr + 1;
            while (path.charAt(rightPtr) !== '/' && rightPtr < N) {
                rightPtr++;
            }
            //console.log(`Right: ${rightPtr}`);
            //console.log(path.substring(leftPtr, rightPtr))
            directoryStack.push(path.substring(leftPtr, rightPtr));
            leftPtr = rightPtr + 1;
            //console.log(`Left: ${leftPtr}`);
        }
    }
    const canonicalStack = new Array();
    ;
    let index = 0;
    while (index < directoryStack.length) {
        if (directoryStack[index] === "..") {
            canonicalStack.pop();
        }
        else if (directoryStack[index] !== ".") {
            canonicalStack.push(directoryStack[index]);
        }
        index++;
    }
    //console.log(directoryStack);
    canonicalPath += canonicalStack.join('/');
    console.log(canonicalPath);
    return canonicalPath;
}
;
simplifyPath("/home/");
simplifyPath("/home//foo/");
simplifyPath("/home/user/Documents/../Pictures");
simplifyPath("/../");
simplifyPath("/.../a/../b/c/../d/./");
export {};
