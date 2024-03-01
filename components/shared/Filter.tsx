"use client";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/Select";
import { formUrlQuery } from "@/lib/utils";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { ScrollArea } from "../ui/ScrollArea";

interface Props {
  filters: {
    name: string;
    value: string;
  }[];
  otherClasses?: string;
  containerClasses?: string;
  placeholder: string;
}

const Filter = ({
  filters,
  otherClasses,
  containerClasses,
  placeholder,
}: Props) => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const paramFilter = searchParams.get("filter");
  const handleUpdateParams = (value: string) => {
    const newUrl = formUrlQuery({
      params: searchParams.toString(),
      key: "filter",
      value,
    });
    router.push(newUrl, { scroll: false });
  };
  return (
    <div className={`relative ${containerClasses}`}>
      <Select
        onValueChange={handleUpdateParams}
        defaultValue={paramFilter || undefined}
      >
        <SelectTrigger
          className={`${otherClasses} body-regular light-border background-light800_dark300 text-dark500_light700 border px-5 py-2.5`}
        >
          <div className="line-clamp-1 flex gap-4">
            {placeholder.includes("Location") && (
              <Image
                src="/assets/icons/location.svg"
                alt="location"
                width={18}
                height={18}
                className="text-dark300_light900 invert-colors"
              />
            )}
            <SelectValue placeholder={placeholder} />
          </div>
        </SelectTrigger>

        <SelectContent className="text-dark500_light700 small-regular border-none bg-light-900 dark:bg-dark-300">
          <SelectGroup>
            {placeholder.includes("Location") === true ? (
              <ScrollArea className="h-72 w-48 rounded-md border">
                {filters.map((item) => (
                  <SelectItem
                    key={item.value}
                    value={item.value}
                    className="cursor-pointer focus:bg-light-800 dark:focus:bg-dark-400 "
                  >
                    {item.name}
                  </SelectItem>
                ))}
              </ScrollArea>
            ) : (
              <>
                {filters.map((item) => (
                  <SelectItem
                    key={item.value}
                    value={item.value}
                    className="cursor-pointer focus:bg-light-800 dark:focus:bg-dark-400 "
                  >
                    {item.name}
                  </SelectItem>
                ))}
              </>
            )}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
};

export default Filter;
