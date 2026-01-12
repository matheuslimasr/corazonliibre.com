-- Add browser and traffic source columns
ALTER TABLE public.analytics_visits 
ADD COLUMN browser TEXT,
ADD COLUMN traffic_source TEXT;