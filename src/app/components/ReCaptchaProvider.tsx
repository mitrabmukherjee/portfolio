"use client";

import { createContext, useContext, type ReactNode } from "react";
import { GoogleReCaptchaProvider, useGoogleReCaptcha } from "react-google-recaptcha-v3";

type ExecuteRecaptcha = (action: string) => Promise<string>;

const ReCaptchaContext = createContext<ExecuteRecaptcha | null>(null);

/** Use this instead of useGoogleReCaptcha so it works when reCAPTCHA keys are not configured. */
export function useReCaptcha(): ExecuteRecaptcha | null {
  return useContext(ReCaptchaContext);
}

/** Bridge: reads from GoogleReCaptchaProvider and provides to our context. */
function ReCaptchaBridge({ children }: { children: ReactNode }) {
  const { executeRecaptcha } = useGoogleReCaptcha();
  const value = executeRecaptcha ?? null;
  return (
    <ReCaptchaContext.Provider value={value}>
      {children}
    </ReCaptchaContext.Provider>
  );
}

/** No-op executeRecaptcha when keys are not set (e.g. local dev). */
const noOpExecute: ExecuteRecaptcha = () =>
  Promise.resolve("no-recaptcha-key-configured");

export default function ReCaptchaProvider({
  children,
}: {
  children: ReactNode;
}) {
  const recaptchaKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;

  if (!recaptchaKey) {
    return (
      <ReCaptchaContext.Provider value={noOpExecute}>
        {children}
      </ReCaptchaContext.Provider>
    );
  }

  return (
    <GoogleReCaptchaProvider reCaptchaKey={recaptchaKey}>
      <ReCaptchaBridge>{children}</ReCaptchaBridge>
    </GoogleReCaptchaProvider>
  );
}
