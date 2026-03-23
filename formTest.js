const formulaire = {
  nom: "Jean",
  email: "jean@test.com",
  age: 25,
};
if(formulaire.nom!=''){
        console.log("Test Passed: Nom est non vide");
}else{ console.log("Test Failed: Nom est vide");}
if(formulaire.email.includes('@')){
     console.log("Test Passed: Email contient @");}
     else{console.log("Test Failed: Email ne contient pas @");}
if(formulaire.age>18){ 
    console.log("Test Passed: L'age > 18");}
    else{ console.log("Test Failed: L'age < 18");}