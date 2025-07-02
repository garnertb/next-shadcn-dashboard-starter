'use client';
import { cn } from '@/lib/utils';
import { useCallback } from 'react';

const predefinedColors = [
  '#2563eb', // Blue
  '#ca8a04', // Amber
  '#16a34a', // Green
  '#dc2626', // Red
  '#7c3aed', // Violet
  '#db2777', // Pink
  '#ea580c', // Orange
  '#0891b2', // Cyan
  '#4b5563', // Gray
  '#64748b', // Slate
];

interface ColorPickerProps {
  selectedColor: string;
  onColorChange: (color: string) => void;
}

export function ColorPicker({ selectedColor, onColorChange }: ColorPickerProps) {
  const handleColorSelect = useCallback(
    (color: string) => {
      onColorChange(color);
    },
    [onColorChange]
  );

  return (
    <div className="flex flex-wrap gap-2 mt-2">
      {predefinedColors.map((color) => (
        <button
          key={color}
          type="button"
          className={cn(
            'w-6 h-6 rounded-full cursor-pointer transition-all hover:scale-110',
            selectedColor === color && 'ring-2 ring-offset-2'
          )}
          style={{ backgroundColor: color }}
          onClick={() => handleColorSelect(color)}
          aria-label={`Select color ${color}`}
        />
      ))}
    </div>
  );
}