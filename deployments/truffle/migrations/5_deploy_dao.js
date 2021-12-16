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
                         [accounts[0]]);
    dao = await CitizenDao.deployed();
    await citizenToken.grantRole(MINTER_ROLE, dao.address);
    await ledger.grantRole(LEDGER_WRITER_ROLE, dao.address);
    await ledger.updateDao(dao.address);
    await citizenToken.renounceRole('0x0', accounts[0]);
    await ledger.renounceRole('0x0', accounts[0]);
    await ledger.renounceRole(LEDGER_WRITER_ROLE, accounts[0]);
}
