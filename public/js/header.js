export function loadHeader() {

    //Create Header
    const header = document.createElement("header");
    header.style.background = "#118ab2";
    header.style.color = "white";
    header.style.padding = ".5rem";
    header.style.textAlign = "center";

    //Create Header text
    const h2 = document.createElement("h2");
    h2.textContent = "Smart Study Guide";
    header.appendChild(h2);

    // Create Nav bar
    const nav = document.createElement("nav");
    nav.style.display = "flex";
    nav.style.justifyContent = "center";
    nav.style.gap = "3rem"; 
    nav.style.background = "#f4f4f4";
    nav.style.padding = ".2rem";

    // Create Links 
    const links = [
        { text: "Flash Cards", href: "#" },
        { text: "Quizes", href: "#" },
        { text: "Games", href: "#" },
        { text: "Calander", href: "#" },
        { text: "Stats", href: "#" }
    ];

    // Style Links
    links.forEach(link => {
        const a = document.createElement("a");
        a.href = link.href;
        a.textContent = link.text;
        a.style.textDecoration = "none";
        a.style.color = "#118ab2";
        a.style.fontWeight = "bold";
        a.style.fontSize = "1.1rem";

        nav.appendChild(a);
    });


    //Create Login/Logout button
    const authLink = document.createElement("a");
    const loggedIn = sessionStorage.getItem("loggedIn") === "true";
    authLink.href = "#";
    authLink.textContent = loggedIn ? "Logout" : "Login"; //Dynamic text selection using wild card
    authLink.style.textDecoration = "none";
    authLink.style.color = "#118ab2";
    authLink.style.fontWeight = "bold";
    authLink.style.fontSize = "1.1rem";

    //Clear 
    authLink.addEventListener("click", (e) => {
        e.preventDefault();
        if (loggedIn) {
        sessionStorage.clear();
        window.location.href = "logout.html";
        } else {
        window.location.href = "login.html";
        }
    });
    
    // Append Login/Lout to Navbar
    nav.appendChild(authLink);

    // Append nav+header to webpages
    document.body.prepend(nav);
    document.body.prepend(header);
}
