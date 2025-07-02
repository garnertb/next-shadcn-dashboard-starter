'use client';
import { DotsHorizontalIcon } from '@radix-ui/react-icons';
import * as React from 'react';

import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle
} from '@/components/ui/alert-dialog';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import { useTaskStore } from '../utils/store';
import { UniqueIdentifier } from '@dnd-kit/core';
import { Input } from '@/components/ui/input';
import { toast } from 'sonner';
import { ColorPicker } from './color-picker';

export function ColumnActions({
  title,
  id,
  color
}: {
  title: string;
  id: UniqueIdentifier;
  color?: string;
}) {
  const [name, setName] = React.useState(title);
  const [currentColor, setCurrentColor] = React.useState(color || '#64748b');
  const updateCol = useTaskStore((state) => state.updateCol);
  const removeCol = useTaskStore((state) => state.removeCol);
  const [editDisable, setIsEditDisable] = React.useState(true);
  const [showDeleteDialog, setShowDeleteDialog] = React.useState(false);
  const [showColorPicker, setShowColorPicker] = React.useState(false);
  const inputRef = React.useRef<HTMLInputElement>(null);

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setIsEditDisable(!editDisable);
          setShowColorPicker(false);
          updateCol(id, name, currentColor);
          toast(`${title} updated to ${name}`);
        }}
      >
        <div className="flex items-center">
          <Input
            value={name}
            onChange={(e) => setName(e.target.value)}
            className='mt-0! mr-auto text-base disabled:cursor-pointer disabled:border-none disabled:opacity-100'
            disabled={editDisable}
            ref={inputRef}
          />
          {!editDisable && (
            <div 
              className="w-5 h-5 ml-2 rounded-full cursor-pointer"
              style={{ backgroundColor: currentColor }}
              onClick={() => setShowColorPicker(!showColorPicker)}
            />
          )}
        </div>
        {showColorPicker && !editDisable && (
          <div className="absolute z-50 mt-2 p-2 bg-background rounded-md shadow-lg border">
            <ColorPicker 
              selectedColor={currentColor}
              onColorChange={setCurrentColor}
            />
          </div>
        )}
      </form>
      <DropdownMenu modal={false}>
        <DropdownMenuTrigger asChild>
          <Button variant='secondary' className='ml-1'>
            <span className='sr-only'>Actions</span>
            <DotsHorizontalIcon className='h-4 w-4' />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align='end'>
          <DropdownMenuItem
            onSelect={() => {
              setIsEditDisable(!editDisable);
              setTimeout(() => {
                inputRef.current && inputRef.current?.focus();
              }, 500);
            }}
          >
            Rename
          </DropdownMenuItem>
          <DropdownMenuItem
            onSelect={() => {
              setIsEditDisable(false);
              setShowColorPicker(true);
            }}
          >
            Change Color
          </DropdownMenuItem>
          <DropdownMenuSeparator />

          <DropdownMenuItem
            onSelect={() => setShowDeleteDialog(true)}
            className='text-red-600'
          >
            Delete Section
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <AlertDialog open={showDeleteDialog} onOpenChange={setShowDeleteDialog}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>
              Are you sure want to delete column?
            </AlertDialogTitle>
            <AlertDialogDescription>
              NOTE: All tasks related to this category will also be deleted.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <Button
              variant='destructive'
              onClick={() => {
                // yes, you have to set a timeout
                setTimeout(() => (document.body.style.pointerEvents = ''), 100);

                setShowDeleteDialog(false);
                removeCol(id);
                toast('This column has been deleted.');
              }}
            >
              Delete
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}