"use client";
import { Check, ChevronDown, ChevronsUpDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useState } from "react";

export default function ComboBox() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
      
          role="combobox"
          aria-expanded={open}
          className="w-[170px] justify-center gap-4 bg-transparent text-white"
        >
          {value || "Select Language"}
          <ChevronDown size={36} strokeWidth={3} />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[140px] bg-gray-300 text-black p-0">
        <Command>
          <CommandList>
            <CommandEmpty>No languages found.</CommandEmpty>
            <CommandGroup>
              <CommandItem
                value="english"
                onSelect={() => {
                  setValue("English");
                  setOpen(false);
                }}
                className="hover:bg-gray-700 text-black cursor-pointer"
              >
                English
                <Check
                  className={cn(
                    "ml-auto",
                    value === "English" ? "opacity-100" : "opacity-0"
                  )}
                />
              </CommandItem>
              <CommandItem
                value="urdu"
                onSelect={() => {
                  setValue("Urdu");
                  setOpen(false);
                }}
                className="hover:bg-gray-700 text-black cursor-pointer"
              >
                Urdu
                <Check
                  className={cn(
                    "ml-auto",
                    value === "Urdu" ? "opacity-100" : "opacity-0"
                  )}
                />
              </CommandItem>
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
