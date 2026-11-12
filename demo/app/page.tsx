import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

// Fictional business. Every color on this page comes from shadcn CSS variables
// (chart-1..5 hold the raw palette colors), so each Wada theme recolors everything.

function Logo() {
  return (
    <span className="flex items-center gap-2.5">
      <span className="relative block size-8 overflow-hidden rounded-full bg-primary">
        <span className="absolute inset-x-1.5 bottom-1.5 top-3 rounded-t-full bg-[var(--chart-1)]" />
      </span>
      <span className="font-heading text-xl font-semibold tracking-tight">Lantern Moth</span>
    </span>
  )
}

function HeroArt() {
  return (
    <div aria-hidden className="relative aspect-[4/5] w-full max-w-[460px]">
      {/* backdrop */}
      <div
        className="absolute inset-0 rounded-[2.5rem]"
        style={{ background: "linear-gradient(160deg, var(--chart-2), var(--chart-3))" }}
      />
      {/* sun */}
      <div className="absolute right-10 top-10 size-28 rounded-full bg-[var(--chart-1)]" />
      {/* hills */}
      <div className="absolute inset-x-0 bottom-0 h-2/5 overflow-hidden rounded-b-[2.5rem]">
        <div className="absolute -left-16 bottom-[-40%] h-full w-[90%] rounded-full bg-primary" />
        <div className="absolute -right-20 bottom-[-55%] h-full w-[95%] rounded-full bg-[var(--chart-4)] opacity-90" />
      </div>
      {/* cup */}
      <div className="absolute bottom-[18%] left-1/2 w-44 -translate-x-1/2">
        <div className="mx-auto mb-2 flex justify-center gap-3">
          {[0, 1, 2].map((i) => (
            <span key={i} className="block h-10 w-2 rounded-full bg-card/80" style={{ transform: `rotate(${(i - 1) * 8}deg)` }} />
          ))}
        </div>
        <div className="relative h-28 rounded-b-[3rem] rounded-t-md bg-card shadow-xl ring-1 ring-foreground/10">
          <div className="absolute -right-8 top-4 size-12 rounded-full border-[10px] border-card" />
          <div className="absolute inset-x-6 top-6 h-3 rounded-full bg-[var(--chart-1)]" />
        </div>
        <div className="mx-auto mt-1.5 h-3 w-56 -translate-x-6 rounded-full bg-card/90" />
      </div>
      {/* tag */}
      <div className="absolute -left-6 top-1/3 rounded-2xl bg-card px-4 py-3 text-card-foreground shadow-lg ring-1 ring-foreground/10">
        <div className="text-xs text-muted-foreground">This week</div>
        <div className="font-heading text-lg font-semibold">Highland natural</div>
      </div>
    </div>
  )
}

