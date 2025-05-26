import blurryBlobTSX from "../components/docs/blurry-blobs.mdx"
import halftoneBackground from "../components/docs/halftone-bg.mdx";
import glowButton from "../components/docs/glow-button.mdx"

export interface CodeSnippet {
  language: string; // e.g., 'tsx', 'js', 'html'
  content: unknown; // TODO: Replace with proper MDX type
}

export interface ComponentDoc {
  id: string;
  name: string;
  description: string;
  category: 'backgrounds' | 'buttons' | 'cursor interactive' | 'inputs' | 'code';
  usage?: CodeSnippet;
  code?: CodeSnippet;
  active:boolean
}
export const categories = ['backgrounds', 'buttons', 'cursor interactive', 'inputs'];

export const componentsData: ComponentDoc[] = [
  {
    id: 'blurry-blobs',
    name: 'Blurry Blobs',
    description: 'A beautiful animated background component that creates organic, flowing blob shapes with customizable colors and opacity.',
    category: 'backgrounds',
    active:true,
    code: {
      language: 'tsx',
      content: blurryBlobTSX,
    },
  },
  {
    id: 'halftone-bg',
    name: 'Halftone Background',
    description: 'Animated halftone background with smooth, dynamic dots that react to mouse movement. Customizable colors and opacity.',
    category: 'backgrounds',
    active:true,
    code: {
      language: 'tsx',
      content: halftoneBackground,
    },
  },
  {
    id: 'glow-button',
    name: 'Glow Button',
    description: 'A customizable button component with a beautiful glow effect.',
    category: 'buttons',
    active:true,
    code: {
      language: 'tsx',
      content: glowButton,
    },
  },
  {
    id: 'custom-cursor',
    name: 'Custom Cursor',
    description: 'A customizable cursor component that replaces the default cursor with an interactive, animated version.',
    category: 'cursor interactive',
    active:false,
  },
  {
    id: 'scroll-select',
    name: 'Scroll Select',
    active:false,
    description: 'A scrollable selection component that allows users to choose from a list of options with smooth animations.',
    category: 'inputs'
  },
  {
    id: 'sentence-form',
    name: 'Sentence Form',
    active:false,
    description: 'A form component that creates a natural language sentence from user selections.',
    category: 'inputs'
  }
]; 