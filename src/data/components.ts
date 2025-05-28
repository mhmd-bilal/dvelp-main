import blurryBlobTSX from "../components/docs/blurry-blobs.mdx"
import halftoneBackground from "../components/docs/halftone-bg.mdx";
import glowButton from "../components/docs/glow-button.mdx"
// import customCursor from "../components/docs/custom-cursor.mdx"
import sentenceForm from "../components/docs/sentence-form.mdx"
import scrollAccordion from "../components/docs/scroll-accordion.mdx"

export interface CodeSnippet {
  language: string; // e.g., 'tsx', 'js', 'html'
  content: string | unknown; // TODO: Replace with proper MDX type
}

export interface ComponentDoc {
  id: string;
  name: string;
  description: string;
  category: 'backgrounds' | 'buttons' | 'cursor interactive' | 'inputs' | 'code' | 'disclosure';
  usage?: CodeSnippet;
  code?: CodeSnippet;
  active:boolean
}
export const categories = ['backgrounds', 'buttons', 'cursor interactive', 'inputs'];

export const componentsData: ComponentDoc[] = [
  {
    id: 'blurry-blobs',
    name: 'Blurry Blobs',
    description: 'Create mesmerizing, organic blob animations that flow and morph with mouse interactions. Perfect for adding depth and movement to your UI.',
    category: 'backgrounds',
    active:true,
    code: {
      language: 'tsx',
      content: blurryBlobTSX,
    },
    usage: {
      language: 'tsx',
      content: `<BlurryBlobs
  className="custom-blob-bg"
  colors={['#ff6f61', '#ffb347', '#6b5b95']} // warm, playful palette
  enableMouseInteraction={true}
  animationSpeed={2} // twice as fast as default
/>`
    },
  },
  {
    id: 'halftone-bg',
    name: 'Halftone Background',
    description: 'Transform your UI with dynamic halftone dots that dance and react to mouse movement. A modern take on the classic print technique.',
    category: 'backgrounds',
    active:true,
    code: {
      language: 'tsx',
      content: halftoneBackground,
    },
    usage: {
      language: 'tsx',
      content: `<HalftoneBackground
  bgColor="#0f172a"
  dotsColor="#38bdf8"
  textColor="#ffffff"
  dotSpacing={30}
  dotRadius={2}
  influenceRadius={100}
  maxScale={3}
/>`
    },
  },
  {
    id: 'glow-button',
    name: 'Glow Button',
    description: 'Elevate your CTAs with buttons that radiate energy. Multiple variants with stunning glow effects that make your interface pop.',
    category: 'buttons',
    active:true,
    code: {
      language: 'tsx',
      content: glowButton,
    },    
    usage: {
      language: 'tsx',
      content: `<GlowButton variant="glow">Glow Button</GlowButton>
<GlowButton variant="outlineGlow">Outline</GlowButton>
<GlowButton variant="successGlow">Success</GlowButton>
<GlowButton variant="destructiveGlow">Destructive</GlowButton>
<GlowButton variant="linkGlow">Link</GlowButton>`
    },

  }, {
  id: 'sentence-form',
  name: 'Sentence Form',
  active: true,
  description: 'Transform traditional forms into natural conversations. Let users fill out forms by completing sentences, making data collection feel more human.',
  category: 'inputs',
  code: {
    language: 'tsx',
    content: sentenceForm,
  },
  usage: {
    language: 'tsx',
    content: `const eventTemplate = \`I would like to book {eventType:type:select,placeholder:event type,options:Wedding|Birthday Party|Corporate Event|Conference,required:true,icon:calendar} for {guestCount:type:number,placeholder:number,required:true,icon:users} guests on {date:type:date,placeholder:select date,required:true,icon:calendar} at {location:type:text,placeholder:venue location,required:true,icon:location}. My budget is around {budget:type:text,placeholder:amount,icon:dollar} and I can be reached at {email:type:email,placeholder:your email,required:true,icon:mail}.\`;
<SentenceForm
  template={eventTemplate}
  onSubmit={(data) => {
      setEventData(data);
  }}
  submitText="Book Event"
/>`,
  },
},{
  id: 'scroll-accordion',
  name: 'Scroll Accordion',
  active: true,
  description: 'An immersive accordion that reveals content as you scroll, with smooth color transitions and elegant animations. Perfect for storytelling and documentation. Click on the questions to trigger the scroll.',
  category: 'disclosure',
  code: {
    language: 'tsx',
    content: scrollAccordion,
  },
  usage: {
    language: 'tsx',
    content: `const sampleItems = [
  {
    question: "What makes it unique?",
    answer:
      "It auto-opens on scroll with smooth background transitions, creating an engaging, animated experience.",
  },
  {
    question: "How does it work?",
    answer:
      "It uses Intersection Observer to detect scroll position and trigger animations as items reach the center.",
  },
  {
    question: "Can I customize it?",
    answer:
      "Yes — pass in your own questions and answers, and set custom gradient colors for background transitions.",
  },
  {
    question: "Is it responsive?",
    answer:
      "Absolutely. It's touch-friendly, mobile-optimized, and buttery-smooth across all screen sizes.",
  },
];

<div className="mask-fade blur-fade">
  <div className="flex flex-col items-center justify-center pt-8">
    <p className="text-white/90 text-xl font-medium mb- text-center">
      Click and read through with focus
    </p>
  </div>
  <div className="accordion-container">
    <ScrollAccordion items={sampleItems} />
  </div>
</div>`,
  },
},
//   {
//     id: 'custom-cursor',
//     name: 'Custom Cursor',
//     description: 'A customizable cursor component that replaces the default cursor with an interactive, animated version.',
//     category: 'cursor interactive',
//     active:false,
//      code: {
//       language: 'tsx',
//       content: customCursor,
//     },    
//     usage: {
//       language: 'tsx',
//       content: `<HoverCard
//   variant="dark"
//   className="p-6"
//   cursorIcon={MousePointer2}
//   labelText="Your custom text!"
// >
//   <div>Your content here</div>
// </HoverCard>`
//     },
//   },
  // {
  //   id: 'scroll-select',
  //   name: 'Scroll Select',
  //   active:false,
  //   description: 'A scrollable selection component that allows users to choose from a list of options with smooth animations.',
  //   category: 'inputs'
  // }

]; 