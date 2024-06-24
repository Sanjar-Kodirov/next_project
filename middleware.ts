import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

// Make sure that the `/api/webhooks/(.*)` route is not protected here

const isProtectedRoute = createRouteMatcher(["/ask-question(.*)"]);

export default clerkMiddleware((auth, req) => {
  if (isProtectedRoute(req)) auth().protect();
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
