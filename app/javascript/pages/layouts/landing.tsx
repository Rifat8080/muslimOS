import { Head } from '@inertiajs/react'
import cs from './landing.module.css'

const stats = [
  { value: '28k+', label: 'active teams' },
  { value: '4.9/5', label: 'average rating' },
  { value: '99.9%', label: 'uptime SLA' },
]

const features = [
  {
    title: 'Smart workflow automation',
    description: 'Reduce repetitive tasks with AI-powered routines, approvals, and cross-team actions.',
  },
  {
    title: 'Unified project visibility',
    description: 'Track goals, dependencies, and delivery with one secure command center for leadership.',
  },
  {
    title: 'Faster reporting cycles',
    description: 'Turn raw data into clear stakeholder updates through live dashboards and alerts.',
  },
]

const customerLogos = ['Northstar', 'Aster', 'Juniper', 'Peak Labs', 'Fjord', 'Prism']

export default function LandingLayout() {
  return (
    <>
      <Head title="MuslimOS | Modern growth platform" />

      <div className={cs.page}>
        <header className={cs.topbar}>
          <div className={cs.brandWrap}>
            <div className={cs.brandMark}>M</div>
            <span className={cs.brandText}>MuslimOS</span>
          </div>

          <nav className={cs.nav} aria-label="Main navigation">
            <a href="#features">Features</a>
            <a href="#solutions">Solutions</a>
            <a href="#pricing">Pricing</a>
            <a href="#resources">Resources</a>
          </nav>

          <div className={cs.headerActions}>
            <button type="button" className={cs.linkButton}>Log in</button>
            <button type="button" className={cs.primaryButton}>Book demo</button>
          </div>
        </header>

        <main>
          <section className={cs.hero}>
            <div className={cs.heroCopy}>
              <span className={cs.eyebrow}>Built for ambitious teams</span>
              <h1>Turn operation chaos into measurable momentum.</h1>
              <p>
                MuslimOS helps modern teams align strategy, automate execution, and deliver better outcomes
                with less friction.
              </p>

              <div className={cs.heroActions}>
                <button type="button" className={cs.primaryButton}>Start free trial</button>
                <button type="button" className={cs.secondaryButton}>View pricing</button>
              </div>

              <div className={cs.socialProof}>
                {stats.map((item) => (
                  <div key={item.label} className={cs.statItem}>
                    <strong>{item.value}</strong>
                    <span>{item.label}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className={cs.heroVisual} aria-label="Dashboard preview">
              <div className={cs.dashboardCard}>
                <div className={cs.cardHeader}>
                  <span className={cs.dot} />
                  <span className={cs.dot} />
                  <span className={cs.dot} />
                </div>

                <div className={cs.previewGrid}>
                  <div className={cs.metricCardLarge}>
                    <span className={cs.metricLabel}>Revenue</span>
                    <strong>$148.2k</strong>
                    <small>+18.4% this quarter</small>
                  </div>

                  <div className={cs.metricCard}>
                    <span className={cs.metricLabel}>Conversion</span>
                    <strong>7.8%</strong>
                  </div>

                  <div className={cs.metricCard}>
                    <span className={cs.metricLabel}>Cycle time</span>
                    <strong>4.3d</strong>
                  </div>

                  <div className={cs.chartCard}>
                    <div className={cs.chartBars}>
                      <span style={{ height: '42%' }} />
                      <span style={{ height: '60%' }} />
                      <span style={{ height: '78%' }} />
                      <span style={{ height: '52%' }} />
                      <span style={{ height: '90%' }} />
                      <span style={{ height: '72%' }} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className={cs.logoStrip} aria-label="Customer partners">
            {customerLogos.map((logo) => (
              <span key={logo}>{logo}</span>
            ))}
          </section>

          <section className={cs.featuresSection} id="features">
            <div className={cs.sectionHeading}>
              <span className={cs.eyebrow}>Why teams choose us</span>
              <h2>Built to scale the work behind growth.</h2>
            </div>

            <div className={cs.featureGrid}>
              {features.map((feature) => (
                <article key={feature.title} className={cs.featureCard}>
                  <div className={cs.featureIcon}>✦</div>
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </article>
              ))}
            </div>
          </section>

          <section className={cs.showcase} id="solutions">
            <div className={cs.showcaseCopy}>
              <span className={cs.eyebrow}>Operations clarity</span>
              <h2>Give every team a simple path from strategy to execution.</h2>
              <ul>
                <li>Real-time portfolio views for leaders and managers</li>
                <li>Automated playbooks for approvals, reviews, and risk flags</li>
                <li>Clear KPI tracking that keeps teams aligned around impact</li>
              </ul>
            </div>

            <div className={cs.showcaseCard}>
              <div className={cs.listHeader}>
                <span>Quarterly plan</span>
                <span className={cs.listTag}>On track</span>
              </div>

              <div className={cs.progressRow}>
                <div>
                  <label>Revenue target</label>
                  <strong>82%</strong>
                </div>
                <div className={cs.progressBar}><span style={{ width: '82%' }} /></div>
              </div>

              <div className={cs.progressRow}>
                <div>
                  <label>Product launches</label>
                  <strong>5/6</strong>
                </div>
                <div className={cs.progressBar}><span style={{ width: '83%' }} /></div>
              </div>

              <div className={cs.progressRow}>
                <div>
                  <label>Customer retention</label>
                  <strong>94%</strong>
                </div>
                <div className={cs.progressBar}><span style={{ width: '94%' }} /></div>
              </div>
            </div>
          </section>

          <section className={cs.cta} id="pricing">
            <div>
              <span className={cs.eyebrow}>Ready to move faster?</span>
              <h2>Set up your system in under a week.</h2>
            </div>
            <button type="button" className={cs.primaryButton}>Talk to sales</button>
          </section>
        </main>

        <footer className={cs.footer} id="resources">
          <div className={cs.brandWrap}>
            <div className={cs.brandMark}>M</div>
            <span className={cs.brandText}>MuslimOS</span>
          </div>
          <p>© 2026 MuslimOS. Built for clarity, speed, and sustainable growth.</p>
        </footer>
      </div>
    </>
  )
}
