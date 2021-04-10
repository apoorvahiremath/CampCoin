// SPDX-License-Identifier: APOOORVA
pragma solidity ^0.6.8;

contract CampaignFactory{
    
    address[] public deployedCampaigns;
    
    function createCampaign(uint minimum) public{
        address newCampaign = address(new Campaign(minimum, msg.sender));
        deployedCampaigns.push(newCampaign);
    }
    
    function getDeployedCampaign() public view returns(address[] memory){
        return deployedCampaigns;
    }
}


contract Campaign{
    
    struct Request{
        string description;
        uint value;
        address payable recipient;
        bool complete;
        uint approvalCounts;
        mapping(address=>bool) approvals;
    }
    
    Request[] public requests;
    address public manager;
    uint public minimumContribution;
    mapping(address => bool) public approvers;
    uint public approversCount;
    modifier restricted(){
        require(msg.sender == manager);
        _;
    }
    
    constructor(uint minimum, address creator) public{
        manager = creator;
        minimumContribution = minimum;
        approversCount = 0;
    }
    
    
    function contribute() public payable{
        require(msg.value > minimumContribution);
        
        approvers[msg.sender] = true;
        approversCount++;
    }
    
    function createRequest(string memory description, uint  value, address payable recipient)
    public restricted{
        
        Request memory newRquest = Request({
           description: description,
           value: value,
           recipient: recipient,
           complete: false,
           approvalCounts: 0
        });
        
        //Alternative syntax to create struct. Not Recommended
        //Request test = Request(description, value, recipient, false)
        
        requests.push(newRquest);
    }
    
    function approveRequest(uint index) public{
        require(approvers[msg.sender]);
        Request storage req = requests[index];
        require(!req.approvals[msg.sender]);
        
        req.approvals[msg.sender] = true;
        req.approvalCounts++;
    }
    
    function finalizeRequest(uint index) public restricted{
        Request storage req = requests[index];
        require(!req.complete);
        require(req.approvalCounts > (approversCount/2));
        
        req.recipient.transfer(req.value);
        req.complete = true;
    }

    function getSummary() public view returns(
        uint, uint, uint, uint, address
    ){
        return (
            minimumContribution,
            address(this).balance,
            requests.length,
            approversCount,
            manager
        );
    }

    function getRequestCount() public view returns(uint){
        return requests.length;
    }
}