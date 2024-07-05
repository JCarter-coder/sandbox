var nodesBetweenCriticalPoints = function(head) {
    let result = [-1, -1];

    let minDistance = Number.MAX_SAFE_INTEGER;

    // Pointers to track previous, current, and indices
    let previousNode = head;
    let currentNode = head.next;
    let firstCritIndex = 0;
    let prevCritIndex = 0;
    let currentIndex = 1;
    
    while (currentNode.next !== null) {
        if ((currentNode.val < previousNode.val &&
                currentNode.val < currentNode.next.val) || 
            (currentNode.val > previousNode.val &&
                currentNode.val > currentNode.next.val)
        ) {
            // If this is the first critical point found
            if (prevCritIndex === 0) {
                prevCritIndex = currentIndex;
                firstCritIndex = currentIndex;
            } else {
                // Calculate the min distance between crit points
                minDistance = Math.min(
                    minDistance,
                    currentIndex - prevCritIndex
                );
                prevCritIndex = currentIndex;
            }
        }

        // Move to the next node and update indices
        currentIndex++;
        previousNode = currentNode;
        currentNode = currentNode.next;
    }
    
    // If at least two crit points were found
    if (minDistance !== Number.MAX_SAFE_INTEGER) {
        let maxDistance = prevCritIndex - firstCritIndex;
        result = [minDistance, maxDistance];
    }

    console.log(result);
    return result;
};

nodesBetweenCriticalPoints([3,1]);
nodesBetweenCriticalPoints([5,3,1,2,5,1,2]);
nodesBetweenCriticalPoints([1,3,2,2,3,2,2,2,7]);
