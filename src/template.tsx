/* ============================================================================
 * StudentStarterTemplate
 * Accepts `portfolioData` as an optional prop.
 * Falls back to DEFAULT_DATA (dummy) when no prop is passed — browse screen
 * continues to work with zero changes.
 * ========================================================================== */

// ── Types ──────────────────────────────────────────────────────────────────

export type SkillCategory = {
	title: string;
	skills: string[];
};

export type Project = {
	title: string;
	description: string;
	technologies: string[];
	learning: string;
};

export type ActivityGroup = {
	title: string;
	items: string[];
};

export type Certification = {
	name: string;
	issuer: string;
	date: string;
};

export type Experience = {
	organization: string;
	role: string;
	duration: string;
	responsibilities: string[];
};

export type StudentPortfolioData = {
	name: string;
	degree: string;
	university: string;
	cgpa: string;
	location: string;
	email: string;
	phone: string;
	tagline: string;
	about: string[];
	aboutHighlights: string[];
	coursework: string[];
	skills: SkillCategory[];
	projects: Project[];
	activities: ActivityGroup[];
	certifications: Certification[];
	experiences: Experience[];
	navLinks: { label: string; href: string }[];
};

// ── Default (dummy) data — DO NOT remove, browse screen uses this ──────────

export const DEFAULT_DATA: StudentPortfolioData = {
	name: "Priya Sharma",
	degree: "B.Tech in Computer Science and Engineering",
	university: "VIT-AP University, Amaravati",
	cgpa: "8.7 / 10",
	location: "Vijayawada, Andhra Pradesh, India",
	email: "priya.sharma@example.com",
	phone: "+91 98765 43210",
	tagline: "Computer Science Student",
	about: [
		"I am a Computer Science student at VIT-AP University, Amaravati, with a strong interest in front-end engineering, database-backed applications, and problem solving.",
		"I enjoy translating academic concepts into usable interfaces and organized workflows. I am preparing for internship roles where I can contribute clean implementation, thoughtful documentation, and consistent collaboration.",
	],
	aboutHighlights: [
		"Working with React, TypeScript, SQL, and responsive design practices.",
		"Experienced in turning coursework ideas into polished academic projects.",
		"Interested in internship roles that value ownership, communication, and learning.",
	],
	navLinks: [
		{ label: "About", href: "#about" },
		{ label: "Education", href: "#education" },
		{ label: "Skills", href: "#skills" },
		{ label: "Projects", href: "#projects" },
		{ label: "Contact", href: "#contact" },
	],
	coursework: [
		"Programming Fundamentals",
		"Data Structures",
		"Object-Oriented Programming",
		"Database Management Systems",
		"Operating Systems",
		"Computer Networks",
		"Software Engineering",
		"Web Technologies",
	],
	skills: [
		{
			title: "Programming Languages",
			skills: ["C", "C++", "Java", "Python", "JavaScript"],
		},
		{
			title: "Web Development",
			skills: ["HTML", "CSS", "React", "Tailwind CSS", "Responsive Layouts"],
		},
		{
			title: "Databases",
			skills: ["MySQL", "SQL Queries", "Database Design", "MongoDB"],
		},
		{
			title: "Tools & Technologies",
			skills: ["VS Code", "Postman", "Figma", "Canva", "Version Control"],
		},
		{
			title: "Soft Skills",
			skills: [
				"Communication",
				"Teamwork",
				"Problem Solving",
				"Time Management",
				"Presentation",
			],
		},
	],
	projects: [
		{
			title: "Smart Attendance Monitor",
			description:
				"A web application for tracking subject-wise attendance, identifying shortage risk, and summarizing monthly attendance patterns for students.",
			technologies: ["HTML", "CSS", "JavaScript", "Local Storage"],
			learning:
				"Implemented form validation, percentage calculations, and clear attendance summaries from academic records.",
		},
		{
			title: "ExamPrep Study Planner",
			description:
				"A React-based planner for organizing weekly study targets, due dates, revision notes, and exam preparation tasks across subjects.",
			technologies: ["React", "TypeScript", "Tailwind CSS"],
			learning:
				"Used reusable components and typed state to manage task status, filters, and responsive study views.",
		},
		{
			title: "Library Catalog Query System",
			description:
				"A Python and MySQL project for searching book records, managing issue status, and filtering catalog entries by department and author.",
			technologies: ["Python", "MySQL", "SQL"],
			learning:
				"Designed relational tables, wrote normalized queries, and handled search scenarios used in campus libraries.",
		},
	],
	activities: [
		{
			title: "Competitions",
			items: [
				"Ranked in the top 10 at the department coding challenge focused on arrays, strings, and algorithmic problem solving.",
				"Presented the Smart Attendance Monitor project during the annual Computer Science project expo.",
			],
		},
		{
			title: "Hackathons",
			items: [
				"Built a student helpdesk prototype with a four-member team during the VIT-AP Smart Campus Hackathon.",
				"Contributed to feature planning, interface flow, documentation, and final product presentation.",
			],
		},
		{
			title: "Workshops",
			items: [
				"Completed hands-on workshops on React components, database design, and REST API testing.",
				"Attended placement preparation sessions covering technical interviews, resumes, and project walkthroughs.",
			],
		},
		{
			title: "Student Leadership",
			items: [
				"Coordinated class announcements, academic reminders, and project discussion groups for CSE coursework.",
				"Assisted classmates with presentation preparation, project documentation, and demo planning.",
			],
		},
	],
	certifications: [
		{
			name: "Responsive Web Design",
			issuer: "freeCodeCamp",
			date: "March 2025",
		},
		{
			name: "Programming in Python",
			issuer: "NPTEL Online Certification",
			date: "January 2025",
		},
		{
			name: "Database Management Fundamentals",
			issuer: "Oracle Academy",
			date: "November 2024",
		},
	],
	experiences: [
		{
			organization: "CodeCraft Labs",
			role: "Frontend Development Intern",
			duration: "June 2025 - August 2025",
			responsibilities: [
				"Developed responsive page sections for a student services website using React and Tailwind CSS.",
				"Improved mobile spacing, typography, and accessibility states across assigned pages.",
				"Prepared component notes and QA checklists for handoff to the internal team.",
			],
		},
		{
			organization: "Computer Science Department",
			role: "Class Representative",
			duration: "September 2024 - Present",
			responsibilities: [
				"Shared academic updates, assignment reminders, and event information with classmates.",
				"Coordinated project discussion groups and presentation schedules.",
				"Maintained clear communication between students and department coordinators.",
			],
		},
	],
};

