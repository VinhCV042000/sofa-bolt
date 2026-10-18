CREATE TABLE public.sofa2_seo_rows (
  module_slug TEXT PRIMARY KEY,
  rows JSONB NOT NULL DEFAULT '[]'::jsonb,
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
GRANT SELECT, INSERT, UPDATE ON public.sofa2_seo_rows TO anon;
GRANT SELECT, INSERT, UPDATE ON public.sofa2_seo_rows TO authenticated;
GRANT ALL ON public.sofa2_seo_rows TO service_role;
ALTER TABLE public.sofa2_seo_rows ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Public read seo rows" ON public.sofa2_seo_rows FOR SELECT TO anon, authenticated USING (true);
CREATE POLICY "Public insert seo rows" ON public.sofa2_seo_rows FOR INSERT TO anon, authenticated WITH CHECK (true);
CREATE POLICY "Public update seo rows" ON public.sofa2_seo_rows FOR UPDATE TO anon, authenticated USING (true) WITH CHECK (true);