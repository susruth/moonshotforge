// ── PORTFOLIO ──────────────────────────────────────────────────────────────
export interface Project {
  tag: string;
  name: string;
  chain: string;
  status: string;
  raised: string;
  desc: string;
  desc2: string;
  metrics: { val: string; label: string }[];
  chains: string[];
}

export const projects: Project[] = [
  {
    tag: 'DeFi · Mainnet', name: 'Aethon Protocol', chain: 'Ethereum · Arbitrum',
    status: 'Live on Mainnet', raised: '$12M Seed',
    desc: 'Aethon Protocol is intent-based trading infrastructure enabling gasless, cross-chain swaps with sub-second finality using ZK settlement proofs. Founded in early 2024, Aethon solves the fragmented liquidity problem across EVM chains by abstracting gas, bridging, and routing into a single user intent.',
    desc2: 'Solvers compete to fulfill user intents off-chain, with settlement verified on-chain via Groth16 proofs. The protocol is chain-agnostic and currently live on Ethereum mainnet and Arbitrum, with Base and Optimism integrations shipping in Q2 2025.',
    metrics: [{ val: '$2.1B', label: 'Volume (30d)' }, { val: '420K', label: 'Unique Wallets' }, { val: '0', label: 'Exploits' }],
    chains: ['Ethereum', 'Arbitrum', 'Base (Q2)', 'Optimism (Q2)'],
  },
  {
    tag: 'Infrastructure · L2', name: 'NullGate', chain: 'zkEVM · Polygon',
    status: 'Public Testnet', raised: '$8M Seed',
    desc: 'NullGate is a zero-knowledge VM for privacy-preserving smart contracts. It enables confidential DeFi — private balances, hidden transaction graphs, sealed auctions — without sacrificing composability with existing EVM tooling.',
    desc2: 'Built on a custom Plonky3-based proof system, NullGate achieves 10ms proof generation for common operations on commodity hardware. The VM is EVM-compatible at the opcode level, allowing existing Solidity contracts to be deployed with zero code changes.',
    metrics: [{ val: '10ms', label: 'Avg Proof Time' }, { val: '99.9%', label: 'EVM Compat.' }, { val: '3', label: 'Audit Passes' }],
    chains: ['Polygon zkEVM', 'Ethereum L1 (DA)', 'Eigen DA'],
  },
  {
    tag: 'RWA · Tokenization', name: 'VaultMesh', chain: 'Base · Solana',
    status: 'Private Beta', raised: '$15M Series A',
    desc: 'VaultMesh is an institutional-grade tokenization platform for real-world assets with built-in compliance rails and automated on-chain settlement. The platform handles the full lifecycle: legal structuring, token issuance, transfer restrictions, dividend distribution, and secondary market liquidity.',
    desc2: 'VaultMesh works with regulated custodians and law firms to ensure tokens are legally compliant in 40+ jurisdictions. Current assets under management include tokenized US Treasuries, private credit, and commercial real estate.',
    metrics: [{ val: '$840M', label: 'Assets Tokenized' }, { val: '40+', label: 'Jurisdictions' }, { val: '18', label: 'Institutional Clients' }],
    chains: ['Base', 'Solana', 'Aptos', 'Polygon'],
  },
  {
    tag: 'AI × Web3 · Beta', name: 'Synapse Node', chain: 'Cosmos · IBC',
    status: 'Open Beta', raised: '$6M Seed',
    desc: 'Synapse Node is a decentralized inference network for running AI models on-chain. Compute providers stake tokens to offer GPU capacity; requesters pay per-inference with cryptographic proofs of execution verifying outputs.',
    desc2: 'The network currently supports major open-source models including Llama, Mistral, and Stable Diffusion variants. An on-chain reputation system penalizes incorrect outputs via optimistic fraud proofs, ensuring result integrity without requiring every computation to be verified.',
    metrics: [{ val: '12K', label: 'Active GPUs' }, { val: '$0.0002', label: 'Per Inference' }, { val: '99.7%', label: 'Uptime' }],
    chains: ['Cosmos Hub', 'Osmosis IBC', 'Ethereum (settlement)'],
  },
  {
    tag: 'Identity · Protocol', name: 'Cerid', chain: 'Ethereum · StarkNet',
    status: 'Mainnet Alpha', raised: '$9M Seed',
    desc: 'Cerid is a self-sovereign identity layer with selective disclosure ZK proofs. Users prove attributes about themselves (age, nationality, accreditation status) without revealing the underlying data, enabling compliant DeFi without KYC data leakage.',
    desc2: 'Cerid integrates with government-issued digital IDs in 12 countries and generates Groth16 proofs client-side in under 2 seconds. DeFi protocols can require proof of non-US personhood or investor accreditation with one line of Solidity.',
    metrics: [{ val: '2s', label: 'Client-side Proof' }, { val: '12', label: 'Gov ID Integrations' }, { val: '280K', label: 'Verified Users' }],
    chains: ['Ethereum', 'StarkNet', 'Optimism', 'Polygon'],
  },
  {
    tag: 'Gaming · Live', name: 'Ironforge Arena', chain: 'Immutable · Ronin',
    status: 'Live · Season 3', raised: '$11M Seed',
    desc: 'Ironforge Arena is a fully on-chain strategy game with player-owned economies. Every unit, territory, and resource is an NFT. The game economy is governed by token holders, with an in-game DAO managing seasonal rules and prize pools.',
    desc2: 'The game processes 4M+ transactions per day on Immutable zkEVM, with gas costs abstracted entirely from players. A peer-to-peer marketplace allows real-money trading of in-game assets, with $8M GMV in the first quarter alone.',
    metrics: [{ val: '$8M', label: 'Q1 GMV' }, { val: '200K', label: 'Active Wallets' }, { val: '4M+', label: 'Daily Transactions' }],
    chains: ['Immutable zkEVM', 'Ronin', 'Ethereum (NFT bridging)'],
  },
];

