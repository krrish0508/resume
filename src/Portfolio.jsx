
import React, { useState, useEffect } from 'react';
import './styles.css';

function Portfolio() {
  const [darkMode, setDarkMode] = useState(true);
  const [typedText, setTypedText] = useState('');
  const fullText = 'Cybersecurity Professional | Penetration Tester | Ethical Hacker';

  const toggleTheme = () => setDarkMode(!darkMode);

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("fade-in");
        }
      });
    }, { threshold: 0.1 });

    sections.forEach(section => {
      observer.observe(section);
    });
  }, []);

  useEffect(() => {
    let index = 0;
    const typingInterval = setInterval(() => {
      setTypedText(prev => prev + fullText[index]);
      index++;
      if (index === fullText.length) clearInterval(typingInterval);
    }, 40);
    return () => clearInterval(typingInterval);
  }, []);

  return (
    <div className={`portfolio ${darkMode ? 'dark' : 'light'}`} style={{ width: '100vw', height: '100vh', overflow: 'auto' }}>
      <button onClick={toggleTheme} style={{ position: 'absolute', top: 20, right: 20, padding: '10px 20px', borderRadius: '8px', border: 'none', cursor: 'pointer', zIndex: 1000 }}>
        Switch to {darkMode ? 'Light' : 'Dark'} Mode
      </button>
      <nav style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <a href="#about" style={{ margin: '0 15px' }}>About</a>
        <a href="#achievements" style={{ margin: '0 15px' }}>Achievements</a>
        <a href="#contact" style={{ margin: '0 15px' }}>Contact</a>
        <a href="/resume.pdf" download style={{ margin: '0 15px' }}>Download Resume</a>
      </nav>
      <header>
        <div style={{ textAlign: 'center' }}>
          <img src="https://via.placeholder.com/120" alt="Profile" style={{ borderRadius: '50%', marginBottom: '1rem' }} />
          <h1>Krishnaraj</h1>
          <meta name="author" content="Krishnaraj" />
          <meta name="description" content="Krishnaraj's personal portfolio - Cybersecurity Professional, Penetration Tester, and Ethical Hacker." />
        </div>
        <p style={{ textAlign: 'center', minHeight: '1.5em' }}>{typedText}<span className="cursor">|</span></p>
      </header>
      <section id="about" className="about fade">
        <h2>About Me</h2>
        <p>I am a cybersecurity professional specializing in penetration testing, vulnerability assessment, and offensive security operations. I have hands-on experience with tools like Burp Suite, Nmap, Wireshark, Metasploit, and more. I am well-versed in frameworks such as OWASP Top 10 and MITRE ATT&CK, and I am committed to strengthening cyber defense through proactive threat detection and secure development practices.</p>
      </section>
      <section id="achievements" className="achievements fade">
        <h2>Achievements</h2>
        <ul>
          <li>Published article with ISC2 Toronto Chapter: <em><a href="https://isc2chapter-toronto.ca/the-ai-arms-race-how-machines-are-learning-to-fight-alongside-us-in-cybersecurity/" target="_blank" rel="noopener noreferrer">The AI Arms Race: How Machines Are Learning to Fight Alongside Us in Cybersecurity</a></em></li>
          <li>Identified and disclosed critical XSS vulnerabilities in a hospital web application, enhancing patient data security.</li>
          <li>Solved 200+ machines on Hack The Box, demonstrating expertise in real-world cybersecurity challenges including privilege escalation and post-exploitation.</li>
        </ul>
      </section>
      <section id="contact" className="contact fade">
        <h2>Contact</h2>
        <p>Email: <a href="mailto:krishnaraj@example.com">krishnaraj@example.com</a></p>
        <p>Phone: +1234567890</p>
      </section>
    </div>
  );
}

export default Portfolio;
