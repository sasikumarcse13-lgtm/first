import React from 'react'

const MARKUP = `<div class="cs7test">



<div class="cs7grid">

  <!-- LEFT -->
  <div class="cs7left">
    <div class="cs7eyebrow">STUDENT STORIES</div>
    <h2 class="cs7heading">Trusted by Students. Chosen with Confidence.</h2>
    <p class="cs7desc">Hear from students who used CollegeShine to explore courses, discover colleges and navigate their admission journey with greater clarity and confidence.</p>
    <div class="cs7stats">
      <div class="cs7stat"><b>4.9/5</b><span>Student Satisfaction</span></div>
      <div class="cs7stat"><b>20,000+</b><span>Students Reached</span></div>
      <div class="cs7stat"><b>15,000+</b><span>Admissions Supported</span></div>
    </div>
  </div>

  <!-- RIGHT -->
  <div class="cs7right">
    <div class="cs7card">

      <div class="cs7cardtop">
        <svg class="cs7quoteicon" viewBox="0 0 44 34" xmlns="http://www.w3.org/2000/svg">
          <path d="M12.5 0C5.6 0 0 5.6 0 12.5c0 6.4 4.7 11.7 10.9 12.4L14.7 34h6.9l-4.4-11.6c3.5-1.8 5.9-5.4 5.9-9.6C23.1 5.6 17.5 0 12.5 0zM33.4 0c-6.9 0-12.5 5.6-12.5 12.5 0 6.4 4.7 11.7 10.9 12.4L35.6 34h6.9l-4.4-11.6c3.5-1.8 5.9-5.4 5.9-9.6C44 5.6 38.4 0 33.4 0z"/>
        </svg>

        <div class="cs7nav">
          <button class="cs7navprev" id="cs7prev" aria-label="Previous testimonial">
            <svg viewBox="0 0 24 24" fill="none"><path d="M15 18L9 12L15 6" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/></svg>
          </button>
          <button class="cs7navnext" id="cs7next" aria-label="Next testimonial">
            <svg viewBox="0 0 24 24" fill="none"><path d="M9 6L15 12L9 18" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/></svg>
          </button>
        </div>
      </div>

      <div class="cs7slidewrap" id="cs7slidewrap">
        <!-- Slides injected by JS -->
      </div>

      <div class="cs7footer">
        <img class="cs7avatar" id="cs7avatar" src="" alt="" width="50" height="50" loading="lazy">
        <div class="cs7meta">
          <div class="cs7name" id="cs7name"></div>
          <div class="cs7role" id="cs7role">Verified Student</div>
        </div>
        <div class="cs7stars" id="cs7stars">★★★★★</div>
      </div>

      <div class="cs7dots" id="cs7dots"></div>
    </div>
  </div>

</div>
</div>`

export default function StudentStoriesSection() {
  return <div dangerouslySetInnerHTML={{ __html: MARKUP }} />
}
