const Core = (function() {

    /**
     * struct {
     *      string type: "script" | "link",
     *      string url: "example.cdn.com.ua"
     * }
     */
    const coreResources = [
        { url: "https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css", type: "link" },
        { url: "https://cdn.jsdelivr.net/npm/bootstrap-icons@1.7.1/font/bootstrap-icons.css", type: "link" },
        { url: "./assets/main.css", type: "link" }
    ]

    // Load a script from given `url`
    const loadRes = function (url, type) {
        return new Promise(function (resolve, reject) {
            if(type !== "script" && type !== "link") 
                throw "not a valid type for load func!";
            
            let node = document.createElement(type);

            if(type === "script") {
                node.src = url;
            } 

            if(type === "link") {
                // css
                // Create new link element
                node.setAttribute('rel', 'stylesheet');
                node.setAttribute('href', url);
            }
            
            // load handler
            node.addEventListener('load', function () {
                // The script is loaded completely
                resolve(true);
            });
            
            
            document.head.appendChild(node);
        });
    };

    // Perform all promises in the order
    const waterfall = function (promises) {
        return promises.reduce(
            function (prevPromise, currPromise) {
                // Waiting for `p` completed
                return prevPromise.then(function () {
                    // and then `c`
                    return currPromise.then(function (result) {
                        return true;
                    });
                });
            },
            // The initial value passed to the reduce method
            Promise.resolve([])
        );
    };

    // Load an array of scripts in order
    const load = function (cb) {
        // load js
        const promises = coreResources.map(function ({url, type}) {
            return loadRes(url, type);
        });
        waterfall(promises).then(_ => {
            console.log("Done loading Core!");
            cb && cb();
        });
    };

    return {
        load
    }
})();


export default Core;