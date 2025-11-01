"use client"
import React, { useState } from 'react';
import Head from 'next/head';
const SEO_METADATA = {
  title: "CodeFork: The High-Performance, AI-Powered VSCode Fork for Developers",
  description: "Ditch the bloat. CodeFork is a minimalist, lightning-fast code editor for modern developers, featuring integrated AI assistance and full VSCode extension compatibility. Write code at the speed of thought.",
  keywords: "vs code fork, code editor, minimalist, fast, AI assistant, developer tools, high performance, codefork, visual studio code alternative",
  ogTitle: "CodeFork: Write Code at the Speed of Thought.",
  ogType: "website",
  url: "https://www.codefork.com",
  ogImage: "https://www.codefork.com/og-image.jpg" 
};

const IconWrapper = ({ children }) => (
  <div className="p-3 bg-indigo-500/20 rounded-xl text-indigo-400 mb-4 w-fit">
    {children}
  </div>
);

const RocketIcon = () => (
  <IconWrapper>
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.5 10.5H21m-7.5 0c1.867 0 3.5-1.565 3.5-3.5S15.367 3.5 13.5 3.5 10 5.065 10 7s1.633 3.5 3.5 3.5zm-5 7c-1.867 0-3.5 1.565-3.5 3.5S6.633 24 8.5 24s3.5-1.565 3.5-3.5-1.633-3.5-3.5-3.5zM12 17.5h-8"></path></svg>
  </IconWrapper>
);

const AIAxialIcon = () => (
  <IconWrapper>
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path></svg>
  </IconWrapper>
);

const TabletIcon = () => (
  <IconWrapper>
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M21 8v10a2 2 0 01-2 2H5a2 2 0 01-2-2V8m18 0a2 2 0 00-2-2H5a2 2 0 00-2 2m18 0V7a2 2 0 00-2-2H5a2 2 0 00-2 2v1"></path></svg>
  </IconWrapper>
);

