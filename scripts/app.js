
const references =[
    {
        id : 1,
        name: 'Stephany Rojas',
        ocupation: 'Aux. cobranzas',
        phone: '314172438'
    },
    {
        id : 2,
        name: 'Aparicio Peña',
        ocupation: 'Ing. en sistemas',
        phone: '3017938225'
    },
]

const experiences =[
    {
        title : "Visual Basic",
        percentageProgress: 80,
        image:'https://drive.google.com/thumbnail?id=1Ljtp0i9bP3iLl-bapWk5tIqY81hVfgn_',
    },
    {
        title : "Postgres",
        percentageProgress: 60,
        image: 'https://drive.google.com/thumbnail?id=1g0fKsC8yctLbOOtuJYc1EU0gqnCUFwah',
    },
    {
        title: "JavaScript",
        percentageProgress: 40,
        image: 'https://drive.google.com/thumbnail?id=1CJGRpm2tDnsBfSmjpIRGNsFikDarZm68',
    }
]

const proyects =[
    {
        idproyect : 1,
        imgproyect: 'https://drive.google.com/thumbnail?id=1-mVyB64FzcjRNOcXDwZJu8CXhqBRN37T',
        titleProyect: 'Caixa',
        descriptionProyect: 'sowfware de ventas retail, desarollado en visual basic y base de datos en postgresSQL.'
    },
    
]


document.querySelectorAll('a[href^="#"]').forEach(anchor  => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
      /*   console.log(document.querySelector(this.getAttribute('id'))) */
        if (target){
            window.scrollTo({
                top: target.offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

loadSectionProyects()
loadSectionReferences()
loadSectionExperience()

function loadSectionProyects(){ proyects.forEach( proyect => createCardProyects(proyect))
};

function loadSectionReferences(){ references.forEach( reference => createCardReferences(reference))
};

function loadSectionExperience(){ experiences.forEach( experience => createCardExperience(experience))
};

function createCardProyects(proyect) {
    
    const cardProyect = document.createElement('div')
    cardProyect.classList.add('card-proyects')

    const containerImg = document.createElement('div')
    containerImg.classList.add('img-container')

    const imgCard = document.createElement('img')
    imgCard.src= proyect.imgproyect
    imgCard.alt= proyect.titleProyect

    const containerDescription = document.createElement('div')
    containerDescription.classList.add('description-continer')

    const titlecard = document.createElement('h3')
    titlecard.textContent = proyect.titleProyect

    const descriptionCard = document.createElement('p')
    descriptionCard.textContent = proyect.descriptionProyect

    cardProyect.appendChild(containerDescription)
    cardProyect.appendChild(containerImg)

    containerImg.appendChild(imgCard)
    containerDescription.appendChild(titlecard)
    containerDescription.appendChild(descriptionCard)

    document.querySelector('.container-cards').appendChild(cardProyect)
};

function createCardReferences(reference) {
    
    const cardReference = document.createElement('div')
    cardReference.classList.add('card-references')

   const pName = document.createElement('p')
   pName.textContent = 'Nombre: '
   const sName = document.createElement('span')
   sName.textContent = reference.name
   
   const pOcupation = document.createElement('p')
   pOcupation.textContent = 'Ocupación: '
   const sOcupation = document.createElement('span')
   sOcupation.textContent = reference.ocupation

   const pPhone = document.createElement('p')
   pPhone.textContent = 'Telefono: '
   const sPhone = document.createElement('span')
   sPhone.textContent = reference.phone

   cardReference.appendChild(pName)
   cardReference.appendChild(sName)
   cardReference.appendChild(pOcupation)
   cardReference.appendChild(sOcupation)
   cardReference.appendChild(pPhone)
   cardReference.appendChild(sPhone)
   
    document.querySelector('.card-contariner-reference').appendChild(cardReference)
};

function createCardExperience(experience){
    const cardExperience = document.createElement('div')
    cardExperience.classList.add('card-experience')

    const imgCard = document.createElement('img')
    imgCard.classList.add('img-experience')
    imgCard.src= experience.image

    const titleExperience = document.createElement('h4')
    titleExperience.textContent = experience.title

    const percentageProgress = document.createElement('progress')
    percentageProgress.classList.add('progress-bar')
    percentageProgress.setAttribute('value', experience.percentageProgress)
    percentageProgress.setAttribute('max', '100')

    cardExperience.appendChild(imgCard)
    cardExperience.appendChild(titleExperience)
    cardExperience.appendChild(percentageProgress)

    document.querySelector('.cards-experiences').appendChild(cardExperience)

}

function abrirWhatsapp() {
window.open('https://wa.me/573203874417', '_blank') ;
}


