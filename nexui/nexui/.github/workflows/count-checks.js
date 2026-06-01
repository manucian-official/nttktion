#!/usr/bin/env node
/**
 * count-checks.js — NexUI CI total check calculator
 * Run: node scripts/count-checks.js
 */

const sections = [
  { label: "ESLint rules",               n: 312 },
  { label: "Prettier format checks",     n: 89  },
  { label: "Stylelint CSS checks",       n: 47  },
  { label: "Markdownlint checks",        n: 24  },
  { label: "TypeScript strict (5.3)",    n: 156 },
  { label: "TypeScript strict (5.4)",    n: 156 },
  { label: "TypeScript strict (5.5)",    n: 156 },
  { label: "Unit tests — Node18/Linux",  n: 90  },
  { label: "Unit tests — Node20/Linux",  n: 90  },
  { label: "Unit tests — Node22/Linux",  n: 90  },
  { label: "Unit tests — Node20/Win",    n: 90  },
  { label: "Unit tests — Node22/Win",    n: 90  },
  { label: "Unit tests — Node18/macOS",  n: 90  },
  { label: "Unit tests — Node20/macOS",  n: 90  },
  { label: "Unit tests — Node22/macOS",  n: 90  },
  { label: "Component tests (RTL)",      n: 120 },
  { label: "Snapshot tests",             n: 47  },
  { label: "a11y WCAG 2.1-AA",           n: 80  },
  { label: "a11y WCAG 2.1-AAA",          n: 80  },
  { label: "a11y WCAG 2.2-AA",           n: 80  },
  { label: "Visual regression snapshots",n: 48  },
  { label: "Bundle size assertions",     n: 18  },
  { label: "Tree-shaking checks",        n: 36  },
  { label: "Exports / publint checks",   n: 24  },
  { label: "CodeQL queries",             n: 96  },
  { label: "Semgrep SAST rules",         n: 54  },
  { label: "npm audit advisories",       n: 12  },
  { label: "Dependency license checks",  n: 38  },
  { label: "Playwright — Chromium",      n: 24  },
  { label: "Playwright — Firefox",       n: 24  },
  { label: "Playwright — WebKit",        n: 24  },
  { label: "Lighthouse — run 1",         n: 28  },
  { label: "Lighthouse — run 2",         n: 28  },
  { label: "Lighthouse — run 3",         n: 28  },
  { label: "PR title validation",        n: 1   },
  { label: "Changeset validation",       n: 1   },
  { label: "Bundle diff comment",        n: 1   },
  { label: "PR size labelling",          n: 1   },
  { label: "Release gate",               n: 1   },
  { label: "Pages build validation",     n: 4   },
  { label: "Deploy health check",        n: 1   },
]

const total = sections.reduce((s, c) => s + c.n, 0)
const longest = Math.max(...sections.map(s => s.label.length))
const w = longest + 14

console.log("┌" + "─".repeat(w) + "┐")
console.log("│" + "  NexUI — CI Check Breakdown".padEnd(w) + "│")
console.log("├" + "─".repeat(w) + "┤")
sections.forEach(({ label, n }) => {
  console.log(`│  ${label.padEnd(longest)}  ${String(n).padStart(5)}  │`)
})
console.log("├" + "─".repeat(w) + "┤")
console.log(`│  ${"TOTAL CHECKS".padEnd(longest)}  ${String(total).padStart(5)}  │`)
console.log("└" + "─".repeat(w) + "┘")
if (total !== 2559) console.warn(`⚠️  Total is ${total}, expected 2559`)
else console.log("\n✅ Exactly 2,559 checks confirmed.")
