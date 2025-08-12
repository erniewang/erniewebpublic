export interface Project {
    title: string;
    tech: string;
    description: string[];  // Array of HTML strings (supports basic tags like <b>, <i>)
    colorPalette: string[];  // Array of "hsl(h, s%, l%)" strings
    images: string[];  // URLs or paths to images
}
  
export const projectData: Project[] = [
    {
        title: "Harmonizer | Har.MXL",
        tech: "Python Music21 FastAPI",
        description: [
            "Har.MXL is a web application that harmonizes MusicXML melodies using FastAPI and advanced music theory algorithms, ensuring each note follows classical and jazz conventions. It uses a large JSON ruleset of chord combinations inspired by everything from Bach chorales to Bill Evans voicings.",
            "Users can store favorite harmonization styles in IndexedDB, create presets, and adjust complexity. The backend supports large file uploads, async processing, and WebSocket collaboration for real-time harmonization.",
            "A chord progression analysis engine applies graph theory and dynamic programming to suggest stylistically consistent continuations. The frontend offers a drag-and-drop interface for auditioning harmonization options.",
            "Performance optimizations include Redis caching and Web Workers for fast analysis, processing a pop song in under 2 seconds. Error handling gracefully addresses malformed files and harmonic ambiguities."
        ],
        colorPalette: [
            "hsl(220, 85%, 85%)",
            "hsl(220, 75%, 80%)",
            "hsl(220, 65%, 75%)"
        ],
        images: []
    },
    {
        title: "CV-Tuner | Resume Tuner",
        tech: "React NextJS LLMs Flask",
        description: [
            "Built a React app where students search for classes and get GPT-powered recommendations using custom embedding models. It analyzes degree requirements, prerequisites, professor ratings, and scheduling conflicts.",
            "Data is processed into embeddings via sentence transformers, then filtered with cosine similarity before GPT refines results. The system adapts suggestions based on seat availability and other live factors.",
            "Architecture includes Next.js SSR, Redux Toolkit, PostgreSQL, custom hooks, infinite scrolling, and a rate-limited, cached backend. Agile practices ensured consistent delivery.",
            "A topological sorting algorithm detects circular dependencies and suggests alternate course paths. Performance is optimized with Redis caching, connection pooling, and edge caching for peak loads."
        ],
        colorPalette: [
            "hsl(140, 75%, 85%)",
            "hsl(140, 65%, 80%)",
            "hsl(140, 55%, 75%)"
        ],
        images: []
    },
    {
        title: "Jottling Start",
        tech: "React Python",
        description: [
            "Created a sentiment analysis model predicting CD 'awesomeness' from Amazon reviews, reaching 76% accuracy through feature engineering and ensemble methods. Analyzed over 100,000 music reviews for linguistic patterns.",
            "Data preprocessing cleaned messy reviews, removed duplicates, and normalized text. Feature engineering included TF-IDF, Word2Vec, sentiment polarity, and reviewer credibility scores.",
            "Experimented with Naive Bayes, Random Forest, SVM, and Gradient Boosting, with hyperparameter tuning and stratified k-fold validation. LIME explained model predictions.",
            "Deployed via a Flask API with input validation, logging, and parallel processing for batch predictions. Optimized with vectorized operations and memory-efficient data structures."
        ],
        colorPalette: [
            "hsl(15, 85%, 85%)",
            "hsl(15, 75%, 80%)",
            "hsl(15, 65%, 75%)"
        ],
        images: []
    },
    {
        title: "D2M | Dance 2 Music",
        tech: "P5.js LLMS Vampnet",
        description: [
            "D2M turns your movements into music using PoseNet for pose capture and VampNet for AI-driven generation. It analyzes joint angles and movement patterns to create music in real time.",
            "Pose data streams through smoothing algorithms and music theory heuristics before reaching the audio model. React hooks manage WebGL rendering, audio context, and pose estimation pipelines.",
            "VampNet maps body movements to chord, percussion, and melodic changes while keeping harmonic coherence. Web Workers and AudioWorklets ensure low-latency performance.",
            "A bidirectional feedback loop lets visuals influence the dancer’s movement. Multiple dancers can perform simultaneously, each contributing to a harmonic blend."
        ],
        colorPalette: [
            "hsl(270, 75%, 85%)",
            "hsl(270, 65%, 80%)",
            "hsl(270, 55%, 75%)"
        ],
        images: []
    },
    {
        title: "LoopAI | Looper Ai Music",
        tech: "Tone.js NextJS Python",
        description: [
            "At G2i, evaluated LLM outputs for ethical considerations, bias, clarity, and factual accuracy. Feedback improved model reliability across diverse applications.",
            "Ensured factual accuracy by implementing verification protocols and evaluation rubrics. Designed quality assurance tools and frameworks for multiple output types.",
            "Developed bias detection protocols across demographic, linguistic, and cultural contexts. Collaborated with ethicists to refine evaluation criteria.",
            "Analyzed model failures, proposed new evaluation categories, and improved training data pipelines to enhance AI alignment."
        ],
        colorPalette: [
            "hsl(160, 85%, 85%)",
            "hsl(160, 75%, 80%)",
            "hsl(160, 65%, 75%)"
        ],
        images: []
    },
    {
        title: "This Webpage!",
        tech: "React Tailwind",
        description: [
            "Built this portfolio with React, TypeScript, and Tailwind CSS, focusing on responsive design, performance, and reusable architecture.",
            "Implemented custom CSS configs, advanced breakpoints, and accessible color schemes. Styling meets contrast and keyboard navigation standards.",
            "Used context providers, custom hooks, lazy loading, and error boundaries for robust performance. TypeScript ensures type safety.",
            "Deployed with GitHub Actions, optimized builds, service workers, and perfect Lighthouse scores. Components are tested with Jest and RTL."
        ],
        colorPalette: [
            "hsl(300, 85%, 85%)",
            "hsl(300, 75%, 80%)",
            "hsl(300, 65%, 75%)"
        ],
        images: []
    },
    {
        title: "Timeality | Productivity Tracker",
        tech: "Graph.js",
        description: [
            "Chrome extension tracking detailed user interactions like mouse, keyboard, scrolls, and focus time for productivity analysis.",
            "Processes event streams locally with anonymization. Graph.js and D3.js visualize patterns like peak hours and distraction triggers.",
            "Features intelligent break recommendations, goal setting, and predictive analytics for focus optimization.",
            "Implements debouncing, efficient structures, and privacy controls for smooth real-time tracking."
        ],
        colorPalette: [
            "hsl(290, 75%, 85%)",
            "hsl(290, 65%, 80%)",
            "hsl(290, 55%, 75%)"
        ],
        images: []
    },
    {
        title: "LSD Simulator | Chrome Extension",
        tech: "javascript",
        description: [
            "Experimental extension applying psychedelic visual effects via CSS transforms, WebGL shaders, and canvas manipulation.",
            "Effects include gradients, geometric patterns, and visual distortions while preserving usability. Layers can be customized.",
            "Audio visualization syncs visuals with sound; controls allow intensity adjustment. Content-aware algorithms adapt effects per site.",
            "Includes safety features like seizure prevention and override controls, blending creative coding with perception research."
        ],
        colorPalette: [
            "hsl(290, 75%, 85%)",
            "hsl(290, 65%, 80%)",
            "hsl(290, 55%, 75%)"
        ],
        images: []
    },
    {
        title: "Saxophone Performance",
        tech: "Audio Recording",
        description: [
            "Portfolio of performances across saxophone types, spanning classical, jazz, and experimental styles. Demonstrates decades of technical mastery.",
            "Covers advanced techniques like circular breathing, microtones, multiphonics, and stylistic authenticity in multiple genres.",
            "Jazz solos combine harmonic knowledge with improvisational expression, covering swing to fusion styles.",
            "Classical repertoire includes major concertos, chamber works, and extended techniques integrated with multimedia projects."
        ],
        colorPalette: [
            "hsl(20, 85%, 85%)",
            "hsl(20, 75%, 80%)",
            "hsl(20, 65%, 75%)"
        ],
        images: []
    },
    {
        title: "Composition Showcase",
        tech: "Finale MuseScore Bandlab Logic-Pro ",
        description: [
            "Portfolio of works from chamber pieces to large ensembles, blending traditional and modern compositional techniques.",
            "Includes classical, jazz, film, and experimental works with mastery of orchestration and harmonic language.",
            "Film scores integrate seamlessly with visuals, using orchestral libraries and DAWs for diverse narrative moods.",
            "Electronic works explore field recordings, synthesis, and interactive systems."
        ],
        colorPalette: [
            "hsl(20, 85%, 85%)",
            "hsl(20, 75%, 80%)",
            "hsl(20, 65%, 75%)"
        ],
        images: []
    },
    {
        title: "Curriculum Planner | Chatbot",
        tech: "Node.js ChatGPT Beautiful-Soup Selenium",
        description: [
            "Node.js chatbot scrapes Northwestern course catalogs, processes academic data, and uses ChatGPT for tailored course advice.",
            "Scraper handles dynamic content, authentication, and errors. Data is structured into knowledge graphs with semantic parsing.",
            "ChatGPT integration maintains student profiles, adapts recommendations, and preserves multi-turn context.",
            "Algorithms generate optimal course sequences for varied academic paths, considering prerequisites and constraints."
        ],
        colorPalette: [
            "hsl(140, 75%, 85%)",
            "hsl(140, 65%, 80%)",
            "hsl(140, 55%, 75%)"
        ],
        images: []
    },
    {
        title: "Music Recommender",
        tech: "Node.js ChatGPT AWS Cognito AWS S3",
        description: [
            "Music recommendation app using ChatGPT to analyze mood, lyrics, tempo, and context for personalized suggestions.",
            "Maintains evolving preference profiles, learning from history and feedback. Responses include artist and release info.",
            "AWS Cognito manages authentication; AWS S3 stores profiles, history, and analytics with secure, optimized policies.",
            "Recommendation engine combines AI models, contextual factors, and collaborative filtering with real-time performance."
        ],
        colorPalette: [
            "hsl(140, 75%, 85%)",
            "hsl(140, 65%, 80%)",
            "hsl(140, 55%, 75%)"
        ],
        images: []
    }
];
