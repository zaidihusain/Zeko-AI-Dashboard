

"use client"; // Ensure client-side compatibility for hooks

import { Auth0Provider } from "@auth0/auth0-react";

export default function AuthProvider({ children }) {
  const domain = process.env.NEXT_PUBLIC_AUTH0_DOMAIN;
  const clientId = process.env.NEXT_PUBLIC_AUTH0_CLIENT_ID;

  const redirectUri =
    typeof window !== "undefined"
      ? window.location.origin + "/api/auth/callback"
      : process.env.NEXT_PUBLIC_AUTH0_BASE_URL + "/api/auth/callback"; // Fallback if not in browser

      if (!domain || !clientId) {
        console.error("Auth0 configuration is missing domain or clientId.");
        
        return null; // Render nothing or a fallback UI
      }

  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      authorizationParams={{
        redirect_uri: redirectUri,
        
      }}
    >
      {children}
    </Auth0Provider>
  );
}
