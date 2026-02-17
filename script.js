
const projectsData = {
    projet1: {
        title: "Projet Site Village Vacance",
        category: "Développement Web • BTS SIO",
        techs: ["HTML5", "CSS3", "PHP", "MySQL"],
        content: `
            <section class="modal-section" id="modal-apercu">
                <h3 class="modal-section-title">Aperçu du projet</h3>
                <div class="modal-image-placeholder"> 
                    <video width="100%" height="300px" controls>
                    <source src="assets/VVA.mp4" type=video/mp4>
                    </video>
                </div>
                <p>
                    Développement d'une application web complète dans le cadre de mon BTS SIO option SLAM. 
                    Ce projet m'a permis de mettre en pratique mes compétences en développement full-stack 
                    et de créer une solution fonctionnelle répondant à un besoin réel.
                </p>
            </section>

            <section class="modal-section" id="modal-contexte">
                <h3 class="modal-section-title">Contexte</h3>
                <p>
                    Ce projet a été réalisé en deuxième année de BTS SIO. L'objectif était de concevoir 
                    et développer une application web permettant de gérer des utilisateurs, des contenus 
                    et des interactions de manière sécurisée. 
                </p>
                <p>
                    L’association Village Vacances Alpes (VVA) gère un village vacance en France. Afin de moderniser
                    la gestion de ses activités (randonnées, escalade, etc.), elle souhaite développer une application web interne.
                    Actuellement, l’organisation des activités repose sur des outils basiques (Excel, formulaires papier), ce qui
                    ralentit le processus et le rend peu pratique. L’objectif est donc de concevoir un site web, nommé GACTI,
                    pour simplifier la réservation et l’organisation des activités.
                </p>
                <div class="modal-highlight">
                    <h4>Objectifs principaux</h4>
                    <ul>
                        <li>Créer une interface utilisateur intuitive</li>
                        <li>Implémenter un système d'authentification</li>
                        <li>Gérer une base de données</li>
                    </ul>
                </div>
            </section>

            <section class="modal-section" id="modal-problemes">
                <h3 class="modal-section-title">Problématiques rencontrées</h3>
                <div class="modal-grid">
                    <div class="modal-grid-item">
                        <h5>Sécurité</h5>
                        <p>Protection contre les injections SQL et XSS, gestion sécurisée des mots de passe</p>
                    </div>
                    <div class="modal-grid-item">
                        <h5>Performance</h5>
                        <p>Optimisation des requêtes SQL et mise en cache des données fréquemment consultées</p>
                    </div>
                    <div class="modal-grid-item">
                        <h5>UX/UI</h5>
                        <p>Conception d'une interface claire et accessible sur tous les devices</p>
                    </div>
                    <div class="modal-grid-item">
                        <h5>Architecture</h5>
                        <p>Organisation du code</p>
                    </div>
                </div>
            </section>

            <section class="modal-section" id="modal-solutions">
                <h3 class="modal-section-title">Solutions apportées</h3>
                <p>
                    Pour répondre à ces défis, j'ai mis en place plusieurs solutions techniques :
                </p>
                <ul>
                    <li><strong>Sécurité :</strong> Utilisation de requêtes préparées PDO, validation des données</li>
                    <li><strong>Architecture :</strong> Mise ne place d'une arborescence</li>
                    <li><strong>UX :</strong> Recherche et explication des besoins utilisateurs</li>
                    <li><strong>Performance :</strong> Optimisation des requêtes et mise en place d'un système de cache</li>
                </ul>
            </section>

            <section class="modal-section" id="modal-resultats">
                <p>
                    Le projet a été validé avec succès et a reçu une excellente note. L'application 
                    est pleinement fonctionnelle et répond à tous les objectifs fixés initialement.
                </p>
                <div class="modal-highlight">
                    <h4>Points forts du projet</h4>
                    <ul>
                        <li>Interface utilisateur moderne et intuitive</li>
                        <li>Code structuré et maintenable</li>
                        <li>Sécurité des données</li>
                        <li>Temps de chargement optimisés</li>
                    </ul>
                </div>
            </section>

            <section class="modal-section" id="modal-apprentissages">
                <h3 class="modal-section-title">Apprentissages</h3>
                <p>
                    Ce projet m'a permis de consolider mes compétences en développement web et 
                    de découvrir l'importance de la planification et de la sécurité dans le développement.
                </p>
                <p>
                    C'était mon tout premier projet sérieux en utilisant PHP, car c'était la première fois que j'explorais ce langage.
                </p>
                <ul>
                    <li>Maîtrise du pattern MVC et de la programmation orientée objet en PHP</li>
                    <li>Compréhension approfondie de la sécurité web</li>
                    <li>Gestion de projet et respect des délais</li>
                    <li>Importance de l'UX dans le développement</li>
                </ul>
            </section>
        `
    },
    
    projet2: {
        title: "Projet PCBANG - Application WPF",
        category: "Développement C# • BTS SIO",
        techs: ["XAML", "C#", "WPF", "MySQL"],
        content: `
            <section class="modal-section" id="modal-apercu">
                <h3 class="modal-section-title">Aperçu du projet</h3>
                <div class="modal-image-placeholder"> 
                    <video width="100%" height="300px" controls>
                    <source src="assets/pcbang.mp4" type=video/mp4>
                    </video>
                </div>
                <p>
                    Application développée en WPF avec C# pour gérer efficacement des données 
                    métier. Ce projet m'a permis d'explorer le développement d'applications riches 
                    avec une interface moderne.
                </p>
            </section>

            <section class="modal-section" id="modal-contexte">
                <h3 class="modal-section-title">Contexte</h3>
                <p>
                    Projet réalisé durant mon BTS SIO pour répondre aux besoins d'une entreprise 
                    fictive nécessitant un outil de gestion interne performant.
                </p>
                <p>
                    Le projet PC Bang est une application développée en C# avec WPF qui vise à gérer un cybercafé (PC Bang,
                    terme utilisé en Corée du Sud). L’objectif est de proposer un système permettant aux clients d’utiliser des
                    pcs pour jouer à des jeux vidéo en fonction du temps acheté, tout en intégrant des fonctionnalités de gestion
                    pour l’administrateur.
                </p>
                <div class="modal-highlight">
                    <h4>Cahier des charges</h4>
                    <ul>
                       <li>Pour le client/l’utilisateur : Réserver des pcs, voir les jeux, voir les salles</li>
                       <li>Pour l’administrateur : Ajouter des pcs, des salles et des jeux. Modifier des jeux et des pcs.</li>
                    </ul>
                </div>
            </section>

            <section class="modal-section" id="modal-problemes">
                <h3 class="modal-section-title">Problématiques rencontrées</h3>
                <div class="modal-grid">
                    <div class="modal-grid-item">
                        <h5>Architecture MVC</h5>
                        <p>Première approche du pattern MVC dans un environnement WPF</p>
                    </div>
                    <div class="modal-grid-item">
                        <h5>Data Binding</h5>
                        <p>Gestion complexe des liaisons de données</p>
                    </div>
                    <div class="modal-grid-item">
                        <h5>Design UI</h5>
                        <p>Création d'une interface professionnelle avec XAML</p>
                    </div>
                </div>
            </section>

            <section class="modal-section" id="modal-solutions">
                <h3 class="modal-section-title">Solutions apportées</h3>
                <ul>
                    <li><strong>Architecture :</strong> Implémentation du pattern MVC</li>
                    <li><strong>UI/UX :</strong> Design moderne avec Material Design et animations fluides</li>
                </ul>
            </section>

            <section class="modal-section" id="modal-resultats">
                <h3 class="modal-section-title">Résultats</h3>
                <p>
                    Application pleinement fonctionnelle avec une interface soignée et des performances 
                    optimales. Le projet a été présenté lors de mon examen de BTS.
                </p>
            </section>

            <section class="modal-section" id="modal-apprentissages">
                <h3 class="modal-section-title">Apprentissages</h3>
                <ul>
                    <li>Maîtrise du framework WPF et du langage XAML</li>
                    <li>Compréhension du pattern MVC et de ses avantages</li>
                    <li>Développement d'interfaces utilisateur complexes</li>
                    <li>Gestion de l'état de l'application</li>
                </ul>
            </section>
        `
    },
    
    projet3: {
        title: "App iTunes",
        category: "Développement Mobile • Licence Pro",
        techs: ["React Native", "JavaScript", "API REST", "Expo"],
        content: `
            <section class="modal-section" id="modal-apercu">
                <h3 class="modal-section-title">Aperçu du projet</h3>
                <div class="modal-image-placeholder">[Mockup de l'app mobile]</div>
                <p>
                    Application mobile en React Native permettant de rechercher et d'explorer le catalogue 
                    iTunes. Projet d'apprentissage pour découvrir le développement mobile multiplateforme.
                </p>
                <div class="modal-highlight">
                    <h4>⚠️ Projet en cours de développement</h4>
                    <p>
                        Ce projet est actuellement en phase d'apprentissage. Toutes les fonctionnalités 
                        ne sont pas encore implémentées, mais il me permet d'explorer React Native et 
                        le développement mobile.
                    </p>
                </div>
            </section>

            <section class="modal-section" id="modal-contexte">
                <h3 class="modal-section-title">Contexte</h3>
                <p>
                    Dans le cadre de ma Licence Professionnelle en Développement Web et Mobile, 
                    Lors de nos cours, nous devons réaliser des projets pratiques pour appliquer les concepts appris.
                </p>
                <ul>
                    <li>Découverte de React Native et de son écosystème</li>
                    <li>Compréhension des spécificités du développement mobile</li>
                </ul>
            </section>

            <section class="modal-section" id="modal-problemes">
                <h3 class="modal-section-title">Défis techniques</h3>
                <div class="modal-grid">
                    <div class="modal-grid-item">
                        <h5>React Native</h5>
                        <p>Nouveau framework avec ses propres spécificités et composants</p>
                    </div>
                    <div class="modal-grid-item">
                        <h5>Navigation</h5>
                        <p>Gestion de la navigation entre écrans sur mobile</p>
                    </div>
                    <div class="modal-grid-item">
                        <h5>API iTunes</h5>
                        <p>Intégration et parsing des données de l'API</p>
                    </div>
                    <div class="modal-grid-item">
                        <h5>State Management</h5>
                        <p>Gestion de l'état de l'application et des données</p>
                    </div>
                </div>
            </section>

            <section class="modal-section" id="modal-solutions">
                <h3 class="modal-section-title">Approche adoptée</h3>
                <ul>
                    <li>Utilisation d'Expo pour simplifier le développement et les tests</li>
                    <li>React Navigation pour gérer les différents écrans</li>
                    <li>Hooks React (useState, useEffect) pour la gestion d'état</li>
                </ul>
            </section>

            <section class="modal-section" id="modal-resultats">
                <h3 class="modal-section-title">État actuel</h3>
                <p>
                    L'application permet actuellement de rechercher des contenus dans l'API iTunes 
                    et d'afficher les résultats. D'autres fonctionnalités sont en cours de développement.
                </p>
                <div class="modal-highlight">
                    <h4>Fonctionnalités implémentées</h4>
                    <ul>
                        <li>Recherche de contenus (musiques, films, podcasts)</li>
                        <li>Affichage des résultats sous forme de liste</li>
                        <li>Interface responsive et adaptée au mobile</li>
                    </ul>
                </div>
            </section>

            <section class="modal-section" id="modal-apprentissages">
                <h3 class="modal-section-title">Apprentissages en cours</h3>
                <ul>
                    <li>Découverte de React Native et de ses composants natifs</li>
                    <li>Différences entre développement web et mobile</li>
                    <li>Gestion des interactions tactiles</li>
                </ul>
            </section>
        `
    },
    
    projet4: {
        title: "Refonte de Site Web",
        category: "UX/UI Design • Licence Pro",
        techs: ["Figma", "UX Research", "Wireframing", "Prototypage", "Design System"],
        content: `
            <section class="modal-section" id="modal-apercu">
                <h3 class="modal-section-title">Aperçu du projet</h3>
                <div class="modal-image-placeholder"> 
                    <video width="100%" height="300px" controls>
                    <source src="assets/figma.mp4" type=video/mp4>
                    </video>
                </div>
                <p>
                    Projet de refonte complète d'un site web existant dans le cadre de ma Licence 
                    Professionnelle. Analyse UX approfondie, conception de wireframes et création 
                    de maquettes sur Figma.
                </p>
            </section>

            <section class="modal-section" id="modal-contexte">
                <h3 class="modal-section-title">Contexte</h3>
                <p>
                    Le site web existant présentait plusieurs problèmes d'utilisabilité. 
                    L'objectif était de repenser complètement l'expérience utilisateur 
                    pour améliorer la navigation.
                </p>
                <div class="modal-highlight">
                    <h4>Problèmes identifiés</h4>
                    <ul>
                        <li>Navigation confuse et peu intuitive</li>
                    </ul>
                </div>
            </section>

            <section class="modal-section" id="modal-problemes">
                <h3 class="modal-section-title">Méthodologie UX</h3>
                <div class="modal-grid">
                    <div class="modal-grid-item">
                        <h5>Research</h5>
                        <p>Analyse du site existant, étude des concurrents, interviews utilisateurs</p>
                    </div>
                    <div class="modal-grid-item">
                        <h5>Wireframing</h5>
                        <p>Création de wireframes pour tester la structure</p>
                    </div>
                    <div class="modal-grid-item">
                        <h5>Prototypage</h5>
                        <p>Maquettes et prototype interactif sur Figma</p>
                    </div>
                </div>
            </section>

            <section class="modal-section" id="modal-solutions">
                <h3 class="modal-section-title">Solutions design</h3>
                <div class="modal-image-placeholder">[Maquettes Figma]</div>
                <ul>
                    <li><strong>Architecture de l'information :</strong> Réorganisation complète du contenu</li>
                    <li><strong>Navigation :</strong> Menu simplifié et parcours utilisateur optimisé</li>
                    <li><strong>Design System :</strong> Création d'un système de design cohérent et scalable</li>
                </ul>
            </section>

            <section class="modal-section" id="modal-resultats">
                <h3 class="modal-section-title">Résultats attendus</h3>
                <div class="modal-highlight">
                    <h4>Améliorations UX/UI</h4>
                    <ul>
                        <li>Navigation intuitive réduisant le nombre de clics</li>
                        <li>Design moderne et attractif</li>
                        <li>Meilleure hiérarchie visuelle et lisibilité</li>
                    </ul>
                </div>
                <div class="modal-image-placeholder">[Prototype interactif]</div>
            </section>

            <section class="modal-section" id="modal-apprentissages">
                <h3 class="modal-section-title">Compétences développées</h3>
                <ul>
                    <li>Méthodologie UX complète (research, wireframes, tests)</li>
                    <li>Maîtrise de Figma pour le design d'interfaces</li>
                    <li>Création de design systems évolutifs</li>

                </ul>
            </section>
        `
    },
    
    projet5: {
        title: "Site Vitrine WordPress",
        category: "Webdesign & Développement • Freelance",
        techs: ["WordPress", "Webdesign", "Elementor"],
        content: `
            <section class="modal-section" id="modal-apercu">
                <h3 class="modal-section-title">Aperçu du projet</h3>
                <div class="modal-image-placeholder"> 
                    <video width="100%" height="300px" controls>
                    <source src="assets/wordpress.mp4" type="video/mp4">
                    </video>
                </div>
                <p>
                    Conception et réalisation d'un site vitrine sur WordPress pour présenter une activité 
                    professionnelle. Projet complet incluant design personnalisé, développement.
                </p>
            </section>

            <section class="modal-section" id="modal-contexte">
                <h3 class="modal-section-title">Contexte</h3>
                <p>
                    Création d'un site web professionnel pour un client souhaitant développer sa présence 
                    en ligne. Le site devait refléter l'identité de la marque tout en étant facile à 
                    maintenir et à mettre à jour. J'ai decidé de reprendre la marque MESSIKA, une marque de bijoux de luxe, pour ce projet fictif.
                </p>
            </section>

            <section class="modal-section" id="modal-problemes">
                <h3 class="modal-section-title">Défis du projet</h3>
                <div class="modal-grid">
                    <div class="modal-grid-item">
                        <h5>Identité visuelle</h5>
                        <p>Création d'un design unique tout en utilisant WordPress</p>
                    </div>
                </div>
            </section>

            <section class="modal-section" id="modal-solutions">
                <h3 class="modal-section-title">Solutions techniques</h3>
                <ul>
                    <li><strong>WordPress :</strong> Thème personnalisé avec Elementor</li>
                </ul>
            </section>

            <section class="modal-section" id="modal-resultats">
                <h3 class="modal-section-title">Résultats</h3>
                <p>
                    Site web professionnel, rapide. Le client peut désormais 
                    mettre à jour son contenu en toute autonomie.
                </p>
            </section>

            <section class="modal-section" id="modal-apprentissages">
                <h3 class="modal-section-title">Compétences acquises</h3>
                <ul>
                    <li>Maîtrise de WordPress et de son écosystème</li>
                    <li>Personnalisation de thèmes et création de templates</li>
                    <li>Gestion de projet de A à Z</li>
                </ul>
            </section>
        `
    }
};
const modal = document.getElementById('projectModal');
const modalClose = document.getElementById('modalClose');
const modalTitle = document.getElementById('modalTitle');
const modalCategory = document.getElementById('modalCategory');
const modalMainContent = document.getElementById('modalMainContent');
const modalTechTags = document.getElementById('modalTechTags');


