

function openPage(pageName, elmnt, color) {
    // Hide all elements with class="tabcontent" by default */
    let i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    // Remove the background color of all tablinks/buttons
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].style.backgroundColor = "";
    }
  
    // Show the specific tab content
    document.getElementById(pageName).style.display = "block";
  
    // Add the specific color to the button used to open the tab content
    // elmnt.style.backgroundColor = color;
  }
  
  // Get the element with id="defaultOpen" and click on it
  document.getElementById("defaultOpen").click();




document.querySelector('.button').addEventListener('click', function(){
    let perioadaTimp = document.querySelector('.restituiti').value;
    let suma = Number(document.querySelector('.sum').value);
    let perioadaInLuni = perioadaTimp * 12;
    let dobanda = (4,6 / 100) * suma;
    let dobandaTotala = suma + dobanda;
    // suma += dobanda;
    let dobandaPeLuna = Math.floor(dobandaTotala / perioadaInLuni);
    document.querySelector('.verifica').textContent = `Rata dumneavoastra pe luna este de ${dobandaPeLuna} lei la care s-a adaugat o dobanda de 4,6%`
})

  // function credit(sum, number){
  //   let perioadaTimp = number * 12;
  //   let dobanda = (4,6 /100) * sum;
  //   let dobandaTotala = dobanda + sum;
  //   let dobandaPeLuna = Math.floor(dobandaTotala / perioadaTimp);
  //   return dobandaPeLuna;
  // }

  // console.log(credit(2100, 1))


  document.querySelector('.button1').addEventListener('click', function(){
    let perioadaTimp = document.querySelector('.restituiti1').value;
    let sum = Number(document.querySelector('.sum1').value);
    let dobanda = (1 / 100) * sum;
    let peNAni = dobanda * perioadaTimp;
    let rezultatFinal = sum + peNAni;
    document.querySelector('.verifica1').textContent = `Suma dumneavoastra totala este de ${rezultatFinal} lei la care s-a adaugat o dobanda de 1% pe an.`
  })

  function depunere(sum, n){
    let dobanda = (1 / 100) * sum;
    let peNAni = dobanda * n;
    let rezultatFinal = sum + peNAni;
    return rezultatFinal;
  }

  console.log(depunere(2100, 2))