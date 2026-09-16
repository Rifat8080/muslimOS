import { Head } from '@inertiajs/react'
import cs from './dashboard.module.css'

const navItems = ['Overview', 'Projects', 'Analytics', 'Team', 'Reports', 'Settings']

const overviewCards = [
  { label: 'Monthly revenue', value: '$84.2K', delta: '+12.4%' },
  { label: 'Active users', value: '24.8K', delta: '+8.1%' },
  { label: 'Conversion rate', value: '6.9%', delta: '+1.3%' },
  { label: 'Retention', value: '94.7%', delta: '+3.2%' },
]

const tasks = [
  'Finalize onboarding flow',
  'Review campaign creative',
  'Approve product launch checklist',
  'Sync Q4 sales brief',
]

const tableRows = [
  { name: 'Northstar', owner: 'Aisha', status: 'In review', value: '$18.4K' },
  { name: 'Prime Labs', owner: 'Noah', status: 'On track', value: '$42.1K' },
  { name: 'Harbor Studio', owner: 'Mila', status: 'Delayed', value: '$26.8K' },
  { name: 'Aster Co', owner: 'Leo', status: 'Complete', value: '$33.6K' },
]

export default function DashboardLayout() {
  return (
    <>
      <Head title="MuslimOS | Executive dashboard" />

      <div className={cs.pageShell}>
        <aside className={cs.sidebar}>
          <div className={cs.brandRow}>
            <div className={cs.brandMark}>M</div>
            <div>
              <span className={cs.brandName}>MuslimOS</span>
              <small>Executive Suite</small>
            </div>
          </div>

          <nav className={cs.nav} aria-label="Sidebar navigation">
            {navItems.map((item, index) => (
              <button
                key={item}
                type="button"
                className={index === 0 ? cs.navItemActive : cs.navItem}
              >
                {item}
              </button>
            ))}
          </nav>

          <div className={cs.sideCard}>
            <span>Team health</span>
            <strong>88%</strong>
            <small>+6.2% from last month</small>
          </div>
        </aside>

        <div className={cs.mainPanel}>
          <header className={cs.topbar}>
            <div className={cs.searchBox}>
              <span className={cs.searchIcon}>⌕</span>
              <input type="text" value="Search metrics, projects, users" readOnly aria-label="Search" />
            </div>

            <div className={cs.topbarActions}>
              <button type="button" className={cs.secondaryButton}>Export</button>
              <button type="button" className={cs.primaryButton}>New report</button>
              <div className={cs.userChip}>
                <span className={cs.avatar}>AR</span>
                <div>
                  <strong>Aisha Rahman</strong>
                  <small>Director</small>
                </div>
              </div>
            </div>
          </header>

          <main className={cs.content}>
            <section className={cs.welcomeRow}>
              <div>
                <span className={cs.eyebrow}>Performance snapshot</span>
                <h1>Welcome back, Aisha.</h1>
              </div>
              <button type="button" className={cs.primaryButton}>View briefing</button>
            </section>

            <section className={cs.metricGrid}>
              {overviewCards.map((card) => (
                <article key={card.label} className={cs.metricCard}>
                  <span>{card.label}</span>
                  <strong>{card.value}</strong>
                  <small>{card.delta}</small>
                </article>
              ))}
            </section>

            <section className={cs.gridLayout}>
              <article className={cs.chartCard}>
                <div className={cs.cardHeader}>
                  <div>
                    <span className={cs.cardLabel}>Growth trend</span>
                    <h2>Pipeline velocity</h2>
                  </div>
                  <button type="button" className={cs.linkButton}>This quarter</button>
                </div>

                <div className={cs.chartBars} aria-label="Growth chart">
                  <span style={{ height: '34%' }} />
                  <span style={{ height: '42%' }} />
                  <span style={{ height: '52%' }} />
                  <span style={{ height: '64%' }} />
                  <span style={{ height: '76%' }} />
                  <span style={{ height: '88%' }} />
                  <span style={{ height: '95%' }} />
                </div>
              </article>

              <article className={cs.taskCard}>
                <div className={cs.cardHeader}>
                  <div>
                    <span className={cs.cardLabel}>Priority tasks</span>
                    <h2>Today</h2>
                  </div>
                </div>

                <ul>
                  {tasks.map((task) => (
                    <li key={task}>
                      <span className={cs.taskCheck} />
                      {task}
                    </li>
                  ))}
                </ul>
              </article>
            </section>

            <section className={cs.tableCard}>
              <div className={cs.cardHeader}>
                <div>
                  <span className={cs.cardLabel}>Live opportunities</span>
                  <h2>Account pipeline</h2>
                </div>
                <button type="button" className={cs.linkButton}>View all</button>
              </div>

              <table>
                <thead>
                  <tr>
                    <th>Account</th>
                    <th>Owner</th>
                    <th>Status</th>
                    <th>Value</th>
                  </tr>
                </thead>
                <tbody>
                  {tableRows.map((row) => (
                    <tr key={row.name}>
                      <td>{row.name}</td>
                      <td>{row.owner}</td>
                      <td>
                        <span className={row.status === 'Delayed' ? cs.statusWarning : cs.statusSuccess}>
                          {row.status}
                        </span>
                      </td>
                      <td>{row.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </section>
          </main>
        </div>
      </div>
    </>
  )
}
