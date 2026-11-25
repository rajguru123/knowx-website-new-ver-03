/* Compact interface mockups for the six product tracks. Same frame and visual language for all six;
   only the content and the accent colour (--ac, set on the card) change. Decorative: hidden from assistive tech.
   Pure SVG, no images. */

import type { ReactElement, ReactNode } from 'react';

function Frame({ url, children }: { url: string; children: ReactNode }) {
  return (
    <svg className="mock" viewBox="0 0 340 96" aria-hidden="true" focusable="false">
      <rect width="340" height="96" className="m-bg" />
      <rect width="340" height="17" className="m-bar" />
      <circle cx="9" cy="8.5" r="2.6" fill="#ff5f57" />
      <circle cx="18" cy="8.5" r="2.6" fill="#febc2e" />
      <circle cx="27" cy="8.5" r="2.6" fill="#28c840" />
      <rect x="40" y="4" width="130" height="9" rx="4.5" className="m-g" />
      <text x="48" y="11" className="m-m">{url}</text>
      {children}
    </svg>
  );
}

/* 01 HomeCare AI: photo-based issue report + technician matching */
function HomeCare() {
  return (
    <Frame url="homecare.ai / new-request">
      <rect x="12" y="25" width="104" height="60" rx="7" className="m-g" />
      <path d="M12 74l28-22 22 16 16-11 38 20v8a7 7 0 0 1-7 7H19a7 7 0 0 1-7-7z" className="m-acl" />
      <circle cx="92" cy="40" r="6" className="m-ac" />
      <rect x="20" y="30" width="58" height="12" rx="6" className="m-ac" />
      <text x="26" y="39" className="m-t m-dark">Leaking tap</text>
      <text x="128" y="31" className="m-t">Matched technicians</text>
      {[0, 1, 2].map((i) => (
        <g key={i} transform={`translate(128 ${37 + i * 18})`}>
          <rect width="200" height="15" rx="7" className="m-g" />
          <circle cx="8" cy="7.5" r="5" className="m-acl" />
          <rect x="18" y="4" width={52 - i * 6} height="3.5" rx="1.75" className="m-g2" />
          <rect x="18" y="9" width="30" height="2.5" rx="1.25" className="m-g" />
          <text x="112" y="10.5" className="m-m">{['4.9', '4.8', '4.7'][i]} ★</text>
          <rect x="150" y="2.5" width="44" height="10" rx="5" className="m-ac" />
          <text x="160" y="10" className="m-t m-dark m-s">Book</text>
        </g>
      ))}
    </Frame>
  );
}

/* 02 CareConnect AI: appointments + voice assistant */
function CareConnect() {
  return (
    <Frame url="careconnect.ai / appointments">
      <text x="12" y="31" className="m-t">Book appointment</text>
      {Array.from({ length: 21 }).map((_, i) => (
        <rect key={i} x={12 + (i % 7) * 15} y={37 + Math.floor(i / 7) * 15} width="11" height="11" rx="3" className={i === 9 ? 'm-ac' : i === 4 || i === 16 ? 'm-acl' : 'm-g'} />
      ))}
      <rect x="128" y="25" width="200" height="22" rx="8" className="m-g" />
      <text x="136" y="35" className="m-m">Assistant</text>
      <text x="136" y="43" className="m-t m-s">Dr. Rao is free at 4:30 PM. Book it?</text>
      <rect x="196" y="52" width="132" height="16" rx="8" className="m-ac" />
      <text x="206" y="63" className="m-t m-dark m-s">Yes, book for Tuesday</text>
      <rect x="128" y="74" width="200" height="12" rx="6" className="m-g" />
      <circle cx="136" cy="80" r="4" className="m-ac" />
      {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => (
        <rect key={i} x={150 + i * 5.5} y={80 - [2, 4, 3, 5, 2, 4, 3, 2, 4, 2, 1][i]} width="2.5" height={[4, 8, 6, 10, 4, 8, 6, 4, 8, 4, 2][i]} rx="1.2" className="m-acl" />
      ))}
    </Frame>
  );
}

/* 03 Knowx AI Business Assistant: WhatsApp reception + lead pipeline */
function Business() {
  return (
    <Frame url="knowx.ai / inbox">
      <rect x="12" y="25" width="150" height="60" rx="8" className="m-g" />
      <rect x="20" y="31" width="92" height="15" rx="7" className="m-g2" />
      <text x="27" y="41" className="m-t m-s">Do you have a slot today?</text>
      <rect x="60" y="50" width="94" height="15" rx="7" className="m-ac" />
      <text x="68" y="60" className="m-t m-dark m-s">Yes! 5 PM works.</text>
      <rect x="20" y="69" width="66" height="11" rx="5.5" className="m-acl" />
      <text x="27" y="77" className="m-t m-s">Lead captured ✓</text>
      <text x="174" y="31" className="m-t">Lead pipeline</text>
      {[['New', 12, 40], ['Qualified', 8, 30], ['Booked', 5, 20]].map(([k, n, h], i) => (
        <g key={String(k)} transform={`translate(${174 + i * 55} 37)`}>
          <rect width="50" height="48" rx="7" className="m-g" />
          <text x="6" y="11" className="m-m">{k}</text>
          <text x="6" y="26" className="m-t" style={{ fontSize: 11 }}>{n}</text>
          <rect x="6" y={44 - Number(h) / 4 - 6} width="38" height="4" rx="2" className={i === 2 ? 'm-ac' : 'm-acl'} />
        </g>
      ))}
    </Frame>
  );
}

