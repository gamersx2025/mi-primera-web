document.addEventListener("DOMContentLoaded", () => {

    // -----------------------------
    // NOMBRE DEL NEGOCIO
    // -----------------------------

    const businessName =
        document.getElementById("business-name");

    if (businessName) {
        businessName.textContent = business.name;
    }


    // -----------------------------
    // HERO
    // -----------------------------

    const heroTitle =
        document.getElementById("hero-title");

    if (heroTitle) {
        heroTitle.textContent = business.name;
    }


    const heroDescription =
        document.getElementById("hero-description");

    if (heroDescription) {
        heroDescription.textContent =
            business.description;
    }


    // -----------------------------
    // WHATSAPP
    // -----------------------------

    const whatsappMain =
        document.getElementById("whatsapp-main");

    if (whatsappMain) {

        const message = encodeURIComponent(business.whatsappMessage);

            whatsappMain.href =`https://wa.me/${business.whatsapp}?text=${message}`;
    }


    // -----------------------------
    // SERVICIOS
    // -----------------------------

    const servicesContainer =
        document.getElementById("services-container");

    if (servicesContainer) {

        business.services.forEach(service => {

            const article =
                document.createElement("article");

            article.className = "card";

            article.innerHTML = `

                <h3>
                    ${service.name}
                </h3>

                <p>
                    ${service.description}
                </p>

            `;

            servicesContainer.appendChild(article);

        });

    }


    // -----------------------------
    // BENEFICIOS
    // -----------------------------

    const benefitsContainer =
        document.getElementById("benefits-container");

    if (benefitsContainer) {

        business.benefits.forEach(benefit => {

            const div =
                document.createElement("div");

            div.innerHTML = `

                <h3>
                    ✓ ${benefit.title}
                </h3>

                <p>
                    ${benefit.description}
                </p>

            `;

            benefitsContainer.appendChild(div);

        });

    }

});