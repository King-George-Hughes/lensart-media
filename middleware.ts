export { default } from "next-auth/middleware";

export const config = {
  matcher: ["/blog/create", "/blog/:id+/edit", "/blog/:id+/edit"],
};
