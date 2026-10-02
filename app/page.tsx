import Image from "next/image";
import Link from "next/link";
import JoinForm from "@/components/JoinForm";
import MotionController from "@/components/MotionController";
import Nav from "@/components/Nav";
import Placeholder from "@/components/Placeholder";
import RamenCarousel from "@/components/RamenCarousel";
import { contact, directionsUrl, dishCards, displayAddr, telHref, dishes, franchisePerks, instagramUrl, outlets, perks, reels } from "@/lib/content";

const Chevron = ({ size, width = 2 }: { size: number; width?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round">
    <polyline points="9 6 15 12 9 18" />
  </svg>
);

// The Our Story bowl reuses a carousel photo.
const storyBowl = dishes.find((d) => d.name === "Naruto Veg Ramen")!;

export default function Home() {
  return (
    <>
      <MotionController />
      <Nav />

      <header id="top" className="hero">
        <div className="hero-frame">
          <Placeholder label="Bowl of creamy SATO ramen with cheese, a dumpling and fresh vegetables, chopsticks resting on top, on a red table" src="/images/hero-cheesy-ramen.webp" sizes="100vw" quality={90} priority className="hero-media">
            <div className="hero-jp">佐藤 · ラーメン</div>
          </Placeholder>
          <div className="overlay hero-copy">
            <div className="stack">
              <div data-r="" className="hero-tag">
                <span className="dot" />
                SATO RAMEN BOWL
              </div>
              <h1 data-r="">
                Not everything has a solution. <span>But ramen comes close.</span>
              </h1>
            </div>
          </div>
        </div>
      </header>

      <section id="story" className="story">
        <div className="wrap">
          <div className="split">
            <div className="stack-sm story-copy">
              <div data-r="" className="eyebrow-jp">物語 — Our story</div>
              <h2 data-r="" className="h2">
                More than
                <br />
                just a bowl.
              </h2>
              <p data-r="" className="body">
                SATO wasn&apos;t born in a fancy kitchen. It started with a craving for something comforting, soulful and real. A warm
                bowl that felt like home, and spoke to the Indian soul.
              </p>
              <p data-r="" className="body">
                Japanese tradition meets Indian warmth. Time-honoured broths, bold spices and fresh local ingredients, served like
                you&apos;re eating at someone&apos;s home.
              </p>
            </div>
            <div className="bowl-orbit">
              <div data-r="" className="bowl-ring" />
              <div data-r="" className="bowl-disc">
                <div className="bowl-spin">
                  <div className="bowl-photo-wrap">
                    <Image src={storyBowl.img} alt={storyBowl.alt} fill sizes="(min-width: 760px) 700px, 100vw" />
                  </div>
                </div>
              </div>
              <div data-r="" className="bowl-dot" />
            </div>
          </div>
        </div>
      </section>

      <RamenCarousel />

      <section id="menu" className="menu">
        <div className="wrap">
          <div className="section-head">
            <div className="stack">
              <div data-r="" className="eyebrow-jp">献立 — Menu</div>
              <h2 data-r="" className="h2">
                Every dish
                <br />
                tells a story.
              </h2>
            </div>
            <p data-r="" className="body">
              Some are rich. Some are bold. Some are made for sharing. Some become your favourite before you realise it.
            </p>
          </div>
          <div className="dish-grid">
            {dishCards.map((d) => (
              <a key={d.name} data-r="" href="#menu" className="dish-card">
                <Placeholder label={d.alt} src={d.img} sizes="(min-width: 1024px) 25vw, 50vw" />
                <div className="dish-shade" />
                <div className="dish-meta">
                  <b>{d.name}</b>
                  <span>{d.jp}</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="signature">
        <Placeholder label="Bowl of chilly garlic udon with tofu, corn, spring onion and sesame on a red background" src="/images/signature-chilly-garlic-udon.webp" sizes="100vw" className="signature-media" />
        <div className="overlay signature-copy">
          <div className="stack" style={{ gap: 16 }}>
            <span data-r="" className="eyebrow">NEW SIGNATURE</span>
            <h2 data-r="">Chilly Garlic Udon</h2>
          </div>
          <div data-r="" className="stack signature-side">
            <p>Thick, chewy udon tossed in a fiery chilly garlic glaze with tofu, sweet corn and spring onion.</p>
            <a href="#location" className="pill">
              Order this bowl
            </a>
          </div>
        </div>
      </section>

      <section id="location" className="location">
        <div className="wrap">
          <div className="section-head">
            <div className="stack">
              <div data-r="" className="eyebrow-jp">店舗 — Find your SATO</div>
              <h2 data-r="" className="h2">
                Find the one
                <br />
                nearest to you.
              </h2>
            </div>
            <p data-r="" className="body">
              Five SATOs across Ahmedabad and Gandhinagar. Same bowls, same warmth, every time.
            </p>
          </div>
          <div className="outlet-grid">
            {outlets.map((o) => (
              <div key={o.name} data-r="" className="outlet">
                <Placeholder label={o.alt ?? "storefront"} src={o.img} sizes="(min-width: 1200px) 280px, (min-width: 700px) 33vw, 100vw" />
                <div className="outlet-body">
                  <span className="outlet-name">{o.name}</span>
                  <span className="outlet-addr">
                    {displayAddr(o)}
                    <br />
                    12:00 – 23:00 · All days
                  </span>
                  <div className="outlet-links">
                    <a href={directionsUrl(o)} target="_blank" rel="noreferrer">
                      Directions
                      <Chevron size={12} width={2.4} />
                    </a>
                    <a href={telHref(o.phone)} aria-label={`Call ${o.name} on ${o.phone}`}>
                      {o.phone}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="circle" className="circle">
        <div className="wrap split">
          <div className="stack circle-copy">
            <div data-r="" className="eyebrow-jp">輪 — SATO Red Circle</div>
            <h2 data-r="" className="h2">
              Join the
              <br />
              Red Circle.
            </h2>
            <p data-r="" className="body" style={{ maxWidth: "40ch" }}>
              Red Circle members unlock SATO&apos;s secret menu, and taste every new launch before anyone else. Launching soon.
            </p>
            <JoinForm />
          </div>
          <div className="perks">
            {perks.map((p) => (
              <div key={p.k} data-r="" className="perk">
                <span className="perk-jp">{p.jp}</span>
                <div className="perk-text">
                  <b>{p.k}</b>
                  <span>{p.v}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="loved" className="loved">
        <div className="wrap loved-grid">
          <div className="stack-sm loved-intro">
            <div className="stack-sm">
              <div data-r="" className="eyebrow-jp">人気 — Instagram</div>
              <h2 data-r="" className="h2">
                What people
                <br />
                are loving.
              </h2>
              <p data-r="" className="body">
                The bowls, moments and reels our community can&apos;t stop sharing.
              </p>
            </div>
            <a data-r="" href={instagramUrl} target="_blank" rel="noreferrer" className="ig-link">
              <span>
                <Chevron size={14} />
              </span>
              @sato_ramenbowl
            </a>
          </div>
          {reels.map((r) => (
            <a
              key={r.url}
              data-r=""
              href={r.url}
              target="_blank"
              rel="noreferrer"
              className="reel"
              aria-label={`Watch @${r.creator}'s reel on Instagram (${r.views} views)`}
            >
              <div className="reel-head">
                <span className="reel-views">{r.views} views</span>
                <span className="reel-handle">
                  <span>
                    <Image src="/assets/logo-mark.png" alt="" width={14} height={14} />
                  </span>
                  @{r.creator}
                </span>
              </div>
              <Placeholder label={r.alt} src={r.cover} quality={90} sizes="(min-width: 1024px) 25vw, (min-width: 600px) 50vw, 100vw">
                <div className="play">▶</div>
              </Placeholder>
              <p>{r.caption}</p>
            </a>
          ))}
        </div>
      </section>

      <section id="franchise" className="franchise">
        <div className="wrap split">
          <div className="stack franchise-copy">
            <div data-r="" className="eyebrow-jp">加盟 — Franchise</div>
            <h2 data-r="" className="h2">
              Your city.
              <br />
              Your SATO.
            </h2>
            <p data-r="" className="body">
              SATO is growing. We&apos;re looking for partners who want to build SATO in their city, with everything it takes to run it
              the SATO way.
            </p>
          </div>
          <div className="franchise-list">
            <div data-r="" className="eyebrow">WHAT YOU GET</div>
            {franchisePerks.map((p, i) => (
              <div key={p.k} data-r="" className="fperk">
                <span>0{i + 1}</span>
                <div>
                  <b>{p.k}</b>
                  <span>{p.v}</span>
                </div>
              </div>
            ))}
            <a data-r="" href="#contact" className="pill">
              Bring SATO to your city
            </a>
          </div>
        </div>
      </section>

      <footer id="contact" className="footer">
        <div className="wrap">
          <div className="footer-top">
            <h2 data-r="">
              Come hungry.
              <br />
              <span>Leave with a story.</span>
            </h2>
            <div className="footer-cols">
              <div className="footer-col">
                <b>EXPLORE</b>
                <a href="#story">Story</a>
                <a href="#menu">Menu</a>
                <a href="#location">Location</a>
                <a href="#franchise">Franchise</a>
              </div>
              <div className="footer-col">
                <b>CONTACT</b>
                <a href={`tel:${contact.tel}`}>{contact.phone}</a>
                <a href={`mailto:${contact.email}`}>{contact.email}</a>
                <a href={instagramUrl} target="_blank" rel="noreferrer">
                  Instagram
                </a>
                <a href="#circle">Red Circle</a>
              </div>
            </div>
          </div>
          <div className="footer-base">
            <span>© 2026 SATO Ramen Bowl · Nutricore Foods Pvt. Ltd.</span>
            <Link href="/terms">Terms &amp; Conditions</Link>
            <span>Tradition in taste. Emotion in every bite.</span>
          </div>
        </div>
      </footer>
    </>
  );
}
