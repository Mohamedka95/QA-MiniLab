/*console.log("Bonjour,je commence TS")
let produit ="Stylo";
const prix = 5;
console.log(produit,prix)

let prix = 8;
if (prix>10){
    console.log("cher")
} else {console.log("Adorable");

}
const produits = ["Stylo", "Cahier", "Gomme"];
for(let i = 0; i < produits.length; i++){
    console.log(produits[i]);
}
function verifierProduit(produit){
    const produits = ["Stylo","Cahier","Gomme"];
    return produits.includes(produit);

}
console.log(verifierProduit("S") ? "Pass" : "Fail");

const produit = {nom:"Stylo",prix : 5, Quantite : 10};
console.log(produit.nom,produit.prix);*/

const prixProduits = [5, 12, 7];
const produitsChers = prixProduits.filter(p => p > 10);
console.log(produitsChers);