// ── BLOGS ──────────────────────────────────────────────────────────────────
export interface BlogPost {
  cat: string; date: string; title: string; imgText: string; excerpt: string; body: string;
}

export const blogs: BlogPost[] = [
  {
    cat: 'Research', date: 'Mar 2025', imgText: 'ZK',
    title: 'Why zkVMs Will Eat Every Blockchain Runtime',
    excerpt: 'The transition from EVM to zkVM is not incremental — it is a regime change. Here\'s why we believe every major chain will migrate within five years.',
    body: `<p>The transition from EVM to zkVM is not incremental — it is a regime change. Here's why we believe every major chain will migrate within five years, and what it means for developers building today.</p>
<h3>The EVM's Original Sin</h3>
<p>The Ethereum Virtual Machine was designed for correctness and determinism, not for provability. Every opcode was chosen without considering whether a ZK proof could be generated over it efficiently. KECCAK256 is one of the most expensive operations to prove in a circuit — yet it's used everywhere in Ethereum's state trie.</p>
<p>zkVMs solve this by either redesigning the instruction set or by building massively parallelized proving infrastructure that can handle the EVM's idiosyncrasies at scale. Both approaches are valid; the winner will be determined by developer adoption, not technical elegance.</p>
<h3>Why This Time Is Different</h3>
<p>Previous generations of ZK technology required hand-writing circuits for every computation — a process that took months per application. Modern zkVMs like SP1, RISC Zero, and Jolt allow any program compiled to RISC-V or WASM to be proven automatically. The proving overhead has fallen from 10,000× to under 100× in three years, and it's still falling.</p>
<p>At Moonshot Forge, we've deployed capital into three zkVM projects in the last 18 months. Our bet: by 2027, every new L1 and major L2 will be ZK-native.</p>`,
  },
  {
    cat: 'Thesis', date: 'Feb 2025', imgText: 'AI',
    title: 'The Autonomous Agent Economy: Our Bet on On-Chain AI',
    excerpt: 'AI agents need money, memory, and verifiable compute. We break down why on-chain infrastructure is the missing layer for AGI\'s economic layer.',
    body: `<p>AI agents need three things to operate autonomously: money, memory, and verifiable compute. Today, all three are broken. We explain our thesis for why blockchain is the missing infrastructure layer.</p>
<h3>The Problem With Centralized AI</h3>
<p>Current AI systems operate within walled gardens. An agent running on one provider's infrastructure cannot trustlessly transact with an agent running on another's. There is no standard for agent-to-agent payment, no verifiable record of what an agent has done, and no way to audit whether an AI actually executed the computation it claims.</p>
<p>Blockchain solves all three. On-chain wallets give agents a persistent, self-sovereign identity and payment rail. Smart contracts provide verifiable, auditable execution records. Decentralized compute networks ensure that inference results can be cryptographically proven.</p>
<h3>What We're Backing</h3>
<p>We're investing at the intersection of AI and crypto in three areas: agent frameworks with native wallet and payment rails, decentralized inference networks with proof-of-computation, and on-chain memory and context storage primitives. Our portfolio company Synapse Node is our flagship bet in the inference layer.</p>`,
  },
  {
    cat: 'Market Analysis', date: 'Jan 2025', imgText: 'RWA',
    title: 'The $500T Opportunity: Tokenizing Real-World Assets at Scale',
    excerpt: 'Real estate, credit, commodities, and equities are all moving on-chain. We analyze the infrastructure stack needed to make it institutional-grade.',
    body: `<p>Real estate, credit, commodities, and equities are all moving on-chain. We analyze the $500 trillion opportunity and the infrastructure stack needed to make institutional-grade tokenization a reality.</p>
<h3>Why Now</h3>
<p>Three macro forces have converged to make RWA tokenization viable for the first time: regulatory clarity in major jurisdictions, the maturation of on-chain compliance tooling, and a generation of institutional investors who have grown comfortable holding digital assets.</p>
<p>BlackRock's BUIDL fund crossed $500M in AUM within months of launch. Franklin Templeton's money market fund is live on Stellar. These aren't experiments — they're the opening moves of a multi-decade transition.</p>
<h3>The Infrastructure Gap</h3>
<p>The biggest bottleneck isn't regulatory or institutional demand — it's infrastructure. Tokenization platforms need to handle legal wrapper creation, token issuance with embedded transfer restrictions, KYC/AML at the wallet level, dividend distribution, and secondary market liquidity provisioning. VaultMesh, our portfolio company, is building this full stack.</p>`,
  },
];

