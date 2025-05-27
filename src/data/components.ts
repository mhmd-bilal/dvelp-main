import blurryBlobTSX from "../components/docs/blurry-blobs.mdx"
import halftoneBackground from "../components/docs/halftone-bg.mdx";
import glowButton from "../components/docs/glow-button.mdx"
import customCursor from "../components/docs/custom-cursor.mdx"
import sentenceForm from "../components/docs/sentence-form.mdx"

export interface CodeSnippet {
  language: string; // e.g., 'tsx', 'js', 'html'
  content: string | unknown; // TODO: Replace with proper MDX type
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
    usage: {
      language: 'tsx',
      content: `<BlurryBlobBackground
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
    description: 'Animated halftone background with smooth, dynamic dots that react to mouse movement. Customizable colors and opacity.',
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
    description: 'A customizable button component with a beautiful glow effect.',
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
  description: 'A form component that creates a natural language sentence from user selections.',
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
},
  {
    id: 'custom-cursor',
    name: 'Custom Cursor',
    description: 'A customizable cursor component that replaces the default cursor with an interactive, animated version.',
    category: 'cursor interactive',
    active:false,
     code: {
      language: 'tsx',
      content: customCursor,
    },    
    usage: {
      language: 'tsx',
      content: `<HoverCard
  variant="dark"
  className="p-6"
  cursorIcon={MousePointer2}
  labelText="Your custom text!"
>
  <div>Your content here</div>
</HoverCard>`
    },
  },
  {
    id: 'scroll-select',
    name: 'Scroll Select',
    active:false,
    description: 'A scrollable selection component that allows users to choose from a list of options with smooth animations.',
    category: 'inputs'
  }

]; 