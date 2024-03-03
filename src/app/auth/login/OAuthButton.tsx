"use client";

import { SignInWithOAuthCredentials } from "@supabase/supabase-js";
import { ReactNode } from "react";
import { createSupabaseBrowserClient } from "src/utils/supabase/browser";
import { hstack } from "styled-system/patterns";
import { ColorToken } from "styled-system/tokens";
import { PropOrCondition } from "styled-system/types/prop-type";

interface OAuthButtonProps {
  type: "kakao";
  backgroundColor: PropOrCondition<
    "backgroundColor",
    readonly string[] | ColorToken
  >;
  icon?: ReactNode;
  children: ReactNode;
  options?: SignInWithOAuthCredentials["options"];
}

export function OAuthButton({
  type,
  backgroundColor,
  icon,
  children,
  options,
}: OAuthButtonProps) {
  const signInWithOAuth = async () =>
    createSupabaseBrowserClient().auth.signInWithOAuth({
      provider: type,
      options: {
        ...options,
        redirectTo: window.location.origin + "/auth/callback",
      },
    });
  return (
    <button
      type="button"
      className={hstack({
        py: "1.2rem",
        width: "100%",
        justify: "center",
        gap: 8,
        backgroundColor,
        borderRadius: "3rem",
      })}
      onClick={signInWithOAuth}
    >
      {icon}
      {children}
    </button>
  );
}
