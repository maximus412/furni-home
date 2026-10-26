const menuToggle =
    document.getElementById("menuToggle");
const navlinks =
    document.getElementById("navLinks");
const cartCount =
    document.getElementById("cartCount");
const toast =
    document.getElementById("toast");

let cartItems = 0;
let toastTimer;

function showToast(message) {
    toast.textContent = message;
    toast.classList.add("show");

    clearTimeout(toastTimer);

    toastTimer = setTimeout(() => {
        toast.classList.remove("show");
    }, 2400);
}
menuToggle.addEventListener("click", () => {
    const is0pen =
        navlinks.classList.toggle("open");

    menuToggle.setAttribute("aria-expanded", String(is0pen));
    menuToggle.textContent = is0pen ? "✖" : "≡";
});

document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {

        navlinks.classList.remove("open");

        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.textContent = "≡";

        document.querySelectorAll(".nav-links a").forEach(item => {

            item.classList.remove("active");
        });

        link.classList.add("active");
    });
});
document.querySelectorAll(".add-cart").forEach(button => {
    button.addEventListener("click", () => {
        cartItems++;
        cartCount.textContent = cartItems;
        showToast("Item add to your cart!");
    });
});

document.getElementById("searchBtn").addEventListener
    ("click", () => {
        const term = prompt("what furniture are you looking for?");

        if (term && term.trim()) {
            const found =
                [...document.querySelectorAll(".product-card")].some(card =>
                    card.textContent.toLowerCase().includes(term.trim().toLowerCase())
                );

            if (found) {
                showToast("A matching item is in Top Picks For You.");
            } else {
                showToast("No exact match. Try chair or bed.");
            }

            document.getElementById("shop").scrollIntoView({
                behavior: "smooth"
            });
        }
    });

document.getElementById("accountBtn").addEventListener("click",
    () => {
        showToast("Account sign-in can be connected later");
    });

document.getElementById("newsletterForm").addEventListener("submit",
    event => {
        event.preventDefault();
        const email =
            document.getElementById("email").ariaValueMax.trim();

        if (email) {

            document.getElementById("newsletterMessage").textContent =
                "Thanks for subscribing!";

            event.target.removeEventListener()
        }
    });
