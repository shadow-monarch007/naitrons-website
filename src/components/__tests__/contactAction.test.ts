import { describe, it, expect } from 'vitest';
import { submitContact } from '@/app/actions/contact';

function makeForm(data: Record<string, string>) {
  const fd = new FormData();
  Object.entries(data).forEach(([k, v]) => fd.append(k, v));
  return fd;
}

describe('submitContact', () => {
  it('rejects invalid email', async () => {
    const res = await submitContact(makeForm({ name: 'John Doe', email: 'nope', message: 'Hello there this is a longer message' }));
    expect(res.ok).toBe(false);
  });

  it('accepts valid submission', async () => {
    const res = await submitContact(makeForm({ name: 'Jane Tester', email: 'jane@example.com', message: 'This is a sufficiently long message body to pass validation.' }));
    expect(res.ok).toBe(true);
  });
});
