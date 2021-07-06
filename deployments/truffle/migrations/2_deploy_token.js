const CitizenToken = artifacts.require("CitizenToken");

module.exports = async function (deployer) {
    deployer.deploy(CitizenToken, "Citizen Token Test", "CDAO", ["0x988d8D5Ca1063bD8c5fF7E0f4aFbEBEe4Ab8CFFE",
                                                                 "0xAF90A0D9A2573eE956A278565ee8157934F3Fa9D",
                                                                 "0x8e7DD33F31aDb21Ec2Eb3f819775B362F6Bb9B28"]);
    cdao = await CitizenToken.deployed();
}
