"use client";
import { Check, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandGroup,
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
          className=" justify-center gap-2 bg-transparent hover:bg-white text-black"
        >
          {value || "Select Type"}
          <ChevronDown size={36} strokeWidth={3} />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[140px] bg-gray-300 text-black p-0">
        <Command>
          <CommandList>
            <CommandGroup>
              <CommandItem
                value="most popular"
                onSelect={() => {
                  setValue("Most Popular");
                  setOpen(false);
                }}
                className="hover:bg-gray-200 text-black cursor-pointer"
              >
                Most Popular
                <Check
                  className={cn(
                    "ml-auto",
                    value === "most popular" ? "opacity-100" : "opacity-0"
                  )}
                />
              </CommandItem>
              <CommandItem
                value="most relevant"
                onSelect={() => {
                  setValue("Most Relevant");
                  setOpen(false);
                }}
                className="hover:bg-gray-200 text-black cursor-pointer"
              >
                Most Relevant
                <Check
                  className={cn(
                    "ml-auto",
                    value === "most relevant" ? "opacity-100" : "opacity-0"
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
