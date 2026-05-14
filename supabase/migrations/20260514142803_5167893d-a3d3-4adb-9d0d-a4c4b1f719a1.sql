DO $$
DECLARE
  target text := 'tahahareb7@gmail.com';
BEGIN
  DELETE FROM public.free_diagnostic_leads WHERE lower(email) = target;
  DELETE FROM public.email_send_log WHERE lower(recipient_email) = target;
  DELETE FROM public.suppressed_emails WHERE lower(email) = target;
  DELETE FROM public.email_unsubscribe_tokens WHERE lower(email) = target;
  DELETE FROM public.profiles WHERE lower(email) = target;
  DELETE FROM auth.users WHERE lower(email) = target;
END $$;