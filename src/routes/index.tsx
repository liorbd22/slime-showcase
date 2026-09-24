import { createFileRoute } from "@tanstack/react-router";
import { cloudinary, heroImage, slimes } from "@/lib/slimes";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "שקד סליים | סליים בעבודת יד" },
      {
        name: "description",
        content:
          "הסליימים של שקד — סליים בעבודת יד בצבעים וניחוחות. גלריית הסליימים של shaked-slime.store",
      },
      { property: "og:title", content: "שקד סליים | סליים בעבודת יד" },
      {
        property: "og:description",
        content: "הסליימים של שקד — גלריית סליים בעבודת יד. בקרוב למכירה!",
      },
      { property: "og:type", content: "website" },
      {
        property: "og:image",
        content: cloudinary("v1790279511/shaked/main_iumwtg.png", 1200),
      },
      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "twitter:image",
        content: cloudinary("v1790279511/shaked/main_iumwtg.png", 1200),
      },
    ],
  }),
  component: Index,
});

function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <a href="#top" className="flex items-center gap-3">
          <span className="squish flex h-11 w-11 items-center justify-center rounded-full bg-goo-gradient font-display text-xl font-extrabold text-primary-foreground shadow-goo">
            ש
          </span>
          <span className="font-display text-2xl font-extrabold tracking-tight text-foreground">
            שקד סליים
          </span>
        </a>
        <nav className="flex items-center gap-1 text-sm font-medium sm:gap-2 sm:text-base">
          <a
            href="#slimes"
            className="rounded-full px-4 py-2 text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
          >
            הסליימים
          </a>
          <a
            href="#about"
            className="rounded-full px-4 py-2 text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
          >
            קצת עליי
          </a>
        </nav>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="absolute inset-0 bg-candy-dots" aria-hidden="true" />
      <div
        aria-hidden="true"
        className="animate-float absolute -start-24 top-10 h-56 w-56 rounded-full bg-candy/40 blur-2xl"
      />
      <div
        aria-hidden="true"
        className="animate-float-slow absolute -end-16 bottom-0 h-72 w-72 rounded-full bg-mint/40 blur-3xl"
      />
      <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 sm:py-24 md:grid-cols-2">
        <div className="text-center md:text-start">
          <span className="inline-flex animate-wiggle items-center gap-2 rounded-full bg-accent px-4 py-1.5 text-sm font-bold text-accent-foreground">
            🍬 סליים בעבודת יד
          </span>
          <h1 className="mt-5 font-display text-5xl font-extrabold leading-[1.15] tracking-tight sm:text-6xl">
            ה<span className="text-gradient-candy">סליים</span> הכי
            <br />
            מתוק בארץ
          </h1>
          <p className="mx-auto mt-5 max-w-md text-lg leading-relaxed text-muted-foreground md:mx-0">
            שלום! אני שקד, ואני מכינה סליים בצבעים, מרקמים ונצנוצים —
            כל צנצנת נעשית ביד, באהבה ובהמון גליטר.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3 md:justify-start">
            <a
              href="#slimes"
              className="squish inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 font-display text-lg font-bold text-primary-foreground shadow-goo hover:bg-primary/90"
            >
              לצפייה בסליימים 👇
            </a>
            <a
              href="#about"
              className="squish inline-flex items-center rounded-full border-2 border-primary/30 bg-card px-7 py-3.5 font-display text-lg font-bold text-foreground hover:border-primary/60"
            >
              מי עומד מאחורי זה?
            </a>
          </div>
        </div>
        <div className="relative">
          <div
            aria-hidden="true"
            className="animate-float-slow absolute inset-6 rounded-[3rem] bg-gradient-to-tr from-candy/50 via-primary/40 to-mint/50 blur-xl"
          />
          <img
            src={heroImage}
            alt="סליים בעבודת יד של שקד"
            width={1200}
            height={1200}
            className="squish relative w-full rounded-[3rem] border-4 border-card object-cover shadow-goo"
          />
        </div>
      </div>
      {/* drip divider */}
      <svg
        aria-hidden="true"
        viewBox="0 0 1440 70"
        preserveAspectRatio="none"
        className="block h-12 w-full fill-background sm:h-16"
      >
        <path d="M0,0 L1440,0 L1440,20 C1380,60 1330,60 1280,25 C1230,60 1180,60 1130,25 C1080,60 1030,60 980,25 C930,60 880,60 830,25 C780,60 730,60 680,25 C630,60 580,60 530,25 C480,60 430,60 380,25 C330,60 280,60 230,25 C180,60 130,60 80,25 C50,45 20,45 0,25 Z" />
      </svg>
    </section>
  );
}

