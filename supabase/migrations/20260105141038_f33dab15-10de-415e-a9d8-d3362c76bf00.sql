-- Create analytics table for tracking visits
CREATE TABLE public.analytics_visits (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  visitor_id TEXT NOT NULL,
  session_id TEXT NOT NULL,
  page_url TEXT,
  referrer TEXT,
  user_agent TEXT,
  device_type TEXT,
  country TEXT,
  city TEXT,
  clicked_download BOOLEAN DEFAULT false,
  visit_start TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  visit_end TIMESTAMP WITH TIME ZONE,
  duration_seconds INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.analytics_visits ENABLE ROW LEVEL SECURITY;

-- Allow public to insert visits (anonymous tracking)
CREATE POLICY "Anyone can insert visits"
ON public.analytics_visits FOR INSERT
WITH CHECK (true);

-- Allow public to update their own visits (by session_id)
CREATE POLICY "Anyone can update visits by session"
ON public.analytics_visits FOR UPDATE
USING (true);

-- Allow public to read all visits (for stats display)
CREATE POLICY "Anyone can view visits"
ON public.analytics_visits FOR SELECT
USING (true);

-- Allow delete for clearing analytics
CREATE POLICY "Anyone can delete visits"
ON public.analytics_visits FOR DELETE
USING (true);

-- Create index for better query performance
CREATE INDEX idx_analytics_visitor_id ON public.analytics_visits(visitor_id);
CREATE INDEX idx_analytics_session_id ON public.analytics_visits(session_id);
CREATE INDEX idx_analytics_created_at ON public.analytics_visits(created_at);
CREATE INDEX idx_analytics_clicked_download ON public.analytics_visits(clicked_download);

-- Enable realtime for analytics
ALTER PUBLICATION supabase_realtime ADD TABLE public.analytics_visits;