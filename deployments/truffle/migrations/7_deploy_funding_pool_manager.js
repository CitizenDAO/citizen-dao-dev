const FundingPoolManager = artifacts.require("FundingPoolManager");
const FixedTermBondIssuer = artifacts.require("FixedTermBondIssuer");

module.exports = async function (deployer) {
    issuer = await FixedTermBondIssuer.deployed();

    await deployer.deploy(FundingPoolManager, issuer.address);
}
