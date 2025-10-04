// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.28;

contract HelloWorld {
    string public message;

    constructor() {
        message = "Hello, World!";
    }

    function updateMessage(string memory _newMessage) public {
        message = _newMessage;
    }
}