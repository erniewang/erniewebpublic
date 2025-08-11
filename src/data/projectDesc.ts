export interface Project {
    title: string;
    tech: string;
    description: string[];
}
  
export const projectData: Project[] = [
    {
        title: "Harmonizer | Har.MXL",
        tech: "Javascript Python-Music21-FastAPI",
        description: [
          "Ever dreamt of effortlessly harmonizing your melodies? I built Har.MXL, a web app that takes your MusicXML (MXL) tunes and programmatically harmonizes them to perfection, all powered by FastAPI. It's like having a digital collaborator who understands harmony deep down.",
          "Under the hood, there's a massive JSON ruleset, a veritable bible of note-chord combinations and harmonization tricks. It can handle thousands of possibilities, ensuring your melodies always sound just right.",
          "I've set it up to remember your favorite harmonization styles locally in your browser. Future plans? Moving to a robust SQLite database for even more persistent and powerful preset management. This project was a constant dance of adding new features and ensuring everything stayed rock-solid through rigorous testing.",
          "The RESTful APIs I crafted ensure that your MusicXML files seamlessly flow between client and server, making the whole experience smooth and intuitive."
        ]
      },
      {
        title: "CV-Tuner | Resume Tuner",
        tech: "Javascript-React-NextJS LLMs-GPT-API",
        description: [
          "Navigating course selections can be a maze, right? I tackled that head-on by building a full-stack React application where students can search for classes and, even better, get smart recommendations from a GPT API! It's like having a personalized academic advisor, but online.",
          "To make those recommendations truly intelligent, I developed a system that processes and filters course information into embeddings. Then, using cosine similarity, I'd find the best matches for a user's query before handing it off to GPT for a final, refined suggestion. Think of it as finding the needle in a haystack, then polishing it to a shine.",
          "A key part of the magic was integrating OpenAI's function calling. This allowed the AI to dynamically adjust and improve class suggestions, making its responses incredibly accurate and relevant. It was fascinating to see the AI learn and adapt in real-time!",
          "Working on this project was a fantastic dive into an Agile Scrum environment. Collaborating with the team, we managed responsibilities, tackled challenges, and consistently hit our project milestones. It was a true team effort, and seeing it come to life was incredibly rewarding."
        ]
      },
      {
        title: "Jottling Start",
        tech: "Javascript-React Python",
        description: [
          "Who knew predicting the 'awesomeness' of a CD from Amazon reviews could be so fun? I collaborated on a machine learning model that did just that, and we hit a respectable 72% accuracy. It was a deep dive into the world of sentiment analysis, trying to capture that elusive 'awesome' factor.",
          "Data is king in machine learning, and I spent a good chunk of time cleaning and preprocessing review data using Pandas and NumPy. We structured this entire process within a Waterfall development cycle, ensuring every step was meticulously planned and executed.",
          "We didn't stop there! Through careful trimming and vectorization of the data, we managed to boost the model's performance from 61% to a solid 76% accuracy, and even saw the F1 score jump from 0.69 to 0.75. It's incredibly satisfying to see those numbers improve, knowing your efforts directly impact the model's intelligence.",
          "We explored a range of model options, including Naive Bayes, Random Forest, and Decision Trees. It was a fascinating process of evaluating each, weighing their strengths against the selected review features to find the best fit for predicting that 'awesomeness.'"
        ]
      },
      {
        title: "D2M | Dance 2 Music",
        tech: "Javascript-P5.js LLMS-Vampnet",
        description: [
          "Imagine turning your movements into music in real-time! That's exactly what I built with D2M (Dance to Music) — a web application that captures your poses using PoseNet (p5.js) and feeds them into a machine generation model (VampNet) to continuously create music. It's a truly immersive, interactive experience where your body becomes the conductor.",
          "Getting that real-time connection meant engineering precise tempo detection. I used FFT (Fast Fourier Transform) on joint velocity time-series data, leveraging JavaScript math libraries to ensure every beat and rhythm was captured with incredible precision. It was a fascinating challenge to bridge the visual and auditory worlds.",
          "The frontend isn't just pretty; it's smart. I developed adaptive controls that modulate the music model's inputs in near real-time. This meant using the most recent pose data and even incorporating music theory heuristics to ensure the generated music wasn't just random, but genuinely responsive and musically intelligent. It's an ongoing exploration of the intersection of art and AI."
        ]
      },
      {
        title: "LoopAI | Looper Ai Music",
        tech: "Javascript-Tone.js",
        description: [
          "As an Engineer for AI Training Data at G2i, I was on the front lines of improving large language models. My role involved meticulously evaluating and ranking outputs from Scale AI's LLM. This wasn't just about 'good' or 'bad' — I provided detailed feedback on everything from ethical considerations to language clarity and visual coherence. It was about shaping the future of AI responsibly.",
          "A core part of my work was ensuring factual accuracy. In the world of AI, precision matters, and I made sure responses met stringent standards to boost the model's overall performance and reliability. Every piece of feedback contributed directly to making the AI smarter and more trustworthy."
        ]
    },
    {
        title: "LSD Simulator",
        tech: "Javascript Chrome-Extension",
        description: [
            "Ever wondered what browsing the web would be like on a psychedelic trip? I built this Chrome extension that transforms any webpage into a trippy, mind-bending experience with dynamic visual effects and color shifts.",
            "The extension manipulates DOM elements in real-time, applying CSS transformations, color cycling, and animated distortions that make text wiggle, backgrounds pulse, and images breathe. It's all client-side magic with no data collection.",
            "Built as a fun exploration of browser APIs and CSS animations, this project taught me about content script injection, manifest permissions, and how to create smooth visual effects without tanking performance.",
            "Warning: Not recommended for actual productivity. Best used for entertainment or as a conversation starter about the weird things you can build with web technologies."
        ]
    },
    {
        title: "Timeality | Activity Tracker",
        tech: "Javascript Chrome-Extension",
        description: [
            "Privacy-focused productivity tracking that monitors your activity patterns without compromising your data. Timeality tracks keypress frequency, mouse movements, and click patterns to give insights into your work habits.",
            "Built with a strict no-keylogging, no-server-calls policy. All data stays local on your machine, encrypted and aggregated into meaningful productivity metrics without storing actual keystrokes or personal information.",
            "The extension provides beautiful visualizations of your activity patterns, helping identify peak productivity hours, break patterns, and focus sessions. Think of it as a fitness tracker for your digital work habits.",
            "Developed this after getting frustrated with existing time-tracking tools that either invaded privacy or required constant manual input. Sometimes the best solutions are the ones you build for yourself."
        ]
    },
    {
        title: "Resume Parser ML",
        tech: "Python Machine-Learning NLP",
        description: [
            "Automated resume parsing system that extracts structured data from PDF resumes using machine learning and natural language processing. Built to streamline recruitment processes by converting unstructured resume data into searchable, categorized information.",
            "Implemented using Python with libraries like spaCy for NLP, scikit-learn for classification, and custom regex patterns for data extraction. The system identifies sections like education, experience, skills, and contact information with high accuracy.",
            "The model was trained on a diverse dataset of resume formats and styles, achieving 92% accuracy in field extraction. It handles various layouts, fonts, and formatting styles commonly found in professional resumes.",
            "This project solved a real problem in HR workflows, reducing manual data entry time by 80% and improving candidate database quality through consistent data formatting."
        ]
    },
    {
        title: "Spotify Music Recommender",
        tech: "Node.js AWS ChatGPT-4o-mini Spotify-API",
        description: [
            "AI-powered music recommendation system that leverages ChatGPT-4o-mini to provide personalized Spotify playlist suggestions based on mood, activity, and listening history. Built with a full AWS backend infrastructure.",
            "The system integrates Spotify's Web API for playlist management, AWS RDS for user preference storage, and Cognito for secure authentication. ChatGPT analyzes user input and listening patterns to generate contextually relevant recommendations.",
            "Implemented smart caching and rate limiting to optimize API calls, reducing response times by 60% while staying within Spotify's API limits. The recommendation engine learns from user feedback to improve suggestions over time.",
            "This project showcased end-to-end cloud development skills, from serverless Lambda functions to database design, while creating a genuinely useful tool for music discovery."
        ]
    },
    {
        title: "Saxophone Performances",
        tech: "Audio-Recording Performance",
        description: [
            "A curated collection of my saxophone performances spanning jazz standards, contemporary pieces, and original interpretations. These recordings showcase technical proficiency and musical expression across different styles and contexts.",
            "Performances include solo pieces, ensemble work, and collaborations with other musicians. Each recording represents hours of practice, preparation, and artistic exploration in the jazz and classical saxophone repertoire.",
            "The collection demonstrates my understanding of musical phrasing, improvisation techniques, and the ability to adapt playing style to different musical genres and ensemble settings.",
            "While not a technical project in the traditional sense, these performances represent the same dedication to craft and continuous improvement that I bring to software development."
        ]
    },
    {
        title: "Original Compositions",
        tech: "Music-Theory Composition DAW",
        description: [
            "A portfolio of original musical compositions ranging from jazz arrangements to contemporary instrumental pieces. These works demonstrate my understanding of music theory, harmonic progression, and melodic development.",
            "Compositions are created using digital audio workstations and notation software, combining traditional music theory with modern production techniques. Each piece explores different compositional approaches and stylistic elements.",
            "The works span various genres and instrumentation, from solo piano pieces to full ensemble arrangements. They represent ongoing exploration of musical ideas and creative expression through structured composition.",
            "These compositions complement my technical work by showcasing creativity, attention to detail, and the ability to see projects through from initial concept to finished product."
        ]
    },
    {
        title: "This Webpage!",
        tech: "Javascript-React-Tailwind",
        description: [
            "Yeah, I built this thing too. It's just React with Tailwind and some sprinkled logic — nothing too fancy, but it gets the job done.",
            "Styled it up with a bit of custom CSS magic where Tailwind was lacking (looking at you, text-shadow).",
            "The main goal? Make something that doesn't look like I made it in five minutes, even though… well… maybe I did."
        ]
    }
];
