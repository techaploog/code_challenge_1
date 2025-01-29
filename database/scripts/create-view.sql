CREATE OR REPLACE VIEW public.vw_blog_summary
 AS
 SELECT p.id AS blog_id,
    p.com_id,
    c.value AS com_name,
    p.title,
    p.details,
    u.id AS creator_id,
    u.name AS creator_name,
    u.image AS creator_image,
    p.created_at,
    count(bc.id) AS comment_count
   FROM blog_post p
     JOIN community c ON p.com_id = c.key
     JOIN users u ON p.creator = u.id
     LEFT JOIN blog_comment bc ON p.id = bc.blog_id
  GROUP BY p.id, p.com_id, c.value, p.title, p.details, u.id, u.name, u.image, p.created_at;

ALTER TABLE public.vw_blog_summary
    OWNER TO postgres;
