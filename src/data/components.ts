export interface ComponentDoc {
  id: string;
  name: string;
  description: string;
  code: string;
  preview?: React.ComponentType;
  category: 'ui' | 'animation' | 'layout';
}

export const componentsData: ComponentDoc[] = [
  {
    id: 'blurry-blobs',
    name: 'BlurryBlobs',
    description: 'A beautiful animated background component that creates organic, flowing blob shapes with customizable colors and opacity.',
    code: `// Example usage
<BlurryBlob
  className="absolute top-10 left-10"
  firstBlobColor="bg-yellow-400"
  secondBlobColor="bg-red-200"
/>`,
    category: 'animation'
  },
  {
    id: 'custom-cursor',
    name: 'CustomCursor',
    description: 'A customizable cursor component that replaces the default cursor with an interactive, animated version.',
    code: `// Example usage
<CustomCursor
  color="blue"
  size={20}
  trail={true}
/>`,
    category: 'ui'
  },
  {
    id: 'scroll-select',
    name: 'ScrollSelect',
    description: 'A scrollable selection component that allows users to choose from a list of options with smooth animations.',
    code: `// Example usage
<ScrollSelect
  options={['Option 1', 'Option 2', 'Option 3']}
  onChange={(value) => console.log(value)}
/>`,
    category: 'ui'
  },
  {
    id: 'sentence-form',
    name: 'SentenceForm',
    description: 'A form component that creates a natural language sentence from user selections.',
    code: `// Example usage
<SentenceForm
  template="I want to {action} {target}"
  actions={['build', 'design', 'create']}
  targets={['website', 'app', 'dashboard']}
/>`,
    category: 'ui'
  }
]; 