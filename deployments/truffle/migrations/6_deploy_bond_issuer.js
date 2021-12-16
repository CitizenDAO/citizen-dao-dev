const FixedTermBondIssuer = artifacts.require("FixedTermBondIssuer");

module.exports = function (deployer) {
    deployer.deploy(FixedTermBondIssuer);
}