const PuzzleIcon = () => (
  <IconWrapper>
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 4a2 2 0 012 2v1h1a2 2 0 012 2v1a2 2 0 002 2h1a2 2 0 012 2v2m-11-2a2 2 0 00-2 2v2a2 2 0 01-2 2H2a2 2 0 01-2-2v-1h1a2 2 0 002-2v-1a2 2 0 012-2h1z"></path></svg>
  </IconWrapper>
);

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="py-4 border-b border-gray-800 sticky top-0 bg-gray-900/90 backdrop-blur-sm z-10">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-white tracking-wider">
          Code<span className="text-indigo-400">Fork</span>
        </div>
        <div className="flex items-center space-x-4">
          <nav className="hidden lg:flex space-x-8 text-gray-300 text-sm font-medium">
            {["Features", "Community", "Pricing", "Docs"].map((item) => (
              <a key={item} href="#" className="hover:text-indigo-400 transition">
                {item}
              </a>
            ))}
          </nav>
          <button className="hidden sm:block px-5 py-2 text-sm font-semibold text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 transition">
            Download
          </button>
          <button className="p-2 rounded-full bg-gray-800 text-white hover:bg-gray-700 transition">
            <img
              src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg"
              alt="Professional Portrait"
              className="w-10 h-10 rounded-full object-cover"
            />
          </button>
          <button
            className="lg:hidden text-white"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
      </div>
      {menuOpen && (
        <div className="lg:hidden bg-gray-800 border-t border-gray-700 mt-4">
          <nav className="flex flex-col space-y-4 py-4 text-center text-gray-300 text-sm font-medium">
            {["Features", "Community", "Pricing", "Docs"].map((item) => (
              <a
                key={item}
                href="#"
                className="hover:text-indigo-400 transition"
                onClick={() => setMenuOpen(false)}
              >
                {item}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

const HeroSection = () => (
  <div className="container mx-auto px-4 py-16 lg:py-24">
    <div className="flex flex-col lg:flex-row items-center lg:space-x-12">
      
      <div className="lg:w-1/2 mb-10 lg:mb-0">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
          <span className="text-indigo-400">Lightning-Fast</span> Code Editor with <span className="text-indigo-400">Integrated AI</span>.
        </h1>
        <p className="text-lg text-gray-400 mb-8 max-w-lg">
          **CodeFork** is the **high-performance, minimalist VSCode fork** built for modern developers. Eliminate bloat, maximize speed, and write code at the **speed of thought**.
        </p>
        <button className="px-8 py-3 text-lg font-semibold text-white bg-indigo-600 rounded-xl shadow-lg shadow-indigo-600/40 hover:bg-indigo-700 transition duration-300 transform hover:scale-[1.02]">
          Download Free (Multiplatform)
        </button>
      </div>
      
      <div className="lg:w-1/2 w-full">
        <div className="aspect-video bg-gray-800 rounded-xl shadow-2xl p-4 border-2 border-indigo-500/50">
          <div className="flex items-center space-x-2 mb-3">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          </div>
          <div className="h-[calc(100%-2rem)] w-full bg-gray-900 rounded-lg overflow-hidden">
            <p className="p-4 text-xs font-mono text-green-400 whitespace-pre-wrap">
              <span className="text-yellow-400">const</span> generateCode = (<span className="text-cyan-400">prompt</span>) =&gt; {'{'}<br/>
              &nbsp;&nbsp;<span className="text-yellow-400">return</span> <span className="text-green-400">fetch</span>(<span className="text-amber-300">'/api/code'</span>, {'{'}<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-yellow-400">method</span>: <span className="text-amber-300">'POST'</span>,<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-yellow-400">body</span>: <span className="text-yellow-400">JSON</span>.<span className="text-green-400">stringify</span>({'{ prompt }'}),<br/>
              &nbsp;&nbsp;{'}'}).<span className="text-green-400">then</span>(res =&gt; res.<span className="text-green-400">json</span>());<br/>
              {'}'}<br/>
              <span className="text-gray-500">// AI-powered code completion in action...</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const FeatureCard = ({ icon, title, description }) => (
  <div className="p-6 bg-gray-800 rounded-xl border border-gray-700 hover:border-indigo-500 transition duration-300">
    {icon}
    <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
    <p className="text-gray-400 text-sm">{description}</p>
  </div>
);

const KeyDifferentiators = () => (
  <section className="container mx-auto px-4 py-16">
    <h2 className="text-3xl font-bold text-white mb-4">Key Differentiators</h2>
    <p className="text-lg text-gray-400 mb-12 max-w-2xl">
      Built from the ground up to provide a faster, cleaner, and more intelligent coding experience.
    </p>
    
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      <FeatureCard
        icon={<RocketIcon />}
        title="Optimized for Performance"
        description="We stripped out unnecessary bloat for a caffeine-fueled startup time and minimal memory usage."
      />
      <FeatureCard
        icon={<AIAxialIcon />}
        title="Integrated AI Assistance"
        description="Code smarter, not harder, with generative AI integrated into the editor's core architecture."
      />
      <FeatureCard
        icon={<TabletIcon />}
        title="Streamlined UI"
        description="A clutter-free, minimalist user interface lets you focus purely on the code without distractions."
      />
      <FeatureCard
        icon={<PuzzleIcon />}
        title="Extensible by Design"
        description="Full compatibility with your favorite VSCode extensions for seamless workflow migration."
      />
    </div>
  </section>
);

const WhyChoose = () => (
    <section className="container mx-auto px-4 py-16">
      <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-white mb-4">Why Choose CodeFork?</h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              We focus on tangible outcomes to help you build better software, faster.
          </p>
      </div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
  <div className="text-center p-6 rounded-xl">
    <div height="h-40">
      <img
        src="https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg"
        alt="Fast Code Execution"
        className="w-full h-full object-cover rounded-lg"
      />
    </div>
    <h3 className="mt-5 text-start text-xl font-semibold text-white mb-2">Ship Code Faster</h3>
    <p className="text-start text-gray-400 text-sm">
      Leverage built-in tools and superior debugging interfaces to test and iterate your features quickly.
    </p>
  </div>

  <div className="text-center p-6 rounded-xl">
    <div height="h-40">
      <img
        src="https://images.pexels.com/photos/3184454/pexels-photo-3184454.jpeg"
        alt="Minimalist Workspace"
        className="w-full h-full object-cover rounded-lg"
      />
    </div>
    <h3 className="mt-5 text-start text-xl font-semibold text-white mb-2">
      A Clutter-Free Workspace
    </h3>
    <p className="text-start text-gray-400 text-sm">
      Every pixel is intentional, ensuring a low-distraction coding environment where focus is key.
    </p>
  </div>

  <div className="text-center p-6 rounded-xl">
    <div height="h-40">
      <img
        src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg"
        alt="Real-time Collaboration"
        className="w-full h-full object-cover rounded-lg"
      />
    </div>
    <h3 className="mt-5 text-start text-xl font-semibold text-white mb-2">Seamless Collaboration</h3>
    <p className="text-start text-gray-400 text-sm">
      Integrated real-time sharing and editing means your team works together without friction.
    </p>
  </div>
</div>

    </section>
);

const TestimonialCard = ({ name, title, quote, avatarColor }) => (
    <div className="p-6 bg-gray-800 rounded-xl border border-gray-700 flex flex-col h-full">
      <p className="text-gray-300 italic mb-4 flex-grow">
          "{quote}"
      </p>
      <hr />
      <div className="flex items-center mt-4">
          <div className={`w-10 h-10 rounded-full mr-3 ${avatarColor} flex items-center justify-center text-white font-bold text-lg`}>
              <img className='rounded-full ' src={avatarColor} alt={`Avatar of ${name}`} />
          </div>
          <div>
              <p className="font-semibold text-white text-sm">{name}</p>
              <p className="text-xs text-gray-400">{title}</p>
          </div>
      </div>
    </div>
);

const Testimonials = () => (
    <section className="container mx-auto px-4 py-16">
      <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-white mb-4">Loved by Developers</h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              Don't just take our word for it. Here's what the community is saying.
          </p>
      </div>

     <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
  <TestimonialCard
    name="Ethan Lee"
    title="Lead Frontend Engineer"
    quote="CodeFork is a game changer. The performance boost is immediately noticeable, and the integrated AI tools are surprisingly useful—it's become an indispensable part of my workflow."
    avatarColor="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg"
  />
  
  <TestimonialCard
    name="Michael Chen"
    title="Senior Back-end Dev"
    quote="I was skeptical about another VSCode fork, but the minimalist UI and zero-lag editing experience won me over. I'm not looking back."
    avatarColor="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg"
  />
  
  <TestimonialCard
    name="Emily Rodriguez"
    title="CTO, StartUp Nexus"
    quote="The extensibility is incredibly powerful. We were able to migrate our entire existing setup with zero friction. Highly recommend everything I love about VSCode, but faster."
    avatarColor="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg"
  />
</div>

    </section>
);

const CallToAction = () => (
    <section className="bg-gray-800/50 py-20 mt-16">
      <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-extrabold text-white mb-4">
              Ready to supercharge your workflow?
          </h2>
          <p className="text-xl text-gray-400 mb-8 max-w-3xl mx-auto">
              Get started with CodeFork for a zero-lag experience, easier, smarter, and more focused coding environment today.
          </p>
          <button className="px-8 py-3 text-lg font-semibold text-white bg-indigo-600 rounded-xl shadow-lg shadow-indigo-600/40 hover:bg-indigo-700 transition duration-300 transform hover:scale-[1.02]">
              Download for Free
          </button>
      </div>
    </section>
);

const Footer = () => (
    <footer className="bg-gray-900 border-t border-gray-800 py-10">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          
          <div className="mb-4 md:mb-0">
              <div className="text-2xl font-bold text-white tracking-wider mb-2">
                  Code<span className="text-indigo-400">Fork</span>
              </div>
              <p className="text-sm text-gray-500">
                  © 2024 CodeFork. All rights reserved.
              </p>
          </div>
          
          <div className="flex flex-wrap justify-center md:justify-end space-x-6 text-sm text-gray-400">
              {['Docs', 'Github', 'Support', 'Terms of Service', 'Privacy Policy'].map((item) => (
                  <a key={item} href="#" className="hover:text-indigo-400 transition mb-2">
                      {item}
                  </a>
              ))}
          </div>
      </div>
    </footer>
);


const App = () => {
  const HeadComponent = typeof window === 'undefined' ? Head : ({ children }) => <>{children}</>;

  return (
    <div className="min-h-screen bg-gray-900 font-sans antialiased pl-0 md:pl-50 pr-0 md:pr-50">
      
      <HeadComponent>
        <title>{SEO_METADATA.title}</title>
        <meta name="description" content={SEO_METADATA.description} />
        <meta name="keywords" content={SEO_METADATA.keywords} />
        <meta property="og:title" content={SEO_METADATA.ogTitle} />
        <meta property="og:description" content={SEO_METADATA.description} />
        <meta property="og:type" content={SEO_METADATA.ogType} />
        <meta property="og:url" content={SEO_METADATA.url} />
        <meta property="og:image" content={SEO_METADATA.ogImage} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={SEO_METADATA.ogTitle} />
        <meta name="twitter:description" content={SEO_METADATA.description} />
        <meta name="twitter:image" content={SEO_METADATA.ogImage} />
      </HeadComponent>

      <Navbar />
      <main>
        <HeroSection />
        <KeyDifferentiators />
        <WhyChoose />
        <Testimonials />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
};

export default App;