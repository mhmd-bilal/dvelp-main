"use client";

import React from "react";
import { componentsData } from "@/data/components";
import Code from "./ui/Code";
import dynamic from "next/dynamic";

type DocsContentProps = {
  selectedComponent: string;
};

// Dynamically import component previews
const componentPreviews = {
  "blurry-blobs": dynamic(() =>
    import("./docs/blurry-blobs").then(mod => ({
      default: mod.BlurryBlobsPreview,
    }))
  ),
  "glow-button": dynamic(() =>
    import("./docs/glow-button").then(mod => ({
      default: mod.GlowButtonPreview,
    }))
  ),
  "halftone-bg": dynamic(() =>
    import("./docs/halftone-bg").then(mod => ({
      default: mod.HalftonePreview,
    }))
  ),
  
  "custom-cursor": dynamic(() => import("./docs/blurry-blobs")),
  "scroll-select": dynamic(() => import("./docs/blurry-blobs")),
  "sentence-form": dynamic(() => import("./docs/blurry-blobs")),
};

export default function DocsContent({ selectedComponent }: DocsContentProps) {
  // Handle special sections
  if (selectedComponent === "introduction") {
    return (
      <section className="sticky top-16 h-full overflow-y-auto w-full bg-black/5 dark:bg-black/20 border-1 border-accent rounded-lg p-8 flex flex-col gap-8">
        <div className="flex flex-col gap-8">
          <div>
            <h2 className="text-3xl font-bold mb-4">About dvelp</h2>
            <p className="text-muted-foreground mb-4">
              Welcome to dvelp, a collection of aesthetically pleasing and
              functional components created with love for the web development
              community. This project is maintained with a focus on creating
              beautiful, reusable components that enhance user experience while
              maintaining high performance and accessibility standards.
            </p>
            <p className="text-muted-foreground">
              Each component is carefully crafted to provide both visual appeal
              and practical functionality, making it easier for developers to
              create stunning web applications without compromising on quality
              or user experience.
            </p>
          </div>
        </div>
      </section>
    );
  }

  if (selectedComponent === "installation") {
    return (
      <section className="sticky top-16 h-full overflow-y-auto w-full bg-black/5 dark:bg-black/20 border-1 border-accent rounded-lg p-8 flex flex-col gap-8">
        <div className="flex flex-col gap-8">
          <div>
            <h2 className="text-3xl font-bold mb-4">Installation</h2>
            <p className="text-muted-foreground mb-4">
              This UI uses components from <code>shadcn/ui</code>. To get
              started, install it in your project. CLI installation for dvelp is
              coming soon!
            </p>
            <div className="border border-border rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Quick Start</h3>
              <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
                <li>
                  Follow the{" "}
                  <a
                    href="https://ui.shadcn.com/docs/installation"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline text-primary"
                  >
                    shadcn/ui installation guide
                  </a>
                </li>
                <li>Copy the component code from the documentation</li>
                <li>Paste it into your project</li>
                <li>Import any required dependencies</li>
                <li>Customize the component as needed</li>
              </ol>
            </div>
          </div>
        </div>
      </section>
    );
  }

  const component = componentsData.find(comp => comp.id === selectedComponent);

  if (!component) {
    return (
      <section className="sticky top-16 h-full overflow-y-auto w-full bg-black/5 dark:bg-black/20 border-1 border-accent rounded-lg p-8 flex flex-col gap-8">
        <h2 className="text-3xl font-bold mb-4">Select a Component</h2>
        <p className="text-muted-foreground">
          Choose a component from the sidebar to view its documentation.
        </p>
      </section>
    );
  }

  const PreviewComponent =
    componentPreviews[component.id as keyof typeof componentPreviews];

  // Generate the import statement
  const importStatement = `import { ${component.name} } from "@/components/dvelp/${component.id}";`;

  return (
    <section className="sticky top-16 h-full overflow-y-auto w-full bg-black/5 dark:bg-black/20 border-1 border-accent rounded-lg p-8 flex flex-col gap-8 overflow-x-hidden">
      <div className="flex flex-col gap-8">
        {/* Header */}
        <div>
          <h2 className="text-3xl font-bold mb-2">{component.name}</h2>
          <p className="text-muted-foreground">{component.description}</p>
        </div>

        {/* Preview Section */}
        <div className="border border-border rounded-lg p-6 bg-black/40 cursor-context-menu">
          <h3 className="text-xl font-semibold mb-4">Preview</h3>
          <div className="min-h-[200px] flex items-center justify-center">
            {PreviewComponent && <PreviewComponent />}
          </div>
        </div>

        {/* Code Section */}
        <div className="border border-border rounded-lg bg-black/40">
          <h3 className="text-xl font-semibold p-6 border-b border-border">
            Implement
          </h3>
          <div className="flex flex-col gap-4 p-6">
            {/* Import Statement */}
            <div>
              <h4 className="text-sm font-medium mb-2 text-muted-foreground">
                Import
              </h4>
              <Code code={importStatement} />
            </div>

            {/* Usage Example */}
            <div>
              <h4 className="text-sm font-medium mb-2 text-muted-foreground">
                Code
              </h4>
              <Code code={component.code?.content} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
