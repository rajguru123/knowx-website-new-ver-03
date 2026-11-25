/* Decorative hero composition: product dashboard + agent workflow + API call + app screen.
   Pure CSS/SVG, no images, no client JS. Hidden from assistive tech (the hero copy carries the meaning). */

const BARS = [38, 52, 44, 66, 58, 78, 90];
const FLOW = [
  { k: 'User', c: 'u' },
  { k: 'Retrieve', c: 'r' },
  { k: 'LLM', c: 'l' },
  { k: 'Tools', c: 't' },
  { k: 'Reply', c: 'a' },
];

export default function HeroVisual() {
  return (
    <div className="hv" aria-hidden="true">
      {/* 1. Product dashboard */}
      <div className="hv-card hv-dash">
        <div className="hv-bar">
          <i /><i /><i />
          <span className="hv-url">support-copilot.app / analytics</span>
        </div>
        <div className="hv-dash-body">
          <div className="hv-dash-top">
            <b>AI Support Copilot</b>
            <span className="hv-live">Live</span>
          </div>
          <div className="hv-stats">
            <div><small>Queries</small><b>12.4k</b></div>
            <div><small>Answer accuracy</small><b>94%</b></div>
            <div><small>Avg. latency</small><b>1.2s</b></div>
          </div>
          <svg className="hv-chart" viewBox="0 0 320 84" preserveAspectRatio="none">
            {BARS.map((h, i) => (
              <rect key={i} x={8 + i * 44} y={84 - h * 0.85} width="28" height={h * 0.85} rx="5" fill={i === BARS.length - 1 ? 'url(#hvg)' : 'rgba(77,163,255,0.28)'} />
            ))}
            <polyline points="22,58 66,48 110,52 154,34 198,40 242,22 286,10" fill="none" stroke="#22d3ee" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <defs>
              <linearGradient id="hvg" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0" stopColor="#4da3ff" />
                <stop offset="1" stopColor="#8b7cff" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>

      {/* 2. API call */}
      <div className="hv-card hv-code">
        <div className="hv-code-head"><span className="hv-m">POST</span> /api/agent <em>Deployed</em></div>
        <pre>
          <span className="c-p">{'{'}</span> <span className="c-k">&quot;query&quot;</span>: <span className="c-s">&quot;Refund status?&quot;</span>,{'\n'}
          {'  '}<span className="c-k">&quot;tools&quot;</span>: [<span className="c-s">&quot;rag&quot;</span>, <span className="c-s">&quot;orders&quot;</span>] <span className="c-p">{'}'}</span>{'\n'}
          <span className="c-ok">200 OK</span> <span className="c-d">· 842 ms</span>{'\n'}
          <span className="c-p">{'{'}</span> <span className="c-k">&quot;answer&quot;</span>: <span className="c-s">&quot;Refund issued&quot;</span>, <span className="c-k">&quot;sources&quot;</span>: <span className="c-n">3</span> <span className="c-p">{'}'}</span>
        </pre>
      </div>

      {/* 3. Agent workflow */}
      <div className="hv-card hv-flow">
        <div className="hv-flow-title">Agent workflow <span>RAG + tool calling</span></div>
        <div className="hv-nodes">
          {FLOW.map((n, i) => (
            <div key={n.k} className={`hv-node hv-${n.c}`}>
              <span className="hv-dot">{i + 1}</span>
              <small>{n.k}</small>
            </div>
          ))}
          <span className="hv-line" />
        </div>
      </div>

      {/* 4. App interface */}
      <div className="hv-phone">
        <div className="hv-notch" />
        <div className="hv-phone-head"><span className="hv-av">K</span> Copilot</div>
        <div className="hv-msgs">
          <p className="hv-me">Where is my refund?</p>
          <p className="hv-ai">Your refund of ₹1,499 was issued today. Arrives in 2 days.</p>
          <p className="hv-chip">Order #4821 · Verified</p>
        </div>
        <div className="hv-input">Ask anything…</div>
      </div>

      <span className="hv-tag">Ships to production</span>
    </div>
  );
}
