const produits = ["Stylo", "Cahier", "Gomme"];
const test = ["Stylo", "Taille-crayon", "Gomme"];

function verifier(p){
    return produits.includes(p);
}
test.forEach(p => console.log(verifier(p) ? "Pass ✅" : "Fail ❌"));


