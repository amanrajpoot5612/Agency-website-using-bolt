import { useState } from 'react';
import { submitLead } from '../api/leads';
import type { LeadPayload } from '../types/content';

export type SubmissionStatus = 'idle' | 'loading' | 'success' | 'error';

export function useLeadSubmission() {
  const [status, setStatus] = useState<SubmissionStatus>('idle');
  const [error, setError] = useState('');

  const submit = async (payload: LeadPayload, turnstileToken: string) => {
    if (status === 'loading') return false;
    setStatus('loading');
    setError('');
    try {
      await submitLead(payload, turnstileToken);
      setStatus('success');
      return true;
    } catch (caught) {
      setStatus('error');
      setError(caught instanceof Error ? caught.message : 'Something went wrong. Please try again.');
      return false;
    }
  };

  return { status, error, submit };
}
