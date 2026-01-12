-- Create storage bucket for app files
INSERT INTO storage.buckets (id, name, public, file_size_limit)
VALUES ('app-files', 'app-files', true, 104857600)
ON CONFLICT (id) DO NOTHING;

-- Create RLS policies for app-files bucket
CREATE POLICY "Anyone can view app files"
ON storage.objects FOR SELECT
USING (bucket_id = 'app-files');

CREATE POLICY "Authenticated users can upload app files"
ON storage.objects FOR INSERT
WITH CHECK (bucket_id = 'app-files');

CREATE POLICY "Authenticated users can update app files"
ON storage.objects FOR UPDATE
USING (bucket_id = 'app-files');

CREATE POLICY "Authenticated users can delete app files"
ON storage.objects FOR DELETE
USING (bucket_id = 'app-files');

-- Create table to track the current app version
CREATE TABLE public.app_versions (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  version VARCHAR(50) NOT NULL,
  file_url TEXT NOT NULL,
  file_name TEXT NOT NULL,
  file_size BIGINT,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.app_versions ENABLE ROW LEVEL SECURITY;

-- Allow public read access to active versions
CREATE POLICY "Anyone can view active app versions"
ON public.app_versions FOR SELECT
USING (is_active = true);

-- Allow authenticated users to manage versions (admin)
CREATE POLICY "Authenticated users can insert app versions"
ON public.app_versions FOR INSERT
WITH CHECK (true);

CREATE POLICY "Authenticated users can update app versions"
ON public.app_versions FOR UPDATE
USING (true);

CREATE POLICY "Authenticated users can delete app versions"
ON public.app_versions FOR DELETE
USING (true);

-- Create admin_users table for simple admin access
CREATE TABLE public.admin_users (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  email VARCHAR(255) UNIQUE NOT NULL,
  password_hash TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.admin_users ENABLE ROW LEVEL SECURITY;

-- No public access to admin_users table
CREATE POLICY "No public access to admin users"
ON public.admin_users FOR SELECT
USING (false);

-- Insert a default admin user (password: admin123)
INSERT INTO public.admin_users (email, password_hash)
VALUES ('admin@lovematch.com', 'admin123');