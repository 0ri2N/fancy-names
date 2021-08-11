pragma solidity >=0.8.0;

contract FancyNames {

    struct Claimer {
        bool claimed;
        string name;
    }

    mapping(address => Claimer) public claimers;

    function claim(string memory name) public {
        Claimer storage sender = claimers[msg.sender];

        require(!sender.claimed, "Already claimed.");
        
        sender.name = name;
        sender.claimed = true;
    }
    
    function read() public view returns (string memory) {
        Claimer storage sender = claimers[msg.sender];
        
        return sender.name;
     }
}