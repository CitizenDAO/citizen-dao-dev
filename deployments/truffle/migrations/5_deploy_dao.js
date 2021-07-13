const CitizenDao = artifacts.require("CitizenDao");
const Citizenship = artifacts.require("Citizenship");
const CitizenToken = artifacts.require("CitizenToken");
const CitizenDaoLedger = artifacts.require("CitizenDaoLedger");
const MINTER_ROLE = '0x9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a6';
const LEDGER_WRITER_ROLE = '0x5711d9649d1d60e007931375533ed11f2882872a45716f2c1bff50deeeadb480';

module.exports = async function (deployer, network, accounts) {
    citizenToken = await CitizenToken.deployed();
    citizenship = await Citizenship.deployed();
    ledger = await CitizenDaoLedger.deployed();
    await deployer.deploy(CitizenDao, citizenToken.address, citizenship.address, ledger.address, 4096,
                         ["0x988d8D5Ca1063bD8c5fF7E0f4aFbEBEe4Ab8CFFE",
                          "0xAF90A0D9A2573eE956A278565ee8157934F3Fa9D",
                          "0x8e7DD33F31aDb21Ec2Eb3f819775B362F6Bb9B28"]);
    dao = await CitizenDao.deployed();
    await citizenToken.grantRole(MINTER_ROLE, dao.address);
    await ledger.grantRole(LEDGER_WRITER_ROLE, dao.address);
    await ledger.updateDao(dao.address);
    await citizenToken.renounceRole('0x0', accounts[0]);
    await ledger.renounceRole('0x0', accounts[0]);
    await ledger.renounceRole(LEDGER_WRITER_ROLE, accounts[0]);
}
