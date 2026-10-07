import Image from "next/image";
import Link from "next/link";
import {
  SIGN_IN_URL,
  SIGN_UP_URL,
  SUPPORT_EMAIL,
  SUPPORT_HOURS,
  plans,
  receives,
  steps,
  type Plan,
} from "./_lib/content";

const btn =
  "inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold transition-colors duration-150";
const btnPrimary = `${btn} bg-primary text-white hover:bg-primary-hover`;
const btnGhost = `${btn} border border-primary-40 bg-white text-primary hover:bg-primary-10`;

function Check() {
  return (
    <svg viewBox="0 0 20 20" className="mt-0.5 size-4 shrink-0 text-primary" fill="none" aria-hidden>
      <path d="M4 10.5l4 4 8-9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function SectionHead({ eyebrow, title, body }: { eyebrow: string; title: string; body?: string }) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <p className="text-sm font-semibold uppercase tracking-wider text-primary">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-bold tracking-tight text-neutral-100 sm:text-4xl">{title}</h2>
      {body && <p className="mt-4 text-base leading-7 text-muted">{body}</p>}
    </div>
  );
}

function CircleCheck() {
  return (
    <svg viewBox="0 0 20 20" className="size-4 shrink-0 text-success" fill="none" aria-hidden>
      <circle cx="10" cy="10" r="8.25" stroke="currentColor" strokeWidth="1.5" />
      <path d="M6.5 10.3l2.3 2.3 4.7-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function PlanCard({ plan }: { plan: Plan }) {
  const items = [plan.credits, ...(plan.multiplier ? [`${plan.multiplier} Street Cred multiplier`] : []), ...plan.features];
  return (
    <div
      className={`flex flex-col rounded-xl border p-6 transition duration-150 hover:-translate-y-0.5 hover:shadow-lg ${
        plan.highlight
          ? "border-primary-30 bg-linear-to-b from-primary-20 to-white"
          : "border-outline bg-white"
      }`}
    >
      <h3 className={`text-base font-bold ${plan.highlight ? "text-primary" : "text-neutral-100"}`}>{plan.name}</h3>
      <p className="mt-2 text-sm leading-6 text-muted">{plan.audience}</p>
      <p className="mt-6 text-3xl font-bold text-neutral-100">
        {plan.price}
        {plan.period && <span className="ml-1 text-sm font-medium text-muted">{plan.period}</span>}
      </p>
      <a
        href={SIGN_UP_URL}
        className={`${plan.highlight ? btnPrimary : `${btn} border border-primary bg-primary-20 text-primary hover:bg-primary-30`} mt-5 w-full`}
      >
        {plan.cta}
      </a>
      <ul className="mt-6 space-y-3 text-sm text-ink">
        {items.map((f) => (
          <li key={f} className="flex items-center gap-2.5">
            <CircleCheck />
            {f}
          </li>
        ))}
      </ul>
    </div>
  );
}

function EnterpriseBar({ plan }: { plan: Plan }) {
  return (
    <div className="mt-5 flex flex-col gap-5 rounded-xl border border-outline bg-linear-to-b from-primary-20 to-white p-6 sm:flex-row sm:items-center sm:justify-between">
      <div>
        <h3 className="text-base font-bold text-primary">{plan.name}</h3>
        <p className="mt-1 text-sm text-muted">{plan.audience}. Custom credits and workflows for agencies and firms.</p>
      </div>
      <a href={`mailto:${SUPPORT_EMAIL}?subject=STG%20Enterprise`} className={`${btnPrimary} sm:shrink-0`}>
        {plan.cta}
      </a>
    </div>
  );
}

const mockRows = [
  ["Website redesign", "Active", "bg-success-surface text-success"],
  ["Brand photography", "Waiting Approval", "bg-amber-50 text-amber-800"],
  ["Monthly bookkeeping", "Completed", "bg-primary-20 text-primary"],
];

export default function Home() {
  return (
    <>
      <header className="sticky top-0 z-30 border-b border-outline bg-white/90 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
          <a href="#top" aria-label="STG Global home">
            <Image src="/brand/stg-logo.png" alt="STG Global" width={872} height={249} className="h-9 w-auto" priority />
          </a>
          <nav className="hidden items-center gap-7 text-sm font-medium text-neutral-100 md:flex" aria-label="Primary">
            <a href="#about" className="hover:text-primary">About</a>
            <a href="#how-it-works" className="hover:text-primary">How it works</a>
            <a href="#credits" className="hover:text-primary">Credits</a>
            <a href="#pricing" className="hover:text-primary">Pricing</a>
            <a href="#support" className="hover:text-primary">Support</a>
          </nav>
          <div className="flex items-center gap-2">
            <a href={SIGN_IN_URL} className="hidden px-3 py-2 text-sm font-semibold text-primary hover:text-primary-hover sm:inline">
              Sign in
            </a>
            <a href={SIGN_UP_URL} className={`${btnPrimary} py-2!`}>Get started</a>
          </div>
        </div>
      </header>

      <main id="top">
        {/* Hero */}
        <section className="bg-linear-to-b from-primary-10 to-white">
          <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:py-28">
            <div>
              <span className="inline-block rounded-full bg-primary-20 px-3 py-1 text-xs font-semibold text-primary">
                Service agreements, simplified
              </span>
              <h1 className="mt-5 text-4xl font-bold leading-tight tracking-tight text-neutral-100 sm:text-5xl">
                Create, negotiate, and manage secure service agreements.
              </h1>
              <p className="mt-5 max-w-xl text-lg leading-8 text-muted">
                Stop wrestling with PDFs. STG helps clients and service providers draft, approve and track
                agreements in minutes, in one shared place.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href={SIGN_UP_URL} className={btnPrimary}>Create your account</a>
                <a href="#how-it-works" className={btnGhost}>See how it works</a>
              </div>
              <p className="mt-4 text-sm text-muted">Start with trial credits. No setup required.</p>
            </div>

            {/* Product mock, mirrors the app's agreement list */}
            <div className="rounded-2xl border border-outline bg-white p-5 shadow-xl shadow-primary/10" aria-hidden>
              <div className="flex items-center justify-between">
                <p className="text-sm font-bold text-neutral-100">Service Agreements</p>
                <span className="rounded-lg bg-primary px-3 py-1.5 text-xs font-semibold text-white">New Agreement</span>
              </div>
              <div className="mt-4 divide-y divide-outline rounded-xl border border-outline">
                {mockRows.map(([t, s, c]) => (
                  <div key={t} className="flex items-center justify-between px-4 py-3.5">
                    <div>
                      <p className="text-sm font-semibold text-ink">{t}</p>
                      <p className="text-xs text-muted">Timeline: 14 days · Bank Transfer</p>
                    </div>
                    <span className={`rounded-full px-2.5 py-1 text-xs font-semibold ${c}`}>{s}</span>
                  </div>
                ))}
              </div>
              <div className="mt-4 grid grid-cols-2 gap-3">
                <div className="rounded-xl bg-primary-10 p-4">
                  <p className="text-xs text-muted">Credit Balance</p>
                  <p className="mt-1 text-2xl font-bold text-primary">30</p>
                </div>
                <div className="rounded-xl bg-primary-10 p-4">
                  <p className="text-xs text-muted">Agreements running</p>
                  <p className="mt-1 text-2xl font-bold text-primary">3</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What STG is */}
        <section id="about" className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <SectionHead
            eyebrow="What is STG"
            title="One place for agreements between clients and providers"
            body="STG is an online platform where two parties record the terms of a service engagement, approve it together, and keep a clear history if anything changes."
          />
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {[
              ["Clear terms", "Scope, compensation, payment method, timeline and protection period are captured in a single agreement."],
              ["Mutual approval", "An agreement only becomes active when both the client and the provider approve it."],
              ["Shared record", "Comments, files, status changes and disputes live with the agreement, visible to both sides."],
            ].map(([t, b]) => (
              <div key={t} className="rounded-xl border border-outline bg-white p-6 shadow-sm">
                <h3 className="text-lg font-bold text-neutral-100">{t}</h3>
                <p className="mt-2 text-sm leading-6 text-muted">{b}</p>
              </div>
            ))}
          </div>
        </section>

        {/* How it works */}
        <section id="how-it-works" className="bg-primary-10">
          <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
            <SectionHead eyebrow="How it works" title="From draft to done in four steps" />
            <ol className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {steps.map((s, i) => (
                <li key={s.title} className="rounded-xl bg-white p-6 shadow-sm">
                  <span className="flex size-9 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                    {i + 1}
                  </span>
                  <h3 className="mt-4 text-base font-bold text-neutral-100">{s.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted">{s.body}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* What users receive */}
        <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <SectionHead eyebrow="What you receive" title="Everything you need to run an agreement" />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {receives.map((r) => (
              <div key={r.title} className="rounded-xl border border-outline bg-white p-6 transition duration-150 hover:-translate-y-0.5 hover:shadow-lg">
                <h3 className="text-base font-bold text-neutral-100">{r.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted">{r.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Credits */}
        <section id="credits" className="bg-primary-10">
          <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
            <SectionHead
              eyebrow="Credits"
              title="Trial Credits and Owned Credits"
              body="Credits are what activate a service agreement. Your balance shows both types."
            />
            <div className="mt-12 grid gap-5 md:grid-cols-2">
              <div className="rounded-xl bg-white p-7 shadow-sm">
                <span className="rounded-full bg-primary-20 px-3 py-1 text-xs font-semibold text-primary">Trial Credits</span>
                <h3 className="mt-4 text-xl font-bold text-neutral-100">Included to get you started</h3>
                <ul className="mt-4 space-y-2.5 text-sm text-ink">
                  <li className="flex gap-2"><Check />Included every month with the free Novice plan.</li>
                  <li className="flex gap-2"><Check />Reset to 5 every month. Unused Trial Credits do not carry over.</li>
                  <li className="flex gap-2"><Check />Perfect for trying STG before you upgrade.</li>
                </ul>
              </div>
              <div className="rounded-xl bg-white p-7 shadow-sm">
                <span className="rounded-full bg-success-surface px-3 py-1 text-xs font-semibold text-success">Owned Credits</span>
                <h3 className="mt-4 text-xl font-bold text-neutral-100">Credits you have purchased</h3>
                <ul className="mt-4 space-y-2.5 text-sm text-ink">
                  <li className="flex gap-2"><Check />Included monthly with Intermediate, Pro and Expert.</li>
                  <li className="flex gap-2"><Check />Never reset. Your balance carries over and does not expire.</li>
                  <li className="flex gap-2"><Check />Non-refundable once deducted.</li>
                </ul>
              </div>
            </div>
            <div className="mx-auto mt-8 max-w-3xl rounded-xl border border-primary-30 bg-white p-6">
              <h3 className="text-base font-bold text-neutral-100">How credits are used</h3>
              <ul className="mt-3 space-y-2 text-sm text-muted">
                <li className="flex gap-2"><Check />Credits are required to activate a service agreement.</li>
                <li className="flex gap-2"><Check />Credits are deducted only after both parties approve. Draft agreements use no credits.</li>
                <li className="flex gap-2"><Check />If an agreement is canceled before approval, credits are refunded.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section id="pricing" className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <SectionHead
            eyebrow="Membership"
            title="Plans that scale with your work"
            body="Start free and upgrade when you need more monthly credits. Prices are in USD, billed monthly."
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {plans.filter((p) => p.name !== "Enterprise").map((p) => (
              <PlanCard key={p.name} plan={p} />
            ))}
          </div>
          {plans.filter((p) => p.name === "Enterprise").map((p) => (
            <EnterpriseBar key={p.name} plan={p} />
          ))}
        </section>

        {/* Disclaimer */}
        <section className="mx-auto max-w-4xl px-4 pb-20 sm:px-6">
          <div className="rounded-xl border border-outline bg-surface p-7">
            <h2 className="text-lg font-bold text-neutral-100">Important notice</h2>
            <p className="mt-3 text-sm leading-7 text-ink">
              STG is a software platform. STG does not provide, perform, supervise or guarantee the underlying
              services agreed between users, and is not a party to those agreements. Clients and service providers
              are solely responsible for the services they offer, accept and deliver, and for payments made between
              them. Credits and memberships pay for use of the STG software only.
            </p>
          </div>
        </section>

        {/* Support */}
        <section id="support" className="bg-neutral-100">
          <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-8 px-4 py-16 sm:px-6 md:flex-row md:items-center">
            <div>
              <h2 className="text-3xl font-bold text-white">Need help?</h2>
              <p className="mt-3 max-w-lg text-base leading-7 text-[#d4d7da]">
                Our support team can help with your account, credits, memberships and agreements.
              </p>
            </div>
            <div className="text-sm text-white">
              <p className="font-semibold">Customer support</p>
              <a href={`mailto:${SUPPORT_EMAIL}`} className="mt-1 block text-lg font-semibold text-primary-40 hover:text-white">
                {SUPPORT_EMAIL}
              </a>
              <p className="mt-1 text-[#d4d7da]">{SUPPORT_HOURS}</p>
              <a href={`mailto:${SUPPORT_EMAIL}`} className={`${btnPrimary} mt-5`}>Contact support</a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-outline bg-white">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-4 py-8 text-sm text-muted sm:flex-row sm:px-6">
          <Image src="/brand/stg-logo.png" alt="STG Global" width={872} height={249} className="h-7 w-auto" />
          <div className="flex flex-col items-center gap-2 sm:items-end">
            <nav className="flex gap-5" aria-label="Legal">
              <Link href="/terms" className="hover:text-primary">Terms of Service</Link>
              <Link href="/privacy" className="hover:text-primary">Privacy Policy</Link>
            </nav>
            <p>© 2026 STG Global LLC. STG is a software platform and not a party to user agreements.</p>
          </div>
        </div>
      </footer>
    </>
  );
}
