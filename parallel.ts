
async function parallel(funcArray, doneAll) {
    let result = [];
    // funcArray.entries() Возращает пары ключ-значение для каждого элемента массива
    for (const [index, func] of funcArray.entries()) {
        const done = await new Promise((resolve) => {
            func((data) => resolve(data));
        });
        result[index] = done;
    }
    doneAll(result);
}


var a = function (done) {
    setTimeout(function () {
        done('result a')
    }, 300)
}

var b = function (done) {
    setTimeout(function () {
        done('result b')
    }, 200)
}

parallel([a, b], function (results) {
    console.log(results) // ['result a','result b']
})
