import PageShell from '../../../components/PageShell/PageShell'
import SEO from '../../../components/SEO/SEO.jsx'

export default function ImuCet() {
  return (<>
      <SEO
        title="IMU CET | Exam Details, Eligibility &amp; Admission"
        description="Explore IMU CET exam details, eligibility, admission information and preparation guidance on CollegeShine."
        canonical="/entrance-exam/imu-cet/"
        noindex={true}
        pageType="webpage"
        searchIntent="informational"
        keywords={['IMU CET', 'IMU CET exam', 'IMU CET eligibility', 'entrance exam']}
        breadcrumbs={[{"name": "Home", "url": "/"}, {"name": "Entrance Exams", "url": "/entrance-exam/"}, {"name": "IMU CET", "url": "/entrance-exam/imu-cet/"}]}
      />
      <PageShell title="IMU CET" path="/entrance-exam/imu-cet/" section="Entrance Exams" parent={{ title: 'Entrance Exams', path: '/entrance-exam/' }} />
    </>)
}
