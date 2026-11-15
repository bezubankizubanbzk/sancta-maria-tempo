
// SANCTA MARIA - WEBSITE JAVASCRIPT

// WhatsApp Business Number
const WHATSAPP_NUMBER = "917827053755";

// Instagram Profile
const INSTAGRAM_URL = "https://www.instagram.com/your-instagram-handle/";

// Product Modal
const modal = document.getElementById("productModal");

let selectedProduct = null;

// WhatsApp Function
function openWhatsApp(message) {
    window.open(
        `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`,
        "_blank"
    );
}

// Product Quick View
document.querySelectorAll(".product-card").forEach(card => {

    const productButton = card.querySelector(".product-image");

    productButton.addEventListener("click", () => {

        selectedProduct = {
            name: card.dataset.name,
            price: card.dataset.price,
            image: card.dataset.image
        };

        document.getElementById("modalName").textContent =
            selectedProduct.name;

        document.getElementById("modalPrice").textContent =
            `₹${Number(selectedProduct.price).toLocaleString("en-IN")}`;

        document.getElementById("modalImage").src =
            selectedProduct.image;

        document.getElementById("modalImage").alt =
            selectedProduct.name;

        document.getElementById("sizeSelect").value = "";

        modal.classList.add("open");
        modal.setAttribute("aria-hidden", "false");

    });

});

// Close Product Modal
document.querySelectorAll("[data-close]").forEach(button => {

    button.addEventListener("click", () => {

        modal.classList.remove("open");
        modal.setAttribute("aria-hidden", "true");

    });

});

// WhatsApp Product Ordering
document.getElementById("orderProduct").addEventListener("click", () => {

    if (!selectedProduct) return;

    const size = document.getElementById("sizeSelect").value;

    if (!size) {
        alert("Please select a size first.");
        return;
    }

    const message =
        `Hello Sancta Maria!

I would like to order:

Product: ${selectedProduct.name}
Price: ₹${selectedProduct.price}
Size: ${size}

Please share availability and payment details.

Thank you!`;

    openWhatsApp(message);

});

// General WhatsApp Contact
document.getElementById("whatsappContact").addEventListener("click", e => {

    e.preventDefault();

    openWhatsApp(
        "Hello Sancta Maria! I'd love to know more about your collection."
    );

});

// Instagram Link
const instagramLink = document.getElementById("instagramLink");

instagramLink.href = INSTAGRAM_URL;
instagramLink.target = "_blank";
instagramLink.rel = "noopener";

// Mobile Navigation
const menuButton = document.querySelector(".menu-toggle");
const header = document.querySelector(".site-header");

menuButton.addEventListener("click", () => {

    const isOpen = header.classList.toggle("menu-open");

    menuButton.setAttribute(
        "aria-expanded",
        String(isOpen)
    );

    menuButton.textContent = isOpen ? "×" : "☰";

});

// Close Mobile Menu After Clicking
document.querySelectorAll(".site-header nav a").forEach(link => {

    link.addEventListener("click", () => {

        header.classList.remove("menu-open");

        menuButton.setAttribute("aria-expanded", "false");

        menuButton.textContent = "☰";

    });

});

// Escape Key Closes Modal
document.addEventListener("keydown", event => {

    if (event.key === "Escape") {

        modal.classList.remove("open");
        modal.setAttribute("aria-hidden", "true");

    }

});