// ── Component ──────────────────────────────────────────────────────────────

export default function StudentStarterTemplate({
	portfolioData,
}: {
	portfolioData: StudentPortfolioData;
}) {
	const d = portfolioData ?? DEFAULT_DATA;

	return (
		<main className="min-h-screen bg-white text-slate-900 selection:bg-blue-100 selection:text-slate-950">
			<style>{`
        html { scroll-behavior: smooth; }
        @keyframes fadeUp {
          0% { opacity: 0; transform: translateY(18px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes accentSlide {
          0%, 100% { transform: scaleX(0.35); opacity: 0.55; }
          50% { transform: scaleX(1); opacity: 1; }
        }
        .fade-up { animation: fadeUp 700ms ease-out both; }
        .accent-slide { animation: accentSlide 5s ease-in-out infinite; transform-origin: left; }
        @media (prefers-reduced-motion: reduce) {
          html { scroll-behavior: auto; }
          .fade-up, .accent-slide { animation: none; }
          * { transition-duration: 0.01ms !important; scroll-behavior: auto !important; }
        }
      `}</style>

			{/* Header */}
			<header className="fixed inset-x-0 top-0 z-50 bg-white/95 backdrop-blur-xl">
				<nav className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-6 py-5 lg:px-8">
					<a
						href="#home"
						className="text-sm font-black tracking-[0.28em] text-slate-950"
						aria-label={`${d.name} home`}
					>
						{d.name.toUpperCase()}
					</a>
					<div className="hidden items-center gap-8 md:flex">
						{d.navLinks.map((link) => (
							<button
								key={link.href}
								type="button"
								onClick={() =>
									document
										.getElementById(link.href.replace("#", ""))
										?.scrollIntoView({ behavior: "smooth" })
								}
								className="text-sm font-semibold text-slate-600 transition-colors duration-300 hover:text-blue-700"
							>
								{link.label}
							</button>
						))}
					</div>
				</nav>
			</header>

			{/* Hero */}
			<section
				id="home"
				className="flex min-h-screen items-center bg-[linear-gradient(135deg,#ffffff_0%,#ffffff_48%,#eff6ff_100%)] px-6 pt-24 lg:px-8"
			>
				<div className="mx-auto w-full max-w-6xl py-20">
					<div className="fade-up max-w-4xl">
						<p className="text-sm font-black uppercase tracking-[0.3em] text-blue-700">
							Computer Science Portfolio
						</p>
						<h1 className="mt-7 text-6xl font-black tracking-tight text-slate-950 sm:text-7xl lg:text-8xl">
							{d.name}
						</h1>
						<p className="mt-5 text-2xl font-bold text-blue-700 sm:text-3xl">
							{d.tagline}
						</p>
						<div className="accent-slide mt-8 h-1 w-48 bg-emerald-500" />
						<p className="mt-8 max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl">
							{d.about[0]}
						</p>
						<div className="mt-10 flex flex-wrap gap-x-8 gap-y-4 text-sm font-black uppercase tracking-[0.2em]">
							<button
								type="button"
								onClick={() =>
									document
										.getElementById("skills")
										?.scrollIntoView({ behavior: "smooth" })
								}
								className="text-slate-950 underline decoration-emerald-500 decoration-2 underline-offset-8 transition-colors duration-300 hover:text-blue-700"
							>
								View Skills
							</button>
							<button
								type="button"
								onClick={() =>
									document
										.getElementById("contact")
										?.scrollIntoView({ behavior: "smooth" })
								}
								className="text-slate-950 underline decoration-emerald-500 decoration-2 underline-offset-8 transition-colors duration-300 hover:text-blue-700"
							>
								Contact Me
							</button>
						</div>
					</div>
				</div>
			</section>

			{/* About */}
			<section id="about" className="scroll-mt-24 px-6 py-20 lg:px-8">
				<div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.8fr_1.2fr]">
					<div>
						<p className="text-sm font-black uppercase tracking-[0.24em] text-blue-700">
							About Me
						</p>
						<h2 className="mt-4 text-4xl font-black tracking-tight text-slate-950 sm:text-5xl">
							Building practical web projects with a strong academic foundation.
						</h2>
					</div>
					<div className="space-y-6 text-lg leading-8 text-slate-600">
						{d.about.map((para, i) => (
							<p key={i}>{para}</p>
						))}
						<ul className="space-y-3 pt-2 text-base font-semibold text-slate-800">
							{d.aboutHighlights.map((h, i) => (
								<li key={i}>{h}</li>
							))}
						</ul>
					</div>
				</div>
			</section>

			{/* Education */}
			<section
				id="education"
				className="scroll-mt-24 bg-slate-50 px-6 py-20 lg:px-8"
			>
				<div className="mx-auto max-w-6xl">
					<p className="text-sm font-black uppercase tracking-[0.24em] text-blue-700">
						Education
					</p>
					<h2 className="mt-4 max-w-3xl text-4xl font-black tracking-tight text-slate-950 sm:text-5xl">
						Academic background and relevant coursework.
					</h2>
					<div className="mt-12 grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
						<div className="space-y-5 text-lg leading-8">
							<div>
								<p className="text-sm font-black uppercase tracking-[0.2em] text-blue-700">
									Degree
								</p>
								<p className="mt-2 text-2xl font-black text-slate-950">
									{d.degree}
								</p>
							</div>
							<div>
								<p className="text-sm font-black uppercase tracking-[0.2em] text-blue-700">
									University
								</p>
								<p className="mt-2 font-semibold text-slate-600">
									{d.university}
								</p>
							</div>
							<div>
								<p className="text-sm font-black uppercase tracking-[0.2em] text-blue-700">
									CGPA
								</p>
								<p className="mt-2 font-semibold text-slate-600">{d.cgpa}</p>
							</div>
						</div>
						<div>
							<h3 className="text-2xl font-black text-slate-950">
								Relevant Coursework
							</h3>
							<p className="mt-4 text-lg leading-8 text-slate-600">
								Coursework aligned with programming, systems, databases, and
								software development concepts.
							</p>
							<ul className="mt-6 grid gap-x-8 gap-y-3 text-base font-semibold text-slate-800 sm:grid-cols-2">
								{d.coursework.map((course) => (
									<li key={course}>{course}</li>
								))}
							</ul>
						</div>
					</div>
				</div>
			</section>

			{/* Skills */}
			<section id="skills" className="scroll-mt-24 px-6 py-20 lg:px-8">
				<div className="mx-auto max-w-6xl">
					<p className="text-sm font-black uppercase tracking-[0.24em] text-blue-700">
						Skills
					</p>
					<h2 className="mt-4 max-w-3xl text-4xl font-black tracking-tight text-slate-950 sm:text-5xl">
						Technical and interpersonal strengths.
					</h2>
					<div className="mt-12 divide-y divide-slate-200">
						{d.skills.map((category) => (
							<section
								key={category.title}
								className="grid gap-5 py-7 md:grid-cols-[0.35fr_0.65fr]"
							>
								<h3 className="text-xl font-black text-slate-950">
									{category.title}
								</h3>
								<p className="text-lg leading-8 text-slate-600">
									{category.skills.join(" / ")}
								</p>
							</section>
						))}
					</div>
				</div>
			</section>

			{/* Projects */}
			<section
				id="projects"
				className="scroll-mt-24 bg-slate-950 px-6 py-20 text-white lg:px-8"
			>
				<div className="mx-auto max-w-6xl">
					<p className="text-sm font-black uppercase tracking-[0.24em] text-sky-300">
						Academic Projects
					</p>
					<h2 className="mt-4 max-w-3xl text-4xl font-black tracking-tight sm:text-5xl">
						Project work focused on practical student and campus use cases.
					</h2>
					<div className="mt-12 divide-y divide-slate-700">
						{d.projects.map((project, index) => (
							<article
								key={project.title}
								className="grid gap-6 py-8 lg:grid-cols-[0.18fr_0.5fr_0.32fr]"
							>
								<p className="text-sm font-black uppercase tracking-[0.24em] text-sky-300">
									Project 0{index + 1}
								</p>
								<div>
									<h3 className="text-2xl font-black">{project.title}</h3>
									<p className="mt-4 text-base leading-7 text-slate-300">
										{project.description}
									</p>
									<p className="mt-4 text-sm font-semibold leading-6 text-emerald-300">
										{project.learning}
									</p>
								</div>
								<p className="text-sm font-black uppercase leading-7 tracking-[0.16em] text-sky-300">
									{project.technologies.join(" / ")}
								</p>
							</article>
						))}
					</div>
				</div>
			</section>

			{/* Activities */}
			<section id="activities" className="px-6 py-20 lg:px-8">
				<div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.8fr_1.2fr]">
					<div>
						<p className="text-sm font-black uppercase tracking-[0.24em] text-blue-700">
							Achievements & Activities
						</p>
						<h2 className="mt-4 text-4xl font-black tracking-tight text-slate-950 sm:text-5xl">
							Academic activities, competitions, and leadership experience.
						</h2>
					</div>
					<div className="divide-y divide-slate-200">
						{d.activities.map((group) => (
							<section key={group.title} className="py-6 first:pt-0">
								<h3 className="text-xl font-black text-slate-950">
									{group.title}
								</h3>
								<ul className="mt-4 space-y-3 text-base leading-7 text-slate-600">
									{group.items.map((item) => (
										<li key={item}>{item}</li>
									))}
								</ul>
							</section>
						))}
					</div>
				</div>
			</section>

			{/* Certifications */}
			<section id="certifications" className="bg-blue-50 px-6 py-20 lg:px-8">
				<div className="mx-auto max-w-6xl">
					<p className="text-sm font-black uppercase tracking-[0.24em] text-blue-700">
						Certifications
					</p>
					<h2 className="mt-4 max-w-3xl text-4xl font-black tracking-tight text-slate-950 sm:text-5xl">
						Certifications that support my technical learning path.
					</h2>
					<div className="mt-12 divide-y divide-blue-200">
						{d.certifications.map((cert) => (
							<article
								key={cert.name}
								className="grid gap-3 py-6 md:grid-cols-[0.5fr_0.3fr_0.2fr]"
							>
								<h3 className="text-xl font-black text-slate-950">
									{cert.name}
								</h3>
								<p className="font-semibold text-slate-600">{cert.issuer}</p>
								<p className="font-black text-blue-700">{cert.date}</p>
							</article>
						))}
					</div>
				</div>
			</section>

			{/* Experience */}
			<section id="experience" className="px-6 py-20 lg:px-8">
				<div className="mx-auto max-w-6xl">
					<p className="text-sm font-black uppercase tracking-[0.24em] text-blue-700">
						Experience
					</p>
					<h2 className="mt-4 max-w-3xl text-4xl font-black tracking-tight text-slate-950 sm:text-5xl">
						Internship and campus coordination experience.
					</h2>
					<div className="mt-12 divide-y divide-slate-200">
						{d.experiences.map((exp) => (
							<article
								key={`${exp.organization}-${exp.role}`}
								className="grid gap-6 py-8 lg:grid-cols-[0.35fr_0.65fr]"
							>
								<div>
									<p className="text-sm font-black uppercase tracking-[0.2em] text-blue-700">
										{exp.duration}
									</p>
									<h3 className="mt-3 text-2xl font-black text-slate-950">
										{exp.role}
									</h3>
									<p className="mt-2 text-base font-semibold text-slate-600">
										{exp.organization}
									</p>
								</div>
								<ul className="space-y-3 text-base leading-7 text-slate-600">
									{exp.responsibilities.map((r) => (
										<li key={r}>{r}</li>
									))}
								</ul>
							</article>
						))}
					</div>
				</div>
			</section>

			{/* Contact */}
			<section
				id="contact"
				className="scroll-mt-24 bg-slate-950 px-6 py-20 text-white lg:px-8"
			>
				<div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.8fr_1.2fr]">
					<div>
						<p className="text-sm font-black uppercase tracking-[0.24em] text-sky-300">
							Contact
						</p>
						<h2 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">
							Open to internship roles, placement conversations, and project
							collaboration.
						</h2>
					</div>
					<address className="space-y-6 not-italic text-lg leading-8 text-slate-300">
						<p>
							<span className="block text-sm font-black uppercase tracking-[0.2em] text-sky-300">
								Email
							</span>
							<a
								href={`mailto:${d.email}`}
								className="transition-colors duration-300 hover:text-emerald-300"
							>
								{d.email}
							</a>
						</p>
						<p>
							<span className="block text-sm font-black uppercase tracking-[0.2em] text-sky-300">
								Phone
							</span>
							<a
								href={`tel:${d.phone.replace(/\s+/g, "")}`}
								className="transition-colors duration-300 hover:text-emerald-300"
							>
								{d.phone}
							</a>
						</p>
						<p>
							<span className="block text-sm font-black uppercase tracking-[0.2em] text-sky-300">
								Location
							</span>
							{d.location}
						</p>
					</address>
				</div>
			</section>

			<footer className="bg-slate-950 px-6 py-8 text-center text-sm text-slate-300 lg:px-8">
				<p>
					&copy; {new Date().getFullYear()} {d.name}. Computer science
					portfolio.
				</p>
			</footer>
		</main>
	);
}
