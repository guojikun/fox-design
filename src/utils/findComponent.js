/*
 *向上找到最近的指定组件
 */
export const findComponentUpward = (content, componentName) => {
    let parent = content.$parent;
    let name = parent.$options.name;

    while (parent && (!name || [componentName].indexOf(name) < 0)) {
        parent = parent.$parent;
        if (parent) {
            name = parent.$options.name;
        }
    }
    return parent;
};
/*
 *向上找到所有的指定组件
 */
export const findComponentsUpward = (content, componentName) => {
    let parents = [];
    let parent = content.$parent;

    if (parent) {
        if (parent.$options.name === componentName) {
            parents.push(parent);
        }
        return parents.concat(findComponentsUpward(parent, componentName));
    } else {
        return [];
    }
};

/*
 *向下找到最近的指定组件
 */
export const findComponentDownward = (content, componentName) => {
    let childrens = content.$children;
    let children = null;

    if (childrens.length) {
        for (const child of childrens) {
            const name = child.$options.name;

            if (name === componentName) {
                children = child;
                break;
            } else {
                children = findComponentDownward(child, componentName);
                if (children) break;
            }
        }
    }
    return children;
};

/*
 *向下找到所有的指定组件
 */
export const findComponentsDownward = (content, componentName) => {
    const children = content.$children;
    return children.reduce((components, child) => {
        if (child.$options.name === componentName) {
            components.push(child);
        }
        const foundChilds = findComponentsDownward(child, componentName);
        return components.concat(foundChilds);
    }, []);
};

/*
 *找到指定组件的兄弟组件
 */
export const findBrothersComponents = (content, componentName, exceptMe = true) => {
    let res = content.$parent.$children;
    res = res.filter(item => {
        return item.$options.name === componentName;
    });
    let index = res.findIndex(item => item._uid === content._uid);
    if (exceptMe) res.splice(index, 1);
    return res;
};
