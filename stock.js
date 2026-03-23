const produits = [
  { nom: "Stylo", quantite: 10 },
  { nom: "Cahier", quantite: 0 },
  { nom: "Gomme", quantite: 5 }
];

function verifierDisponibilite(produit){
    if (produit.quantite > 0) {
       return true
    } else {
        return false;
    } 
};
produits.forEach(produit => console.log(verifierDisponibilite(produit) ? `${produit.nom} est en stock ✅`
 :`${produit.nom} est en rupture ❌`));
