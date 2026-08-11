document.addEventListener("DOMContentLoaded", function () {

    const danceData = {

        "Bharatanatyam": {
            type: "Indian Classical Dance",
            origin: "Tamil Nadu, India",
            text: "Bharatanatyam is one of the oldest classical dance forms of India. It is known for beautiful hand gestures, facial expressions, rhythmic footwork and storytelling."
        },

        "Kuchipudi": {
            type: "Indian Classical Dance",
            origin: "Andhra Pradesh, India",
            text: "Kuchipudi is a classical dance form from Andhra Pradesh. It combines dance, drama, music and storytelling."
        },

        "Kathak": {
            type: "Indian Classical Dance",
            origin: "North India",
            text: "Kathak is known for graceful spins, fast rhythmic footwork, hand gestures and storytelling."
        },

        "Kathakali": {
            type: "Indian Classical Dance-Drama",
            origin: "Kerala, India",
            text: "Kathakali is a famous dance-drama from Kerala, known for colourful makeup, costumes, dramatic expressions and storytelling."
        },

        "Odissi": {
            type: "Indian Classical Dance",
            origin: "Odisha, India",
            text: "Odissi is a graceful classical dance from Odisha, known for beautiful poses, hand gestures and expressive movements."
        },

        "Mohiniyattam": {
            type: "Indian Classical Dance",
            origin: "Kerala, India",
            text: "Mohiniyattam is a graceful classical dance from Kerala, known for gentle movements and expressive facial expressions."
        },

        "Bhangra": {
            type: "Indian Folk Dance",
            origin: "Punjab, India",
            text: "Bhangra is an energetic folk dance from Punjab, traditionally associated with celebrations and harvest festivals."
        },

        "Garba": {
            type: "Indian Folk Dance",
            origin: "Gujarat, India",
            text: "Garba is a popular Gujarati folk dance performed especially during Navratri with circular movements and rhythmic steps."
        },

        "Ghoomar": {
            type: "Indian Folk Dance",
            origin: "Rajasthan, India",
            text: "Ghoomar is a traditional Rajasthani folk dance famous for graceful circular movements and colourful costumes."
        },

        "Lavani": {
            type: "Indian Folk Dance",
            origin: "Maharashtra, India",
            text: "Lavani is a lively folk dance from Maharashtra combining expressive movements, rhythm and traditional Marathi music."
        },

        "Ballet": {
            type: "Western Classical Dance",
            origin: "Italy and France",
            text: "Ballet is a classical Western dance form known for graceful movements, balance, posture and precise technique."
        },

        "Hip-Hop": {
            type: "Street Dance",
            origin: "United States",
            text: "Hip-Hop is a popular street dance style including breaking, popping, locking, freestyle movements and energetic expressions."
        },

        "Contemporary": {
            type: "Modern Dance",
            origin: "International",
            text: "Contemporary dance focuses on freedom of movement, creativity and emotional expression."
        },

        "Salsa": {
            type: "Latin Dance",
            origin: "Cuba and Latin America",
            text: "Salsa is a lively Latin dance style known for rhythmic footwork, turns and partner movements."
        },

        "Flamenco": {
            type: "Spanish Dance",
            origin: "Andalusia, Spain",
            text: "Flamenco is a passionate Spanish dance known for expressive arm movements, rhythmic footwork and powerful performances."
        },

        "Jazz": {
            type: "Western Dance",
            origin: "United States",
            text: "Jazz dance is an energetic Western dance style known for rhythm, sharp movements, turns, jumps and flexibility."
        }
    };


    // Create popup
    const popup = document.createElement("div");

    popup.innerHTML = `
        <div class="dance-popup-overlay"></div>

        <div class="dance-info-box">

            <button class="dance-popup-close">×</button>

            <div class="dance-popup-type"></div>

            <h2 class="dance-popup-title"></h2>

            <p class="dance-popup-origin"></p>

            <p class="dance-popup-text"></p>

        </div>
    `;

    popup.className = "dance-info-popup";

    document.body.appendChild(popup);


 

    // Close button
    popup.querySelector(".dance-popup-close")
        .addEventListener("click", function() {

            popup.classList.remove("show");

        });


    // Click outside
    popup.querySelector(".dance-popup-overlay")
        .addEventListener("click", function() {

            popup.classList.remove("show");

        });


    // ESC
    document.addEventListener("keydown", function(event) {

        if (event.key === "Escape") {

            popup.classList.remove("show");

        }

    });

});
/* ================= DANCE POPUP DEFAULT HIDDEN ================= */

.dance-info-popup {
    display: none;
}

.dance-info-popup.show {
    display: block;
}