function SlimeCard({
  name,
  description,
  tag,
  image,
  width,
  height,
}: (typeof slimes)[number]) {
  return (
    <article className="squish group flex flex-col overflow-hidden rounded-4xl border border-border bg-card shadow-card">
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={`סליים ${name}`}
          width={width}
          height={height}
          loading="lazy"
          className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <span className="absolute end-3 top-3 rounded-full bg-primary px-3 py-1 font-display text-xs font-bold text-primary-foreground shadow-goo">
          {tag}
        </span>
      </div>
      <div className="flex flex-1 flex-col gap-1.5 p-5">
        <h3 className="font-display text-xl font-extrabold text-foreground">{name}</h3>
        <p className="text-sm leading-relaxed text-muted-foreground">{description}</p>
      </div>
    </article>
  );
}

function Slimes() {
  return (
    <section id="slimes" className="scroll-mt-20 py-14 sm:py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="text-center">
          <h2 className="font-display text-4xl font-extrabold tracking-tight sm:text-5xl">
            ה<span className="text-gradient-candy">מדף</span> של שקד
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-lg text-muted-foreground">
            כל סליים מוכן בצנצנת אטומה ויפהפייה. מעבירים את העכבר כדי לראות אותם זוחלים ✨
          </p>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {slimes.map((slime) => (
            <SlimeCard key={slime.name} {...slime} />
          ))}
        </div>
        <p className="mt-10 text-center font-display text-lg font-bold text-berry">
          וזה רק ההתחלה — סליימים חדשים עולים למדף כל שבוע! 🎉
        </p>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="scroll-mt-20 pb-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="relative overflow-hidden rounded-4xl border border-border bg-card p-8 shadow-card sm:p-12">
          <div
            aria-hidden="true"
            className="animate-float absolute -end-10 -top-10 h-40 w-40 rounded-full bg-sunshine/50 blur-2xl"
          />
          <div
            aria-hidden="true"
            className="animate-float-slow absolute -bottom-12 -start-8 h-44 w-44 rounded-full bg-mint/50 blur-2xl"
          />
          <div className="relative flex flex-col items-center gap-6 text-center">
            <span className="flex h-20 w-20 items-center justify-center rounded-full bg-goo-gradient font-display text-4xl font-extrabold text-primary-foreground shadow-goo">
              ש
            </span>
            <h2 className="font-display text-3xl font-extrabold tracking-tight sm:text-4xl">
              קצת עליי
            </h2>
            <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground">
              התחלתי להכין סליים מתי שהייתי קטנה ומאז לא הפסקתי. אני אוהבת לנסות
              צבעים חדשים, מרקמים מפתיעים וריחות מתוקים — ולחלוק את התוצאות
              עם כל מי שמת לסחוט קצת כיף. כל סליים נבדק, מרופד ונארז בזהירות
              לפני שהוא יוצא לדרך.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border/60 bg-card/60">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-2 px-4 py-10 text-center">
        <p className="font-display text-2xl font-extrabold">שקד סליים</p>
        <p className="text-sm text-muted-foreground">
          🍭 הזמנות ייפתחו בקרוב — בינתיים אפשר להתפנק עם הגלריה
        </p>
        <p dir="ltr" className="mt-1 font-display text-sm font-bold text-berry">
          shaked-slime.store
        </p>
      </div>
    </footer>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <Slimes />
        <About />
      </main>
      <Footer />
    </div>
  );
}
