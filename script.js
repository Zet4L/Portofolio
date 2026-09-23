/* =========================
   RESET
========================= */

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}


html {
    scroll-behavior: smooth;
}


body {
    font-family: Arial, Helvetica, sans-serif;
    background: #0f172a;
    color: #e2e8f0;
    line-height: 1.6;
}


a {
    text-decoration: none;
    color: inherit;
}


.container {
    width: 90%;
    max-width: 1100px;
    margin: auto;
}


/* =========================
   NAVBAR
========================= */

.navbar {
    position: fixed;
    top: 0;
    left: 0;

    width: 100%;

    background: rgba(15, 23, 42, 0.9);

    backdrop-filter: blur(10px);

    border-bottom: 1px solid rgba(255,255,255,0.08);

    z-index: 1000;
}


.nav-container {
    height: 70px;

    display: flex;
    align-items: center;
    justify-content: space-between;
}


.logo {
    font-size: 25px;
    font-weight: bold;
}


.logo span {
    color: #38bdf8;
}


nav {
    display: flex;
    gap: 30px;
}


nav a {
    color: #cbd5e1;
    transition: 0.3s;
}


nav a:hover {
    color: #38bdf8;
}


.menu-button {
    display: none;

    background: none;
    border: none;

    color: white;
    font-size: 25px;

    cursor: pointer;
}


/* =========================
   HERO
========================= */

.hero {
    min-height: 100vh;

    display: flex;
    align-items: center;

    padding-top: 70px;

    background:
        radial-gradient(
            circle at 80% 20%,
            rgba(56,189,248,0.15),
            transparent 30%
        );
}


.hero-container {
    display: flex;
    align-items: center;
    justify-content: space-between;

    gap: 60px;
}


.hero-text {
    max-width: 650px;
}


.hero-small {
    color: #38bdf8;

    font-size: 14px;

    font-weight: bold;

    letter-spacing: 3px;

    margin-bottom: 10px;
}


.hero h1 {
    font-size: clamp(45px, 7vw, 75px);

    line-height: 1.05;

    margin-bottom: 15px;
}


.hero h2 {
    color: #94a3b8;

    font-size: 22px;

    font-weight: normal;

    margin-bottom: 25px;
}


.hero-description {
    color: #94a3b8;

    max-width: 600px;

    font-size: 17px;

    margin-bottom: 30px;
}


/* BUTTON */

.hero-buttons {
    display: flex;
    gap: 15px;

    margin-bottom: 30px;
}


.button {
    padding: 12px 22px;

    border-radius: 8px;

    font-weight: bold;

    transition: 0.3s;
}


.button.primary {
    background: #38bdf8;
    color: #082f49;
}


.button.primary:hover {
    transform: translateY(-3px);

    background: #7dd3fc;
}


.button.secondary {
    border: 1px solid #475569;

    color: #e2e8f0;
}


.button.secondary:hover {
    border-color: #38bdf8;

    color: #38bdf8;
}


/* SOCIAL */

.social-links {
    display: flex;
    gap: 20px;
}


.social-links a {
    color: #94a3b8;

    font-size: 14px;

    transition: 0.3s;
}


.social-links a:hover {
    color: #38bdf8;
}


/* PROFILE */

.hero-image {
    display: flex;
    justify-content: center;
}


.profile-circle {
    width: 280px;
    height: 280px;

    border-radius: 50%;

    display: flex;
    align-items: center;
    justify-content: center;

    background: #1e293b;

    border: 2px solid #38bdf8;

    box-shadow:
        0 0 50px rgba(56,189,248,0.2);
}


.profile-circle span {
    font-size: 100px;
}


/* =========================
   SECTION
========================= */

.section {
    padding: 100px 0;
}


.section-label {
    color: #38bdf8;

    font-size: 13px;

    font-weight: bold;

    letter-spacing: 3px;

    margin-bottom: 10px;
}


.section-title {
    font-size: 40px;

    margin-bottom: 50px;
}


/* =========================
   ABOUT
========================= */

.about-content {
    display: grid;

    grid-template-columns: 1.5fr 1fr;

    gap: 70px;
}


.about-text p {
    color: #94a3b8;

    margin-bottom: 20px;

    font-size: 17px;
}


