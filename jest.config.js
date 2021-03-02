module.exports = {
    verbose: true,
    collectCoverageFrom: [
    "src/**/*.{js,jsx}",
     ],
    setupTestFrameworkScriptFile: 
    "./enzyme.js",
    roots: [
     "../__tests__" ], modulePaths: [ "./__stubs__"
    ],
    coveragePathIgnorePatterns: [
    "src/apollo-client",
    ],
    moduleFileExtensions: [
    "web.js",
    "Js"],
    testPathIgnorePatterns: [
    "/node_modules/"
    ],
    moduleNameMapper: {
    ".scss$": "scss-stub.js" } 
    }