const modalOverlay = document.createElement('div');
modalOverlay.className = 'modal-overlay';
document.body.appendChild(modalOverlay);


let isModalOpen = false;
let currentProjectData = null;


let isOpeningModal = false;


document.querySelectorAll('.project[data-project]').forEach(project => {
    project.addEventListener('click', function(e) {

        if (isOpeningModal) return;
        
        e.preventDefault();
        e.stopPropagation();
        
        const projectId = this.getAttribute('data-project');
        const projectData = projectsData[projectId];
        
        if (projectData && !isModalOpen) {
            openModal(projectData);
        }
    });
    

    project.style.cursor = 'pointer';
});


function openModal(data) {
    isOpeningModal = true;
    isModalOpen = true;
    currentProjectData = data;
    

    modalTitle.textContent = data.title;
    modalCategory.textContent = data.category;
    modalMainContent.innerHTML = data.content;
    modalTechTags.innerHTML = data.techs.map(tech => 
        `<span class="modal-tag">${tech}</span>`
    ).join('');
    

    modalMainContent.scrollTop = 0;
    

    requestAnimationFrame(() => {

        modalOverlay.classList.add('active');
        
   
        requestAnimationFrame(() => {
            modal.classList.add('active');
            document.body.classList.add('modal-open');
            
        
            setTimeout(() => {
                isOpeningModal = false;
            }, 300);
            
      
            setTimeout(() => {
                animateModalSections();
            }, 50);
            
       
            setupModalNavigation();
        });
    });
}

