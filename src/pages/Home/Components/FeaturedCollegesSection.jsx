import React from 'react'

const MARKUP = `<div class="tvm4x-wrap">
<section class="tvm4x-container">

  <div class="tvm4x-head">
    <div class="tvm4x-eyebrow">FEATURED COLLEGES</div>
    <h2>Discover Colleges. Explore Opportunities.</h2>
    <p>Explore leading colleges across popular fields of study, compare your options and find the right opportunity for your future.</p>
  </div>

  <div class="tvm4x-filters" id="tvm4xFilters"></div>

  <div class="tvm4x-grid" id="tvm4xGrid"></div>

  <div class="tvm4x-showmore" id="tvm4xShowMoreWrap">
    <button id="tvm4xShowMore">Explore More Colleges</button>
  </div>

</section>

<!-- ============== ENQUIRY POPUP (shared by all cards) ============== -->
<div class="tvm4x-modal-overlay" id="tvm4xModalOverlay">
  <div class="tvm4x-modal">
    <button class="tvm4x-modal-close" id="tvm4xModalClose">&times;</button>
    <h4>Get Free Admission Guidance</h4>
    <p class="tvm4x-modal-college" id="tvm4xModalCollegeName">College Name</p>

    <form id="tvm4xEnquiryForm">
      <!-- hidden field auto-filled with the college the user clicked "Enquiry Now" on -->
      <input type="hidden" id="tvm4x_college" name="college" value="">

      <div class="tvm4x-modal-field">
        <label>Student Name</label>
        <input type="text" id="tvm4x_a1" placeholder="Enter your full name"
               oninput="this.value=this.value.replace(/[^a-zA-Z\\s]/g,'')" required>
      </div>

      <div class="tvm4x-modal-field">
        <label>Phone Number</label>
        <input type="tel" id="tvm4x_c1" placeholder="Enter your 10-digit mobile number"
               oninput="this.value=this.value.replace(/[^0-9]/g,'').slice(0,10)" required>
      </div>

      <div class="tvm4x-modal-field">
        <label>Email Address</label>
        <input type="email" id="tvm4x_b1" placeholder="Enter your email address"
               oninput="this.value=this.value.toLowerCase().replace(/[^a-z0-9@._-]/g,'')" required>
      </div>

      <div class="tvm4x-modal-field">
        <label>Message (optional)</label>
        <textarea id="tvm4x_e1" placeholder="Any specific course or question?"></textarea>
      </div>

      <button type="submit" class="tvm4x-modal-submit" id="tvm4xModalSubmitBtn">Submit Enquiry</button>
      <div class="tvm4x-modal-msg" id="tvm4xModalMsg"></div>
    </form>
  </div>
</div>

</div>















<div class="ng72_wrap">
<div class="ng72_stage">

<div class="ng72_rocket_fly"><span class="ng72_rocket_emoji">🚀</span></div>

<div class="ng72_card">

<h2 class="ng72_title">Need Help With Your Admission?</h2>
<p class="ng72_desc">Tell us what you're looking for, and our admission team will get in touch with the right guidance and options for you.</p>

<form class="ng72_form" id="ng72_form" onsubmit="return ng72_handleSubmit(event)">

<div class="ng72_grid">

<div class="ng72_field">
<label class="ng72_label">Full Name</label>
<input type="text" name="a1" id="ng72_a1" class="ng72_input" placeholder="Enter your full name" oninput="this.value=this.value.replace(/[^a-zA-Z\\s]/g,'')" required>
</div>

<div class="ng72_field">
<label class="ng72_label">Email Address</label>
<input type="email" name="b1" id="ng72_b1" class="ng72_input" placeholder="Enter your email address" oninput="this.value=this.value.toLowerCase().replace(/[^a-z0-9@._-]/g,'')" required>
</div>

<div class="ng72_field">
<label class="ng72_label">Mobile Number</label>
<input type="tel" name="c1" id="ng72_c1" class="ng72_input" placeholder="Enter your 10-digit mobile number" oninput="this.value=this.value.replace(/[^0-9]/g,'').slice(0,10)" required>
</div>

<div class="ng72_field">
<label class="ng72_label" for="ng72_d1">Looking For</label>
<select name="d1" id="ng72_d1" class="ng72_select" required>
<option value="">Select an option</option>
<option>Direct College Admission</option>
<option>Foreign Admission</option>
<option>Online Admission</option>
<option>Distance College Admission</option>
</select>
</div>

</div>

<div class="ng72_send_row">
<div class="ng72_input_wrap">
<span class="ng72_emoji">💬</span>
<input type="text" name="e1" id="ng72_e1" class="ng72_input" placeholder="Write your message...">
</div>
<button type="submit" class="ng72_btn" id="ng72_btn">Get Guidance</button>
</div>

<div class="ng72_success" id="ng72_success"><span aria-hidden="true">✓</span> Submitted successfully!</div>

</form>

<div class="ng72_image_box">
<img src="https://collegeshine.com/wp-content/uploads/2026/08/collegeshine-form-image.webp" alt="Admission guidance" width="1200" height="800" loading="lazy">
</div>

</div>
</div>
</div>





<!-- ═══════════════════════════════════════════════
     STUDY ABROAD — WordPress snippet
     Paste inside Gutenberg "Custom HTML" block
     or a shortcode / page-builder HTML widget.
     No <html>/<head>/<body> tags needed.

     Countries: Germany, UK, France, Australia, Russia
═══════════════════════════════════════════════ -->



<!-- ══ HERO ══ -->`

export default function FeaturedCollegesSection() {
  return <div dangerouslySetInnerHTML={{ __html: MARKUP }} />
}
