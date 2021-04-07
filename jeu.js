var faute =0 ; 
var début=confirm("commencer la devinette ? ");
/*pour le nbr aleatoire */
function hasard(min,max)
{
	return min+Math.floor(Math.random()*(max-min+1));
}
var nbralea=hasard(0,10);
console.log(nbralea);
do{
/*nbr donnée par l'utilisateur */
var nombre=prompt("devinez un nombre entre 0 et 10 ");
console.log("vous avez choisi le nombre : "+nombre); 

/*test*/


if (nombre > nbralea)
{
   alert("Votre nombre est grand :( ");
   faute++ ;
}
if (nombre < nbralea)
{
    alert("Votre nombre est petit :( ");
    faute++ ;
} 
if (nombre == nbralea) 
{
    alert("CONGRATULATIONS :D c'est correct ");
    break;
}
}while (faute < 3);

if (faute == 3)
{ console.log("Désolé vous avez utilisé tous les tentatives d'essais , le nombre était " + nbralea); 
var on=confirm("voulez-vous continuez ?");}
