"use client";

import * as React from "react";
import { Sun, Moon, Laptop } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

function ModeToggle() {
  // Theme order: dark → light → system
  const themes = ["system", "dark", "light"];
  const [themeIndex, setThemeIndex] = React.useState(0);
  const { setTheme, theme } = useTheme();

  // On mount, set default theme to dark
  React.useEffect(() => {
    setTheme("system");
    setThemeIndex(0);
    // eslint-disable-next-line
  }, []);

  // Cycle theme on button click
  const handleClick = () => {
    const nextIndex = (themeIndex + 1) % themes.length;
    setTheme(themes[nextIndex]);
    setThemeIndex(nextIndex);
  };

  // Icon logic
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