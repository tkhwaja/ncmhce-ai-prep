DO $$
DECLARE
  target_emails text[] := ARRAY['tahahareb7@gmail.com','tahahareb18@gmail.com'];
BEGIN
  DELETE FROM public.free_diagnostic_leads WHERE lower(email) = ANY(target_emails);
  DELETE FROM public.email_send_log WHERE lower(recipient_email) = ANY(target_emails);
  DELETE FROM public.suppressed_emails WHERE lower(email) = ANY(target_emails);
  DELETE FROM public.email_unsubscribe_tokens WHERE lower(email) = ANY(target_emails);
  DELETE FROM public.profiles WHERE lower(email) = ANY(target_emails);
  DELETE FROM auth.users WHERE lower(email) = ANY(target_emails);
END $$;