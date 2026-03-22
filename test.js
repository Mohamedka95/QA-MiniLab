// test.js - mini-lab QA
const produits = ["Stylo", "Cahier", "Gomme"];
const produitATester = "Cahier";

if (produits.includes(produitATester)) {
    console.log(`Test Passed : ${produitATester} trouvé ✅`);
} else {
    console.log(`Test Failed : ${produitATester} non trouvé ❌`);
}