async function displaySearchResults() {
    const params = new URLSearchParams(window.location.search);
    const query = params.get('query').toLowerCase();
    const resultsContainer = document.getElementById("results-container");
    document.getElementById("searchresfor").append(query);


    if (!query) {
      resultsContainer.innerHTML = `
        <div class="alert alert-warning">
          No search query provided. Please go back and try again.
        </div>`;
      return;
    }

    const response = await fetch("/search-index.json");
    const articles = await response.json();

    const filteredArticles = articles.filter(article =>
      article.title.toLowerCase().includes(query) ||
      article.description.toLowerCase().includes(query) ||
      article.tags.some(tag => tag.toLowerCase().includes(query))
    );

    resultsContainer.innerHTML = filteredArticles.length > 0
      ? filteredArticles
          .map(article => `
            <a href="${article.url}" class="list-group-item list-group-item-action black-bg">
              <h5 class="mb-1">${article.title}</h5>
              <p class="mb-1">${article.description}</p>
              <small>Tags: ${article.tags.join(", ")}</small>
            </a>
          `)
          .join("")
      : `
        <div class="alert alert-warning">
          No results found for "${query}".
        </div>`;
  }

  displaySearchResults();