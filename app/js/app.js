/// --- Main App
/// --- NYT Search Result App


// App Data Setup
const appData = {

    // Core api request variables
    apiKey:       'Y064fSObyugIkHGsgpBbKtYy6JmTG1xW',
    apiSearch:    '',
    apiYearStart: 1980,
    apiYearEnd:   2019,
    
    // Piece together the URL to query based on our api variables
    appURL: function () {
        return `https://api.nytimes.com/svc/search/v2/articlesearch.json?
                fq=Hong+Kong
                &begin_date=${this.apiYearStart}0101
                &end_date=${this.apiYearEnd}0101
                &api-key=${this.apiKey}
            `;
    }
}


// Attach listener when document is ready
$(document).ready(function() {
    $('#btn-submit').on('click', function(e) {
        e.preventDefault();
        app_start_search();
    });
});

// Functions


function app_start_search() {
    
}
