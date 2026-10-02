import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { contact } from "@/lib/content";
import { termsSections, termsUpdated } from "@/lib/terms";

export const metadata: Metadata = {
  title: "Terms & Conditions · SATO Ramen Bowl",
  description: "Terms & Conditions for the SATO Ramen Bowl website, operated by Nutricore Foods Private Limited.",
};

export default function TermsPage() {
  const contactNo = termsSections.length + 1;

  return (
    <>
      <header className="legal-bar">
        <Link href="/" className="nav-logo" aria-label="SATO Ramen Bowl home">
          <Image src="/assets/logo-lockup.png" alt="SATO Ramen Bowl" width={98} height={36} priority />
        </Link>
        <Link href="/" className="legal-back">
          ← Back to home
        </Link>
      </header>

      <main className="legal">
        <div className="legal-head">
          <div className="eyebrow-jp">規約 — Legal</div>
          <h1>Terms &amp; Conditions</h1>
          <p className="legal-meta">
            SATO Ramen Bowl · Nutricore Foods Private Limited
            <br />
            Last updated {termsUpdated}
          </p>
        </div>

        <nav className="legal-toc" aria-label="Sections">
          <ol>
            {termsSections.map((s, i) => (
              <li key={s.title}>
                <a href={`#t${i + 1}`}>{s.title}</a>
              </li>
            ))}
            <li>
              <a href={`#t${contactNo}`}>Contact</a>
            </li>
          </ol>
        </nav>

        <div className="legal-body">
          {termsSections.map((s, i) => (
            <section key={s.title} id={`t${i + 1}`}>
              <h2>
                <span>{String(i + 1).padStart(2, "0")}</span>
                {s.title}
              </h2>
              {s.blocks.map((b, j) =>
                typeof b === "string" ? (
                  <p key={j}>{b}</p>
                ) : (
                  <ul key={j}>
                    {b.list.map((li) => (
                      <li key={li}>{li}</li>
                    ))}
                  </ul>
                ),
              )}
            </section>
          ))}
          <section id={`t${contactNo}`}>
            <h2>
              <span>{String(contactNo).padStart(2, "0")}</span>
              Contact
            </h2>
            <p>
              SATO Ramen Bowl
              <br />
              Nutricore Foods Private Limited
              <br />
              Ahmedabad, Gujarat, India
            </p>
            <p>
              Phone: <a href={`tel:${contact.tel}`}>{contact.phone}</a>
              <br />
              Email: <a href={`mailto:${contact.email}`}>{contact.email}</a>
            </p>
          </section>
        </div>
      </main>

      <footer className="legal-foot">
        <span>© 2026 SATO Ramen Bowl · Nutricore Foods Pvt. Ltd.</span>
        <Link href="/">Back to SATO</Link>
      </footer>
    </>
  );
}
