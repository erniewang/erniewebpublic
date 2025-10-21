import React from "react";

export interface BlogPost {
  title: string;
  date: string;
  contentPreview: React.ReactNode;
  contentRest: React.ReactNode;
}

export const sampleBlogs: BlogPost[] = [
  {
    title: "Building My First Portfolio Website",
    date: "2024-01-15",
    contentPreview: (
      <p>
        After months of planning and learning, I finally launched my personal
        portfolio website! This project has been an incredible journey of growth
        and discovery.
      </p>
    ),
    contentRest: (
      <div className="space-y-4">
        <p>
          I chose to build it with <strong>React</strong> and{" "}
          <strong>TypeScript</strong>, diving deep into component-based
          architecture and reusability. Along the way, I experimented with{" "}
          <em>Tailwind CSS</em> for styling and <em>Framer Motion</em> for
          animations — both of which helped me bring the design to life.
        </p>

        <h3 className="text-xl font-semibold mt-4">🔧 Tech Stack & Tools</h3>
        <ul className="list-disc list-inside space-y-1">
          <li>React + TypeScript for structured, scalable code</li>
          <li>Tailwind CSS for rapid and responsive styling</li>
          <li>Vite for ultra-fast development and bundling</li>
          <li>Framer Motion for animations</li>
          <li>GitHub Pages for simple deployment</li>
        </ul>

        <p>
          During development, I ran into countless little bugs: styling issues,
          layout shifts, hydration warnings, and typing mismatches. Each one was
          a learning moment — forcing me to slow down, think critically, and
          understand <em>why</em> something was breaking rather than patching it
          blindly.
        </p>

        <h3 className="text-xl font-semibold mt-4">💡 Lessons Learned</h3>
        <p>
          The biggest takeaway was understanding <strong>component
          composition</strong> — how to split UI into small, logical pieces that
          work together cleanly. TypeScript also taught me how to think more
          defensively: adding types early prevented dozens of runtime bugs.
        </p>

        <blockquote className="border-l-4 border-blue-400 pl-4 italic text-gray-200">
          “Your portfolio isn’t just a website — it’s your story, told through
          code.”
        </blockquote>

        <p>
          Another huge milestone was integrating responsive design. I learned
          how to use <code>flex</code> and <code>grid</code> intelligently, how
          to optimize images for mobile devices, and how to manage dark mode
          with Tailwind’s theme utilities.
        </p>

        <p>
          I plan to keep evolving this site — adding a blog CMS, a project
          showcase filter, dark/light themes, and maybe even some interactive
          3D visuals using <code>react-three-fiber</code>. This site is my
          creative sandbox.
        </p>

        <p>
          Looking back, the process wasn’t just about making something pretty.
          It taught me consistency, patience, and pride in small details. Each
          commit represented progress — and that’s the real reward. 🚀
        </p>
      </div>
    ),
  },

  {
    title: "The Art of Photography: Capturing Life's Moments",
    date: "2024-01-10",
    contentPreview: (
      <p>
        Photography has become more than just a hobby for me—it's a way of
        seeing the world differently. Every shot tells a story, and I love how a
        single moment can convey so much emotion.
      </p>
    ),
    contentRest: (
      <div className="space-y-4">
        <p>
          Photography pushes me to slow down and <em>really look</em>. It’s
          about light, texture, emotion — but also patience. I’ve learned that
          the best shots come when you least expect them.
        </p>

        <h3 className="text-xl font-semibold">📸 Favorite Photography Styles</h3>
        <ul className="list-disc list-inside space-y-1">
          <li>Long exposure night cityscapes 🌃</li>
          <li>Macro photography of everyday objects</li>
          <li>Street photography capturing real human stories</li>
          <li>Black and white portraits</li>
        </ul>

        <p>
          Editing is a crucial part of the process. I use Lightroom and
          occasionally Photoshop for touch-ups, but I try to keep the natural
          feel intact. A well-balanced contrast and soft vignette often do the
          trick.
        </p>

        <blockquote className="border-l-4 border-yellow-400 pl-4 italic text-gray-300">
          “Good photography isn’t about the camera. It’s about how you see.”
        </blockquote>

        <p>
          Over time, I’ve developed a routine: scouting for interesting light,
          experimenting with composition, and then editing in small iterative
          passes rather than all at once. This keeps me from overprocessing
          photos and helps maintain realism.
        </p>

        <p>
          In 2024, I plan to start a photography blog that shares behind-the-
          scenes insights — camera settings, lighting setups, and the stories
          behind my favorite shots. Each photo, after all, is part of a larger
          narrative.
        </p>
      </div>
    ),
  },

  {
    title: "Music Production: From Idea to Finished Track",
    date: "2024-01-05",
    contentPreview: (
      <p>
        Creating music is like painting with sound. Each track starts with a
        simple idea—maybe a melody that gets stuck in your head, or a rhythm
        that makes you want to move.
      </p>
    ),
    contentRest: (
      <div className="space-y-4">
        <p>
          My setup is modest: a MIDI keyboard, a pair of studio headphones, and
          a digital audio workstation (DAW). But what matters most isn’t the
          gear — it’s the creative process.
        </p>

        <h3 className="text-xl font-semibold">🎧 My Production Workflow</h3>
        <ol className="list-decimal list-inside space-y-1">
          <li>Start with a melody or chord progression</li>
          <li>Lay down drums to establish rhythm</li>
          <li>Add bass and harmonic textures</li>
          <li>Mix and balance all layers carefully</li>
          <li>Master for clarity and loudness</li>
        </ol>

        <p>
          I’ve started using references from professional mixes to compare my
          own tracks — this helps me hear tonal balance issues I’d normally
          miss. The difference it makes in the mastering stage is incredible.
        </p>

        <blockquote className="border-l-4 border-pink-400 pl-4 italic text-gray-300">
          “A great mix should sound alive — dynamic, emotional, and clear.”
        </blockquote>

        <p>
          I’m also experimenting with ambient textures, field recordings, and
          modular synth plugins. These small sonic layers give tracks a sense of
          place — a personality of their own.
        </p>

        <p>
          The hardest part is finishing. I used to have dozens of half-done
          ideas collecting dust. Now, I schedule “finishing sessions” where I
          force myself to wrap up a track no matter how imperfect it feels. The
          goal: create momentum.
        </p>
      </div>
    ),
  },

  {
    title: "Learning New Technologies: My Approach",
    date: "2023-12-28",
    contentPreview: (
      <p>
        Technology moves fast, and keeping up can feel overwhelming. Over the
        years, I've developed a systematic approach to learning new technologies
        that works well for me.
      </p>
    ),
    contentRest: (
      <div className="space-y-4">
        <p>
          Whenever I explore a new framework or language, I focus on
          <strong> three pillars: purpose, fundamentals, and practice</strong>.
          Understanding *why* the technology exists helps me avoid surface-level
          learning.
        </p>

        <h3 className="text-xl font-semibold">🧠 My Learning Strategy</h3>
        <ul className="list-disc list-inside space-y-1">
          <li>Start with official documentation — always</li>
          <li>Build tiny proof-of-concept projects</li>
          <li>Join online communities and ask questions early</li>
          <li>Teach what I’ve learned through writing or demos</li>
        </ul>

        <p>
          I use a “learn → build → explain” cycle. I learn a topic, implement a
          mini-project, and then explain it to someone (or to my future self in
          writing). This process cements understanding far better than passive
          reading ever could.
        </p>

        <blockquote className="border-l-4 border-green-400 pl-4 italic text-gray-300">
          “Consistency beats intensity every single time.”
        </blockquote>

        <p>
          I’ve recently been applying this approach to <strong>Rust</strong> and
          backend architecture — understanding concurrency and systems design
          through small, digestible experiments. It’s a humbling but rewarding
          process.
        </p>

        <p>
          Next up on my list: WebAssembly, GraphQL, and deeper dives into
          distributed systems. The goal isn’t to know everything — it’s to stay
          curious. 🔥
        </p>
      </div>
    ),
  },

  {
    title: "Reflections on 2023: A Year of Growth",
    date: "2023-12-20",
    contentPreview: (
      <p>
        As 2023 comes to a close, I find myself reflecting on the incredible
        journey this year has been. It's been a year of challenges, learning,
        and personal growth.
      </p>
    ),
    contentRest: (
      <div className="space-y-4">
        <p>
          This year was transformative. I learned how to code professionally,
          started freelancing, and discovered new passions in photography and
          music production.
        </p>

        <h3 className="text-xl font-semibold">🌟 Highlights</h3>
        <ul className="list-disc list-inside space-y-1">
          <li>Completed multiple full-stack projects</li>
          <li>Started this very blog 🚀</li>
          <li>Grew a small developer community</li>
          <li>Learned to balance creativity and productivity</li>
        </ul>

        <p>
          I also learned that burnout is real — and that rest is part of the
          process. Taking time away from screens helped me think clearly again.
        </p>

        <blockquote className="border-l-4 border-purple-400 pl-4 italic text-gray-300">
          “Slow growth is still growth. Don’t rush your story.”
        </blockquote>

        <p>
          Another major realization was that progress often looks boring. It’s
          the quiet hours debugging, reading, and iterating that truly build
          expertise. I learned to value that grind more than the highlight
          moments.
        </p>

        <p>
          Looking ahead, I want to focus on deeper projects that combine my
          interests — like building an interactive photography portfolio with
          generative soundscapes. Tech meets art. That’s the direction I’m
          chasing.
        </p>
      </div>
    ),
  },

  {
    title: "The Importance of Side Projects",
    date: "2023-12-10",
    contentPreview: (
      <p>
        Side projects have been one of the most valuable aspects of my learning
        journey. They provide a safe space to experiment, make mistakes, and
        discover new interests.
      </p>
    ),
    contentRest: (
      <div className="space-y-4">
        <p>
          Side projects are my playground for creativity. They let me try out
          new frameworks, APIs, and libraries without deadlines or stakeholder
          pressure.
        </p>

        <h3 className="text-xl font-semibold">⚙️ Benefits of Side Projects</h3>
        <ul className="list-disc list-inside space-y-1">
          <li>Freedom to experiment</li>
          <li>Hands-on learning through trial and error</li>
          <li>Portfolio growth with real results</li>
          <li>Confidence to apply skills in production settings</li>
        </ul>

        <blockquote className="border-l-4 border-orange-400 pl-4 italic text-gray-300">
          “You learn the most when no one’s watching.”
        </blockquote>

        <p>
          My current side project is this very portfolio — built from scratch in
          React, TypeScript, and Tailwind CSS. I’ve integrated blog rendering,
          animations, and even experimented with framer-motion transitions.
        </p>

        <p>
          Side projects also help me find flow. There’s no pressure — just pure
          curiosity. That’s when the best ideas appear. I’ve built small weather
          apps, generative art tools, and even a MIDI visualizer.
        </p>

        <p>
          Next, I want to expand the blog to pull content from Markdown files or
          a CMS like Sanity, so updating posts becomes easier. Eventually, I’d
          love to open-source it for others to learn from.
        </p>
      </div>
    ),
  },
];
