-- Create function to update timestamps
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

-- Create tutorial_videos table
CREATE TABLE public.tutorial_videos (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL DEFAULT 'Tutorial',
  video_url TEXT NOT NULL,
  file_name TEXT NOT NULL,
  file_size BIGINT NULL,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.tutorial_videos ENABLE ROW LEVEL SECURITY;

-- Create policy for public viewing of active videos
CREATE POLICY "Anyone can view active tutorial videos" 
ON public.tutorial_videos 
FOR SELECT 
USING (is_active = true);

-- Create policies for admin management
CREATE POLICY "Anyone can insert tutorial videos" 
ON public.tutorial_videos 
FOR INSERT 
WITH CHECK (true);

CREATE POLICY "Anyone can update tutorial videos" 
ON public.tutorial_videos 
FOR UPDATE 
USING (true);

CREATE POLICY "Anyone can delete tutorial videos" 
ON public.tutorial_videos 
FOR DELETE 
USING (true);

-- Create trigger for automatic timestamp updates
CREATE TRIGGER update_tutorial_videos_updated_at
BEFORE UPDATE ON public.tutorial_videos
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

-- Create storage bucket for tutorial videos (100MB limit)
INSERT INTO storage.buckets (id, name, public, file_size_limit)
VALUES ('tutorial-videos', 'tutorial-videos', true, 104857600);

-- Storage policies for tutorial videos bucket
CREATE POLICY "Anyone can view tutorial videos"
ON storage.objects FOR SELECT
USING (bucket_id = 'tutorial-videos');

CREATE POLICY "Anyone can upload tutorial videos"
ON storage.objects FOR INSERT
WITH CHECK (bucket_id = 'tutorial-videos');

CREATE POLICY "Anyone can update tutorial videos"
ON storage.objects FOR UPDATE
USING (bucket_id = 'tutorial-videos');

CREATE POLICY "Anyone can delete tutorial videos"
ON storage.objects FOR DELETE
USING (bucket_id = 'tutorial-videos');