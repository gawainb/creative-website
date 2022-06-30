---
id: vrf
title: Chainlink VRF
sidebar_position: 1
---

# 🎲 Chainlink VRF

It functions like so:

1. The user will first get the request fee. The fee will be expressed using an (address, amount) pair representing the required ERC20 and amount.
2. The user will then approve the RNG to spend that ERC20 of the amount
3. The user will then request the random number. The RNG will transfer the cost into itself and begin the request. The request returns a request identifier.
4. The user may check to see if the random number is available using the identifier.
5. When the random number is available the user may retrieve it with the identifier.

Let's look at these functions in detail.

## Get the Request Fee <a href="#get-the-request-fee" id="get-the-request-fee"></a>

Many RNG services require tokens in order to operate. To get the cost of the rng you may do so using:

```
function getRequestFee() external view returns (address feeToken, uint256 requestFee);
```

This function returns two values:

* **feeToken:** the ERC20 that needs to be paid
* **requestFee:** is the amount of the token that needs to be paid

## Request a Random Number <a href="#request-a-random-number" id="request-a-random-number"></a>

Once the user has approved the RNG service spend, they may request a random number like so:

```
function requestRandomNumber() external returns (uint32 requestId, uint32 lockBlock);
```

This function returns two values:

* **requestId:** the unique id for this RNG request
* **lockBlock:** the commitment block for this RNG request. Users of the RNG request shouldn't make any changes after the lockBlock, otherwise the RNG may be less secure. For example, the Prize Strategy will lock all ticket sales and movements after the lockBlock, as they affect the winner selection. Once the request is complete the Prize Strategy unlocks tickets.

## Check if Request is Complete <a href="#check-if-request-is-complete" id="check-if-request-is-complete"></a>

The user may check if a request is complete:

```
function isRequestComplete(uint32 requestId) external view returns (bool isCompleted)
```

## Retrieve Random Number <a href="#retrieve-random-number" id="retrieve-random-number"></a>

```
function randomNumber(uint32 requestId) external returns (uint256 randomNum);
```