"use client";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { setLanguage } from "@/redux/reducers/layout";
import { useRouter } from "next/navigation";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Globe } from "lucide-react";

const LanguageSwitcher = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const language = useSelector((state: RootState) => state.layout.language);

  const handleLanguageChange = (lang: string) => {
    dispatch(setLanguage(lang));
    router.refresh(); // Refresh page if translations are implemented
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">
          <Globe className="mr-2 w-5 h-5" />
          {language === "gu" ? "ગુજરાતી" : "English"}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        className="dark:bg-gray-800 dark:text-white bg-gray-100 text-gray-900 "
      >
        <DropdownMenuItem onClick={() => handleLanguageChange("en")}>
          🇬🇧 English
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={() => handleLanguageChange("gu")}>
          🇮🇳 ગુજરાતી
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageSwitcher;
