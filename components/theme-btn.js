"use client";
import * as React from "react";
import { Sun, Moon, Laptop } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

function ModeToggle() {
  const themes = ["system", "dark", "light"];
  const [themeIndex, setThemeIndex] = React.useState(0);
  const { setTheme, theme } = useTheme();

  React.useEffect(() => {
    setTheme("system");
    setThemeIndex(0);
  }, []);

  const handleClick = () => {
    const nextIndex = (themeIndex + 1) % themes.length;
    setTheme(themes[nextIndex]);
    setThemeIndex(nextIndex);
  };

  let icon = null;
  if (themes[themeIndex] === "system") {
    icon = <Laptop className="h-7 w-7 font-bold" />;
  } else if (themes[themeIndex] === "dark") {
    icon = <Moon className="h-7 w-7 font-bold" />;
  } else {
    icon = <Sun className="h-7 w-7 font-bold" />;
  }

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={handleClick}
      aria-label="Toggle theme"
      className="flex items-center justify-center"
    >
      {icon}
    </Button>
  );
}

export default ModeToggle;