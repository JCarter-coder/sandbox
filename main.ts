function findAllRecipes(recipes: string[], ingredients: string[][], supplies: string[]): string[] {
    const availableSupplies = new Set();
    const recipeToIndex = new Map();
    const dependencyGraph = new Map();

    for (let supply of supplies) {
        availableSupplies.add(supply);
    }

    for (let idx = 0; idx < recipes.length; idx++) {
        recipeToIndex.set(recipes[idx], idx);
    }

    const inDegree: number[] = new Array(recipes.length).fill(0);

    for (let recipeIdx = 0; recipeIdx < recipes.length; recipeIdx++) {
        for (let ingredient of ingredients[recipeIdx]) {
            if (!availableSupplies.has(ingredient)) {
                if (dependencyGraph.get(ingredient) === undefined) {
                    dependencyGraph.set(
                        ingredient,
                        new Array()
                    );
                }
                dependencyGraph.get(ingredient).push(recipes[recipeIdx]);
                inDegree[recipeIdx]++;
            }
        }
    }

    const queue: number[] = new Array();
    for (let recipeIdx = 0; recipeIdx < recipes.length; recipeIdx++) {
        if (inDegree[recipeIdx] === 0) {
            queue.push(recipeIdx);
        }
    }

    const createdRecipes = new Array();
    while (queue.length !== 0) {
        let recipeIdx = queue.shift() || 0;
        let recipe = recipes[recipeIdx];
        createdRecipes.push(recipe);

        if (!dependencyGraph.has(recipe)) continue;

        for (let dependentRecipe of dependencyGraph.get(recipe)) {
            if (--inDegree[recipeToIndex.get(dependentRecipe)] === 0) {
                queue.push(recipeToIndex.get(dependentRecipe));
            }
        }
    }

    console.log(createdRecipes);
    return createdRecipes;
};

findAllRecipes(
    ["bread"],
    [["yeast","flour"]],
    ["yeast","flour","corn"]
);
findAllRecipes(
    ["bread","sandwich"],
    [["yeast","flour"],["bread","meat"]],
    ["yeast","flour","meat"]
);
findAllRecipes(
    ["bread","sandwich","burger"],
    [["yeast","flour"],["bread","meat"],["sandwich","meat","bread"]],
    ["yeast","flour","meat"]
);
