# Story 1 handoff: Subtraction

## What I built
- `app/calc.js`: added `export function subtract(a, b) { return a - b; }` beside `add`, in the same style.
- No other files under `app/` changed. Nothing under `eval/` was touched.

## What passes
`sh eval/run.sh` from the repository root exits 0:
- conventions step: forbidden-names check clean, gitleaks finds no leaks, `node --check` passes
- T-001 add returns the sum: ok
- T-002 subtract returns the difference: ok

## Not passing / concerns
None. I introduced no tooling or conventions and did not propose any. I believe the tests are correct.
