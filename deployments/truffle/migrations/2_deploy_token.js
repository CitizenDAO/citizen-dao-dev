const CitizenToken = artifacts.require("CitizenToken");

module.exports = function (deployer, network, accounts) {
    deployer.deploy(CitizenToken, "Test Citizen Token", "0CDAO", [accounts[0]]);
}
