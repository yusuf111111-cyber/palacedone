/* ==========================================
   APP JS
========================================== */

/*
|--------------------------------------------------------------------------
| Detect Current Directory
|--------------------------------------------------------------------------
*/

const isSubPage = window.location.pathname.includes("/news/");

const componentPath = isSubPage
    ? "../components/"
    : "components/";

/*
|--------------------------------------------------------------------------
| Load Component
|--------------------------------------------------------------------------
*/

async function loadComponent(id, file) {

    const container = document.getElementById(id);

    if (!container) return;

    try {

        const response = await fetch(componentPath + file);

        if (!response.ok) {

            throw new Error(`Failed to load ${file}`);

        }

        container.innerHTML = await response.text();

    }

    catch (error) {

        console.error(`Error loading ${file}:`, error);

    }

}

/*
|--------------------------------------------------------------------------
| Fix Relative Paths
|--------------------------------------------------------------------------
*/

function fixNavbarPaths() {

    if (!isSubPage) return;

    /*
    |--------------------------------------------------------------------------
    | Logo
    |--------------------------------------------------------------------------
    */

    const logo = document.querySelector(".navbar-logo img");

    if (logo) {

        logo.src = "../images/logo/logo.png";

    }

    /*
    |--------------------------------------------------------------------------
    | Navigation Links
    |--------------------------------------------------------------------------
    */

    document.querySelectorAll("a").forEach(link => {

        const href = link.getAttribute("href");

        if (!href) return;

        if (
            href.startsWith("http") ||
            href.startsWith("#") ||
            href.startsWith("../") ||
            href.startsWith("mailto:") ||
            href.startsWith("tel:")
        ) return;

        link.setAttribute("href", "../" + href);

    });

}

/*
|--------------------------------------------------------------------------
| Initialize
|--------------------------------------------------------------------------
*/

document.addEventListener("DOMContentLoaded", async () => {

    // On article subpages load a compact navbar (site title + back link) and footer
    const components = isSubPage
        ? [
            ["navbar", "navbar-compact.html"],
            ["footer", "footer.html"]
        ]
        : [
            ["navbar", "navbar.html"],
            ["hero", "hero.html"],
            ["highlights", "bento-grid.html"],
            ["videos", "videos.html"],
            ["news", "news.html"],
            ["gallery", "gallery.html"],
            ["contact", "contact.html"],
            ["footer", "footer.html"]
        ];

    for (const [id, file] of components) {

        await loadComponent(id, file);

    }

    fixNavbarPaths();

});
