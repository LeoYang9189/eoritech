'use client';

import * as React from 'react';
import { format } from 'date-fns';
import { Calendar as CalendarIcon } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';

interface DatePickerProps {
  id?: string;
  className?: string;
  required?: boolean;
  value?: Date;
  onChange?: (date: Date | undefined) => void;
}

export function DatePicker({ 
  id, 
  className, 
  required,
  value,
  onChange 
}: DatePickerProps) {
  const [date, setDate] = React.useState<Date | undefined>(value);
  const [open, setOpen] = React.useState(false);

  // 同步外部值
  React.useEffect(() => {
    if (value !== undefined) {
      setDate(value);
    }
  }, [value]);

  const handleSelect = (newDate: Date | undefined) => {
    setDate(newDate);
    onChange?.(newDate);
    setOpen(false); // 选择后关闭弹窗
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <div className="relative">
          <Button
            id={id}
            variant="outline"
            className={cn(
              'w-full justify-start text-left font-normal',
              'bg-white/5 border-white/10 text-white hover:bg-white/10',
              !date && 'text-gray-500',
              className
            )}
            onClick={() => setOpen(true)}
            type="button" // 防止在表单中触发提交
          >
            <CalendarIcon className="mr-2 h-4 w-4" />
            {date ? format(date, 'yyyy-MM-dd') : '请选择日期'}
          </Button>
          {required && !date && (
            <div className="absolute top-0 right-0 h-full px-3 flex items-center">
              <span className="text-red-500">*</span>
            </div>
          )}
        </div>
      </PopoverTrigger>
      <PopoverContent 
        className="w-auto p-0" 
        align="start"
        sideOffset={8}
      >
        <Calendar
          mode="single"
          selected={date}
          onSelect={handleSelect}
          initialFocus
          className="rounded-md border border-white/10 bg-[#1a2236] p-3"
          classNames={{
            months: "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
            month: "space-y-4",
            caption: "flex justify-center pt-1 relative items-center text-white",
            caption_label: "text-sm font-medium",
            nav: "space-x-1 flex items-center",
            nav_button: cn(
              "h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100 text-white"
            ),
            nav_button_previous: "absolute left-1",
            nav_button_next: "absolute right-1",
            table: "w-full border-collapse space-y-1",
            head_row: "flex",
            head_cell: "text-gray-400 rounded-md w-9 font-normal text-[0.8rem]",
            row: "flex w-full mt-2",
            cell: cn(
              "relative p-0 text-center text-sm focus-within:relative focus-within:z-20",
              "first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md"
            ),
            day: cn(
              "h-9 w-9 p-0 font-normal",
              "hover:bg-blue-500/20 hover:text-white focus:bg-blue-500/20 focus:text-white",
              "text-gray-300 aria-selected:bg-blue-500 aria-selected:text-white"
            ),
            day_range_middle: "aria-selected:bg-accent aria-selected:text-accent-foreground",
            day_hidden: "invisible",
            day_disabled: "text-gray-500",
            day_range_end: "aria-selected:bg-accent aria-selected:text-accent-foreground",
            day_today: "bg-blue-500/10 text-white",
          }}
        />
      </PopoverContent>
    </Popover>
  );
} 