var adults = [web3.eth.accounts[0], web3.eth.accounts[1]]
var children = [web3.eth.accounts[2], web3.eth.accounts[3], web3.eth.accounts[4]]
var durationInDays = 1;

module.exports = function(deployer) {
  deployer.deploy(FamilyWallet, adults, children, durationInDays);;
};
