@AGENTS.md

## Key Points to Remember

1. **Follow existing patterns** - check nearby files for conventions before creating new ones
2. Always follow SOLID Design Principals

## Operational Guidelines

- Do not write comments for obvious or self-documenting code
- Static checks include: `pnpm lint` (biome linter + formatter check)
- Do not include AI-attribution markers or claim authorship of any kind
  in commit messages or pull requests. No `Co-Authored-By` trailer for
  Claude, no "Generated with Claude Code" footer, no "🤖" markers.
- Do not make edits unrelated to the current change — don't remove
  comments, reformat code, or otherwise touch lines that aren't
  necessary for the task at hand
- Line length and formatting are enforced by biome (`lineWidth: 120`);
  run `pnpm format` rather than hand-wrapping.

## Commits

- Commit subjects use the imperative mood and end with a period.

## JS Package Security

- `pnpm-workspace.yaml` sets `minimumReleaseAge: 10080` (7 days, in
  minutes). pnpm will refuse to resolve package versions published less
  than 7 days ago. If pnpm fails to install or update a package, check
  whether the version was published recently — this is expected
  behavior, not an error.
- `.npmrc` sets `ignore-scripts=true`. Packages that need build scripts
  must be allowlisted in `pnpm-workspace.yaml` under `allowBuilds`.
- `pnpm-workspace.yaml` sets `blockExoticSubdeps: true`, preventing
  transitive dependencies from using git, tarball, or other non-registry
  sources.
- To bypass the release age for a critical vulnerability fix, either
  temporarily add the package to `minimumReleaseAgeExclude` in
  `pnpm-workspace.yaml` or set `minimumReleaseAge: 0`, update the
  lockfile, then revert the override.
- When fixing a vulnerable transitive dependency, first try
  `pnpm update <package>`. Only add a pnpm override if the parent
  package hasn't updated its dependency range to include the fix yet.
  Overrides should be temporary — remove them once the parent package
  catches up.

## GitHub Actions

- Pin third-party actions to a full commit SHA with a trailing comment
  naming the version and release URL, e.g.:

  ```yaml
  - uses: actions/checkout@08c6903cd8c0fde910a37f88322edcfb5dd907a8 # v5.0.0 - https://github.com/actions/checkout/releases/tag/v5.0.0
  ```

- Grant the workflow token the least privilege it needs — default to
  `permissions: contents: read` at the workflow level.
- Never interpolate `${{ ... }}` directly into a `run:` block — the
  expansion happens before the shell runs, so attacker-influenceable
  values (label names, PR titles, branch names) become shell injection.
  Pass them through `env:` instead and quote the variable.
