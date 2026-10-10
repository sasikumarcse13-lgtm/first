import React from 'react'

const MARKUP = `<div class="cs-hero-wrap">
  <div class="cs-hero-grid">

    <!-- ============= LEFT: TEXT + SEARCH + FILTER ============= -->
    <div class="cs-hero-left">

      <div class="cs-eyebrow-pill cs-hero-anim">
        <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#1a56db" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 10L12 5 2 10l10 5 10-5Z"/><path d="M6 12v5c0 1.5 3 3 6 3s6-1.5 6-3v-5"/></svg>
        Tamil Nadu's Trusted Education & Admission Platform
      </div>

      <div class="cs-tag-row cs-hero-anim">
        <div class="cs-tag-pill">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#2158f2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 10L12 5 2 10l10 5 10-5Z"/><path d="M6 12v5c0 1.5 3 3 6 3s6-1.5 6-3v-5"/></svg>
          Find the Right Course.
        </div>
        <div class="cs-tag-divider"></div>
        <div class="cs-tag-pill">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#1e9e5a" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 21h18"/><path d="M5 21V9l7-5 7 5v12"/><path d="M9 21v-6h6v6"/></svg>
          Find the Right College.
        </div>
      </div>

      <h1 class="cs-headline cs-hero-anim">Get College Admission Easily.</h1>

      <svg class="cs-underline-svg" viewBox="0 0 230 14" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path d="M3 9.5C40 3 100 2 140 6C170 9 205 9 227 4" fill="none" stroke="#2158f2" stroke-width="4" stroke-linecap="round"/>
      </svg>

      <p class="cs-tamil cs-hero-anim">
        Looking for the right course or college? Explore Regular, Online, Distance and Abroad education options, compare your choices and get expert guidance to make your admission journey simple and stress-free.
      </p>

      <!-- ================= SEARCH + FILTER (unique widget) ================= -->
      <div class="cs-search-filter cs-hero-anim">

        <div class="cs-smart-search" id="csSmartSearch" role="search" aria-label="Search colleges, courses and education resources">
          <div class="cs-search-container">
            <div class="cs-search-box">
              <div class="cs-search-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <circle cx="11" cy="11" r="7"/><path d="M21 21l-4.3-4.3"/>
                </svg>
              </div>
              <input type="text" id="csSearchInput" placeholder="Search colleges, courses, scholarships, exams & more..." autocomplete="off" aria-label="Search CollegeShine">
              <button id="csClearSearch" type="button" aria-label="Clear search">×</button>
              <button id="csSearchButton" type="button" aria-label="Search">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M5 12h14"/><path d="M13 6l6 6-6 6"/>
                </svg>
              </button>
            </div>
            <div id="csSuggestions" class="cs-suggestions"></div>
          </div>
        </div>

        <div class="cf-heading">Find the Right College for You</div>

        <div class="cf-widget">
          <form class="cf-form" id="cfForm">

            <div class="cf-field" data-icon="district">
              <div class="cf-select-wrap cf-custom-select" data-select="cfDistrict">
                <div class="cf-field-text">
                  <label for="cfDistrict">District</label>
                  <button type="button" class="cf-select-trigger" id="cfDistrictTrigger" aria-haspopup="listbox" aria-expanded="false" aria-controls="cfDistrictPanel">
                    <div class="cf-select-value">Select District</div>
                  </button>
                </div>
                <select id="cfDistrict" class="cf-native-select" name="district" aria-label="District">
                  <option value="">Select District</option>
                </select>
                <div class="cf-select-panel" id="cfDistrictPanel" role="listbox"></div>
              </div>
            </div>

            <div class="cf-field" data-icon="course">
              <div class="cf-select-wrap cf-custom-select" data-select="cfCourse">
                <div class="cf-field-text">
                  <label for="cfCourse">Category</label>
                  <button type="button" class="cf-select-trigger" id="cfCourseTrigger" aria-haspopup="listbox" aria-expanded="false" aria-controls="cfCoursePanel">
                    <div class="cf-select-value">Select Category</div>
                  </button>
                </div>
                <select id="cfCourse" class="cf-native-select" name="type" aria-label="Category">
                  <option value="">Select Category</option>
                </select>
                <div class="cf-select-panel" id="cfCoursePanel" role="listbox"></div>
              </div>
            </div>

            <button type="submit" class="cf-submit">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 6h16M7 12h10M10 18h4"/></svg>
              Find Colleges
            </button>

          </form>
        </div>

      </div>
      <!-- ================= /SEARCH + FILTER ================= -->

    </div>

    <!-- ============= RIGHT: ILLUSTRATION (hidden below 990px, no crop) ============= -->
    <div class="cs-illustration cs-hero-anim">
      <div class="cs-photo-mask">
        <img src="https://collegeshine.com/wp-content/uploads/2026/08/hero-banner-image-collegeshine.webp" alt="Student holding books and backpack" width="1200" height="800" fetchpriority="high" decoding="async">
      </div>

      <!-- Floating badges: purely decorative, pinned to image edges -->
      <div class="cs-float-badge cs-float-badge--cap" aria-hidden="true">
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#2158f2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M22 10L12 5 2 10l10 5 10-5Z"/><path d="M6 12v5c0 1.5 3 3 6 3s6-1.5 6-3v-5"/>
        </svg>
      </div>
      <div class="cs-float-badge cs-float-badge--check" aria-hidden="true">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1e9e5a" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round">
          <path d="M20 6L9 17l-5-5"/>
        </svg>
      </div>
      <div class="cs-float-badge cs-float-badge--star" aria-hidden="true">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="#f2a52c" stroke="#f2a52c" stroke-width="1.5" stroke-linejoin="round">
          <path d="M12 2l2.9 6.26L22 9.27l-5 4.87L18.2 21 12 17.4 5.8 21 7 14.14l-5-4.87 7.1-1.01L12 2z"/>
        </svg>
      </div>
    </div>

    <!-- ============= STATS BAR ============= -->
<div class="cs-stats cs-hero-anim" id="csStatsBar">

  <!-- COLLEGES -->
  <div class="cs-stat">

    <div class="cs-stat-icon" style="background:#e7f0fe;">
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#2158f2"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        aria-hidden="true">

        <path d="M3 21h18"/>
        <path d="M5 21V9l7-5 7 5v12"/>
        <path d="M9 21v-6h6v6"/>

      </svg>
    </div>

    <div>
      <div
        class="cs-stat-num"
        data-count-to="3500"
        data-suffix="+">3500</div>

      <div class="cs-stat-label">
        Colleges
      </div>
    </div>

  </div>


  <div class="cs-stat-divider"></div>


  <!-- COURSES -->
  <div class="cs-stat">

    <div class="cs-stat-icon" style="background:#e5f7ec;">
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#1e9e5a"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        aria-hidden="true">

        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/>
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2Z"/>

      </svg>
    </div>

    <div>
      <div
        class="cs-stat-num"
        data-count-to="500"
        data-suffix="+">500</div>

      <div class="cs-stat-label">
        Courses
      </div>
    </div>

  </div>


  <div class="cs-stat-divider"></div>


  <!-- DISTRICTS -->
  <div class="cs-stat">

    <div class="cs-stat-icon" style="background:#f1e9fe;">
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#8b3ff2"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        aria-hidden="true">

        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
        <circle cx="12" cy="10" r="3"/>

      </svg>
    </div>

    <div>
      <div
        class="cs-stat-num"
        data-count-to="38"
        data-suffix="">38</div>

      <div class="cs-stat-label">
        Districts Covered
      </div>
    </div>

  </div>


  <div class="cs-stat-divider"></div>


  <!-- STUDENTS -->
  <div class="cs-stat">

    <div class="cs-stat-icon" style="background:#fde8ee;">
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#e0517a"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        aria-hidden="true">

        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"/>

      </svg>
    </div>

    <div>
      <div
        class="cs-stat-num"
        data-count-to="20000"
        data-suffix="+">20000</div>

      <div class="cs-stat-label">
        Students Helped
      </div>
    </div>

  </div>

</div>
  </div>
</div>`

export default function HeroSection() {
  return <div dangerouslySetInnerHTML={{ __html: MARKUP }} />
}
