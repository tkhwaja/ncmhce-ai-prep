
-- Delete active session for the user
DELETE FROM public.active_sessions WHERE user_id = 'ce8a0a1c-793f-43ac-8e62-50a73b7d922d';

-- Delete profile
DELETE FROM public.profiles WHERE id = 'ce8a0a1c-793f-43ac-8e62-50a73b7d922d';

-- Delete auth user (this cascades to auth identities and sessions)
DELETE FROM auth.users WHERE id = 'ce8a0a1c-793f-43ac-8e62-50a73b7d922d';
