// Service worker minimal — juste pour rendre l'appli "installable" sur mobile/ordi.
// Ne met rien en cache (les données viennent toujours de Firestore en direct).
self.addEventListener('install', e => self.skipWaiting());
self.addEventListener('activate', e => self.clients.claim());
self.addEventListener('fetch', e => {
  // Laisse passer toutes les requêtes normalement (pas de cache pour éviter les données périmées)
});
