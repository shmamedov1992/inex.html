(function() {

    const colections = [
        {
            id: "1",
            title: "Adidas",
            imageUrl: "img/adidas_black_trainer.jpg",
            description: "Adidas Black...",
            price: 60.00
        },
        {
            id: "1",
            title: "Jordan",
            imageUrl: "img/asics_jordan_2000.jpg",
            description: "Asics Jordan 2000...",
            price: 60.00
        },
        {
            id: "1",
            title: "Nike",
            imageUrl: "img/nike_winter-_jacket_in_blue.jpg",
            description: "Nike Winter...",
            price: 60.00
        },
        {
            id: "1",
            title: "Puma",
            imageUrl: "img/puma_textile_running_Shoes.jpg",
            description: "Puma Textile...",
            price: 60.00
        },
        {
            id: "1",
            title: "Reebok",
            imageUrl: "img/reebok_red_duster.jpg",
            description: "Reebok Red...",
            price: 60.00
        },
    ];
    function renderColections(colections){
        const colectionsContainer = document.querySelector('carousel-inner');
        colectionsContainer.innerHTML = '';
        for (const colection of colections) {
            colectionsContainer.innerHTML +=`
            <section class="new-colection">
            <div id="carouselnewarrivals" class="carousel slide container" data-bs-ride="true">
                <div class="carousel-indicators">
                  <button type="button" data-bs-target="#carouselnewarrivals" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                  <button type="button" data-bs-target="#carouselnewarrivals" data-bs-slide-to="1" aria-label="Slide 2"></button>
                  <button type="button" data-bs-target="#carouselnewarrivals" data-bs-slide-to="2" aria-label="Slide 3"></button>
                  <button type="button" data-bs-target="#carouselnewarrivals" data-bs-slide-to="3" aria-label="Slide 4"></button>
                  <button type="button" data-bs-target="#carouselnewarrivals" data-bs-slide-to="4" aria-label="Slide 5"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img 
                        src="${colection.imageUrl}"
                        alt="${colection.title} "
                        <div class="price-basket"> 
                        <p>Adidas Black Trainers</p>
                        <span class="prise-new d-block w-50 mx-auto"><b>$60,00</b></span>
                        <form action="#">
                            <button class="button-basket" type="submit">Add to Cart</button>
                        </form>
                    </div>
                    </div>
                    <div class="carousel-item">
                        <img src="./img/asics_jordan_2000.jpg" class="d-block w-50 mx-auto" alt="Asics Jordan 2000">
                        <p>Asics Jordan 2000</p>
                        <span class="prise-new d-block w-50 mx-auto">$60,00</span>
                        <form action="#">
                            <button class="button-basket" type="submit">Add to Cart</button>
                        </form>
                    </div>
                    <div class="carousel-item">
                        <img src="./img/nike_winter-_jacket_in_blue.jpg" class="d-block w-50 mx-auto" alt="Nike Winter">
                        <p>Nike Winter Jacket in Blue</p>
                        <span class="prise-new d-block w-50 mx-auto">$60,00</span>
                        <form action="#">
                            <button class="button-basket" type="submit">Add to Cart</button>
                        </form>
                    </div>
                    <div class="carousel-item">
                        <img src="./img/puma_textile_running_Shoes.jpg" class="d-block w-50 mx-auto" alt="Puma Textile">
                        <p>Puma Textile Running Shoes</p>
                        <span class="prise-new d-block w-50 mx-auto">$60,00</span>
                        <form action="#">
                            <button class="button-basket" type="submit">Add to Cart</button>
                        </form>
                    </div>
                    <div class="carousel-item">
                        <img src="./img/reebok_red_duster.jpg" class="d-block w-50 mx-auto" alt="Reebok Red">
                        <p>Reebok Red Duster</p>
                        <span class="prise-new d-block w-50 mx-auto">$60,00</span>
                        <form action="#">
                            <button class="button-basket" type="submit">Add to Cart</button>
                        </form>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselnewarrivals" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselnewarrivals" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
            </article>`
        }
    }

})();