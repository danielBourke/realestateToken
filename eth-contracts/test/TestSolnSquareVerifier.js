// Test if a new solution can be added for contract - SolnSquareVerifier
var SolnSquareVerifier = artifacts.require('SolnSquareVerifier');

// Test if an ERC721 token can be minted for contract - SolnSquareVerifier

const Verified = {
    "proof": {
        "a": ["0x1e32198737214674e9df3e7c8711d345f39ccd097bc90b84482e1e6378c8e0a3", "0x2ff4138c6aa8c266740494fa9315ef3ce42d0692b3a96414c5636777f83f53ee"],
        "b": [["0x120804117bc9e023ab7463bb8c7512f0d179a9e6cac585cefa96e70f7aaae372", "0x24dface7ff8397c008389782f67c3e2d1cc44f889d2b71ce1f42c6c3ae1960e8"], ["0x0e931f13adb83759bda98aa750d1ad40c7d5dc15aec03454c1965f99dc5fe68f", "0x1460b188b1e3d250b74c97be1227707ed570c62a2c651c94217d097f007ddf55"]],
        "c": ["0x212121abc03c2a43e0a387db35078187c784e25bc15a69e2456eb5a13032fb6c", "0x253845c0cd6803f32235a6531e1471bba086f9c124b3825e5c0d48954498731a"]
    },
    "inputs": ["0x0000000000000000000000000000000000000000000000000000000000000009", "0x0000000000000000000000000000000000000000000000000000000000000001"]
}
contract("SolnSquareVerifier", accounts => {

    const accountOne = accounts[0];
    const accountTwo = accounts[1];

    
    it("Should mint a token", async function () {
        const sol = await SolnSquareVerifier.deployed().mint("01001", accounts[0], 1);
        assert.equal(sol, "transfer", "token not minted")
    })
})