const features = [
  {
    title: "Roasted on Tuesdays",
    body: "Small batches on a 15-kilo drum, rested three days, then on the shelf by Friday morning.",
    shape: "rounded-full",
    color: "var(--chart-1)",
  },
  {
    title: "Walk-up window",
    body: "Pour-over, espresso, and a short pastry menu from 6:30 until the beans run out.",
    shape: "rounded-md rotate-45",
    color: "var(--chart-2)",
  },
  {
    title: "Brew classes",
    body: "Saturday mornings at the back counter. Six seats, one kettle each, free refills.",
    shape: "rounded-t-full",
    color: "var(--chart-3)",
  },
]

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      {/* Nav */}
      <header className="sticky top-0 z-20 border-b border-border bg-background/90 backdrop-blur">
        <nav className="mx-auto flex h-[72px] max-w-6xl items-center justify-between px-6">
          <Logo />
          <ul className="hidden items-center gap-8 text-sm text-muted-foreground md:flex">
            <li><a className="hover:text-foreground" href="#menu">Menu</a></li>
            <li><a className="hover:text-foreground" href="#club">Bean Club</a></li>
            <li><a className="hover:text-foreground" href="#visit">Visit</a></li>
          </ul>
          <Button size="lg" className="px-4">Order ahead</Button>
        </nav>
      </header>

      {/* Hero */}
      <section className="mx-auto grid min-h-[calc(900px-72px)] w-full max-w-6xl items-center gap-12 px-6 py-16 md:grid-cols-[1.1fr_1fr]">
        <div>
          <Badge variant="secondary" className="mb-6 h-7 px-3 text-xs">Open daily · 6:30 to 3</Badge>
          <h1 className="font-heading text-6xl font-semibold leading-[1.02] tracking-tight">
            Slow coffee for a fast little street.
          </h1>
          <p className="mt-6 max-w-lg text-lg leading-relaxed text-muted-foreground">
            A neighborhood roaster and walk-up window. We roast every Tuesday, pour until three,
            and keep the good chair by the window free for you.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Button size="lg" className="h-12 px-6 text-base">See this week&apos;s beans</Button>
            <Button size="lg" variant="outline" className="h-12 px-6 text-base">Plan a visit</Button>
          </div>
          <div className="mt-10 flex items-center gap-6 text-sm text-muted-foreground">
            <span><strong className="text-foreground">4.9</strong> from 1,200 regulars</span>
            <Separator orientation="vertical" className="h-4" />
            <span>Roasted within 7 days</span>
          </div>
        </div>
        <div className="flex justify-center md:justify-end">
          <HeroArt />
        </div>
      </section>

      {/* Features */}
      <section id="menu" className="border-y border-border bg-muted">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <h2 className="font-heading text-4xl font-semibold tracking-tight">Small shop, careful work</h2>
          <p className="mt-3 max-w-xl text-muted-foreground">Three things we do every week, without shortcuts.</p>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {features.map((f) => (
              <Card key={f.title} className="gap-5 py-7">
                <CardHeader className="px-7">
                  <div className="mb-4 flex size-14 items-center justify-center rounded-2xl bg-accent">
                    <span className={`block size-6 ${f.shape}`} style={{ background: f.color }} />
                  </div>
                  <CardTitle className="font-heading text-xl">{f.title}</CardTitle>
                </CardHeader>
                <CardContent className="px-7 text-[15px] leading-relaxed text-muted-foreground">{f.body}</CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial + Pricing */}
      <section id="club" className="mx-auto grid w-full max-w-6xl items-center gap-16 px-6 py-24 md:grid-cols-[1.2fr_1fr]">
        <figure>
          <div className="mb-6 flex gap-1.5">
            {[0, 1, 2, 3, 4].map((i) => (
              <span key={i} className="block size-3 rotate-45 rounded-[2px] bg-primary" />
            ))}
          </div>
          <blockquote className="font-heading text-3xl leading-snug tracking-tight">
            &ldquo;I moved two streets away and still walk here every morning. The Tuesday roast is the
            best part of my week, and they remember my order.&rdquo;
          </blockquote>
          <figcaption className="mt-6 flex items-center gap-3">
            <span
              className="block size-11 rounded-full"
              style={{ background: "linear-gradient(135deg, var(--chart-1), var(--chart-2))" }}
            />
            <span>
              <span className="block font-medium">Dana R.</span>
              <span className="block text-sm text-muted-foreground">Regular since the first week</span>
            </span>
          </figcaption>
        </figure>

        <Card className="gap-6 py-8 shadow-lg">
          <CardHeader className="px-8">
            <Badge className="mb-3 w-fit">Most popular</Badge>
            <CardTitle className="font-heading text-2xl">Bean Club</CardTitle>
            <CardDescription className="text-muted-foreground">Fresh roast, picked up or delivered.</CardDescription>
          </CardHeader>
          <CardContent className="px-8">
            <div className="flex items-baseline gap-1">
              <span className="font-heading text-5xl font-semibold">$18</span>
              <span className="text-muted-foreground">/ month</span>
            </div>
            <ul className="mt-6 space-y-3 text-[15px]">
              {["One 12 oz bag every two weeks", "10% off at the window", "First pick of limited lots", "Skip or pause any time"].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <span className="block size-2 rounded-full bg-primary" />
                  {item}
                </li>
              ))}
            </ul>
          </CardContent>
          <CardFooter className="border-t-0 bg-transparent px-8 pb-0">
            <Button size="lg" className="h-11 w-full text-base">Join the club</Button>
          </CardFooter>
        </Card>
      </section>

      {/* Footer */}
      <footer id="visit" className="mt-auto border-t border-border bg-secondary text-secondary-foreground">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 md:grid-cols-3">
          <div>
            <Logo />
            <p className="mt-4 max-w-xs text-sm">A fictional coffee shop, built to demo Sanzo Wada color themes.</p>
          </div>
          <div className="text-sm">
            <div className="mb-2 font-semibold">Visit</div>
            <p>14 Example Lane</p>
            <p>Open daily, 6:30 to 3</p>
          </div>
          <div className="text-sm">
            <div className="mb-2 font-semibold">Say hello</div>
            <p>hello@example.com</p>
            <p>(555) 010-0199</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
