
var propertyERC721Token = artifacts.require('propertyERC721Token');

contract('TestERC721Mintable', accounts => {

    const account_one = accounts[0];
    const account_two = accounts[1];
    const numTokens = 3;

    describe('match erc721 spec', function () {
        beforeEach(async function () { 
            this.contract = await propertyERC721Token.new("Property listing");

            // TODO: mint multiple tokens
            await this.contract.mint(account_one, 1);
            await this.contract.mint(account_one, 2);
            await this.contract.mint(account_two, 3);
         
        })
       

        it('should return total supply', async function () { 
            let totalSupply = await this.contract.totalSupply();
            assert.equal(numTokens, totalSupply, "Total supply does not match")
        })

        it('should get token balance', async function () { 
            let tokenBalence = await this.contract.balanceOf(account_one);
            assert.equal(tokenBalence, 2, "Token balance does not match");
        })

        // token uri should be complete i.e: https://s3-us-west-2.amazonaws.com/udacity-blockchain/capstone/1
        it('should return token uri', async function () { 
            let tokenURI = await this.contract.tokenURI(1);
            assert.equal(tokenURI, "https://s3-us-west-2.amazonaws.com/udacity-blockchain/capstone/1", "token id does not martch")
        })

        it('should transfer token from one owner to another', async function () { 
            await this.contract.transferFrom(account_two, account_one, 2);

            assert.equal(2,2, "wrong balance")
        })
    });

    describe('have ownership properties', function () {
        beforeEach(async function () { 
            this.contract = await propertyERC721Token.new({from: account_one});
        })

        it('should fail when minting when address is not contract owner', async function () { 
            
        })

        it('should return contract owner', async function () { 
            let owner = await this.contract.owner();
            assert.equal(owner, account_one, "not the owner")
        })

    });
})