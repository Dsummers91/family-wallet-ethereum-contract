

contract('FamilyWallet', function() {
  it("Third Account should be a child", function() {
    var fam = FamilyWallet.deployed();

    return fam.getChild.call(0).then(function(response) {
      assert.equal(response, web3.eth.accounts[2], "Addult Account ran child function");
    });
  });  
  it("Third Account should be a child", function() {
    var fam = FamilyWallet.deployed();

    return fam.getChild.call(0).then(function(response) {
      assert.equal(response, web3.eth.accounts[2], "Addult Account ran child function");
    });
  });
});