.about-info {
    display: flex;

    flex-direction: column;

    gap: 20px;
}


.info-item {
    padding: 20px;

    background: #1e293b;

    border-radius: 10px;

    border: 1px solid #334155;
}


.info-item span {
    display: block;

    color: #64748b;

    font-size: 13px;

    margin-bottom: 5px;
}


.info-item strong {
    color: #e2e8f0;
}


/* =========================
   SKILLS
========================= */

.skills-section {
    background: #111c31;
}


.skills-grid {
    display: grid;

    grid-template-columns:
        repeat(4, 1fr);

    gap: 20px;
}


.skill-card {
    background: #1e293b;

    border: 1px solid #334155;

    padding: 30px;

    border-radius: 12px;

    transition: 0.3s;
}


.skill-card:hover {
    transform: translateY(-7px);

    border-color: #38bdf8;
}


.skill-icon {
    font-size: 30px;

    margin-bottom: 15px;
}


.skill-card h3 {
    margin-bottom: 10px;
}


.skill-card p {
    color: #94a3b8;

    font-size: 14px;
}


/* =========================
   PROJECTS
========================= */

.projects-grid {
    display: grid;

    grid-template-columns:
        repeat(3, 1fr);

    gap: 20px;
}


.project-card {
    position: relative;

    padding: 30px;

    background: #1e293b;

    border: 1px solid #334155;

    border-radius: 12px;

    transition: 0.3s;
}


.project-card:hover {
    transform: translateY(-7px);

    border-color: #38bdf8;
}


.project-number {
    color: #38bdf8;

    font-size: 14px;

    font-weight: bold;

    margin-bottom: 25px;
}


.project-card h3 {
    font-size: 21px;

    margin-bottom: 15px;
}


.project-card p {
    color: #94a3b8;

    font-size: 14px;

    margin-bottom: 20px;
}


.project-tags {
    display: flex;

    flex-wrap: wrap;

    gap: 7px;

    margin-bottom: 25px;
}


.project-tags span {
    padding: 5px 9px;

    border-radius: 5px;

    background: #0f172a;

    color: #7dd3fc;

    font-size: 11px;
}


.project-link {
    color: #38bdf8;

    font-size: 14px;

    font-weight: bold;
}


/* =========================
   CONTACT
========================= */

.contact-section {
    background: #111c31;

    text-align: center;
}


.contact-container {
    max-width: 800px;
}


.contact-description {
    color: #94a3b8;

    margin-bottom: 30px;
}


.contact-buttons {
    display: flex;

    justify-content: center;

    flex-wrap: wrap;

    gap: 15px;
}


.contact-button {
    padding: 12px 25px;

    border: 1px solid #334155;

    border-radius: 8px;

    transition: 0.3s;
}


.contact-button:hover {
    color: #38bdf8;

    border-color: #38bdf8;

    transform: translateY(-3px);
}


/* =========================
   FOOTER
========================= */

footer {
    padding: 30px 0;

    text-align: center;

    color: #64748b;

    font-size: 13px;
}


/* =========================
   RESPONSIVE
========================= */

@media (max-width: 800px) {

    nav {
        display: none;

        position: absolute;

        top: 70px;
        left: 0;

        width: 100%;

        padding: 20px;

        background: #0f172a;

        flex-direction: column;

        gap: 15px;

        border-bottom: 1px solid #334155;
    }


    nav.active {
        display: flex;
    }


    .menu-button {
        display: block;
    }


    .hero-container {
        flex-direction: column-reverse;

        text-align: center;

        padding: 60px 0;
    }


    .hero-buttons,
    .social-links {
        justify-content: center;
    }


    .profile-circle {
        width: 200px;
        height: 200px;
    }


    .profile-circle span {
        font-size: 70px;
    }


    .about-content {
        grid-template-columns: 1fr;

        gap: 30px;
    }


    .skills-grid {
        grid-template-columns:
            repeat(2, 1fr);
    }


    .projects-grid {
        grid-template-columns: 1fr;
    }

}


@media (max-width: 500px) {

    .hero h1 {
        font-size: 42px;
    }


    .hero h2 {
        font-size: 18px;
    }


    .skills-grid {
        grid-template-columns: 1fr;
    }


    .hero-buttons {
        flex-direction: column;
    }

}