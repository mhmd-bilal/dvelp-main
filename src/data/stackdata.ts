import {
    Zap,
    Code,
    Database,
    Sparkles,
    Server,
    Target,
    FileText,
    Briefcase,
    BarChart3,
    MessageSquare,
    ShoppingCart,
    Palette,
    Plug,
    Layers,
  } from "lucide-react";

export const stackRecommendations = {
    "Landing Page": {
      recommended: {
        frontend: ["React", "Next.js", "Astro", "SvelteKit", "Nuxt.js"],
        backend: ["Express", "Fastify", "Koa.js"],
        database: ["MongoDB", "Supabase", "Firebase"],
        tools: ["Vercel", "Tailwind CSS", "Framer Motion", "React Hook Form", "Headless UI"],
        hosting: ["Vercel", "Netlify", "Cloudflare Pages", "AWS Amplify"],
        analytics: ["Google Analytics", "Plausible", "Umami", "Mixpanel"]
      },
      pitfalls: [
        {
          title: "SEO Optimization",
          description: "Poor meta tags, missing structured data, and client-side rendering can hurt search rankings.",
          solution: "Use Next.js SSG/SSR, implement proper meta tags, add JSON-LD structured data, and optimize Core Web Vitals.",
          severity: "high"
        },
        {
          title: "Performance Issues",
          description: "Large images, unoptimized assets, and render-blocking resources slow page load times.",
          solution: "Implement image optimization with Next.js Image component, use WebP format, enable lazy loading, and minimize JavaScript bundles.",
          severity: "high"
        },
        {
          title: "Mobile Responsiveness",
          description: "Landing pages that don't work well on mobile devices lose significant traffic.",
          solution: "Use responsive design principles, test on multiple devices, and implement touch-friendly interactions.",
          severity: "medium"
        },
        {
          title: "Form Validation",
          description: "Poor form handling leads to user frustration and lost conversions.",
          solution: "Implement client and server-side validation, provide clear error messages, and use libraries like React Hook Form.",
          severity: "medium"
        },
        {
          title: "Accessibility Issues",
          description: "Inaccessible landing pages exclude users and may violate compliance requirements.",
          solution: "Follow WCAG guidelines, use semantic HTML, implement proper ARIA labels, and test with screen readers.",
          severity: "medium"
        }
      ],
      resources: [
        {
          title: "Next.js Documentation",
          url: "https://nextjs.org/docs",
          type: "docs",
          description: "Comprehensive guide for React framework with SSR/SSG capabilities"
        },
        {
          title: "Astro Documentation",
          url: "https://docs.astro.build/",
          type: "docs",
          description: "Modern static site generator with component islands architecture"
        },
        {
          title: "Landing Page Template - Tailwind UI",
          url: "https://tailwindui.com/templates/spotlight",
          type: "template",
          description: "Professional landing page templates with Tailwind CSS"
        },
        {
          title: "Next.js Landing Page Template",
          url: "https://github.com/vercel/nextjs-landing-page",
          type: "template",
          description: "Free Next.js landing page starter"
        },
        {
          title: "Chakra UI Landing Page",
          url: "https://github.com/MA-Ahmad/templatesKart",
          type: "template",
          description: "Collection of landing page templates with Chakra UI"
        },
        {
          title: "Web.dev Performance Guide",
          url: "https://web.dev/performance/",
          type: "guide",
          description: "Google's comprehensive web performance optimization guide"
        },
        {
          title: "Lighthouse CI",
          url: "https://github.com/GoogleChrome/lighthouse-ci",
          type: "tool",
          description: "Automated performance monitoring for landing pages"
        }
      ],
      bestPractices: [
        "Implement progressive enhancement",
        "Use semantic HTML elements",
        "Optimize images and use modern formats",
        "Minimize JavaScript bundle size",
        "Implement proper caching strategies"
      ]
    },
  
    "Blog": {
      recommended: {
        frontend: ["Next.js", "Gatsby", "Astro", "SvelteKit", "Nuxt.js"],
        backend: ["Express", "FastAPI", "Strapi", "Sanity"],
        database: ["MongoDB", "PostgreSQL", "Supabase", "PlanetScale"],
        tools: ["MDX", "Prisma", "Contentful", "Ghost CMS", "Markdown-it"],
        hosting: ["Vercel", "Netlify", "GitHub Pages", "Cloudflare Pages"],
        cms: ["Strapi", "Sanity", "Contentful", "Ghost", "Forestry"]
      },
      pitfalls: [
        {
          title: "Content Management Complexity",
          description: "Managing blog content, images, and metadata becomes unwieldy without proper systems.",
          solution: "Implement headless CMS like Strapi or Sanity, use Git-based workflows with Forestry, or MDX for developer-friendly content.",
          severity: "high"
        },
        {
          title: "SEO and Metadata Management",
          description: "Blog posts without proper SEO optimization get poor search visibility.",
          solution: "Implement dynamic meta tags, generate XML sitemaps, use structured data, and optimize for featured snippets.",
          severity: "high"
        },
        {
          title: "Performance with Large Content",
          description: "Blogs with many posts and images can become slow and unwieldy.",
          solution: "Implement pagination, infinite scroll, image optimization, and content delivery networks (CDN).",
          severity: "medium"
        },
        {
          title: "Comment System Management",
          description: "Managing comments, spam, and user interactions can be challenging.",
          solution: "Use services like Disqus, implement moderation workflows, or build custom comment systems with proper validation.",
          severity: "medium"
        },
        {
          title: "Search Functionality",
          description: "Users expect to be able to search through blog content effectively.",
          solution: "Implement full-text search with Algolia, ElasticSearch, or client-side search with Fuse.js.",
          severity: "low"
        }
      ],
      resources: [
        {
          title: "Next.js Blog Starter",
          url: "https://github.com/vercel/next.js/tree/canary/examples/blog-starter",
          type: "template",
          description: "Official Next.js blog template with MDX support"
        },
        {
          title: "Gatsby Blog Templates",
          url: "https://www.gatsbyjs.com/starters/?c=Blog",
          type: "template",
          description: "Collection of Gatsby blog starters"
        },
        {
          title: "Astro Blog Template",
          url: "https://github.com/withastro/astro/tree/main/examples/blog",
          type: "template",
          description: "Astro blog example with Markdown support"
        },
        {
          title: "Hashnode Headless Blog",
          url: "https://hashnode.com/headless",
          type: "service",
          description: "Headless CMS specifically designed for blogs"
        },
        {
          title: "MDX Documentation",
          url: "https://mdxjs.com/docs/",
          type: "docs",
          description: "JSX in your markdown documents"
        },
        {
          title: "Strapi Blog Tutorial",
          url: "https://strapi.io/blog/build-a-blog-with-next-react-js-strapi",
          type: "tutorial",
          description: "Complete guide to building a blog with Strapi and Next.js"
        },
        {
          title: "Blog SEO Checklist",
          url: "https://blog.hubspot.com/marketing/blogging-seo-checklist",
          type: "guide",
          description: "Comprehensive SEO checklist for blog posts"
        }
      ],
      bestPractices: [
        "Use semantic HTML for better accessibility",
        "Implement proper heading hierarchy",
        "Optimize images with alt text and lazy loading",
        "Create engaging meta descriptions",
        "Use internal linking strategies"
      ]
    },
  
    "SaaS App": {
      recommended: {
        frontend: ["React", "Next.js", "Vue.js", "Angular", "Svelte"],
        backend: ["Express", "Django", "FastAPI", "NestJS", "Ruby on Rails"],
        database: ["PostgreSQL", "MongoDB", "Supabase", "PlanetScale", "CockroachDB"],
        tools: ["Stripe", "Auth0", "Firebase Auth", "Prisma", "tRPC"],
        hosting: ["AWS", "Vercel", "Railway", "Render", "DigitalOcean"],
        monitoring: ["Sentry", "LogRocket", "DataDog", "New Relic"]
      },
      pitfalls: [
        {
          title: "Authentication & Authorization Complexity",
          description: "Implementing secure user auth, role-based access, and session management is complex and error-prone.",
          solution: "Use Auth0, Firebase Auth, or Supabase Auth for authentication. Implement JWT tokens, refresh token rotation, and proper RBAC patterns.",
          severity: "critical"
        },
        {
          title: "Payment Integration Security",
          description: "Handling payments, subscriptions, and billing without security vulnerabilities.",
          solution: "Use Stripe or similar PCI-compliant services, implement webhook handlers with proper verification, and never store payment data locally.",
          severity: "critical"
        },
        {
          title: "Data Security & Privacy",
          description: "Protecting user data and ensuring GDPR/CCPA compliance.",
          solution: "Implement data encryption, secure API endpoints, audit logs, and privacy controls. Use services like Transcend for compliance.",
          severity: "critical"
        },
        {
          title: "Scalability Issues",
          description: "App becomes slow and unstable as user base grows.",
          solution: "Implement proper caching strategies, database indexing, CDN usage, and consider microservices architecture for large applications.",
          severity: "high"
        },
        {
          title: "User Onboarding & Retention",
          description: "Poor user experience during signup and initial usage leads to high churn.",
          solution: "Implement progressive onboarding, feature tours, email sequences, and user analytics to track engagement.",
          severity: "high"
        },
        {
          title: "API Rate Limiting",
          description: "APIs without proper rate limiting are vulnerable to abuse and DDoS attacks.",
          solution: "Implement rate limiting with Redis, use API gateways, and monitor API usage patterns.",
          severity: "medium"
        }
      ],
      resources: [
        {
          title: "SaaS Starter Kit - Next.js",
          url: "https://github.com/vercel/nextjs-subscription-payments",
          type: "template",
          description: "Complete SaaS template with Stripe integration"
        },
        {
          title: "Supabase SaaS Kit",
          url: "https://github.com/supabase/supabase/tree/master/examples/nextjs-subscription-payments",
          type: "template",
          description: "SaaS starter with Supabase backend"
        },
        {
          title: "SaaS Boilerplate",
          url: "https://github.com/async-labs/saas",
          type: "template",
          description: "Production-ready SaaS boilerplate with teams and billing"
        },
        {
          title: "Bullet Train SaaS Framework",
          url: "https://bullettrain.co/",
          type: "framework",
          description: "Ruby on Rails SaaS framework"
        },
        {
          title: "Stripe Documentation",
          url: "https://stripe.com/docs",
          type: "docs",
          description: "Complete payment processing documentation"
        },
        {
          title: "Auth0 Documentation",
          url: "https://auth0.com/docs",
          type: "docs",
          description: "Authentication and authorization platform docs"
        },
        {
          title: "SaaS Metrics Guide",
          url: "https://www.klipfolio.com/resources/articles/what-is-a-saas-metric",
          type: "guide",
          description: "Understanding key SaaS metrics and KPIs"
        },
        {
          title: "GDPR Compliance Guide",
          url: "https://gdpr.eu/checklist/",
          type: "guide",
          description: "GDPR compliance checklist for SaaS applications"
        }
      ],
      bestPractices: [
        "Implement proper error handling and logging",
        "Use environment variables for sensitive data",
        "Set up automated testing and CI/CD pipelines",
        "Monitor application performance and user behavior",
        "Plan for database migrations and schema changes"
      ]
    },
  
    "Dashboard": {
      recommended: {
        frontend: ["React", "Vue.js", "Angular", "Svelte", "D3.js"],
        backend: ["Express", "FastAPI", "Django", "NestJS", "GraphQL"],
        database: ["PostgreSQL", "MongoDB", "InfluxDB", "TimescaleDB", "ClickHouse"],
        tools: ["Chart.js", "D3.js", "Recharts", "ApexCharts", "Observable Plot"],
        ui: ["Material-UI", "Ant Design", "Chakra UI", "Mantine", "Headless UI"],
        realtime: ["Socket.io", "WebSockets", "Server-Sent Events", "Pusher"]
      },
      pitfalls: [
        {
          title: "Performance with Large Datasets",
          description: "Dashboards become slow and unresponsive when handling large amounts of data.",
          solution: "Implement data pagination, virtualization, server-side filtering, and caching strategies. Use time-series databases for time-based data.",
          severity: "high"
        },
        {
          title: "Real-time Data Synchronization",
          description: "Keeping dashboard data current and handling connection issues.",
          solution: "Implement WebSocket connections with reconnection logic, use Server-Sent Events for one-way updates, or implement polling with exponential backoff.",
          severity: "high"
        },
        {
          title: "Data Visualization Complexity",
          description: "Creating responsive, interactive, and accessible charts that work across devices.",
          solution: "Use established libraries like D3.js or Chart.js, implement responsive design patterns, and ensure charts are accessible to screen readers.",
          severity: "medium"
        },
        {
          title: "User Permission Management",
          description: "Different users need access to different dashboard sections and data.",
          solution: "Implement role-based access control, data filtering based on user permissions, and audit logging for sensitive operations.",
          severity: "medium"
        },
        {
          title: "Mobile Responsiveness",
          description: "Dashboard interfaces often don't translate well to mobile devices.",
          solution: "Design mobile-first layouts, use collapsible sections, implement touch-friendly interactions, and consider separate mobile views.",
          severity: "medium"
        },
        {
          title: "Data Export and Sharing",
          description: "Users expect to export data and share dashboard views.",
          solution: "Implement CSV/PDF export functionality, shareable dashboard URLs, and screenshot capabilities.",
          severity: "low"
        }
      ],
      resources: [
        {
          title: "React Admin Dashboard",
          url: "https://github.com/marmelab/react-admin",
          type: "template",
          description: "Frontend framework for building admin applications"
        },
        {
          title: "Material Dashboard React",
          url: "https://github.com/creativetimofficial/material-dashboard-react",
          type: "template",
          description: "Material-UI based dashboard template"
        },
        {
          title: "Ant Design Pro",
          url: "https://pro.ant.design/",
          type: "template",
          description: "Enterprise dashboard template with Ant Design"
        },
        {
          title: "Tremor Dashboard Components",
          url: "https://www.tremor.so/",
          type: "library",
          description: "React components for building dashboards"
        },
        {
          title: "Observable Plot",
          url: "https://observablehq.com/plot/",
          type: "library",
          description: "Grammar of graphics for JavaScript"
        },
        {
          title: "D3.js Gallery",
          url: "https://observablehq.com/@d3/gallery",
          type: "examples",
          description: "Collection of D3.js visualization examples"
        },
        {
          title: "Chart.js Documentation",
          url: "https://www.chartjs.org/docs/",
          type: "docs",
          description: "Simple yet flexible JavaScript charting library"
        },
        {
          title: "Dashboard Design Patterns",
          url: "https://dashboarddesignpatterns.github.io/",
          type: "guide",
          description: "Best practices for dashboard design"
        }
      ],
      bestPractices: [
        "Prioritize the most important metrics prominently",
        "Use consistent color schemes and typography",
        "Implement proper loading states and error handling",
        "Provide context and explanations for metrics",
        "Allow customization and personalization"
      ]
    },
  
    "Real-time Chat": {
      recommended: {
        frontend: ["React", "Vue.js", "Angular", "Svelte"],
        backend: ["Express", "FastAPI", "NestJS", "Django Channels", "Phoenix"],
        database: ["MongoDB", "PostgreSQL", "Redis", "Cassandra"],
        tools: ["Socket.io", "WebSockets", "Pusher", "Ably", "Firebase"],
        realtime: ["Socket.io", "WebRTC", "Server-Sent Events", "WebSockets"],
        storage: ["Redis", "Amazon S3", "Cloudinary", "Firebase Storage"]
      },
      pitfalls: [
        {
          title: "WebSocket Connection Management",
          description: "Handling connection drops, reconnections, and scaling across multiple servers.",
          solution: "Implement proper reconnection logic with exponential backoff, use Socket.io for cross-browser compatibility, and Redis for scaling across instances.",
          severity: "high"
        },
        {
          title: "Message Delivery Guarantees",
          description: "Ensuring messages are delivered and handling offline users.",
          solution: "Implement message queuing, delivery acknowledgments, offline message storage, and push notifications for offline users.",
          severity: "high"
        },
        {
          title: "Scalability with Concurrent Users",
          description: "Performance degrades as the number of concurrent users increases.",
          solution: "Use Redis for session storage, implement message queuing with RabbitMQ or Apache Kafka, and consider clustering solutions.",
          severity: "high"
        },
        {
          title: "Security and Privacy",
          description: "Protecting chat messages from unauthorized access and ensuring user privacy.",
          solution: "Implement end-to-end encryption, user authentication, rate limiting, and content moderation.",
          severity: "critical"
        },
        {
          title: "File and Media Sharing",
          description: "Handling file uploads, image sharing, and media playback in chat.",
          solution: "Use cloud storage services like AWS S3, implement file type validation, virus scanning, and optimize media delivery.",
          severity: "medium"
        },
        {
          title: "Message History and Search",
          description: "Efficiently storing and searching through large chat histories.",
          solution: "Implement pagination for chat history, use full-text search with Elasticsearch, and consider data archiving strategies.",
          severity: "medium"
        }
      ],
      resources: [
        {
          title: "Socket.io Chat Example",
          url: "https://github.com/socketio/socket.io/tree/main/examples/chat",
          type: "template",
          description: "Basic real-time chat application with Socket.io"
        },
        {
          title: "React Chat UI Kit",
          url: "https://github.com/chatscope/chat-ui-kit-react",
          type: "library",
          description: "React components for building chat interfaces"
        },
        {
          title: "Stream Chat SDK",
          url: "https://getstream.io/chat/",
          type: "service",
          description: "Complete chat API and SDK solution"
        },
        {
          title: "Firebase Chat Example",
          url: "https://github.com/firebase/quickstart-js/tree/master/messaging",
          type: "template",
          description: "Real-time chat with Firebase"
        },
        {
          title: "WebRTC Chat Tutorial",
          url: "https://webrtc.org/getting-started/peer-connections",
          type: "tutorial",
          description: "Building peer-to-peer chat with WebRTC"
        },
        {
          title: "Socket.io Documentation",
          url: "https://socket.io/docs/",
          type: "docs",
          description: "Real-time bidirectional event-based communication"
        },
        {
          title: "Redis Pub/Sub Guide",
          url: "https://redis.io/topics/pubsub",
          type: "docs",
          description: "Redis publish/subscribe messaging paradigm"
        },
        {
          title: "Chat Security Best Practices",
          url: "https://owasp.org/www-project-web-security-testing-guide/latest/4-Web_Application_Security_Testing/11-Client-side_Testing/10-Testing_WebSockets",
          type: "guide",
          description: "Security considerations for WebSocket applications"
        }
      ],
      bestPractices: [
        "Implement proper authentication and authorization",
        "Use message encryption for sensitive communications",
        "Implement rate limiting to prevent spam",
        "Design for offline-first functionality",
        "Provide clear typing indicators and read receipts"
      ]
    },
  
    "E-commerce": {
      recommended: {
        frontend: ["Next.js", "React", "Vue.js", "Nuxt.js"],
        backend: ["Express", "Django", "FastAPI", "NestJS", "Strapi"],
        database: ["PostgreSQL", "MongoDB", "Supabase", "PlanetScale"],
        tools: ["Stripe", "PayPal", "Shopify API", "WooCommerce", "Medusa"],
        search: ["Algolia", "Elasticsearch", "MeiliSearch"],
        hosting: ["Vercel", "AWS", "Shopify", "WooCommerce", "BigCommerce"]
      },
      pitfalls: [
        {
          title: "Payment Security & PCI Compliance",
          description: "Handling payment data securely and maintaining PCI DSS compliance.",
          solution: "Use payment processors like Stripe or PayPal, never store card data locally, implement SSL certificates, and follow PCI DSS guidelines.",
          severity: "critical"
        },
        {
          title: "Inventory Management",
          description: "Keeping accurate inventory counts and handling overselling scenarios.",
          solution: "Implement real-time inventory tracking, reserve items during checkout, use database transactions, and sync with external inventory systems.",
          severity: "high"
        },
        {
          title: "Shopping Cart Persistence",
          description: "Managing cart state across sessions and devices.",
          solution: "Store cart data in database for logged-in users, use localStorage for guests, implement cart recovery emails, and sync across devices.",
          severity: "high"
        },
        {
          title: "Performance with Large Catalogs",
          description: "Site becomes slow with thousands of products and images.",
          solution: "Implement product search with Algolia, use CDN for images, implement lazy loading, pagination, and database indexing.",
          severity: "high"
        },
        {
          title: "Order Management Complexity",
          description: "Handling orders, refunds, shipping, and customer service workflows.",
          solution: "Implement order status tracking, automated email notifications, integration with shipping carriers, and admin panels for order management.",
          severity: "medium"
        },
        {
          title: "Multi-currency and Tax Calculation",
          description: "Supporting international customers with different currencies and tax requirements.",
          solution: "Use services like TaxJar for tax calculation, implement currency conversion APIs, and ensure compliance with local tax laws.",
          severity: "medium"
        },
        {
          title: "SEO for Product Pages",
          description: "Product pages need to rank well in search engines.",
          solution: "Implement structured data markup, optimize product images, create unique descriptions, and use proper URL structures.",
          severity: "medium"
        }
      ],
      resources: [
        {
          title: "Next.js Commerce",
          url: "https://nextjs.org/commerce",
          type: "template",
          description: "Complete e-commerce solution with Next.js"
        },
        {
          title: "Medusa E-commerce",
          url: "https://medusajs.com/",
          type: "platform",
          description: "Open-source headless commerce platform"
        },
        {
          title: "Shopify Hydrogen",
          url: "https://hydrogen.shopify.dev/",
          type: "framework",
          description: "React-based framework for building Shopify storefronts"
        },
        {
          title: "WooCommerce REST API",
          url: "https://woocommerce.github.io/woocommerce-rest-api-docs/",
          type: "docs",
          description: "WooCommerce REST API documentation"
        },
        {
          title: "Stripe E-commerce Guide",
          url: "https://stripe.com/docs/payments/accept-a-payment",
          type: "tutorial",
          description: "Complete guide to accepting payments with Stripe"
        },
        {
          title: "React Storefront",
          url: "https://github.com/storefront-foundation/react-storefront",
          type: "template",
          description: "Progressive web app for e-commerce"
        },
        {
          title: "Commerce.js",
          url: "https://commercejs.com/",
          type: "service",
          description: "Headless e-commerce platform with APIs"
        },
        {
          title: "E-commerce SEO Guide",
          url: "https://moz.com/learn/seo/ecommerce-seo",
          type: "guide",
          description: "SEO best practices for e-commerce sites"
        },
        {
          title: "PCI DSS Compliance Guide",
          url: "https://www.pcisecuritystandards.org/pci_security/",
          type: "guide",
          description: "Payment Card Industry Data Security Standard"
        }
      ],
      bestPractices: [
        "Implement guest checkout options",
        "Optimize checkout flow to reduce abandonment",
        "Provide multiple payment methods",
        "Ensure mobile-responsive design",
        "Implement product reviews and ratings",
        "Use high-quality product images",
        "Provide detailed product descriptions"
      ]
    },
  
    "Portfolio": {
      recommended: {
        frontend: ["Next.js", "Gatsby", "Astro", "Nuxt.js", "SvelteKit"],
        backend: ["Strapi", "Sanity", "Contentful", "Ghost"],
        database: ["MongoDB", "Supabase", "Firebase"],
        tools: ["Framer Motion", "GSAP", "Three.js", "Lottie"],
        hosting: ["Vercel", "Netlify", "GitHub Pages", "Cloudflare Pages"]
      },
      pitfalls: [
        {
          title: "Performance vs Visual Appeal",
          description: "Heavy animations and large images can slow down the portfolio.",
          solution: "Optimize images, use efficient animation libraries, implement lazy loading, and prioritize above-the-fold content.",
          severity: "medium"
        },
        {
          title: "Cross-browser Compatibility",
          description: "Advanced CSS and animations may not work consistently across browsers.",
          solution: "Test across multiple browsers, use autoprefixer, provide fallbacks for unsupported features.",
          severity: "low"
        }
      ],
      resources: [
        {
          title: "Developer Portfolio Templates",
          url: "https://github.com/topics/portfolio-template",
          type: "template",
          description: "Collection of portfolio templates on GitHub"
        },
        {
          title: "Framer Motion Examples",
          url: "https://www.framer.com/motion/examples/",
          type: "examples",
          description: "Animation examples with Framer Motion"
        }
      ],
      bestPractices: [
        "Keep design clean and focused on content",
        "Ensure fast loading times",
        "Make contact information easily accessible",
        "Showcase your best work prominently"
      ]
    },
  
    "API/Microservice": {
      recommended: {
        backend: ["Express", "FastAPI", "Django REST", "NestJS", "Go Gin", "Spring Boot"],
        database: ["PostgreSQL", "MongoDB", "Redis", "CockroachDB"],
        tools: ["Docker", "Kubernetes", "OpenAPI/Swagger", "Postman", "Insomnia"],
        monitoring: ["Prometheus", "Grafana", "DataDog", "New Relic"],
        testing: ["Jest", "Pytest", "Supertest", "Newman"]
      },
      pitfalls: [
        {
          title: "API Security Vulnerabilities",
          description: "Unsecured APIs are vulnerable to various attacks and data breaches.",
          solution: "Implement authentication, authorization, input validation, rate limiting, and use HTTPS. Follow OWASP API Security guidelines.",
          severity: "critical"
        },
        {
          title: "Scalability and Performance",
          description: "APIs become slow and unresponsive under high load.",
          solution: "Implement caching, database optimization, load balancing, and consider containerization with Docker and Kubernetes.",
          severity: "high"
        }
      ],
      resources: [
        {
          title: "OpenAPI Specification",
          url: "https://spec.openapis.org/oas/latest.html",
          type: "docs",
          description: "Standard for describing REST APIs"
        },
        {
          title: "OWASP API Security",
          url: "https://owasp.org/www-project-api-security/",
          type: "guide",
          description: "API security best practices and top 10 risks"
        }
      ],
      bestPractices: [
        "Use consistent naming conventions",
        "Implement proper error handling",
        "Version your APIs appropriately",
        "Document APIs thoroughly",
        "Monitor API performance and usage"
      ]
    }
  };


  