// ── ROLES ──────────────────────────────────────────────────────────────────
export interface Role {
  title: string; dept: string; location: string; type: string; comp: string;
  desc: string; reqs: string[]; nice: string[];
}

export const roles: Role[] = [
  {
    title: 'Senior Protocol Engineer', dept: 'Engineering', location: 'Remote', type: 'Full-time', comp: '$180K–$240K + tokens',
    desc: 'We are looking for a senior engineer to work directly with our portfolio companies on protocol design, smart contract development, and L2 infrastructure. You will be embedded in teams across 2–3 portfolio companies at a time.',
    reqs: ['5+ years of software engineering, 2+ years in smart contract or protocol development', 'Deep knowledge of EVM, Solidity, and the L2 ecosystem', 'Experience with Rust, Go, or systems-level languages', 'Understanding of MEV, AMM design, or bridging mechanisms', 'Ability to read and critique protocol whitepapers'],
    nice: ['Contributions to open-source blockchain projects', 'Experience with ZK circuits or proving systems', 'Previous startup experience'],
  },
  {
    title: 'ZK Research Engineer', dept: 'Research', location: 'Remote', type: 'Full-time', comp: '$200K–$280K + significant tokens',
    desc: 'We are hiring a ZK research engineer to work on the core cryptographic infrastructure of our zkVM and identity portfolio companies. This is a deeply technical role requiring both theoretical knowledge and practical implementation skills.',
    reqs: ['Strong background in ZK-SNARKs, STARKs, or related cryptography', 'Experience implementing ZK circuits in circom, gnark, or halo2', 'Ability to read and implement academic cryptography papers', 'Proficiency in Rust or C++ for performance-critical code'],
    nice: ['Published research in cryptography or distributed systems', 'Contributions to ZK-focused open source projects (arkworks, bellman)', 'Experience with recursive proof systems'],
  },
  {
    title: 'DeFi Product Manager', dept: 'Product', location: 'Remote / NYC', type: 'Full-time', comp: '$140K–$180K + tokens',
    desc: 'We need a product manager with deep DeFi experience to work across our trading, lending, and liquidity portfolio companies. You will define product strategy, write specifications, and work directly with engineering teams to ship.',
    reqs: ['3+ years of product management, at least 1 year in DeFi or crypto', 'Deep knowledge of DEX mechanics, lending protocols, and DeFi UX patterns', 'Ability to write clear, technical product specifications', 'Comfortable with SQL, Dune Analytics, or on-chain data tools'],
    nice: ['Experience at a leading DeFi protocol (Uniswap, Aave, Compound)', 'Previous experience as a trader or market participant in DeFi'],
  },
  {
    title: 'Venture Analyst — Web3', dept: 'Investing', location: 'NYC / SF', type: 'Full-time', comp: '$100K–$140K + carry + tokens',
    desc: 'Join the Moonshot Forge investment team to source, evaluate, and support early-stage Web3 companies. You will write investment memos, conduct technical due diligence, and work closely with portfolio companies post-investment.',
    reqs: ['2+ years in venture capital, investment banking, or a relevant operational role', 'Genuine passion for and knowledge of the blockchain/Web3 space', 'Ability to read and evaluate smart contracts and protocol documentation', 'Strong written communication — you will write a lot of memos'],
    nice: ['Technical background in computer science or engineering', 'Previously founded or early at a crypto startup'],
  },
  {
    title: 'Smart Contract Security Auditor', dept: 'Security', location: 'Remote', type: 'Full-time', comp: '$160K–$220K + tokens',
    desc: 'Our in-house security team audits every portfolio company before mainnet launch. We are looking for an experienced auditor to help maintain our zero-exploit track record.',
    reqs: ['3+ years of smart contract security experience', 'Demonstrated track record of finding critical vulnerabilities in production code', 'Expert knowledge of common EVM attack vectors: reentrancy, flash loans, oracle manipulation', 'Familiarity with formal verification tools', 'Ability to write clear, actionable audit reports'],
    nice: ['Bug bounty track record on Immunefi or equivalent', 'Experience with non-EVM chains (Solana, CosmWasm, Move)'],
  },
  {
    title: 'Head of Ecosystem Growth', dept: 'Growth', location: 'Remote / Global', type: 'Full-time', comp: '$130K–$170K + tokens',
    desc: 'We need a connector and community builder to grow the Moonshot Forge ecosystem — driving founder applications, LP relationships, and protocol partnerships across our global network.',
    reqs: ['5+ years in growth, partnerships, or ecosystem development', 'Existing relationships with founders, VCs, and protocol teams in Web3', 'Excellent public speaker and writer', 'Proven ability to build community from scratch'],
    nice: ['Experience running a DAO or decentralized community', 'Previous work at a major L1 or L2 foundation'],
  },
];