function animateModalSections() {
    const modalSections = modalMainContent.querySelectorAll('.modal-section');
    
    modalSections.forEach((section, index) => {
 
        section.style.opacity = '0';
        section.style.transform = 'translateY(10px)';
        
 
        setTimeout(() => {
            section.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
            section.style.opacity = '1';
            section.style.transform = 'translateY(0)';
        }, 50 + (index * 80));
    });
}

function closeModal() {
    if (!isModalOpen) return;
    
    isModalOpen = false;
    

    modal.classList.remove('active');
    

    setTimeout(() => {
        modalOverlay.classList.remove('active');
        document.body.classList.remove('modal-open');
        
    
        modalMainContent.querySelectorAll('.modal-section').forEach(section => {
            section.style.transition = 'none';
            section.style.opacity = '0';
            section.style.transform = 'translateY(10px)';
        });
        
       
        currentProjectData = null;
    }, 150);
}


modalClose.addEventListener('click', closeModal);
modalOverlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && isModalOpen) {
        closeModal();
    }
});


modal.addEventListener('click', function(e) {
    e.stopPropagation();
});


function setupModalNavigation() {
    const navLinks = modal.querySelectorAll('.modal-nav-link');
    
    navLinks.forEach(link => {
     
        link.removeEventListener('click', handleNavClick);
        link.addEventListener('click', handleNavClick);
    });
    
    if (modalMainContent.querySelectorAll('.modal-section').length > 0) {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const id = entry.target.getAttribute('id');
                        navLinks.forEach(link => {
                            const isActive = link.getAttribute('href') === `#${id}`;
                            link.classList.toggle('active', isActive);
                        });
                    }
                });
            },
            {
                root: modalMainContent,
                rootMargin: '0px 0px -50% 0px',
                threshold: 0.1
            }
        );
        
        modalMainContent.querySelectorAll('.modal-section').forEach(section => {
            observer.observe(section);
        });
        
       
        modal._observer = observer;
    }
}


