import dynamic from 'next/dynamic';
import { IThemeColor, ITemplate } from './index.interface';

export const SYSTEM_COLORS: IThemeColor[] = [
  {
    backgroundColor: 'white',
    fontColor: '#333333',
    titleColor: '#2C446F',
    highlighterColor: '#0077B5',
    id: 1,
  },
  {
    backgroundColor: '#F9F9F9',
    fontColor: '#333333',
    titleColor: '#1A5F7A',
    highlighterColor: '#D4A373',
    id: 2,
  },
  {
    backgroundColor: 'white',
    fontColor: '#2D2D2D',
    titleColor: '#3D5A80',
    highlighterColor: '#98C1D9',
    id: 3,
  },
];

export const AVAILABLE_TEMPLATES: ITemplate = {
  modern: {
    id: 'modern',
    name: 'Modern Resume',
    thumbnail: '/templates/modern.png',
    component: dynamic(() => import('src/templates/modern/MordernTemplate'), {
      ssr: false,
    }),
  },
  professional: {
    id: 'professional',
    name: 'Professional Resume',
    thumbnail: '/templates/professional.png',
    component: dynamic(() => import('src/templates/professional/ProfessionalTemplate'), {
      ssr: false,
    }),
  },
};

export const CUSTOM_THEME_COLOR: IThemeColor = {
  backgroundColor: 'white',
  fontColor: 'black',
  titleColor: 'green',
  highlighterColor: '#ff7875',
  id: 4,
};

export const DATE_PICKER_FORMAT = 'DD/MM/YYYY';
