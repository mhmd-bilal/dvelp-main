import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

// This would typically come from a database or API
const stackRecommendations = {
  "Landing Page": {
    recommended: {
      frontend: ["React", "Next.js"],
      backend: ["Express"],
      database: ["MongoDB"],
      tools: ["Vercel", "Tailwind CSS"],
    },
    pitfalls: [
      {
        title: "SEO Optimization",
        description: "Ensure proper meta tags and server-side rendering for better SEO performance.",
        solution: "Use Next.js for built-in SEO features and implement proper meta tags.",
      },
      {
        title: "Performance",
        description: "Large images and unoptimized assets can slow down the page.",
        solution: "Use image optimization tools and implement lazy loading.",
      },
    ],
    resources: [
      {
        title: "Next.js Documentation",
        url: "https://nextjs.org/docs",
        type: "docs",
      },
      {
        title: "Landing Page Template",
        url: "https://github.com/vercel/nextjs-landing-page",
        type: "template",
      },
    ],
  },
  "Blog": {
    recommended: {
      frontend: ["Next.js", "React"],
      backend: ["Express", "FastAPI"],
      database: ["MongoDB", "PostgreSQL"],
      tools: ["MDX", "Prisma", "Vercel"],
    },
    pitfalls: [
      {
        title: "Content Management",
        description: "Managing blog content and updates can be challenging.",
        solution: "Use MDX for content and implement a CMS or Git-based workflow.",
      },
      {
        title: "SEO and Metadata",
        description: "Blog posts need proper SEO optimization and metadata.",
        solution: "Implement dynamic meta tags and sitemap generation.",
      },
    ],
    resources: [
      {
        title: "Next.js Blog Starter",
        url: "https://github.com/vercel/next.js/tree/canary/examples/blog-starter",
        type: "template",
      },
      {
        title: "MDX Documentation",
        url: "https://mdxjs.com/docs/",
        type: "docs",
      },
    ],
  },
  "SaaS App": {
    recommended: {
      frontend: ["React", "Next.js"],
      backend: ["Express", "Django"],
      database: ["PostgreSQL", "MongoDB"],
      tools: ["Stripe", "Auth0", "AWS"],
    },
    pitfalls: [
      {
        title: "Authentication & Authorization",
        description: "Implementing secure user authentication and role-based access.",
        solution: "Use Auth0 or similar services for authentication and implement proper RBAC.",
      },
      {
        title: "Payment Integration",
        description: "Handling payments and subscriptions securely.",
        solution: "Use Stripe for payment processing and implement webhook handlers.",
      },
    ],
    resources: [
      {
        title: "SaaS Starter Kit",
        url: "https://github.com/vercel/nextjs-subscription-payments",
        type: "template",
      },
      {
        title: "Stripe Documentation",
        url: "https://stripe.com/docs",
        type: "docs",
      },
    ],
  },
  "Dashboard": {
    recommended: {
      frontend: ["React", "Vue"],
      backend: ["Express", "FastAPI"],
      database: ["PostgreSQL", "MongoDB"],
      tools: ["Chart.js", "D3.js", "Material-UI"],
    },
    pitfalls: [
      {
        title: "Data Visualization",
        description: "Creating responsive and interactive charts.",
        solution: "Use Chart.js or D3.js for data visualization and implement proper data fetching.",
      },
      {
        title: "Real-time Updates",
        description: "Keeping dashboard data up-to-date.",
        solution: "Implement WebSocket connections or polling mechanisms.",
      },
    ],
    resources: [
      {
        title: "Dashboard Template",
        url: "https://github.com/mui/material-ui/tree/master/examples/nextjs",
        type: "template",
      },
      {
        title: "Chart.js Documentation",
        url: "https://www.chartjs.org/docs/",
        type: "docs",
      },
    ],
  },
  "Real-time Chat": {
    recommended: {
      frontend: ["React", "Vue"],
      backend: ["Express", "FastAPI"],
      database: ["MongoDB", "PostgreSQL"],
      tools: ["Socket.io", "Redis", "AWS"],
    },
    pitfalls: [
      {
        title: "WebSocket Management",
        description: "Handling WebSocket connections and reconnection logic.",
        solution: "Use Socket.io for WebSocket management and implement proper error handling.",
      },
      {
        title: "Message Persistence",
        description: "Storing and retrieving chat messages efficiently.",
        solution: "Implement message queuing and proper database indexing.",
      },
    ],
    resources: [
      {
        title: "Socket.io Documentation",
        url: "https://socket.io/docs/",
        type: "docs",
      },
      {
        title: "Chat App Template",
        url: "https://github.com/vercel/next.js/tree/canary/examples/with-socket.io",
        type: "template",
      },
    ],
  },
  "E-commerce": {
    recommended: {
      frontend: ["Next.js", "React"],
      backend: ["Express", "Django"],
      database: ["PostgreSQL", "MongoDB"],
      tools: ["Stripe", "Algolia", "AWS"],
    },
    pitfalls: [
      {
        title: "Shopping Cart Management",
        description: "Managing shopping cart state and persistence.",
        solution: "Use Redux or Context API for cart state and implement proper storage.",
      },
      {
        title: "Payment Processing",
        description: "Handling secure payment processing and order management.",
        solution: "Use Stripe for payments and implement proper order tracking.",
      },
    ],
    resources: [
      {
        title: "E-commerce Template",
        url: "https://github.com/vercel/nextjs-subscription-payments",
        type: "template",
      },
      {
        title: "Stripe Documentation",
        url: "https://stripe.com/docs",
        type: "docs",
      },
    ],
  },
};

