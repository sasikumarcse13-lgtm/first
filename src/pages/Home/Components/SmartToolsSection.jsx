import React from 'react'

const MARKUP = `<section class="cs8x-section">

  <header class="cs8x-header">
    <div class="cs8x-eyebrow">
      <span class="cs8x-eyebrow-icon">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="8" width="18" height="12" rx="2"/><path d="M8 8V6a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/><path d="M3 12h18"/></svg>
      </span>
      <span>OUR SMART TOOLS </span>
    </div>
    <h2 class="cs8x-title">Smarter Tools.<br><em>Better Decisions.</em></h2>
    <p class="cs8x-desc">Powerful, intelligent tools to help you make better choices about your course, college, career and education — completely free for every student.</p>
  </header>

  <div class="cs8x-grid">

    <div class="cs8x-cards">

      <article class="cs8x-card cs8x-accent-green" data-href="/tools/career-path-generator/">
        <span class="cs8x-card-shine" aria-hidden="true"></span>
        <div class="cs8x-card-img"><div style="background-image:url('https://collegeshine.com/wp-content/uploads/2026/09/career-path-tool-collegeshine-226x300.webp')"></div></div>
        <div class="cs8x-card-body">
          <span class="cs8x-icon">
            <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><polygon points="16 8 12.5 12.5 8 16 11.5 11.5 16 8"/></svg>
          </span>
          <h3 class="cs8x-card-title">Career Path Generator</h3>
          <div class="cs8x-card-rule"></div>
          <p class="cs8x-card-text">Explore personalised career paths based on your interests, strengths and goals — and discover where your potential can take you.</p>
          <a class="cs8x-cta" href="/tools/career-path-generator/">Explore Tool <span class="cs8x-cta-arrow"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg></span></a>
        </div>
      </article>

      <article class="cs8x-card cs8x-accent-orange" data-href="/tools/scholarship-finder-tool/">
        <span class="cs8x-card-shine" aria-hidden="true"></span>
        <div class="cs8x-card-img"><div style="background-image:url('https://collegeshine.com/wp-content/uploads/2026/09/scholarship-finder-tool-collegeshine-269x300.webp')"></div></div>
        <div class="cs8x-card-body">
          <span class="cs8x-icon">
            <svg viewBox="0 0 24 24"><path d="M22 10 12 5 2 10l10 5 10-5Z"/><path d="M6 12v5c0 1.1 2.7 2 6 2s6-.9 6-2v-5"/></svg>
          </span>
          <h3 class="cs8x-card-title">Scholarship Finder</h3>
          <div class="cs8x-card-rule"></div>
          <p class="cs8x-card-text">Find relevant scholarships and funding opportunities based on your education profile and eligibility.</p>
          <a class="cs8x-cta" href="/tools/scholarship-finder-tool/">Find Scholarships <span class="cs8x-cta-arrow"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg></span></a>
        </div>
      </article>

      <article class="cs8x-card cs8x-accent-purple" data-href="/tools/collegeshine-com-cut-off-calculator-tamil-nadu/">
        <span class="cs8x-card-shine" aria-hidden="true"></span>
        <div class="cs8x-card-img"><div style="background-image:url('https://collegeshine.com/wp-content/uploads/2026/09/cut-off-tool-collegeshine-300x292.webp')"></div></div>
        <div class="cs8x-card-body">
          <span class="cs8x-icon">
            <svg viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M7 9h10M7 13h4M15 13h2"/></svg>
          </span>
          <h3 class="cs8x-card-title">Cutoff Calculator</h3>
          <div class="cs8x-card-rule"></div>
          <p class="cs8x-card-text">Calculate your expected cutoff and identify colleges where your admission chances are stronger.</p>
          <a class="cs8x-cta" href="/tools/collegeshine-com-cut-off-calculator-tamil-nadu/">Check Your Cutoff <span class="cs8x-cta-arrow"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg></span></a>
        </div>
      </article>

      <article class="cs8x-card cs8x-accent-blue" data-href="/tools/skill-recommentation-tool/">
        <span class="cs8x-card-shine" aria-hidden="true"></span>
        <div class="cs8x-card-img"><div style="background-image:url('https://collegeshine.com/wp-content/uploads/2026/09/skill-recommendation-tool-collegeshine-300x200.webp')"></div></div>
        <div class="cs8x-card-body">
          <span class="cs8x-icon">
            <svg viewBox="0 0 24 24"><path d="M4 20V10M10 20V4M16 20v-7M22 20v-3"/></svg>
          </span>
          <h3 class="cs8x-card-title">Skill Recommendation</h3>
          <div class="cs8x-card-rule"></div>
          <p class="cs8x-card-text">Get personalised skill recommendations aligned with your goals, chosen course and future career.</p>
          <a class="cs8x-cta" href="/tools/skill-recommentation-tool/">Explore Tool <span class="cs8x-cta-arrow"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg></span></a>
        </div>
      </article>

    </div>

  </div>
</section>`

export default function SmartToolsSection() {
  return <div dangerouslySetInnerHTML={{ __html: MARKUP }} />
}
