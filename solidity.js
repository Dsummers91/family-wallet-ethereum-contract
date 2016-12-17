var SolidityParser = require("solidity-parser");

// Parse Solidity code as a string:
var result = SolidityParser.parse("contract { ... }");

// Or, parse a file:
var result = SolidityParser.parseFile("./contracts/FamilyWallet.sol");