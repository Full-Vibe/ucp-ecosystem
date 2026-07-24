# Contributing listings

Thanks for helping keep the UCP ecosystem data useful. Submit one focused pull request per listing or correction and run:

```bash
node scripts/validate-listings.mjs
```

## Evidence required from July 23, 2026

Every new listing, and every substantive factual update to an existing listing, must include:

- `sourceUrl`: the primary URL supporting the listing's claims.
- `lastVerified`: the date the evidence was checked, in `YYYY-MM-DD` format.
- `evidenceStatus`: one of the statuses below.

Prefer a live UCP profile, official documentation, an official repository, or a first-party announcement. Marketing summaries and directory copies are weaker evidence and may delay review.

### Evidence statuses

- `endpoint-verified`: a maintainer successfully fetched the advertised UCP profile or endpoint and confirmed that it supports the claim. An `ucpEndpoint` is required.
- `source-verified`: a current primary source supports the factual claim, but a live protocol endpoint was not independently exercised.
- `self-reported`: the owner or contributor supplied the claim and source, but a maintainer has not independently verified it.
- `unverified`: a source identifies a plausible candidate, but the claimed implementation or status has not been confirmed.

The existing `status` field remains the moderation state of a listing. `evidenceStatus` describes the quality of evidence for its factual claims; the two fields are deliberately separate.

The policy is forward-only so historical entries remain valid while the backlog is migrated. The deferred backfill is recorded in [TODO.md](TODO.md).

## Review checklist

- Use a stable, lowercase `slug`.
- Keep descriptions factual and specific.
- Do not cite or instruct readers to install unpublished packages.
- Confirm that `url`, `sourceUrl`, `docsUrl`, `githubUrl`, and `ucpEndpoint` links resolve.
- Use `ucpStatus: "live"` only when the evidence supports a currently reachable implementation.
- Never add secrets, private endpoints, or credentials.
