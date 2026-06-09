
-- 1. Extend the existing guard function to also protect access_expires_at
CREATE OR REPLACE FUNCTION public.prevent_profile_sensitive_update()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path TO 'public'
AS $function$
BEGIN
  -- Service role bypasses all checks (Stripe webhooks, admin edge functions)
  IF auth.role() = 'service_role' THEN
    RETURN NEW;
  END IF;

  IF NEW.payment_status IS DISTINCT FROM OLD.payment_status THEN
    RAISE EXCEPTION 'payment_status cannot be modified by users';
  END IF;

  IF NEW.access_expires_at IS DISTINCT FROM OLD.access_expires_at THEN
    RAISE EXCEPTION 'access_expires_at cannot be modified by users';
  END IF;

  IF NEW.id IS DISTINCT FROM OLD.id THEN
    RAISE EXCEPTION 'id cannot be modified';
  END IF;

  IF NEW.email IS DISTINCT FROM OLD.email THEN
    RAISE EXCEPTION 'email cannot be modified directly';
  END IF;

  RETURN NEW;
END;
$function$;

-- 2. Attach the trigger to profiles (was previously not attached)
DROP TRIGGER IF EXISTS prevent_profile_sensitive_update_trigger ON public.profiles;
CREATE TRIGGER prevent_profile_sensitive_update_trigger
BEFORE UPDATE ON public.profiles
FOR EACH ROW
EXECUTE FUNCTION public.prevent_profile_sensitive_update();

-- 3. Defense-in-depth: tighten the RLS UPDATE policy with a WITH CHECK clause
DROP POLICY IF EXISTS "Users can update their own profile" ON public.profiles;
CREATE POLICY "Users can update their own profile"
ON public.profiles
FOR UPDATE
TO authenticated
USING (auth.uid() = id)
WITH CHECK (auth.uid() = id);