/* 04 EduManage AI: attendance analytics + student list */
function Edu() {
  return (
    <Frame url="edumanage.ai / dashboard">
      <rect x="0" y="17" width="34" height="79" className="m-g" />
      {[0, 1, 2, 3].map((i) => (
        <rect key={i} x="9" y={26 + i * 15} width="16" height="8" rx="3" className={i === 0 ? 'm-ac' : 'm-g2'} />
      ))}
      <text x="44" y="31" className="m-t">Attendance this term</text>
      {[22, 30, 26, 38, 34, 44, 40].map((h, i) => (
        <rect key={i} x={46 + i * 22} y={84 - h} width="14" height={h} rx="3" className={i === 5 ? 'm-ac' : 'm-acl'} />
      ))}
      <rect x="208" y="24" width="124" height="62" rx="8" className="m-g" />
      {[['Aarav S.', '96%'], ['Diya M.', '91%'], ['Kabir R.', '78%']].map(([n, v], i) => (
        <g key={n} transform={`translate(216 ${33 + i * 17})`}>
          <circle cx="5" cy="5" r="5" className="m-acl" />
          <text x="14" y="8" className="m-t m-s">{n}</text>
          <text x="88" y="8" className={i === 2 ? 'm-t m-warn m-s' : 'm-t m-s'}>{v}</text>
        </g>
      ))}
    </Frame>
  );
}

/* 05 SmartFactory AI: predictive alerts + natural-language query */
function Factory() {
  return (
    <Frame url="smartfactory.ai / line-2">
      <text x="12" y="31" className="m-t">Machine health</text>
      <polyline points="12,70 40,62 68,66 96,50 124,54 152,38 180,44 208,32" fill="none" className="m-acs" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="208" cy="32" r="4.5" className="m-warn-f" />
      <rect x="120" y="22" width="78" height="11" rx="5.5" className="m-warn-f" />
      <text x="127" y="30" className="m-t m-dark m-s">Maintenance due</text>
      <rect x="226" y="25" width="102" height="24" rx="8" className="m-g" />
      <circle cx="238" cy="37" r="5" className="m-ok-f" />
      <text x="248" y="35" className="m-t m-s">CNC-04</text>
      <text x="248" y="44" className="m-m m-s">Running</text>
      <rect x="226" y="53" width="102" height="24" rx="8" className="m-g" />
      <circle cx="238" cy="65" r="5" className="m-warn-f" />
      <text x="248" y="63" className="m-t m-s">Press-02</text>
      <text x="248" y="72" className="m-m m-s">Service soon</text>
      <rect x="12" y="78" width="190" height="11" rx="5.5" className="m-g" />
      <text x="20" y="86" className="m-m">Ask: “Which orders are delayed this week?”</text>
    </Frame>
  );
}

/* 06 CommunityAssist AI: complaints + resident helpdesk */
function Community() {
  const rows: [string, string, boolean][] = [['Lift not working · B-204', 'Assigned', false], ['Water leakage · A-101', 'In progress', false], ['Gate pass request', 'Resolved', true]];
  return (
    <Frame url="communityassist.ai / helpdesk">
      <text x="12" y="31" className="m-t">Complaints</text>
      {rows.map(([t, s, done], i) => (
        <g key={t} transform={`translate(12 ${37 + i * 17})`}>
          <rect width="190" height="14" rx="7" className="m-g" />
          <text x="9" y="9.5" className="m-t m-s">{t}</text>
          <rect x="136" y="2.5" width="48" height="9" rx="4.5" className={done ? 'm-ok-f' : 'm-acl'} />
          <text x="142" y="9" className={done ? 'm-t m-dark m-s' : 'm-t m-s'}>{s}</text>
        </g>
      ))}
      <rect x="212" y="25" width="116" height="60" rx="8" className="m-g" />
      <rect x="220" y="31" width="80" height="14" rx="7" className="m-g2" />
      <text x="227" y="40.5" className="m-t m-s">Book the clubhouse</text>
      <rect x="236" y="50" width="84" height="14" rx="7" className="m-ac" />
      <text x="243" y="59.5" className="m-t m-dark m-s">Booked: Sat 6 PM ✓</text>
      <rect x="220" y="69" width="70" height="10" rx="5" className="m-acl" />
      <text x="227" y="76.5" className="m-t m-s">Notice sent</text>
    </Frame>
  );
}

const MOCKS: Record<string, () => ReactElement> = {
  '01': HomeCare, '02': CareConnect, '03': Business, '04': Edu, '05': Factory, '06': Community,
};

export default function ProductMock({ n }: { n: string }) {
  const M = MOCKS[n];
  return <div className="pmock">{M ? <M /> : null}</div>;
}
