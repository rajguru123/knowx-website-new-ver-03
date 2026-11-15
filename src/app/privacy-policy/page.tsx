import type { Metadata } from 'next';
import './privacy.css';

const URL = 'https://knowxindia.com/privacy-policy';
const EMAIL = 'info@knowxindia.com';
const PHONE = '+91 9886094611';
const UPDATED = '15 November 2026';

export const metadata: Metadata = {
  title: { absolute: 'Privacy Policy & Terms | Knowx Innovations' },
  description:
    'How Knowx Innovations Pvt Ltd collects, uses and protects your information, and the terms for using our website and enquiring about our programmes.',
  alternates: { canonical: URL },
  robots: { index: true, follow: true },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="pp-scope">
      <div className="pp-inner">
        <h1>Privacy Policy &amp; Terms</h1>
        <p className="pp-meta">Knowx Innovations Pvt Ltd · Last updated {UPDATED}</p>

        <nav className="pp-toc" aria-label="On this page">
          <p>On this page</p>
          <ul>
            <li><a href="#privacy">Privacy Policy</a></li>
            <li><a href="#terms">Terms &amp; Conditions</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>

        {/* ---------------- PRIVACY ---------------- */}
        <h2 id="privacy">Privacy Policy</h2>
        <p>
          This policy explains what personal information Knowx Innovations Pvt Ltd (&quot;Knowx&quot;, &quot;we&quot;, &quot;us&quot;) collects when you use
          knowxindia.com, including our internship landing pages and application form, and how we use and protect it.
        </p>

        <h3>1. Information we collect</h3>
        <ul>
          <li><strong>Details you give us:</strong> your name, WhatsApp or mobile number, college or university, engineering branch and preferred internship duration when you submit an application or enquiry form.</li>
          <li><strong>Messages you send us:</strong> anything you send by WhatsApp, phone or email.</li>
          <li><strong>Technical and campaign information:</strong> the page you applied from, the time of submission, campaign tags in the link you clicked (such as utm_source and utm_campaign), and basic device, browser and usage data collected by analytics tools.</li>
        </ul>

        <h3>2. How we use your information</h3>
        <ul>
          <li>To respond to your enquiry and contact you on WhatsApp, phone or email about the programme, eligibility, batches and next steps.</li>
          <li>To manage applications, counselling and admissions.</li>
          <li>To understand which pages and advertisements bring enquiries, and to improve our website and campaigns.</li>
          <li>To prevent spam and misuse, and to meet legal obligations.</li>
        </ul>

        <h3>3. Consent</h3>
        <p>
          By submitting the form you agree that we may contact you about the programme using the details you gave. You can withdraw
          your consent at any time by writing to <a href={`mailto:${EMAIL}`}>{EMAIL}</a>. Withdrawing consent does not affect what we did before you withdrew it.
        </p>

        <h3>4. Who we share information with</h3>
        <p>We do not sell your personal information. We use trusted service providers to run our website and communications, and they handle data only for these purposes:</p>
        <ul>
          <li><strong>Form delivery:</strong> Web3Forms, which passes your form submission to our email.</li>
          <li><strong>Messaging:</strong> WhatsApp, when you message us or continue the conversation there.</li>
          <li><strong>Analytics and advertising measurement:</strong> Google Analytics, and Meta tools used for Instagram and Facebook advertising where enabled.</li>
          <li><strong>Enquiry management:</strong> a customer relationship management (CRM) tool we may use to store and follow up enquiries.</li>
        </ul>
        <p>We may also disclose information if required by law or to protect our rights. These providers may process data outside India under their own policies.</p>

        <h3>5. Cookies and similar technologies</h3>
        <p>
          Our analytics and advertising tools may use cookies or similar technologies to count visits and measure campaigns. We also keep
          campaign tags from your link in your browser&apos;s session storage for the length of your visit so we can tell which campaign your
          application came from. You can block or delete cookies in your browser settings.
        </p>

        <h3>6. How long we keep information</h3>
        <p>
          We keep your information for as long as needed to respond to your enquiry, run the programme and meet legal requirements, and then
          delete or anonymise it. You can ask us to delete it earlier.
        </p>

        <h3>7. Security</h3>
        <p>
          We take reasonable steps to protect your information, including restricting access to the people who need it. No online system is
          completely secure, so we cannot guarantee absolute security.
        </p>

        <h3>8. Your rights</h3>
        <p>You may ask us to:</p>
        <ul>
          <li>tell you what personal information we hold about you;</li>
          <li>correct information that is wrong or incomplete;</li>
          <li>delete your information; and</li>
          <li>stop contacting you or withdraw your consent.</li>
        </ul>
        <p>Write to <a href={`mailto:${EMAIL}`}>{EMAIL}</a> and we will respond within a reasonable time.</p>

        <h3>9. Age</h3>
        <p>
          Our programmes are meant for engineering students who are 18 or older. If you are under 18, a parent or guardian must apply on
          your behalf. If you believe a minor has sent us information without a parent or guardian&apos;s consent, write to us and we will remove it.
        </p>

        <h3>10. Links to other sites</h3>
        <p>
          Our pages link to Instagram, YouTube, LinkedIn and WhatsApp. Those services have their own privacy policies, and we are not responsible for them.
        </p>

        <h3>11. Changes to this policy</h3>
        <p>We may update this policy. The date at the top shows when it was last changed.</p>

        {/* ---------------- TERMS ---------------- */}
        <h2 id="terms">Terms &amp; Conditions</h2>
        <p>By using this website or submitting an enquiry you agree to these terms.</p>

        <h3>1. Enquiry, not enrolment</h3>
        <p>
          Submitting the application form is an enquiry. It does not reserve a seat or guarantee admission. Eligibility, batch dates, schedule,
          delivery format and seat availability are confirmed by our team during counselling.
        </p>

        <h3>2. Fees</h3>
        <p>
          We do not show fees on our landing pages. Programme fees and options are shared during counselling. Payment terms and any refund
          conditions are given to you in writing before you enrol.
        </p>

        <h3>3. Certificates and outcomes</h3>
        <p>
          A Knowx internship completion certificate is issued to students who meet the programme&apos;s attendance, project and completion
          requirements. We teach practical skills, but we do not guarantee any job, placement, internship offer or result.
        </p>

        <h3>4. Representative content</h3>
        <p>
          Project ideas, images, certificate samples and curriculum details on our pages are representative and may change. Final project scope
          depends on the batch, hardware availability and mentor guidance.
        </p>

        <h3>5. Using this website</h3>
        <ul>
          <li>Give accurate information when you apply.</li>
          <li>Do not misuse the website, send spam, or try to disrupt or gain unauthorised access to it.</li>
          <li>Do not copy our content, logo or materials for commercial use without our written permission.</li>
        </ul>

        <h3>6. Intellectual property</h3>
        <p>
          The Knowx name, logo, website content and training materials belong to Knowx Innovations Pvt Ltd or its licensors. Ownership and
          use of project work you create during a programme will be explained in the enrolment documents.
        </p>

        <h3>7. Limitation of liability</h3>
        <p>
          To the extent the law allows, Knowx is not liable for indirect or consequential losses arising from your use of this website, and
          the website is provided on an &quot;as is&quot; basis. Nothing here limits any right you have under law that cannot be excluded.
        </p>

        <h3>8. Governing law</h3>
        <p>These terms are governed by the laws of India. The courts at Bangalore, Karnataka have jurisdiction over any dispute.</p>

        <h3>9. Changes</h3>
        <p>We may update these terms from time to time. The date at the top shows the latest version.</p>

        {/* ---------------- CONTACT ---------------- */}
        <h2 id="contact">Contact and grievances</h2>
        <div className="pp-card">
          <p>
            <strong>Knowx Innovations Pvt Ltd</strong><br />
            No 56, 2nd Floor, 17th Cross, 8th Main, MC Layout,<br />
            Vijayanagar, Bangalore 560040<br />
            Email: <a href={`mailto:${EMAIL}`}>{EMAIL}</a><br />
            Phone / WhatsApp: <a href="tel:+919886094611">{PHONE}</a>
          </p>
        </div>
        <p className="pp-note">
          For privacy requests or complaints, email us with the subject &quot;Privacy request&quot; and your registered name and phone number so we can find your record.
        </p>
      </div>
    </div>
  );
}
