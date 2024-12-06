

// import { handleAuth } from "@auth0/nextjs-auth0";

// export const GET = handleAuth();


import { handleAuth } from "@auth0/nextjs-auth0";

export const { GET, POST } = handleAuth();
