<template>
  <div id="app">
    <!-- Vidéo en fond -->
    <div class="video-background">
      <video id="background-video" muted>
        <source src="/video/background.mp4" type="video/mp4" />
        Votre navigateur ne supporte pas les vidéos.
      </video>
    </div>
    <!-- Contenu de la page -->
    <section class="hero">
      <h1 class="title">Bienvenue dans mon portfolio</h1>
      <p class="subtitle">Découvrez mon travail, mes projets et mes compétences !</p>
      <button class="cta-button">Contactez-moi</button>
    </section>
    <section class="about">
      <h2>À propos de moi</h2>
      <p>Je suis un développeur passionné...</p>
    </section>
  </div>
</template>

<style>
/* Réinitialisation de la mise en page */
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box; /* Garantir que le padding ne gonfle pas la taille de l'élément */
}

html,
body {
  width: 100%;
  height: 100%;
  font-family: 'Arial', sans-serif;
  overflow: hidden;
}

/* Section principale de l'application */
#app {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%; /* Occupation totale de la largeur */
  height: 100vh; /* Remplir toute la hauteur */
}

/* Section Hero */
.hero {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw; /* Forcer à prendre toute la largeur de la fenêtre */
  height: 100vh; /* Forcer à prendre toute la hauteur de la fenêtre */
  color: #1a1a1a; /* Texte noir */
  text-align: center;
  padding: 0; /* Suppression des paddings qui pourraient créer des marges */
  margin: 0; /* Suppression des marges */
}

/* Titre principal */
.title {
  font-size: 4rem;
  font-weight: bold;
  color: #1a1a1a;
  animation: fadeIn 2s ease-in-out;
}

/* Sous-titre */
.subtitle {
  font-size: 1.5rem;
  margin-top: 1rem;
  color: #1a1a1a;
  animation: fadeInUp 2s ease-in-out;
}

/* Bouton d'appel à l'action */
.cta-button {
  margin-top: 2rem;
  padding: 1rem 2rem;
  font-size: 1.2rem;
  background-color: #ff6f61; /* Rouge corail */
  color: #ffffff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.cta-button:hover {
  background-color: #1bc6e8; /* Bleu turquoise */
}

/* Section "À propos" */
.about {
  background: #ffffff;
  padding: 3rem 2rem;
  text-align: center;
  width: 100vw; /* Forcer à prendre toute la largeur de la fenêtre */
  margin: 0; /* Assurer qu'il n'y a pas de marges supplémentaires */
  color: #1a1a1a;
}

/* Animation fadeIn et fadeInUp */
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.video-background {
  position: fixed; /* Fixe la vidéo en arrière-plan */
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1; /* Assure que la vidéo soit derrière le contenu */
  overflow: hidden;
}

video {
  width: 100%;
  height: 100%;
  object-fit: cover; /* Couvre toute la fenêtre sans déformation */
  object-position: center;
}
</style>

<script>
export default {
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll() {
      const video = document.getElementById('background-video')
      const scrollPosition = window.scrollY // Position du scroll vertical
      const videoSpeed = 0.3 // Vitesse à laquelle la vidéo avance/recule

      // Calcul de la position en fonction du scroll
      video.currentTime = scrollPosition * videoSpeed // Change la position de la vidéo
    },
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll)
  },
}
</script>
