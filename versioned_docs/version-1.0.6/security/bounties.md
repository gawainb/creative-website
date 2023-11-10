---
id: bounties
title: Bounties
sidebar_position: 3
---

# 🎯 Bounties

We value contributions from the community to strengthen the security of the core contracts. We want to reward any hackers in good faith who report vulnerabilities.

The scope of this bounty includes the Creative smart contracts. The determination of the bug severity will be made by the Creative team.  We determine the severity of an issue according to the [Smart Contract Security Alliance Severity Levels](https://www.smartcontractsecurityalliance.com)

Payouts will be as follows:

* High: $2,000 USDC
* Medium: $1,000 USDC
* Low: $500 USDC

The issue must:

* Be a previously unreported, non-public vulnerability.
* Include enough detail for us to identify and reproduce the problem.
* All reports should start with an email to [bugs@creativeplatform.xyz](mailto:bugs@creativeplatform.xyz), and they will receive a response within 24 hours. Non-security issues are not eligible for this bounty.

Determinations of eligibility and all terms related to this award are at the sole and final discretion of the Creative Community DAO.

## Available Bug Bounty Programs at thirdweb
- **Smart contract review** - review all terms below.
- **HackerOne bug bounty** - coming soon.

## Rewards
- **Up to $25,000 USD**, depending on the severity of the vulnerability. Each case is reviewed individually. thirdweb reserves the right to adjust priority and reward based on impact, with a detailed explanation provided for downgraded issues.

## In Scope
- Deployed thirdweb contracts on mainnet (Ethereum, Polygon, Avalanche, all EVM).
- [Github repository](https://github.com/thirdweb-dev/contracts).

### Product Areas
-  Applications

## Severity Classification

### Critical (SEV-1)
- Assets can be directly compromised.
- Governance vote manipulation.
- Direct theft of user funds/NFTs.
- Permanent freezing of funds/NFTs/yield/royalties.
- Protocol insolvency.
- Hijack/manipulate contract ownership.
- **Up to $25,000**

### High (SEV-2)
- Potential loss of assets.
- State or permissions manipulation.
- Unauthorized minting.
- Temporary freezing of assets.
- Abusable RNG.
- Alteration of NFT representation.
- **Up to $10,000**

### Medium (SEV-3)
- Non-direct asset risk.
- Protocol functionality impact.
- Block stuffing.
- Griefing.
- Theft of gas.
- Unbounded gas consumption.
- **Up to $3,000**

### Low (SEV-4)
- Non-critical events.
- Low-risk issues.
- Contract incorrect return value without fund risk.
- **Up to $500**

## Severity References
- No access to severity classification systems.

## Disclosure Policy
Report findings to [bugs@creativeplatform.xyz](mailto:bugs@creativeplatform.xyz), with the expectation of:
- A response within 24 hours.
- Regular status updates.
- A solution and git commit for the fix.
- Relevant transactions for contract deployment.
- A request to confirm the fix.
- A draft incident report within 14 days.
- Possible public disclosure on our socials channel.
- Transparency throughout the process.

## Template for Reporting Findings (For Reference)

```
Title of the finding

Summary: Brief summary.
Severity: High, Medium, Low.
Details: Full description, context, scenario, impact.
Github Permalinks: Links to relevant code.
Steps to reproduce: How to reproduce the issue.
Mitigation (optional): Proposed fixes.
Comment (optional): Additional comments.
```