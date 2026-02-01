import React from "react";
import WindowControls from "#components/WindowControls";
import { techStack } from "#constants";
import windowWrapper from "#hoc/windowWrapper";
import { Check, Flag } from "lucide-react";

const Terminal = () => {
  return (
    <>
      <div id="window-header">
        <WindowControls target="terminal" />
        <h2>Tech Stack</h2>
      </div>

      <div className="techstack min-w-5xl">
        <p>
          <span className="font-bold">@piyush% </span>
          show skills
        </p>

        <div className="label">
          <p className="w-32">Category</p>
          <p>Technologies</p>
        </div>

        <ul className="content">
          {techStack.map(({ category, items }) => (
            <li key={category} className="flex items-start gap-3">
              <Check className="check mt-1" size={18} />

              <div className="flex gap-4">
                <h3 className="w-32 font-semibold">{category}</h3>
                <p className="text-sm text-muted-foreground">
                  {items.join(", ")}
                </p>
              </div>
            </li>
          ))}
        </ul>

        <div className="footnote">
          <p className="flex items-center gap-2">
            <Check size={18} /> All skills loaded successfully (100%)
          </p>

          <p className="flex items-center gap-2 text-black">
            <Flag size={14} fill="black" />
            Render time 0.2ms
          </p>
        </div>
      </div>
    </>
  );
};

const TerminalWindow = windowWrapper(Terminal, "terminal");

export default TerminalWindow;
