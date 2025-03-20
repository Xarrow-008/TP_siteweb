backgroundColorInput.addEventListener(
    'keyup',
    function(event) {
        document.body.style.background=backgroundColorInput.value
        testWorking()
    }
)

function testWorking() {
    testCheck.hidden=!testCheck.hidden
}

function creerOption(texte) { //cree une option sur la selection et met le parametre a l'interieur
    const option = document.createElement('option')
    option.textContent = texte
    return option
  }

selectionImage.addEventListener(
    'change',
    function(event){
        imageSelected.src=imageNameToFolder(selectionImage.value)
    }
)
function imageNameToFolder(imageName) {
    if (imageName==="oui") {
        folder="image_folder/DoesntBelongHere.jpg"
    }
    if (imageName==="Pont du Gard") {
        folder="image_folder/PontDuGard.jpg"
    }
    return folder
}

selectionImage.appendChild(creerOption("oui"))
selectionImage.appendChild(creerOption("Pont du Gard"))