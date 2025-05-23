"use client";

import React from "react";
import { componentsData } from "@/data/components";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

type DocsContentProps = {
    selectedComponent: string;
};

export default function DocsContent({ selectedComponent }: DocsContentProps) {
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

    return (
        <section className="sticky top-16 h-full overflow-y-auto w-full bg-black/5 dark:bg-black/20 border-1 border-accent rounded-lg p-8 flex flex-col gap-8">
            <div className="flex flex-col gap-8">
                {/* Header */}
                <div>
                    <h2 className="text-3xl font-bold mb-2">{component.name}</h2>
                    <p className="text-muted-foreground">{component.description}</p>
                </div>

                {/* Preview Section */}
                <div className="border border-border rounded-lg p-6 bg-background">
                    <h3 className="text-xl font-semibold mb-4">Preview</h3>
                    <div className="min-h-[200px] flex items-center justify-center">
                        {component.preview ? (
                            <component.preview />
                        ) : (
                            <div className="text-muted-foreground">
                                Preview not available
                            </div>
                        )}
                    </div>
                </div>

                {/* Code Section */}
                <div className="border border-border rounded-lg overflow-hidden">
                    <h3 className="text-xl font-semibold p-6 border-b border-border">Code</h3>
                    <SyntaxHighlighter
                        language="tsx"
                        style={vscDarkPlus}
                        customStyle={{
                            margin: 0,
                            borderRadius: 0,
                            background: 'transparent'
                        }}
                    >
                        {component.code}
                    </SyntaxHighlighter>
                </div>

                {/* Usage Section */}
                <div className="border border-border rounded-lg p-6">
                    <h3 className="text-xl font-semibold mb-4">Usage</h3>
                    <div className="prose dark:prose-invert max-w-none">
                        <p>
                            To use the {component.name} component, import it and add it to your JSX:
                        </p>
                        <SyntaxHighlighter
                            language="tsx"
                            style={vscDarkPlus}
                            customStyle={{
                                margin: 0,
                                borderRadius: 0,
                                background: 'transparent'
                            }}
                        >
                            {`import { ${component.name} } from "@/components/${component.name.toLowerCase()}";`}
                        </SyntaxHighlighter>
                    </div>
                </div>
            </div>
        </section>
    );
}
