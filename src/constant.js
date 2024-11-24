import { Blocks } from "lucide-react";

export const OPTIONS = [
    { label: 'nextjs', value: 'nextjs' },
    { label: 'React', value: 'react' },
    { label: 'Remix', value: 'remix' },
    { label: 'Vite', value: 'vite' },
    { label: 'Nuxt', value: 'nuxt' },
    { label: 'Vue', value: 'vue' },
    { label: 'Svelte', value: 'svelte' },
    { label: 'Angular', value: 'angular' },
    { label: 'Ember', value: 'ember', disable: true },
    { label: 'Gatsby', value: 'gatsby', disable: true },
    { label: 'Astro', value: 'astro' },
  ];
  
  export const nodeStyles = {
    default: {
      width: 200,
      border: '1px solid #ccc',
      borderRadius: '5px',
      padding: '10px',
    },
    Blocks: {
      width: 200,
      border: '1px solid #ccc',
      borderRadius: '5px',
      padding: '10px',
    },
  }
  
  export const emailTempOptions = [
    { label: 'AI Assisted - Follow Up 3', value: 'AI Assisted - Follow Up 3',name:"RE:Follow-Up" },
    { label: 'AI Assisted - Follow Up 2', value: 'AI Assisted - Follow Up 2',name:"RE:Follow-Up2" },
    { label: 'AI Assisted - Follow Up 1', value: 'AI Assisted - Follow Up 1',name:"RE:Follow-Up1" },
    { label: 'AI Assisted - Follow Up', value: 'AI Assisted - Follow Up',name:"RE:Follow-Up" },
    { label:'SalesBlink Demo', value:'SalesBlink Demo'},
  ];

  export const emailField = {
    template:"template",
    emailAs:"emailAs",
  }