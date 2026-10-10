import { useEffect, useState } from 'react'

const WEB3FORMS_ENDPOINT = 'https://api.web3forms.com/submit'
const SERVICES = ['Direct Admission', 'Distance Education', 'Online UG / PG', 'Foreign Admission']

export default function CounsellingModal({ open, onClose }) {
  const [status, setStatus] = useState('idle')
  const [error, setError] = useState('')

  useEffect(() => {
    if (!open) return undefined
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const onKeyDown = event => { if (event.key === 'Escape') onClose() }
    document.addEventListener('keydown', onKeyDown)
    return () => {
      document.body.style.overflow = previousOverflow
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [open, onClose])

  useEffect(() => {
    if (open) {
      setStatus('idle')
      setError('')
    }
  }, [open])

  if (!open) return null

  const submit = async event => {
    event.preventDefault()
    setStatus('submitting')
    setError('')
    const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY
    if (!accessKey) {
      setStatus('error')
      setError('Web3Forms access key is not configured. Add VITE_WEB3FORMS_ACCESS_KEY to your .env file.')
      return
    }

    const form = event.currentTarget
    const formData = new FormData(form)
    formData.append('access_key', accessKey)
    formData.append('subject', 'CollegeShine Free Counselling Request')
    formData.append('from_name', 'CollegeShine Counselling')
    formData.append('form_type', 'General Service Enquiry')

    try {
      const response = await fetch(WEB3FORMS_ENDPOINT, {
        method: 'POST',
        body: formData,
        headers: { Accept: 'application/json' },
      })
      const result = await response.json()
      if (!response.ok || !result.success) throw new Error(result.message || 'Unable to submit the request.')
      form.reset()
      setStatus('success')
    } catch (submitError) {
      setStatus('error')
      setError(submitError.message || 'Unable to submit the request. Please try again.')
    }
  }

  return <div className="counselling-modal-backdrop" role="presentation" onMouseDown={event => { if (event.target === event.currentTarget) onClose() }}>
    <div className="counselling-modal" role="dialog" aria-modal="true" aria-labelledby="counselling-modal-title">
      <button className="counselling-modal-close" type="button" onClick={onClose} aria-label="Close counselling form">×</button>
      <div className="counselling-modal-head">
        <span>FREE GUIDANCE</span>
        <h2 id="counselling-modal-title">Get Free Counselling</h2>
        <p>Tell us what you need and our team can guide you on the right admission pathway.</p>
      </div>

      {status === 'success' ? <div className="counselling-success">
        <div className="counselling-success-icon">✓</div>
        <h3>Request submitted</h3>
        <p>Thank you. Your counselling request has been sent successfully.</p>
        <button type="button" className="counselling-submit" onClick={onClose}>Close</button>
      </div> : <form className="counselling-form" onSubmit={submit}>
        <div className="counselling-grid">
          <label><span>Name</span><input name="name" type="text" placeholder="Enter your name" autoComplete="name" required /></label>
          <label><span>Phone Number</span><input name="phone" type="tel" placeholder="Enter phone number" autoComplete="tel" inputMode="tel" required /></label>
          <label><span>Email</span><input name="email" type="email" placeholder="Enter email address" autoComplete="email" required /></label>
          <label><span>WhatsApp Number</span><input name="whatsapp" type="tel" placeholder="Enter WhatsApp number" autoComplete="tel" inputMode="tel" required /></label>
          <label className="counselling-full"><span>Services</span><select name="service" defaultValue="" required><option value="" disabled>Select a service</option>{SERVICES.map(service => <option key={service} value={service}>{service}</option>)}</select></label>
        </div>
        {status === 'error' && <p className="counselling-error" role="alert">{error}</p>}
        <button className="counselling-submit" type="submit" disabled={status === 'submitting'}>{status === 'submitting' ? 'Sending…' : 'Request Counselling →'}</button>
        <p className="counselling-note">Your details are sent securely through Web3Forms.</p>
      </form>}
    </div>
  </div>
}