// ── APPLY PROGRAMS ─────────────────────────────────────────────────────────
export interface ApplyProgram {
  type: string; icon: string; title: string; desc: string;
  details: { key: string; val: string }[];
}

export const applyPrograms: ApplyProgram[] = [
  {
    type: 'founder', icon: '🚀', title: 'Founder Program',
    desc: 'For early-stage teams with a working prototype or strong thesis. We co-found, provide pre-seed capital, and embed alongside you.',
    details: [{ key: 'Stage', val: 'Pre-seed · Seed' }, { key: 'Check Size', val: '$500K – $5M' }, { key: 'Equity', val: '10–20%' }, { key: 'Decision', val: '3 weeks' }],
  },
  {
    type: 'residency', icon: '🛠️', title: 'Builder Residency',
    desc: 'A 12-week intensive for solo builders or pairs who have an idea but need resources to validate it. Stipend provided, with a path to the Founder Program.',
    details: [{ key: 'Duration', val: '12 weeks' }, { key: 'Stipend', val: '$8,000 / month' }, { key: 'Cohort Size', val: '8 teams' }, { key: 'Next Cohort', val: 'Sep 2025' }],
  },
  {
    type: 'lp', icon: '📊', title: 'Partner LP Access',
    desc: 'For institutional investors seeking direct exposure to pre-seed Web3 ventures with co-investment rights and quarterly updates.',
    details: [{ key: 'Min. Commitment', val: '$2M' }, { key: 'Fund Size', val: '$150M target' }, { key: 'Vehicle', val: 'Cayman LP / SPV' }, { key: 'Reporting', val: 'Monthly + Quarterly' }],
  },
  {
    type: 'partner', icon: '🤝', title: 'Protocol Partnership',
    desc: 'For established protocols seeking technical co-development, ecosystem grants management, or distribution into our portfolio network.',
    details: [{ key: 'Engagement', val: 'Project-based' }, { key: 'Duration', val: '3–18 months' }, { key: 'Compensation', val: 'Token + cash' }, { key: 'Response time', val: '<5 business days' }],
  },
];
