import { site } from "./site";

/** Assemble the email at runtime so it isn't sitting in source as plain text. */
export function getEmail() {
  return `${site.emailUser}@${site.emailDomain}`;
}
