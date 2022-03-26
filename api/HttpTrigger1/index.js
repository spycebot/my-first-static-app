module.exports = async function (context, req) {
    context.res = {
        // status: 200, / * Defaults to 200 * /
        body: { text : "Hello from the API" }
    };
    
    /*
    context.log('JavaScript HTTP trigger function processed a request.');
    // You can call and await an async method here
    return {
        body: "Hello, world!"
    };
    */
}