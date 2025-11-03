/*
  # Create Contact Inquiries Table

  1. New Tables
    - `contact_inquiries`
      - `id` (uuid, primary key)
      - `name` (text, required)
      - `email` (text, required)
      - `phone` (text, required)
      - `project_type` (text, required)
      - `budget` (text, required)
      - `timeline` (text, required)
      - `message` (text, optional)
      - `created_at` (timestamp)
      - `status` (text, default: pending)

  2. Security
    - Public access for INSERT (form submissions)
    - No RLS policies needed for form submissions
*/

CREATE TABLE IF NOT EXISTS contact_inquiries (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  project_type text NOT NULL,
  budget text NOT NULL,
  timeline text NOT NULL,
  message text,
  created_at timestamptz DEFAULT now(),
  status text DEFAULT 'pending'
);