export const technologies = [
    {
      id: "react",
      name: "React",
      icon: Code,
      category: "Frontend",
      color: "from-blue-500/10 to-cyan-500/10 border-blue-500/20",
    },
    {
      id: "vue",
      name: "Vue",
      icon: Code,
      category: "Frontend",
      color: "from-green-500/10 to-emerald-500/10 border-green-500/20",
    },
    {
      id: "angular",
      name: "Angular",
      icon: Code,
      category: "Frontend",
      color: "from-red-500/10 to-pink-500/10 border-red-500/20",
    },
    {
      id: "svelte",
      name: "Svelte",
      icon: Zap,
      category: "Frontend",
      color: "from-orange-500/10 to-yellow-500/10 border-orange-500/20",
    },
    {
      id: "nextjs",
      name: "Next.js",
      icon: Layers,
      category: "Framework",
      color: "from-gray-500/10 to-slate-500/10 border-gray-500/20",
    },
    {
      id: "nuxtjs",
      name: "Nuxt.js",
      icon: Layers,
      category: "Framework",
      color: "from-emerald-500/10 to-green-500/10 border-emerald-500/20",
    },
    {
      id: "astro",
      name: "Astro",
      icon: Sparkles,
      category: "Framework",
      color: "from-purple-500/10 to-violet-500/10 border-purple-500/20",
    },
    {
      id: "express",
      name: "Express",
      icon: Server,
      category: "Backend",
      color: "from-yellow-500/10 to-amber-500/10 border-yellow-500/20",
    },
    {
      id: "django",
      name: "Django",
      icon: Server,
      category: "Backend",
      color: "from-green-600/10 to-emerald-600/10 border-green-600/20",
    },
    {
      id: "fastapi",
      name: "FastAPI",
      icon: Zap,
      category: "Backend",
      color: "from-teal-500/10 to-cyan-500/10 border-teal-500/20",
    },
    {
      id: "nestjs",
      name: "NestJS",
      icon: Server,
      category: "Backend",
      color: "from-red-600/10 to-pink-600/10 border-red-600/20",
    },
    {
      id: "mongodb",
      name: "MongoDB",
      icon: Database,
      category: "Database",
      color: "from-green-500/10 to-emerald-500/10 border-green-500/20",
    },
    {
      id: "postgresql",
      name: "PostgreSQL",
      icon: Database,
      category: "Database",
      color: "from-blue-600/10 to-indigo-600/10 border-blue-600/20",
    },
    {
      id: "redis",
      name: "Redis",
      icon: Database,
      category: "Database",
      color: "from-red-500/10 to-pink-500/10 border-red-500/20",
    },
    {
      id: "supabase",
      name: "Supabase",
      icon: Database,
      category: "Database",
      color: "from-emerald-400/10 to-green-400/10 border-emerald-400/20",
    },
  ];
  
  export const projectTypes = [
    {
      id: "landing",
      name: "Landing Page",
      icon: Target,
      description: "Marketing & conversion focused",
    },
    {
      id: "blog",
      name: "Blog",
      icon: FileText,
      description: "Content management & SEO",
    },
    {
      id: "saas",
      name: "SaaS App",
      icon: Briefcase,
      description: "Subscription business model",
    },
    {
      id: "dashboard",
      name: "Dashboard",
      icon: BarChart3,
      description: "Data visualization & analytics",
    },
    {
      id: "chat",
      name: "Real-time Chat",
      icon: MessageSquare,
      description: "Live communication platform",
    },
    {
      id: "ecommerce",
      name: "E-commerce",
      icon: ShoppingCart,
      description: "Online store & payments",
    },
    {
      id: "portfolio",
      name: "Portfolio",
      icon: Palette,
      description: "Personal showcase site",
    },
    {
      id: "api",
      name: "API/Service",
      icon: Plug,
      description: "Backend services & APIs",
    },
  ];