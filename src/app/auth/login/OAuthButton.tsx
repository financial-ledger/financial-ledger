"use client";

import { SignInWithOAuthCredentials } from "@supabase/supabase-js";
import { ReactNode } from "react";
import { createSupabaseBrowserClient } from "src/utils/supabase/browser";
import { cx } from "styled-system/css";
import { hstack } from "styled-system/patterns";
import { ColorToken } from "styled-system/tokens";
import { PropOrCondition } from "styled-system/types/prop-type";

interface OAuthButtonProps {
  type: "kakao";
  icon?: ReactNode;
  children: ReactNode;
  options?: SignInWithOAuthCredentials["options"];
  className?: string;
}

export function OAuthButton({
  type,
  icon,
  children,
  options,
  className,
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
      className={cx(
        hstack({
          height: 52,
          width: "100%",
          justify: "center",
          gap: 8,
          borderRadius: 2,
        }),
        className
      )}
      onClick={signInWithOAuth}
    >
      {icon}
      {children}
    </button>
  );
}
