import React from 'react';

// FIX: Add `image` property to allow specifying an image for an experience.
export interface Experience {
  // FIX: Update icon type to accept all SVG props, including `style`, to fix type errors in App.tsx.
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
  image: string;
}

// FIX: Add optional `subtext` and `featured` properties to support more detailed item descriptions.
export interface IncludedItem {
    text: string;
    subtext?: string;
    featured?: boolean;
}