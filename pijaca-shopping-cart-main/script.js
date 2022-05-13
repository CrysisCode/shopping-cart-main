let allTotal = 0; //pocetni total je 0 i staviti ga poslije svakog totala da bi to sve sabirao sebi

function addToCart(element) {
    let mainEl = element.closest('.single-item');
    let name = mainEl.querySelector('h3').innerText;
    let price = mainEl.querySelector('.price').innerText;//mozemo selector koristiti i nad nekim skupom elemenata ne mora samo doccument
    let quantity = mainEl.querySelector('input').value;

    if(parseInt(quantity) > 0) {

        price = price.substring(1);
        let total = quantity * parseInt(price);//brišemo element do prvog indexa
        let cartItems = document.querySelector('.cart-items');
        allTotal += total; //ovdje na allTotal sabiramo total allTotal = allTotal + total

        cartItems.innerHTML += `<div class="cart-single-item d-flex align-items-baseline">
                                <h4>${name}</h4>
                                <p>$${price} X ${quantity} = $<span>${total}</span></p>
                                <button id="#remove" class="btn btn-danger" onclick="removeBtn(this)">Remove</button>
                                 </div><br>`;

        element.innerText = 'Added';
        element.setAttribute('disabled', 'true');
        console.log(cartItems.innerHTML);

        let bill = document.querySelector('.total');
        bill.innerText = `Total price: $${allTotal}`;

    }
    else {
        alert('Select quantity!');
    }

}

function removeBtn(remove) {
    let rem = remove.closest('.cart-single-item');
    let price = rem.querySelector('p span').innerText;
    price = parseInt(price);
    let name = rem.querySelector('h4').innerText;
    let vegetables = document.querySelectorAll('.single-item');

    allTotal -= price;

    rem.remove();

    let bill = document.querySelector('.total');
        bill.innerText = `Total price: $${allTotal}`;

    vegetables.forEach(function (vege) {
        let itemName = vege.querySelector('.si-content h3').innerText; // U ovoj funkciji trazimo po imenu koje smo stavili u h3

        if(itemName === name) {
            vege.querySelector('.actions input').value = 0;
            vege.querySelector('.actions button').removeAttribute('disabled');
            vege.querySelector('.actions button').innerText = 'Add';
        }
        // i za svako to ime smo napravili neku zamjenu
    });

}

/* Lista filmova sa nazivom, opisom, ocjenom i cijenom
za gledanje, kada neko klikne gledaj da mu se taj film
oznaci kao da je pogledan i koliko je para potrosio,
i onda kad klikne neki novi film, gledaj i da mu se
na taj film pokaze kao da ga je gledao i da mu se 
to doda na potrosenu cijenu */