export var projectData = {
  "projects": [
    {
      "title": "Harmonizer | Har.MXL",
      "description": [
        "Ever dreamt of effortlessly harmonizing your melodies? I built Har.MXL, a web app that takes your MusicXML (MXL) tunes and programmatically harmonizes them to perfection, all powered by FastAPI. It's like having a digital collaborator who understands harmony deep down.",
        "Under the hood, there's a massive JSON ruleset, a veritable bible of note-chord combinations and harmonization tricks. It can handle thousands of possibilities, ensuring your melodies always sound just right.",
        "I've set it up to remember your favorite harmonization styles locally in your browser. Future plans? Moving to a robust SQLite database for even more persistent and powerful preset management. This project was a constant dance of adding new features and ensuring everything stayed rock-solid through rigorous testing.",
        "The RESTful APIs I crafted ensure that your MusicXML files seamlessly flow between client and server, making the whole experience smooth and intuitive."
      ]
    },
    {
      "title": "CV-Tuner | Resume Tuner ",
      "description": [
        "Navigating course selections can be a maze, right? I tackled that head-on by building a full-stack React application where students can search for classes and, even better, get smart recommendations from a GPT API! It's like having a personalized academic advisor, but online.",
        "To make those recommendations truly intelligent, I developed a system that processes and filters course information into embeddings. Then, using cosine similarity, I'd find the best matches for a user's query before handing it off to GPT for a final, refined suggestion. Think of it as finding the needle in a haystack, then polishing it to a shine.",
        "A key part of the magic was integrating OpenAI's function calling. This allowed the AI to dynamically adjust and improve class suggestions, making its responses incredibly accurate and relevant. It was fascinating to see the AI learn and adapt in real-time!",
        "Working on this project was a fantastic dive into an Agile Scrum environment. Collaborating with the team, we managed responsibilities, tackled challenges, and consistently hit our project milestones. It was a true team effort, and seeing it come to life was incredibly rewarding."
      ]
    },
    {
      "title": "Jottling Start",
      "description": [
        "Who knew predicting the 'awesomeness' of a CD from Amazon reviews could be so fun? I collaborated on a machine learning model that did just that, and we hit a respectable 72% accuracy. It was a deep dive into the world of sentiment analysis, trying to capture that elusive 'awesome' factor.",
        "Data is king in machine learning, and I spent a good chunk of time cleaning and preprocessing review data using Pandas and NumPy. We structured this entire process within a Waterfall development cycle, ensuring every step was meticulously planned and executed.",
        "We didn't stop there! Through careful trimming and vectorization of the data, we managed to boost the model's performance from 61% to a solid 76% accuracy, and even saw the F1 score jump from 0.69 to 0.75. It's incredibly satisfying to see those numbers improve, knowing your efforts directly impact the model's intelligence.",
        "We explored a range of model options, including Naive Bayes, Random Forest, and Decision Trees. It was a fascinating process of evaluating each, weighing their strengths against the selected review features to find the best fit for predicting that 'awesomeness.'"
      ]
    },
    {
      "title": "D2M | Dance 2 Music",
      "description": [
        "Imagine turning your movements into music in real-time! That's exactly what I built with D2M (Dance to Music) — a web application that captures your poses using PoseNet (p5.js) and feeds them into a machine generation model (VampNet) to continuously create music. It's a truly immersive, interactive experience where your body becomes the conductor.",
        "Getting that real-time connection meant engineering precise tempo detection. I used FFT (Fast Fourier Transform) on joint velocity time-series data, leveraging JavaScript math libraries to ensure every beat and rhythm was captured with incredible precision. It was a fascinating challenge to bridge the visual and auditory worlds.",
        "The frontend isn't just pretty; it's smart. I developed adaptive controls that modulate the music model's inputs in near real-time. This meant using the most recent pose data and even incorporating music theory heuristics to ensure the generated music wasn't just random, but genuinely responsive and musically intelligent. It's an ongoing exploration of the intersection of art and AI."
      ]
    },
    {
      "title": "LoopAI | Looper Ai Music",
      "description": [
        "As an Engineer for AI Training Data at G2i, I was on the front lines of improving large language models. My role involved meticulously evaluating and ranking outputs from Scale AI's LLM. This wasn't just about 'good' or 'bad' — I provided detailed feedback on everything from ethical considerations to language clarity and visual coherence. It was about shaping the future of AI responsibly.",
        "A core part of my work was ensuring factual accuracy. In the world of AI, precision matters, and I made sure responses met stringent standards to boost the model's overall performance and reliability. Every piece of feedback contributed directly to making the AI smarter and more trustworthy."
      ]
    }
  ]
} 