var minOperations = function(logs) {
    let directory = [];
    for (let i = 0; i < logs.length; i++) {
        if (logs[i] === "../") {
            directory.pop();
        } else if (logs[i] === "./") continue;
        else directory.push(logs[i]);
    }

    console.log(directory.length);
    return directory.length;
};

minOperations(["d1/","d2/","../","d21/","./"]);
minOperations(["d1/","d2/","./","d3/","../","d31/"]);
minOperations(["d1/","../","../","../"]);
