let Head = document.getElementsByName("Head")
for (let i = 0; i < Head.length; i++) {
    Head[i].innerHTML = `
        <meta charset="utf-8">
        <title>Loïc FOSSE</title>
        <meta name="description" content="">
        <meta name="author" content="Loïc FOSSE">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="css/normalize.css">
        <link rel="stylesheet" href="css/skeleton.css">
    `;
}

let NavBar = document.getElementsByName("NavBar")
for (let i = 0; i < NavBar.length; i++) {
    NavBar[i].innerHTML = `
    <div class='row'>
      <div class='twelve columns' style='font-size: 1.6rem'>
        <strong><a class='hidelink' href='index.html'>About</a> &nbsp; | &nbsp; </strong>
        <a class='hidelink' href='curriculum.html'>CV</a> &nbsp; | &nbsp;
	    <a class='hidelink' href='publications.html'>Publications</a> &nbsp; | &nbsp;
        <a class='hidelink' href='talks.html'>Talks</a> &nbsp; | &nbsp;
        <a class='hidelink' href='teaching.html'>Teaching</a>
      </div>
    </div>
    `;
    }

let OrangeInnov = document.getElementsByName("OrangeInnov")
for (let i = 0; i < OrangeInnov.length; i++) {
    OrangeInnov[i].innerHTML = "<a class='hidelink' href='https://hellofuture.orange.com/fr/'>Orange Innovation</a>";
}

let LisLab = document.getElementsByName("LisLab")
for (let i = 0; i < LisLab.length; i++) {
    LisLab[i].innerHTML = "<a class='hidelink' href='https://www.lis-lab.fr/'>LIS Lab</a>";
}

let GerDam = document.getElementsByName("GerDam")
for (let i = 0; i < GerDam.length; i++) {
    GerDam[i].innerHTML = "<a class='hidelink' href='https://sites.google.com/site/geraldinedamnati/'>Géraldine Damnati</a>";
}

let GweLec = document.getElementsByName("GweLec")
for (let i = 0; i < GweLec.length; i++) {
    GweLec[i].innerHTML = "<a class='hidelink' href='http://people.irisa.fr/Gwenole.Lecorve/'>Gwénolé Lecorvé</a>";
}

let BenFav = document.getElementsByName("BenFav")
for (let i = 0; i < BenFav.length; i++) {
    BenFav[i].innerHTML = "<a class='hidelink' href='https://pageperso.lis-lab.fr/benoit.favre/'>Benoît Favre</a>";
}

let FreBec = document.getElementsByName("FreBec")
for (let i = 0; i < FreBec.length; i++) {
    FreBec[i].innerHTML = "<a class='hidelink' href='https://pageperso.lis-lab.fr/frederic.bechet/'>Frédéric Béchet</a>";
}

let guig = document.getElementsByName("guig")
for (let i = 0; i < guig.length; i++) {
    guig[i].innerHTML = "<a class='hidelink' href='http://people.irisa.fr/Guillaume.Gravier/'>Guillaume Gravier</a>";
}

let jfd = document.getElementsByName("jfd")
for (let i = 0; i < jfd.length; i++) {
    jfd[i].innerHTML = "<a class='hidelink' href='http://dupuy.perso.math.cnrs.fr/index.html'>Jean-François Dupuy</a>";
}


let Insa = document.getElementsByName("Insa")
for (let i = 0; i < Insa.length; i++) {
    Insa[i].innerHTML = "<a class='hidelink' href='https://www.groupe-insa.fr'>INSA</a>";
}

let IRISA = document.getElementsByName("IRISA")
for (let i = 0; i < IRISA.length; i++) {
    IRISA[i].innerHTML = "<a class='hidelink' href='https://www.irisa.fr/'>IRISA Lab</a>";
}


let INSAGM = document.getElementsByName("INSAGM")
for (let i = 0; i < INSAGM.length; i++) {
    INSAGM[i].innerHTML = "<a class='hidelink' href='https://www.groupe-insa.fr/preparer/nos-formations/ingenieur/mathematiques-appliquees-1'>INSA's Mathematics Department</a>";
}

let Abo = document.getElementsByName("Abo")
for (let i = 0; i < Abo.length; i++) {
    Abo[i].innerHTML = "<a class='hidelink' href='https://www.abo.fi/en/'>Åbo Akademi</a>";
}

