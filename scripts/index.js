
        // Add JavaScript code for calculating total price here
        window.onload = function() {
            const cup = document.getElementById("cup");
            const toppings = document.querySelector(".toppings");

            cup.addEventListener("click", function() {
                if (cup.checked) {
                    toppings.style.display = "block";
                } else {
                    toppings.style.display = "none";
                }
            });

            const calculateBtn = document.getElementById("calculateBtn");
            calculateBtn.addEventListener("click", function() {
                const scoops = document.getElementById("scoops").value;
                const container = document.querySelector('input[name="container"]:checked').value;
                let totalPrice;

                if (container === "cone") {
                    totalPrice = 2.25 + (scoops - 1) * 1.25;
                } else {
                    totalPrice = 2.25 + (scoops - 1) * 1.25;
                    const toppings = document.querySelectorAll('input[name="toppings"]:checked').length;
                    totalPrice += toppings * 0.50;
                }

                document.getElementById("totalPrice").textContent = "Total Price: $" + totalPrice.toFixed(2);
            });
        };
