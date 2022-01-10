//TESTING Multisig.ride
const ericAddr = "3N6qANATfYJFY1hM9Bu9ACAHMQY3Q1dRTVM";
const bobPk = "14kE6E1fAPh9d6TKEXkwBXkZxCLf9JctmtaQL17J3HLv";
describe('Testing my Multisig account', () => {
      
    it('Test successful 2signed transaction', async () => {
        const aliceTx = transfer({amount: 10000000, fee: 500000, recipient: ericAddr});
        const bobTx = transfer(aliceTx, {privateKey: bobPk});
        // console.log(bobTx);
        expect(bobTx.proofs.length).to.equal(2); //check if there are two signatures
        await expect(broadcast(bobTx)).fulfilled; //check if transaction was succsessful
        // broadcast(bobTx).then(resp => console.log("Response: " + resp)).catch(error => console.log("Error: " + JSON.stringify(error)));
    });

    it('Test to fail on single sign transaction on multisig account', async () => {
        const aliceTx = transfer({amount: 10000000, fee: 500000, recipient: ericAddr});
        // broadcast(aliceTx).then(resp => console.log("Response: " + resp)).catch(error => console.log("Error: " + JSON.stringify(error)));
        await expect(broadcast(aliceTx)).rejectedWith("Transaction is not allowed by account-script");
    })
})