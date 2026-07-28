import "./HomeFooter.css";

import { useEffect, useRef, useState } from "react";

import Logo from "../../assets/HomePage/UsenovStatus_logo.svg";

const FOUNDER_GITHUB_URL = "https://github.com/arseniifrontend";

export function HomeFooter() {
    const footerRef = useRef<HTMLElement | null>(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const footer = footerRef.current;

        if (!footer) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true);
                    observer.unobserve(footer);
                }
            },
            { threshold: 0.2 }
        );

        observer.observe(footer);

        return () => observer.disconnect();
    }, []);

    const scrollToSection = (id: string) => {
        const section = document.getElementById(id);

        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <footer
            ref={footerRef}
            className={`home-footer ${visible ? "home-footer--visible" : ""}`}
        >
            <div className="home-footer-container">
                <div className="home-footer-top">
                    <button
                        type="button"
                        className="home-footer-logo home-footer-reveal home-footer-reveal--1"
                        onClick={() => scrollToSection("home")}
                    >
                        <img src={Logo} alt="Usenov Studio" />

                        <span className="home-footer-brand-text">
                            <span className="home-footer-brand-name">USENOV</span>
                            <span className="home-footer-brand-word">STUDIO</span>
                        </span>
                    </button>
                </div>

                <div className="home-footer-menu">
                    <h3 className="home-footer-menu-title home-footer-reveal home-footer-reveal--2">
                        Menu
                    </h3>

                    <ul className="home-footer-links">
                        <li className="home-footer-reveal home-footer-reveal--3">
                            <a href="/">Home</a>
                        </li>

                        <li className="home-footer-reveal home-footer-reveal--4">
                            <a href="https://www.usenov.com">Usenov</a>
                        </li>

                        <li className="home-footer-reveal home-footer-reveal--5">
                            <a href="/live">Status</a>
                        </li>

                        <li className="home-footer-reveal home-footer-reveal--6">
                            <a href="/widget">Widget</a>
                        </li>

                        <li className="home-footer-reveal home-footer-reveal--7">
                            <a
                                href="https://github.com/ArseniiFrontend/Usenov-Status"
                                target="_blank"
                                rel="noreferrer"
                            >
                                GitHub
                            </a>
                        </li>
                    </ul>
                </div>

                <div className="home-footer-bottom home-footer-reveal home-footer-reveal--8">
                    <p>© 2026 Usenov Status. All rights reserved.</p>
                    <p className="home-footer-founder">
                        © 2026 USENOV Studio · Founded &amp; Developed by{" "}
                        <a
                            href={FOUNDER_GITHUB_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Arsenii Usenko GitHub profile"
                        >
                            Arsenii Usenko
                        </a>
                    </p>
                </div>
            </div>
        </footer>
    );
}

export default HomeFooter;
