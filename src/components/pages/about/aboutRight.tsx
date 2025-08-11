export default function AboutRight() {
    return (
      <div
        className="w-full h-full bg-black flex flex-col justify-start items-center
                   p-5 overflow-y-scroll gap-4" 
      >
          <p className="text-2xl">
            <b className="text-shadow-glow text-gray-100">
              Hello! Thanks for checking out my website!
            </b>
          </p>
  
          <p className="text-xl text-gray-400">
            My name is Ernie, and I am a software engineer, web developer, musician, and
            photographer. I speak Mandarin Chinese and English. I recently earned my
            Bachelor’s in Computer Science and Jazz Studies from Northwestern University.
          </p>
  
          <div className="w-full h-[300px] flex-none flex justify-between items-center bg-gray-900 rounded-md overflow-hidden">
          <img 
                             src={`${process.env.PUBLIC_URL}/images/about/salzburg.jpg`}
               alt="Salzburg" 
               className="h-full w-1/3 object-cover"
            />
            <img 
              src={`${process.env.PUBLIC_URL}/images/about/saxophone.jpg`}
              alt="Saxophone" 
              className="h-full w-1/3 object-cover object-top"
            />
            <img 
              src={`${process.env.PUBLIC_URL}/images/about/warsaw.jpg`}
              alt="Warsaw" 
              className="h-full w-1/3 object-cover"
            />
          </div>
  
          <p className="text-xl text-gray-400">
            I have always been curious about the act of creation. Growing up, I experimented
            with many creative mediums such as film directing, drawing/sketching, animation,
            music, and much more.
          </p>
  
          <p className="text-2xl">
            <b className="text-shadow-glow text-gray-100">Hobbies and Interests</b>
          </p>
  
          <p className="text-xl text-gray-400">
            As you might guess, I enjoy exploring a variety of activities in my free time.
            I love traveling (see travel photos in the Creative section), playing video games
            such as SCP: Containment Breach, and developing useful, innovative applications
            for AI. I’ve showcased them here—please browse around!
          </p>
        </div>
    );
  }
  