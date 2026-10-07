// Single place for landing copy. Items marked TODO need confirmation from the STG team.

export const APP_URL = "https://stgloballlc.com"; // TODO: confirm Bubble app URL for sign in / sign up
export const SIGN_IN_URL = `${APP_URL}/login`;
export const SIGN_UP_URL = `${APP_URL}/signup`;

export const SUPPORT_EMAIL = "support@stgloballlc.com"; // TODO: confirm real support address
export const SUPPORT_HOURS = "Monday to Friday, 9:00 AM to 5:00 PM"; // TODO: confirm

export const steps = [
  {
    title: "Create an agreement",
    body: "Describe the service, the compensation, the payment method, the timeline and the service protection period. Drafts are free.",
  },
  {
    title: "Invite the other party",
    body: "Add a client or service provider by email, or share a QR code or link. Only the invited user can approve.",
  },
  {
    title: "Both parties approve",
    body: "Once both sides approve, the agreement becomes active and credits are deducted. Agreements expire after 48 hours if not approved.",
  },
  {
    title: "Complete or resolve",
    body: "Mark the work complete. If something goes wrong, raise a dispute and record the outcome, all inside STG.",
  },
];

export type Plan = {
  name: string;
  audience: string;
  credits: string;
  price: string;
  period?: string;
  multiplier?: string;
  features: string[];
  highlight?: boolean;
  cta: string;
};

export const plans: Plan[] = [
  {
    name: "Novice",
    audience: "Trying STG",
    credits: "5 Trial Credits / month",
    price: "Free",
    multiplier: "1.0x",
    features: ["Create and share agreements", "Dispute tools included"],
    cta: "Get started",
  },
  {
    name: "Intermediate",
    audience: "Occasional users",
    credits: "25 Owned Credits / month",
    price: "$4.99",
    period: "/mo",
    multiplier: "1.25x",
    features: ["Owned Credits never reset", "Dispute tools included"],
    cta: "Choose Intermediate",
  },
  {
    name: "Pro",
    audience: "Active professionals",
    credits: "75 Owned Credits / month",
    price: "$9.99",
    period: "/mo",
    multiplier: "1.5x",
    features: ["Owned Credits never reset", "Priority support"],
    highlight: true,
    cta: "Choose Pro",
  },
  {
    name: "Expert",
    audience: "Power users",
    credits: "200 Owned Credits / month",
    price: "$14.99",
    period: "/mo",
    multiplier: "2.0x",
    features: ["Owned Credits never reset", "Priority support"],
    cta: "Choose Expert",
  },
  {
    name: "Enterprise",
    audience: "Businesses & Organizations",
    credits: "Custom credits",
    price: "Custom",
    features: ["Custom workflows for agencies and firms", "Priority support"],
    cta: "Contact us",
  },
];

export const receives = [
  { title: "Secure service agreements", body: "A structured, recorded agreement for every engagement, with timeline, compensation and payment method." },
  { title: "Credits every month", body: "Each plan includes monthly credits to activate agreements. Trial Credits reset monthly; Owned Credits never reset." },
  { title: "Dispute tools", body: "Raise a dispute, set a resolution window and record the outcome so both parties share one history." },
  { title: "Identity verification", body: "Government ID and phone verification help build trust between users." },
  { title: "Street Cred points", body: "Earn points from completed agreements and rank up to unlock a higher plan multiplier." },
  { title: "Transaction history", body: "A complete record of your credit activity, with invoices and receipts." },
];
