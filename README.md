# UCP Ecosystem

The open registry of [Universal Commerce Protocol (UCP)](https://ucp.dev) tools, merchants, platforms, and resources.

**This data powers [ucplist.ai](https://ucplist.ai)** — the most comprehensive UCP directory on the web.

## The List

### 🏗️ Platforms

- **[Shopify](https://www.shopify.com)** — Leading e-commerce platform with native UCP checkout support for millions of merchants worldwide.
- **[Google Shopping](https://shopping.google.com)** — Google\
- **[Etsy](https://www.etsy.com)** — Handmade and vintage marketplace with UCP integration for unique product discovery by AI shopping agents.
- **[Wayfair](https://www.wayfair.com)** — Home goods and furniture retailer supporting UCP for agent-assisted shopping of large-format items.
- **[Target](https://www.target.com)** — Major US retailer with UCP-enabled checkout supporting AI-driven product discovery and same-day delivery.
- **[Walmart](https://www.walmart.com)** — World\

### 💳 Payment Handlers

- **[Stripe](https://stripe.com)** — Payment infrastructure provider with first-class UCP payment token exchange and checkout integration.
- **[Adyen](https://www.adyen.com)** — Global payment platform supporting UCP transactions across 150+ currencies and local payment methods.
- **[Visa](https://www.visa.com)** — Global payment network enabling secure UCP payment token exchange across its worldwide card network.
- **[Mastercard](https://www.mastercard.com)** — Payment network with UCP-compatible tokenized payment capabilities for secure agent-driven transactions.
- **[American Express](https://www.americanexpress.com)** — Premium payment network supporting UCP token exchange with enhanced purchase protections for agent-driven commerce.
- **[PayPal](https://www.paypal.com)** — Digital payments platform with UCP checkout and payment token exchange for seamless agent-assisted purchases.

### 🔧 Developer Tools

- **[UCP SDK (Official)](https://github.com/AminTheDev/ucp-sdk)** — Official TypeScript/JavaScript SDK for building UCP-compatible checkout experiences and agent integrations.
- **[UCP Conformance Test Suite](https://github.com/AminTheDev/ucp-conformance-tests)** — Automated test suite to validate UCP protocol compliance for merchants, platforms, and payment handlers.
- **[UCP Samples Repository](https://github.com/AminTheDev/ucp-samples)** — Collection of example integrations and starter templates for common UCP implementation patterns.
- **[UCP Schema Validator](https://github.com/AminTheDev/ucp-schema-validator)** — CLI and library for validating UCP message payloads against the official JSON schema specification.
- **[UCP Checkout.js](https://github.com/AminTheDev/ucp-checkout-js)** — Drop-in JavaScript widget for adding UCP-compatible checkout to any website with minimal configuration.
- **[UCP CLI Tools](https://github.com/AminTheDev/ucp-cli)** — Command-line tools for scaffolding, testing, and debugging UCP integrations from the terminal.

### 🛒 Merchants

- **[Nike](https://www.nike.com)** — Global sportswear brand with UCP checkout enabling AI-assisted shopping across footwear, apparel, and equipment.
- **[Allbirds](https://www.allbirds.com)** — Sustainable footwear brand with UCP-enabled checkout for eco-conscious AI-assisted shopping.
- **[Warby Parker](https://www.warbyparker.com)** — Eyewear brand supporting UCP checkout with virtual try-on and prescription management capabilities.
- **[Glossier](https://www.glossier.com)** — Beauty and skincare brand with UCP integration for personalized product recommendations via AI agents.
- **[Everlane](https://www.everlane.com)** — Transparent pricing fashion brand with UCP checkout showcasing radical cost transparency to AI agents.
- **[Casper](https://casper.com)** — Sleep products brand with UCP support for agent-assisted mattress and bedding purchases.
- **[Away](https://www.awaytravel.com)** — Travel and luggage brand with UCP-enabled checkout for AI-assisted travel gear shopping.
- **[Bombas](https://bombas.com)** — Comfort-focused sock and apparel brand with UCP checkout supporting subscription and bulk orders.
- **[Outdoor Voices](https://www.outdoorvoices.com)** — Activewear brand with UCP integration for AI-assisted athletic apparel shopping.
- **[ThirdLove](https://www.thirdlove.com)** — Inclusive lingerie brand with UCP checkout featuring AI-assisted fit finding and size recommendations.

### 🤖 Agent Integrations

- **[Google Gemini AI Shopping](https://gemini.google.com)** — Google\
- **[Checkout.directory API](https://checkout.directory)** — API service providing a searchable directory of UCP-enabled merchants for agent and application integration.
- **[OpenAI Shopping Plugin](https://openai.com)** — ChatGPT plugin enabling UCP-powered product search and checkout directly within OpenAI\
- **[Anthropic Commerce Agent](https://www.anthropic.com)** — Claude-powered commerce agent using UCP for safe, transparent AI-assisted shopping with human oversight.
- **[Microsoft Copilot Shopping](https://copilot.microsoft.com)** — Microsoft Copilot\

---

## Structured Data

For programmatic access, the same data lives in:

- `data/listings.json` — Every listing with full metadata
- `data/categories.json` — Category definitions
- `data/schema.json` — JSON Schema for validating new entries

## Contributing

Found a UCP tool we're missing? Two ways to add it:

1. **Open a PR** — Add an entry to `data/listings.json` following the schema in `data/schema.json`
2. **Submit through the site** — [ucplist.ai/submit](https://ucplist.ai/submit)

We review every submission personally.

## Why open source?

UCP is an open protocol. Its ecosystem directory should be open too. We maintain this data so that:

- **Developers** can programmatically discover UCP-enabled services
- **AI agents** can query the registry to find merchants and tools
- **The community** can submit additions and corrections
- **Other projects** can build on this data (with attribution)

## License

Data is available under [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/). Attribution to [ucplist.ai](https://ucplist.ai) required.

---

Maintained by [FullVibeAI](https://fullvibe.ai) · Built with a little help from 🦀
