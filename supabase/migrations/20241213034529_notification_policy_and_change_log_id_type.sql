-- Drop the default from the id column
ALTER TABLE "public"."email_notification_log" ALTER COLUMN "id" DROP DEFAULT;

-- Ensure the id column is of type bigint
ALTER TABLE "public"."email_notification_log" ALTER COLUMN "id" SET DATA TYPE bigint USING "id"::bigint;

-- Add the identity property to the id column
ALTER TABLE "public"."email_notification_log" ALTER COLUMN "id" ADD GENERATED BY DEFAULT AS IDENTITY;


-- Create a unique index on the id column
CREATE UNIQUE INDEX email_notification_log_id_key ON public.email_notification_log USING btree (id);

-- Add a unique constraint using the created index
ALTER TABLE "public"."email_notification_log" ADD CONSTRAINT "email_notification_log_id_key" UNIQUE USING INDEX "email_notification_log_id_key";

-- Create a policy for message_notification_queue
CREATE POLICY "Enable insert for authenticated users only"
ON "public"."message_notification_queue"
AS PERMISSIVE
FOR INSERT
TO authenticated
WITH CHECK (true);
