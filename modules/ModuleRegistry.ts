import React from 'react';
import { Gamepad2 } from 'lucide-react';

export type ModuleCapability = 
  | 'firebase-auth' 
  | 'firestore' 
  | 'storage' 
  | 'gemini-text' 
  | 'gemini-vision' 
  | 'voice-stt' 
  | 'voice-tts' 
  | 'local-storage';

export interface AppModule {
  id: string;
  title: string;
  description: string;
  version: string;
  author?: string;
  icon: any; 
  capabilities: ModuleCapability[]; 
  component: React.LazyExoticComponent<any>;
  addedAt: string; 
}

// Datos de ejemplo para el registro inicial
export const MODULES: AppModule[] = [
  {
    id: 'retro-snake',
    title: 'Retro Snake Game',
    description: 'Juego clásico adaptado con controles táctiles y persistencia de puntaje local.',
    version: '1.0.2',
    author: 'Demo User',
    icon: Gamepad2,
    capabilities: ['local-storage', 'voice-tts'],
    // Simulación de carga perezosa para el ejemplo
    component: React.lazy(() => Promise.resolve({ 
      default: () => React.createElement('div', { className: "p-10 text-center font-mono text-green-500 bg-black rounded-xl" }, "🐍 Módulo Snake Cargado (Placeholder)")
    })), 
    addedAt: '2025-02-12'
  }
];