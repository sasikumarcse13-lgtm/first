import { useEffect, useState } from 'react'

const WEB3FORMS_ENDPOINT = 'https://api.web3forms.com/submit'

export default function AdmissionLeadModal({ college, open, onClose }) {
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

  if (!open || !college) return null

  const submit = async event => {
    event.preventDefault()
    setStatus('submitting')
    setError('')
    const form = event.currentTarget
    const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY

    if (!accessKey) {
      setStatus('error')
      setError('Web3Forms access key is not configured. Add VITE_WEB3FORMS_ACCESS_KEY to your .env file.')
      return
    }

    const formData = new FormData(form)
    formData.append('access_key', accessKey)
    formData.append('subject', `Admission enquiry - ${college.name}`)
    formData.append('from_name', 'CollegeShine Admission Enquiry')
    formData.append('form_type', 'College Admission Enquiry')
    formData.append('botcheck', '')

    try {
      const response = await fetch(WEB3FORMS_ENDPOINT, {
        method: 'POST',
        body: formData,
        headers: { Accept: 'application/json' },
      })
      const result = await response.json()
      if (!response.ok || !result.success) throw new Error(result.message || 'Unable to submit the enquiry.')
      form.reset()
      setStatus('success')
    } catch (submitError) {
      setStatus('error')
      setError(submitError.message || 'Unable to submit the enquiry. Please try again.')
    }
  }

  return <div className="admission-modal-backdrop" role="presentation" onMouseDown={event => { if (event.target === event.currentTarget) onClose() }}>
    <div className="admission-modal" role="dialog" aria-modal="true" aria-labelledby="admission-modal-title">
      <button className="admission-modal-close" type="button" onClick={onClose} aria-label="Close admission enquiry form">×</button>
      <div className="admission-modal-head">
        <span className="admission-modal-kicker">Admission Enquiry</span>
        <h2 id="admission-modal-title">Apply</h2>
        <p>Share your details and CollegeShine will receive your enquiry for <strong>{college.name}</strong>.</p>
      </div>

      {status === 'success' ? <div className="admission-form-success">
        <div className="admission-success-icon">✓</div>
        <h3>Enquiry submitted</h3>
        <p>Your admission enquiry has been sent successfully.</p>
        <button type="button" className="admission-form-submit" onClick={onClose}>Close</button>
      </div> : <form className="admission-lead-form" onSubmit={submit}>
        <div className="admission-form-grid">
          <label><span>Name</span><input name="name" type="text" placeholder="Enter your name" autoComplete="name" required /></label>
          <label><span>Phone Number</span><input name="phone" type="tel" placeholder="Enter phone number" autoComplete="tel" inputMode="tel" required /></label>
          <label><span>WhatsApp Number</span><input name="whatsapp" type="tel" placeholder="Enter WhatsApp number" autoComplete="tel" inputMode="tel" required /></label>
          <label><span>Email</span><input name="email" type="email" placeholder="Enter email address" autoComplete="email" required /></label>
          <label className="admission-form-full"><span>College Name</span><input name="college_name" type="text" value={college.name} readOnly aria-readonly="true" /></label>
          <label className="admission-form-full"><span>Message</span><textarea name="message" rows="4" placeholder="Tell us what admission information you need..." required /></label>
        </div>
        <input type="checkbox" name="botcheck" className="admission-honeypot" tabIndex="-1" autoComplete="off" aria-hidden="true" />
        {status === 'error' && <p className="admission-form-error" role="alert">{error}</p>}
        <button className="admission-form-submit" type="submit" disabled={status === 'submitting'}>{status === 'submitting' ? 'Sending…' : 'Submit Enquiry →'}</button>
        <p className="admission-form-note">Your details are sent securely through Web3Forms.</p>
      </form>}
    </div>
  </div>
}
