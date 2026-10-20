// Informations générales du site : modifiez-les ici, elles s'appliquent partout.
export const SITE = {
  nom: 'Sev Créations',
  artiste: 'Sev',
  ville: 'Dardilly',
  region: 'près de Lyon (Rhône)',
  email: 'severine.marchetti@yahoo.com',
  // Laisser vide ('') pour masquer Instagram sur le site.
  instagram: '',
  instagramPseudo: '',
};

export const CATEGORIES = [
  { id: 'dessin', nom: 'Dessin', intro: 'Crayon, fusain et pastel : le trait dans tous ses états.' },
  { id: 'peinture', nom: 'Peinture', intro: 'Acrylique, aquarelle et couleurs franches sur toile et papier.' },
  { id: 'textile', nom: 'Textile', intro: 'Tissus, fils et broderies : des pièces uniques faites main.' },
  { id: 'sculpture', nom: 'Sculpture', intro: 'Des formes modelées à la main, en argile, plâtre ou terre cuite.' },
  { id: 'bijoux', nom: 'Bijoux', intro: 'Des bijoux uniques, colorés et faits main.' },
  { id: 'objets-deco', nom: 'Objets décoratifs', intro: 'De petits objets peints et façonnés pour égayer la maison.' },
] as const;
