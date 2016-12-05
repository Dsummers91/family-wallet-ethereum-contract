contract('FamilyWallet', function () {
  it("Third Account should be a child", function () {
    var fam = FamilyWallet.deployed();

    return fam.getChild.call(web3.eth.accounts[2]).then(function (response) {
      assert.equal(response, web3.eth.accounts[2], "Adult Account ran child function");
    });
  });

  it("Child should have allowance due when contract is instantiated", function () {
    var fam = FamilyWallet.deployed();

    return fam.getAllowanceAmount.call(web3.eth.accounts[3]).then(function (response) {
      assert.equal(+response.toString(), 15000000000000000000, "Child does not have allowance instantiated");
    });
  });

  it("Default Allowance should be 15 ether", function () {
    var fam = FamilyWallet.deployed();

    return fam.getDefaultAllowance.call({ addr: web3.eth.accounts[3] }).then(function (response) {
      assert.equal(+response.toString(), 15000000000000000000, "Child does not have allowance instantiated");
    });
  });

  it("Childs Allowance should be 15 ether", function () {
    var fam = FamilyWallet.deployed();

    return fam.getChildsAmount.call(web3.eth.accounts[2], { addr: web3.eth.accounts[3] }).then(function (response) {
      assert.equal(+response.toString(), 15000000000000000000, "Child allowance was not set");
    });
  });

  it("Should return tx hash when period is updated", function () {

      var fam = FamilyWallet.deployed();
      return fam.nextAllowancePeriod(1, { from: web3.eth.accounts[0] })
        .then(function (tx) {
          assert.equal(tx.length, 66);
        });
  });

  it("Should increase allowance when allowance period begins", function (done) {
    var fam = FamilyWallet.deployed();
    event = fam.NewAllowancePeriod();
    event.watch(function(err, resp) {
      return fam.getAllowanceAmount.call(web3.eth.accounts[2], { addr: web3.eth.accounts[3] }).then(function (response) {
        assert.equal(+response.toString(), 30000000000000000000);
        event.stopWatching();
        done();
      });
    });
  });
});
