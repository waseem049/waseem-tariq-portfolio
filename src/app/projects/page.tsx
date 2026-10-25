import type { Metadata } from "next";
import Link from "next/link";
import { PageHeading } from "@/components/page-heading";
import { ScrollAnimate } from "@/components/scroll-animate";

export const metadata: Metadata = {
  title: "Projects | Waseem Tariq",
  description: "A production Spring Boot microservices platform, a healthcare-discovery research prototype, and the products I'm building now.",
};

export default function ProjectsPage() {
  return (
    <div className="inner-page container">
      <ScrollAnimate direction="up">
        <PageHeading
          eyebrow="Projects"
          title="Projects & product work."
          description="Products I've built and shipped, the engineering behind them, and what I'm working on now."
        />
      </ScrollAnimate>

      <div className="mt-[32px] grid grid-cols-3 gap-[16px] text-[12px]">
        <div className="p-[12px] rounded-[8px] border border-[var(--line)] bg-[var(--surface)]">01 — Production platform · Spring Boot microservices on a Linux VPS</div>
        <div className="p-[12px] rounded-[8px] border border-[var(--line)] bg-[var(--surface)]">02 — Live demos · Deployed on Vercel and VPS</div>
        <div className="p-[12px] rounded-[8px] border border-[var(--line)] bg-[var(--surface)]">01 — Applied AI research · Semantic retrieval with constraint checks</div>
      </div>

      <section className="mt-[64px]">
        <h2 className="text-[20px] font-[700] mb-[24px]">Featured work</h2>

        <div className="space-y-[64px]">
          <article className="border border-[var(--line)] rounded-[12px] p-[24px] bg-[var(--surface)]">
            <h3 className="text-[18px] font-[700]">Exceptional IAS Academy</h3>
            <p className="text-[13px] text-[var(--ink-3)] mb-[12px]">Education technology · Full-stack platform · Live in production</p>
            <p className="text-[14px] leading-[1.7] text-[var(--ink-2)] mb-[12px]">
              A live website and digital platform for an IAS/JKAS coaching institute. The public Next.js site presents the institute's UPSC and JKAS programmes, course details, results, counselling and enquiry journeys, and contact information. Behind it runs a containerised Spring Boot microservices backend deployed on a Hostinger VPS.
            </p>
            <p className="text-[14px] leading-[1.7] text-[var(--ink-2)] mb-[12px]"><strong>What I built</strong><br/>
              I built and deployed the public website, then integrated it with a separate frontend/backend architecture. The backend runs authentication, content and learning services behind a Spring Cloud Gateway, with Eureka for service discovery. Data is stored in PostgreSQL on Neon. Services run under Docker Compose behind an Nginx reverse proxy, with JWT-based authentication and role-based access for the institute's user types. The domain is managed through GoDaddy and served over HTTPS.
            </p>
            <p className="text-[13px] text-[var(--ink-3)] mb-[12px]"><strong>Stack</strong><br/>Next.js · React · TypeScript · Tailwind CSS · Java · Spring Boot · Spring Cloud Gateway · Eureka · Spring Security / JWT · PostgreSQL (Neon) · Docker Compose · Nginx · Hostinger VPS</p>
            <Link href="https://www.exceptionaliasacademy.com/" target="_blank" className="text-[13px] font-[600] text-[var(--accent)]">Visit live website →</Link>
          </article>

          <article className="border border-[var(--line)] rounded-[12px] p-[24px] bg-[var(--surface)]">
            <h3 className="text-[18px] font-[700]">Unified Healthcare Interface (UHI)</h3>
            <p className="text-[13px] text-[var(--ink-3)] mb-[12px]">Healthcare technology · Web platform · Applied AI research · Prototype</p>
            <p className="text-[14px] leading-[1.7] text-[var(--ink-2)] mb-[12px]">
              A healthcare-service discovery platform that helps people find relevant providers and services through one unified interface. The current prototype covers frontend workflows, structured service data and a mock API. It is also the application context for my research into reliable AI-assisted healthcare search.
            </p>
            <p className="text-[14px] leading-[1.7] text-[var(--ink-2)] mb-[12px]"><strong>What I built</strong><br/>
              The Next.js frontend and the mock data layer: structured service records, a MockDB loader, React Query data fetching with Mock Service Worker responses, mock authentication, role-aware routes and dashboard workflows. A production backend and the AI retrieval layer are the next stages.
            </p>
            <p className="text-[14px] leading-[1.7] text-[var(--ink-2)] mb-[12px]"><strong>Research</strong><br/>
              Reliable AI-Assisted Healthcare Service Discovery Using Semantic Retrieval and Constraint Validation. The study will compare semantic retrieval with a keyword-search baseline, apply deterministic validation for hard constraints, and handle incomplete requests. Evaluation will use synthetic service data and manually labelled queries, measuring retrieval accuracy, ranking quality and constraint violations. No results are reported yet.
            </p>
            <p className="text-[13px] text-[var(--ink-3)] mb-[12px]"><strong>Stack</strong><br/>Next.js · React · TypeScript · Tailwind CSS · TanStack React Query · Mock Service Worker · JSON test data</p>
            <Link href="/research" className="text-[13px] font-[600] text-[var(--accent)]">Read the research outline →</Link>
          </article>

          <article className="border border-[var(--line)] rounded-[12px] p-[24px] bg-[var(--surface)]">
            <h3 className="text-[18px] font-[700]">NexGen Developers</h3>
            <p className="text-[13px] text-[var(--ink-3)] mb-[12px]">Web development studio · Product delivery · Brand and website</p>
            <p className="text-[14px] leading-[1.7] text-[var(--ink-2)] mb-[12px]">
              I run NexGen Developers, a web development studio that builds websites and digital applications. The studio's own site uses a minimal black-and-gold identity, and the work behind it covers the full path from client requirements to a deployed product.
            </p>
            <p className="text-[14px] leading-[1.7] text-[var(--ink-2)] mb-[12px]"><strong>What I do</strong><br/>
              I handle both engineering and delivery: scoping, building, deploying and handing over. Exceptional IAS Academy above is a client build delivered through the studio.
            </p>
            <Link href="https://www.nexgendevelopers.in" target="_blank" className="text-[13px] font-[600] text-[var(--accent)]">Visit nexgendevelopers →</Link>
          </article>
        </div>
      </section>

      <section className="mt-[80px]">
        <h2 className="text-[20px] font-[700] mb-[24px]">Currently building</h2>
        <div className="grid md:grid-cols-2 gap-[24px]">
          <div className="border border-[var(--line)] rounded-[12px] p-[20px] bg-[var(--surface)]">
            <h4 className="font-[600] mb-[8px]">Cloudify</h4>
            <p className="text-[13px] text-[var(--ink-3)] mb-[8px]">Cloud storage · Web application · In development</p>
            <p className="text-[14px] leading-[1.7] text-[var(--ink-2)]">A cloud-drive application with account-based access to personal files. The sign-in, password-recovery and account-creation flow is live; file upload, download and sharing are in progress.</p>
            <p className="text-[13px] text-[var(--ink-3)] mt-[8px]">Stack: Web application · Account authentication flows · Cloud-storage user experience · Vercel</p>
            <Link href="https://cloudify-gray.vercel.app/login" target="_blank" className="text-[13px] font-[600] text-[var(--accent)]">Live demo →</Link>
          </div>
          <div className="border border-[var(--line)] rounded-[12px] p-[20px] bg-[var(--surface)]">
            <h4 className="font-[600] mb-[8px]">Doclified (DocSign)</h4>
            <p className="text-[13px] text-[var(--ink-3)] mb-[8px]">Document workflows · Electronic signatures · In development</p>
            <p className="text-[14px] leading-[1.7] text-[var(--ink-2)]">A PDF-signing application: upload a PDF, place signature, text and date fields, request signatures from others, download the signed copy, and keep an audit history.</p>
            <p className="text-[13px] text-[var(--ink-3)] mt-[8px]">Stack: Web application · PDF document workflows · Electronic-signature UX · MongoDB · Vercel</p>
            <Link href="https://doclified.vercel.app/" target="_blank" className="text-[13px] font-[600] text-[var(--accent)]">Live demo →</Link>
          </div>
          <div className="border border-[var(--line)] rounded-[12px] p-[20px] bg-[var(--surface)]">
            <h4 className="font-[600] mb-[8px]">FitSpaceGym</h4>
            <p className="text-[13px] text-[var(--ink-3)] mb-[8px]">Fitness technology · Web application · In development</p>
            <p className="text-[14px] leading-[1.7] text-[var(--ink-2)]">A gym and fitness web app. I moved the backend from an earlier Next.js, Prisma and PostgreSQL setup to a dedicated Node.js and Express API with MongoDB, so business logic and data live behind a REST API rather than in the frontend. The seed workflow runs successfully; authentication and the main user journeys are next.</p>
            <p className="text-[13px] text-[var(--ink-3)] mt-[8px]">Stack: Next.js · React · TypeScript · Node.js · Express · MongoDB</p>
          </div>
          <div className="border border-[var(--line)] rounded-[12px] p-[20px] bg-[var(--surface)]">
            <h4 className="font-[600] mb-[8px]">ShoesHub</h4>
            <p className="text-[13px] text-[var(--ink-3)] mb-[8px]">E-commerce · Full-stack web application · In development</p>
            <p className="text-[14px] leading-[1.7] text-[var(--ink-2)]">A shoe-shopping application built as a separate Next.js frontend and NestJS API with MongoDB, designed as a full-stack product rather than a frontend-only storefront. Catalogue, cart and checkout features are in progress.</p>
            <p className="text-[13px] text-[var(--ink-3)] mt-[8px]">Stack: Next.js · React · TypeScript · NestJS · Node.js · MongoDB</p>
          </div>
        </div>
      </section>
    </div>
  );
}
