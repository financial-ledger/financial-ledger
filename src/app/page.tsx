import Image from "next/image";
import { createSupabaseServerClient } from "src/utils/supabase/server";
import { css } from "styled-system/css";

export default async function Home() {
  const client = createSupabaseServerClient();
  const { data } = await client.auth.getUser();
  return (
    <div
      className={css({
        color: "red",
      })}
    >
      {data.user?.email}
      test
    </div>
  );
}
