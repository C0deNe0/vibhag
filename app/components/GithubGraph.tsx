"use client";

import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { GitHubCalendar } from "react-github-calendar";

export function GithubGraph() {
  const theme = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  return (
    <div>
      <div>
        <GitHubCalendar
          username="C0deNe0"
          colorScheme={theme.theme === "dark" ? "dark" : "light"}
          //something to be done here
        />
      </div>
    </div>
  );
}
