-- ============================================================
--  WEB LUYỆN THI IELTS - CẤU TRÚC DỮ LIỆU SUPABASE
--  Cách dùng: vào Supabase > SQL Editor > dán TOÀN BỘ file này > bấm Run.
--  Chạy lại nhiều lần vẫn an toàn (không lỗi, không mất dữ liệu).
-- ============================================================

-- 1) Bảng tiến độ học (gõ câu, ngữ pháp, đọc, nghe, nói, writing, thẻ từ vựng...)
create table if not exists public.progress (
  user_id    uuid not null references auth.users (id) on delete cascade,
  section    text not null,
  item_key   text not null,
  state      jsonb not null default '{}'::jsonb,
  updated_at timestamptz not null default now(),
  primary key (user_id, section, item_key)
);

-- 2) Bảng từ đã lưu (từ từ điển)
create table if not exists public.saved_words (
  user_id    uuid not null references auth.users (id) on delete cascade,
  word       text not null,
  data       jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now(),
  primary key (user_id, word)
);

-- 3) Bảng nhật ký phút học theo ngày
create table if not exists public.study_log (
  user_id uuid not null references auth.users (id) on delete cascade,
  day     date not null,
  minutes int  not null default 0,
  primary key (user_id, day)
);

-- 4) Bật bảo mật theo hàng (Row Level Security) cho cả 3 bảng
alter table public.progress    enable row level security;
alter table public.saved_words enable row level security;
alter table public.study_log   enable row level security;

-- 5) Chính sách: mỗi người chỉ đọc / ghi dữ liệu của CHÍNH MÌNH
drop policy if exists "progress_owner" on public.progress;
create policy "progress_owner" on public.progress
  for all
  using (auth.uid() = user_id)
  with check (auth.uid() = user_id);

drop policy if exists "saved_words_owner" on public.saved_words;
create policy "saved_words_owner" on public.saved_words
  for all
  using (auth.uid() = user_id)
  with check (auth.uid() = user_id);

drop policy if exists "study_log_owner" on public.study_log;
create policy "study_log_owner" on public.study_log
  for all
  using (auth.uid() = user_id)
  with check (auth.uid() = user_id);