function handleNavClick(e) {
    e.preventDefault();
    
    const targetId = this.getAttribute('href');
    const targetSection = modalMainContent.querySelector(targetId);
    
    if (targetSection) {
        
        if (modal._observer) {
            modalMainContent.querySelectorAll('.modal-section').forEach(section => {
                modal._observer.unobserve(section);
            });
        }
        
      
        targetSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
       
        setTimeout(() => {
            if (modal._observer) {
                modalMainContent.querySelectorAll('.modal-section').forEach(section => {
                    modal._observer.observe(section);
                });
            }
        }, 500);
    }
}


function smoothScrollTo(target) {
    if ('scrollBehavior' in document.documentElement.style) {
        target.scrollIntoView({ 
            behavior: 'smooth', 
            block: 'start' 
        });
    } else {
      
        const targetPosition = target.offsetTop;
        const startPosition = window.pageYOffset;
        const distance = targetPosition - startPosition;
        const duration = 500;
        let start = null;
        
        function animation(currentTime) {
            if (start === null) start = currentTime;
            const timeElapsed = currentTime - start;
            const run = ease(timeElapsed, startPosition, distance, duration);
            window.scrollTo(0, run);
            if (timeElapsed < duration) requestAnimationFrame(animation);
        }
        
        function ease(t, b, c, d) {
            t /= d / 2;
            if (t < 1) return c / 2 * t * t + b;
            t--;
            return -c / 2 * (t * (t - 2) - 1) + b;
        }
        
        requestAnimationFrame(animation);
    }
}


