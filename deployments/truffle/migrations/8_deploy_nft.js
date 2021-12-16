const CitizenToken = artifacts.require("CitizenToken");
const CitizenNFTBond = artifacts.require("CitizenNFTBond");
const FundingPoolManager = artifacts.require("FundingPoolManager");
const FixedTermBondIssuer = artifacts.require("FixedTermBondIssuer");


module.exports = async function (deployer, network, accounts) {
    await deployer.deploy(CitizenNFTBond);
    manager = await FundingPoolManager.deployed();
    token = await CitizenToken.deployed();
    issuer = await FixedTermBondIssuer.deployed();
    nft = await CitizenNFTBond.deployed();

    // assign roles
    await issuer.grantRole("0x0", manager.address);

    // assign assets to bond issuer

    await token.transfer(issuer.address, "1000000000000000000000");
    

    // add a pool to funding manager - get id
    await manager.addPool(token.address, 1, accounts[0]);

    // add a pool to NFT with manager and id

    await nft.addPool("Test Pool", manager.address, 0);

    
}
