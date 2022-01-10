//SEND WAVES TRANSACTION TESTNET

const aliceAddr = "3MvasVWNoyFQTenxtVJkcLRfcPshL6RiHB6";
const alicePubKey = "HxtsXAKo7k2EM5vvWiqRJHGy6cSc8pxWDEpQJhVYJXsa";
const alicePrivateKey = "";

//Bob
const bobAddress = '3N65E1rYWAxQMCLg27pRxBFtAt3bPcH3pys'
const bobPubKey = "HUBVsBcuExqVSbV3mSVhpdKfgihF2nwdtpGmpVLRwxEN"
const bobPrivateKey = ""

//Eric
const ericAddress = "3N6qANATfYJFY1hM9Bu9ACAHMQY3Q1dRTVM"
const ericPubKey = "8haEN2a7ZmkzawLmnr5rFX14X1oHi5kjt8NQUDNjSDLG"
const ericPrivateKey = ""

const tx = transfer({
    amount: 10000000,
    fee: 500000,
    recipient: bobAddress
});
broadcast(tx).then(resp => console.log("Response: " + JSON.stringify(resp)))
.catch(error => console.log("Error: " + JSON.stringify(error)));