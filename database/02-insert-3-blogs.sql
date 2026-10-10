-- Run after 01-create-blogs-table.sql.
-- Three starter CollegeShine articles. Edit content/images in Admin later as needed.

INSERT INTO blogs
(title, slug, excerpt, content, featured_image, category, author, published_date, updated_date, status, reading_time, tags, seo_title, seo_description, canonical_url, og_image)
VALUES
(
'TNEA Counselling: A Practical Guide for Students',
'tnea-counselling-practical-guide-for-students',
'Understand the main stages of TNEA counselling, from registration and rank information to choice filling and allotment.',
'<p>Tamil Nadu Engineering Admissions (TNEA) is used for admission to participating engineering programmes in Tamil Nadu. Students should always check the current official notification for dates, eligibility and procedures.</p><h2>What Is TNEA Counselling?</h2><p>TNEA counselling organises the admission process for eligible candidates using the rules and schedule published for that admission cycle.</p><h2>Before Registration</h2><p>Keep your academic details, contact information and required documents ready. Check the current eligibility requirements before submitting an application.</p><h2>Choice Filling</h2><p>During the applicable stage, candidates can arrange eligible college and course preferences. Review choices carefully before locking or confirming them.</p><h2>Allotment and Next Steps</h2><p>Follow the current official instructions for allotment acceptance, reporting and document verification. Dates and procedures can change between admission cycles.</p>',
'', 'Admissions', 'CollegeShine', '2026-09-30', '2026-09-30', 'published', '5 min read',
JSON_ARRAY('TNEA','Engineering Admission','Tamil Nadu'),
'TNEA Counselling Guide for Students | CollegeShine',
'Understand the main stages of TNEA counselling, including registration, choice filling, allotment and next steps for students.',
'https://collegeshine.com/blog/tnea-counselling-practical-guide-for-students/', ''
),
(
'How to Choose the Right Course After Class 12',
'how-to-choose-the-right-course-after-class-12',
'A practical framework for comparing interests, eligibility, course structure, colleges and future pathways after Class 12.',
'<p>Choosing a course after Class 12 becomes easier when you compare your interests with eligibility, course structure and future study or career pathways.</p><h2>Start With Your Interests</h2><p>List the subjects and activities you enjoy and the types of problems you like working on.</p><h2>Check Eligibility</h2><p>Review required subjects, marks, entrance examinations and other conditions for each course and institution.</p><h2>Compare Course Structure</h2><p>Look at subjects, practical work, projects, internships, duration and higher-study options rather than relying only on the course title.</p><h2>Shortlist Colleges</h2><p>Compare official information about affiliation, location, facilities and admission procedures before making a shortlist.</p>',
'', 'Career', 'CollegeShine', '2026-09-29', '2026-09-29', 'published', '5 min read',
JSON_ARRAY('Courses','Career Guidance','Class 12'),
'How to Choose the Right Course After Class 12 | CollegeShine',
'A practical guide to comparing courses, eligibility, interests, colleges and future pathways after Class 12.',
'https://collegeshine.com/blog/how-to-choose-the-right-course-after-class-12/', ''
),
(
'College Admission Documents Checklist for Students',
'college-admission-documents-checklist-for-students',
'Organise common academic, identity and supporting documents before college admission and joining formalities.',
'<p>Preparing documents early can make admission and joining formalities easier. The final requirements depend on the institution and course, so always follow current official instructions.</p><h2>Academic Documents</h2><ul><li>Class 10 certificate or mark sheet</li><li>Class 12 certificate or mark sheet</li><li>Transfer Certificate where required</li><li>Entrance examination details where applicable</li></ul><h2>Identity and Supporting Documents</h2><p>Institutions may request identity proof, photographs, address information and applicable category or eligibility certificates.</p><h2>Keep Digital Copies</h2><p>Store clear digital copies securely and follow the file type and size requirements shown by the admission portal.</p><h2>Verify the Final Checklist</h2><p>Before submission, compare your documents with the latest admission notice or instructions issued by the institution.</p>',
'', 'Admissions', 'CollegeShine', '2026-09-28', '2026-09-28', 'published', '4 min read',
JSON_ARRAY('College Admission','Documents','Student Guide'),
'College Admission Documents Checklist | CollegeShine',
'A practical checklist of common academic, identity and supporting documents students may need for college admission.',
'https://collegeshine.com/blog/college-admission-documents-checklist-for-students/', ''
);
