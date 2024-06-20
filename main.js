var maxBoxesInWarehouse = function(boxes, warehouse) {
    let warehouseSize = warehouse.length;
    boxes.sort((a,b) => a - b);

    let leftIndex = 0;
    let rightIndex = warehouseSize - 1;
    let boxCount = 0;
    let boxIndex = boxes.length - 1;

    while (leftIndex <= rightIndex && boxIndex >= 0) {
        if (boxes[boxIndex] <= warehouse[leftIndex]) {
            boxCount++;
            leftIndex++;
        } else if (boxes[boxIndex] <= warehouse[rightIndex]) {
            boxCount++;
            rightIndex--;
        }
        boxIndex--;
    }

    console.log(boxCount);
};

maxBoxesInWarehouse([1,2,2,3,4],[3,4,1,2]);
maxBoxesInWarehouse([3,5,5,2],[2,1,3,4,5]);
