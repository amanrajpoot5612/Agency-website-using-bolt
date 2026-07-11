import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { submitLead } from '../api/leads';

const payload = { name: 'Ada', email: 'ada@example.com', phone: '', projectType: '', budget: '', timeline: '', message: 'Hello' };

describe('submitLead', () => {
  beforeEach(() => vi.stubEnv('VITE_BACKEND_URI', 'https://api.example.com'));
  afterEach(() => vi.unstubAllGlobals());

  it('posts the normalized lead payload', async () => {
    const fetchMock = vi.fn().mockResolvedValue(new Response('{}', { status: 200, headers: { 'content-type': 'application/json' } }));
    vi.stubGlobal('fetch', fetchMock);
    await submitLead(payload);
    expect(fetchMock).toHaveBeenCalledOnce();
    expect(fetchMock.mock.calls[0][0]).toContain('/schedule-consultation');
    expect(JSON.parse(fetchMock.mock.calls[0][1].body)).toEqual(payload);
  });

  it('surfaces a backend error message', async () => {
    vi.stubGlobal('fetch', vi.fn().mockResolvedValue(new Response('{"message":"Try later"}', { status: 500, headers: { 'content-type': 'application/json' } })));
    await expect(submitLead(payload)).rejects.toThrow('Try later');
  });
});