interface StackologyContentProps {
  selectedTechs: string[];
  selectedProject: string;
}

export default function StackologyContent({
  selectedTechs,
  selectedProject,
}: StackologyContentProps) {
  const projectData = stackRecommendations[selectedProject as keyof typeof stackRecommendations];

  if (!projectData) {
    return (
      <section className="sticky top-16 h-full overflow-y-auto w-full bg-black/5 dark:bg-black/20 border-1 border-accent rounded-lg p-8 flex flex-col gap-8">
        <h2 className="text-3xl font-bold mb-4">Select a Project Type</h2>
        <p className="text-muted-foreground">
          Choose a project type from the sidebar to see stack recommendations.
        </p>
      </section>
    );
  }

  // Filter recommendations based on selected technologies
  const filteredRecommendations = {
    ...projectData,
    recommended: {
      ...projectData.recommended,
      frontend: projectData.recommended.frontend.filter(tech => 
        selectedTechs.length === 0 || selectedTechs.includes(tech.toLowerCase())
      ),
      backend: projectData.recommended.backend.filter(tech => 
        selectedTechs.length === 0 || selectedTechs.includes(tech.toLowerCase())
      ),
      database: projectData.recommended.database.filter(tech => 
        selectedTechs.length === 0 || selectedTechs.includes(tech.toLowerCase())
      ),
    }
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="sticky top-16 h-full overflow-y-auto w-full bg-black/5 dark:bg-black/20 border-1 border-accent rounded-lg p-8 flex flex-col gap-8"
    >
      <div className="flex flex-col gap-8">
        {/* Header */}
        <div>
          <h2 className="text-3xl font-bold mb-2">{selectedProject}</h2>
          <p className="text-muted-foreground">
            Recommended tech stack and best practices for building a {selectedProject.toLowerCase()}.
          </p>
        </div>

        {/* Recommended Stack Section */}
        <div className="border border-border rounded-lg bg-black/40">
          <h3 className="text-xl font-semibold p-6 border-b border-border">
            Recommended Stack
          </h3>
          <div className="p-6 space-y-6">
            <div>
              <h4 className="text-sm font-medium mb-3 text-muted-foreground">
                Frontend
              </h4>
              <div className="flex gap-2 flex-wrap">
                {filteredRecommendations.recommended.frontend.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-primary/10 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-sm font-medium mb-3 text-muted-foreground">
                Backend
              </h4>
              <div className="flex gap-2 flex-wrap">
                {filteredRecommendations.recommended.backend.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-primary/10 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-sm font-medium mb-3 text-muted-foreground">
                Database
              </h4>
              <div className="flex gap-2 flex-wrap">
                {filteredRecommendations.recommended.database.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-primary/10 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-sm font-medium mb-3 text-muted-foreground">
                Tools
              </h4>
              <div className="flex gap-2 flex-wrap">
                {filteredRecommendations.recommended.tools.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-primary/10 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Pitfalls Section */}
        <div className="border border-border rounded-lg bg-black/40">
          <h3 className="text-xl font-semibold p-6 border-b border-border">
            Common Pitfalls & Solutions
          </h3>
          <div className="p-6">
            <Accordion type="single" collapsible className="w-full">
              {filteredRecommendations.pitfalls.map((pitfall, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger>{pitfall.title}</AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-2">
                      <p className="text-muted-foreground">{pitfall.description}</p>
                      <p className="font-medium">Solution: {pitfall.solution}</p>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>

        {/* Resources Section */}
        <div className="border border-border rounded-lg bg-black/40">
          <h3 className="text-xl font-semibold p-6 border-b border-border">
            Useful Resources
          </h3>
          <div className="p-6">
            <div className="space-y-4">
              {filteredRecommendations.resources.map((resource, index) => (
                <a
                  key={index}
                  href={resource.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-4 rounded-lg border hover:bg-accent transition-colors"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-medium">{resource.title}</span>
                    <span className="text-sm text-muted-foreground">
                      {resource.type}
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
} 