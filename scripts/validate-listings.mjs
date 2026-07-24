import { readFile } from 'node:fs/promises';

const POLICY_START = '2026-07-23';
const EVIDENCE_STATUSES = new Set([
  'endpoint-verified',
  'source-verified',
  'self-reported',
  'unverified',
]);

const listings = JSON.parse(
  await readFile(new URL('../data/listings.json', import.meta.url), 'utf8'),
);

const errors = [];
const slugs = new Set();

function isDate(value) {
  return typeof value === 'string' && /^\d{4}-\d{2}-\d{2}$/.test(value);
}

function isHttpUrl(value) {
  if (typeof value !== 'string') return false;
  try {
    const url = new URL(value);
    return url.protocol === 'http:' || url.protocol === 'https:';
  } catch {
    return false;
  }
}

for (const [index, listing] of listings.entries()) {
  const label = listing.slug || `entry ${index + 1}`;

  for (const field of ['slug', 'name', 'description', 'url', 'category']) {
    if (typeof listing[field] !== 'string' || listing[field].trim() === '') {
      errors.push(`${label}: missing non-empty ${field}`);
    }
  }

  if (slugs.has(listing.slug)) errors.push(`${label}: duplicate slug`);
  slugs.add(listing.slug);

  if (!/^[a-z0-9-]+$/.test(listing.slug || '')) {
    errors.push(`${label}: slug must contain only lowercase letters, numbers, and hyphens`);
  }

  if (!isHttpUrl(listing.url)) errors.push(`${label}: url must be HTTP(S)`);
  if (listing.description?.endsWith('\\')) {
    errors.push(`${label}: description ends with a stray backslash`);
  }

  for (const field of ['sourceUrl', 'docsUrl', 'githubUrl']) {
    if (field in listing && !isHttpUrl(listing[field])) {
      errors.push(`${label}: ${field} must be HTTP(S)`);
    }
  }

  if (listing.ucpEndpoint !== null && listing.ucpEndpoint !== undefined && !isHttpUrl(listing.ucpEndpoint)) {
    errors.push(`${label}: ucpEndpoint must be null or HTTP(S)`);
  }

  const coveredByPolicy = isDate(listing.addedDate) && listing.addedDate >= POLICY_START;
  if (coveredByPolicy) {
    if (!isHttpUrl(listing.sourceUrl)) errors.push(`${label}: sourceUrl is required by the evidence policy`);
    if (!isDate(listing.lastVerified)) errors.push(`${label}: lastVerified is required by the evidence policy`);
    if (!EVIDENCE_STATUSES.has(listing.evidenceStatus)) {
      errors.push(`${label}: evidenceStatus is required by the evidence policy`);
    }
  }

  if ('lastVerified' in listing && !isDate(listing.lastVerified)) {
    errors.push(`${label}: lastVerified must use YYYY-MM-DD`);
  }
  if ('evidenceStatus' in listing && !EVIDENCE_STATUSES.has(listing.evidenceStatus)) {
    errors.push(`${label}: invalid evidenceStatus`);
  }
  if (listing.evidenceStatus === 'endpoint-verified' && !isHttpUrl(listing.ucpEndpoint)) {
    errors.push(`${label}: endpoint-verified requires an HTTP(S) ucpEndpoint`);
  }
}

if (errors.length > 0) {
  console.error(`Listing validation failed with ${errors.length} error(s):`);
  for (const error of errors) console.error(`- ${error}`);
  process.exitCode = 1;
} else {
  console.log(`Validated ${listings.length} listings.`);
}
