# Ajouter une œuvre sur le site Sev Créations

Environ 5 minutes, depuis un ordinateur (ça marche aussi sur téléphone, mais c'est moins confortable).
Le site se met à jour tout seul environ 1 minute après.

## Étape 1 : préparer la photo

- Une photo nette, à la lumière du jour, l'œuvre bien droite et entière.
- Pas besoin de la réduire : le site s'en charge.
- **Renommez le fichier** avec un nom simple, **sans espace, sans accent, sans majuscule**, avec des tirets.
  Exemple : `fleurs-de-printemps.jpg`
  Formats acceptés : `.jpg`, `.jpeg`, `.png`, `.webp`

## Étape 2 : envoyer la photo sur GitHub

1. Ouvrez https://github.com/artofsev/art-of-sev/tree/main/src/oeuvres
2. Cliquez sur **Add file** (en haut à droite), puis **Upload files**.
3. Glissez votre photo dans la page (ou cliquez sur **choose your files**).
4. En bas, cliquez sur le bouton vert **Commit changes**.

## Étape 3 : créer la fiche de l'œuvre

1. Toujours dans le même dossier, cliquez sur **Add file**, puis **Create new file**.
2. Dans la case du nom, écrivez le **même nom que la photo**, mais terminé par `.md`.
   Exemple : `fleurs-de-printemps.md`
3. Dans la grande zone de texte, collez ce modèle et modifiez les valeurs :

```
---
titre: "Fleurs de printemps"
categorie: peinture
image: ./fleurs-de-printemps.jpg
technique: "Acrylique sur toile"
dimensions: "40 × 50 cm"
annee: 2026
prix: 250
disponible: true
accueil: true
ordre: 1
---
Quelques phrases pour présenter l'œuvre : le sujet, l'inspiration, la technique.
```

4. Cliquez sur le bouton vert **Commit changes…**, puis encore sur **Commit changes**.

C'est tout. Attendez 1 à 2 minutes et rechargez le site.

## Ce que veut dire chaque ligne

| Ligne | À quoi ça sert | Valeurs possibles |
|---|---|---|
| `titre` | Le nom de l'œuvre | Entre guillemets `"…"` |
| `categorie` | La catégorie de la galerie | `dessin`, `peinture`, `textile`, `sculpture`, `bijoux`, `objets-deco` (exactement comme ça) |
| `image` | La photo | `./` suivi du nom exact de la photo |
| `technique` | Facultatif | Entre guillemets |
| `dimensions` | Facultatif | Entre guillemets |
| `annee` | Facultatif | Un nombre, sans guillemets |
| `prix` | Facultatif, affiché seulement si l'œuvre est à vendre | Un nombre sans « € » ni guillemets : `400` |
| `disponible` | À vendre ou non | `true` (oui) ou `false` (non / vendue) |
| `accueil` | Afficher sur la page d'accueil | `true` (oui) ou `false` (non) |
| `ordre` | Position dans la galerie | Plus le nombre est petit, plus l'œuvre est en haut (0, 1, 2…) |

Les lignes facultatives peuvent être supprimées entièrement.

## Les règles pour ne rien casser

- **Gardez les deux lignes `---`** au début et à la fin du bloc.
- **Gardez l'espace après les deux-points** : `titre: "…"` et non `titre:"…"`.
- **Le nom dans `image:` doit être exactement celui de la photo** (même orthographe, même extension `.jpg`, `.png`…).
- La catégorie s'écrit **sans majuscule ni accent**, exactement comme dans le tableau.

## Modifier ou retirer une œuvre

- **Marquer une œuvre vendue** : ouvrez sa fiche `.md`, cliquez sur le **crayon** ✏️ (en haut à droite), remplacez `disponible: true` par `disponible: false`, puis **Commit changes**.
- **Changer un texte ou un prix** : même chose, avec le crayon.
- **Retirer une œuvre** : ouvrez sa fiche `.md`, cliquez sur les **trois points** `…` en haut à droite, puis **Delete file** et **Commit changes**. Faites de même pour la photo.

## Et si je me trompe ?

Pas de panique : **le site ne peut pas tomber en panne**. Si une fiche contient une erreur, Vercel garde la version précédente du site en ligne et vous envoie un e-mail. Il suffit de corriger la fiche (avec le crayon ✏️), et le site se met à jour.

Le fichier `_MODELE.md` dans le dossier est un modèle : il n'apparaît pas sur le site.
