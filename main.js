/**
 * @param {string[]} folder
 * @return {string[]}
 */
var removeSubfolders = function(folder) {
    folder.sort();
    const result = new Array();
    result.push(folder[0]);

    for (let i = 1; i < folder.length; i++) {
        let lastFolder = result[result.length - 1];
        lastFolder += '/';
        if (!folder[i].startsWith(lastFolder)) result.push(folder[i]);
    }

    console.log(result);
};

removeSubfolders(["/a","/a/b","/c/d","/c/d/e","/c/f"]);
removeSubfolders(["/a","/a/b/c","/a/b/d"]);
removeSubfolders(["/a/b/c","/a/b/ca","/a/b/d"]);
removeSubfolders(["/ah/al/am","/ah/al"]);
