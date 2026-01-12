-- Create tutorial_steps table
CREATE TABLE public.tutorial_steps (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  step_order INTEGER NOT NULL,
  image_url TEXT NOT NULL,
  title_pt TEXT NOT NULL DEFAULT '',
  title_en TEXT NOT NULL DEFAULT '',
  title_es TEXT NOT NULL DEFAULT '',
  description_pt TEXT NOT NULL DEFAULT '',
  description_en TEXT NOT NULL DEFAULT '',
  description_es TEXT NOT NULL DEFAULT '',
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.tutorial_steps ENABLE ROW LEVEL SECURITY;

-- Create policies
CREATE POLICY "Anyone can view active tutorial steps" 
ON public.tutorial_steps 
FOR SELECT 
USING (is_active = true);

CREATE POLICY "Anyone can insert tutorial steps" 
ON public.tutorial_steps 
FOR INSERT 
WITH CHECK (true);

CREATE POLICY "Anyone can update tutorial steps" 
ON public.tutorial_steps 
FOR UPDATE 
USING (true);

CREATE POLICY "Anyone can delete tutorial steps" 
ON public.tutorial_steps 
FOR DELETE 
USING (true);

-- Create trigger for updated_at
CREATE TRIGGER update_tutorial_steps_updated_at
BEFORE UPDATE ON public.tutorial_steps
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

-- Create storage bucket for tutorial images
INSERT INTO storage.buckets (id, name, public) VALUES ('tutorial-images', 'tutorial-images', true);

-- Storage policies
CREATE POLICY "Anyone can view tutorial images" 
ON storage.objects 
FOR SELECT 
USING (bucket_id = 'tutorial-images');

CREATE POLICY "Anyone can upload tutorial images" 
ON storage.objects 
FOR INSERT 
WITH CHECK (bucket_id = 'tutorial-images');

CREATE POLICY "Anyone can update tutorial images" 
ON storage.objects 
FOR UPDATE 
USING (bucket_id = 'tutorial-images');

CREATE POLICY "Anyone can delete tutorial images" 
ON storage.objects 
FOR DELETE 
USING (bucket_id = 'tutorial-images');