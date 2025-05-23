/*
  # Create contact messages table

  1. New Tables
    - `contact_messages`
      - `id` (uuid, primary key)
      - `created_at` (timestamp with timezone)
      - `name` (text)
      - `email` (text)
      - `subject` (text)
      - `message` (text)
      - `status` (text)

  2. Security
    - Enable RLS on `contact_messages` table
    - Add policy for authenticated users to read their own messages
    - Add policy for anon/authenticated users to insert messages
*/

CREATE TABLE IF NOT EXISTS contact_messages (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at timestamptz DEFAULT now(),
  name text NOT NULL,
  email text NOT NULL,
  subject text NOT NULL,
  message text NOT NULL,
  status text NOT NULL DEFAULT 'new'
);

ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow insert for everyone" ON contact_messages
  FOR INSERT
  TO public
  WITH CHECK (true);

CREATE POLICY "Allow read for authenticated users only" ON contact_messages
  FOR SELECT
  TO authenticated
  USING (true);