document.querySelectorAll('.nav a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const target = document.querySelector(targetId);
        
        if (target) {
            smoothScrollTo(target);
        }
    });
});


document.querySelector('.cta[href="#projects"]')?.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector('#projects');
    if (target) {
        smoothScrollTo(target);
    }
});

const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        

        if (name && email && message) {
            alert(`Merci ${name} ! Votre message a été envoyé.`);
            this.reset();
        } else {
            alert('Veuillez remplir tous les champs.');
        }
    });
}


const animationObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
            animationObserver.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.05,
    rootMargin: '0px 0px -50px 0px'
});


document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.bento-item, .skill-group').forEach(el => {
        animationObserver.observe(el);
    });
    
 
    setTimeout(() => {
        document.querySelector('.hero-name')?.classList.add('animate-in');
        document.querySelector('.hero-subtitle')?.classList.add('animate-in');
        document.querySelector('.hero-description')?.classList.add('animate-in');
        document.querySelector('.cta')?.classList.add('animate-in');
    }, 300);
});


let scrollTimer;
window.addEventListener('scroll', () => {
    clearTimeout(scrollTimer);
    scrollTimer = setTimeout(() => {
        const sections = document.querySelectorAll('section[id]');
        const scrollY = window.pageYOffset;
        
        let currentSection = '';
        
        sections.forEach(section => {
            const sectionHeight = section.offsetHeight;
            const sectionTop = section.offsetTop - 100;
            const sectionId = section.getAttribute('id');
            
            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                currentSection = sectionId;
            }
        });
        
     
        document.querySelectorAll('.nav a').forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${currentSection}`) {
                link.classList.add('active');
            }
        });
    }, 50);
});


window.addEventListener('beforeunload', function() {
    if (modal._observer) {
        modal._observer.disconnect();
    }
    animationObserver.disconnect();
});


/* -------- A REFAIRE TRUC INTERET ------- 
const openBtn = document.getElementById("openInterests");
const closeBtn = document.getElementById("closeInterests");
const overlay = document.getElementById("interestsOverlay");

openBtn.addEventListener("click", () => {
    overlay.classList.add("open");
});

closeBtn.addEventListener("click", () => {
    overlay.classList.remove("open");
});

// Tabs
const tabs = document.querySelectorAll(".tab");
const panels = document.querySelectorAll(".tab-panel");

tabs.forEach(tab => {
    tab.addEventListener("click", () => {
        tabs.forEach(t => t.classList.remove("active"));
        panels.forEach(p => p.classList.remove("active"));

        tab.classList.add("active");
        document.getElementById(tab.dataset.tab).classList.add("active");
    });
});

(function() {
  const btn = document.getElementById('openInterests');
  if (!btn) return;


  btn.classList.add('pulse');

  const portfolio = document.getElementById('portfolio');
  if (portfolio) {
 
    portfolio.appendChild(btn);
    btn.classList.add('top-anchored');
   
    btn.style.position = ''; 
  }
})();*/
