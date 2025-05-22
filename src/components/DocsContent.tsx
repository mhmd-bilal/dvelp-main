"use client";

import React from "react";

type DocsContentProps = {
    selectedComponent: string;
};

export default function DocsContent({ selectedComponent }: DocsContentProps) {
    return (
        <section className="sticky top-16 h-[calc(100vh-16rem)] overflow-y-auto w-[calc(100vw-43rem)] bg-black/5 dark:bg-black/20 border-1 border-accent rounded-lg p-8 flex flex-col gap-8">
            <h2 className="text-3xl font-bold mb-4">{selectedComponent}</h2>
            <div className="prose dark:prose-invert max-w-none">
                <p>
                    This is the preview and documentation content area for <strong>{selectedComponent}</strong>. Add demos,
                    code snippets, usage instructions, and anything else here.
                </p>
                {/* Example preview placeholder */}
                <div className="mt-6 border border-gray-300 dark:border-gray-700 rounded p-4 bg-background">
                    Preview or live demo for <code>{selectedComponent}</code> goes here.
                </div>
            </div>
        </section>
    );
}
