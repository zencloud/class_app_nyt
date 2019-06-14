/// --- Main App
/// --- NYT Search Result App

/// ------------------------------------------------- APP DATA
// App Data Setup
const appData = {

    // Core api request variables
    apiKey:         'Y064fSObyugIkHGsgpBbKtYy6JmTG1xW',
    apiSearch:      'Hong+Kong',
    apiYearStart:   2002,
    apiYearEnd:     2019,
    apiRecordCount: 1,
    
    // Piece together the URL to query based on our api variables
    apiURL: function () {
        return `https://api.nytimes.com/svc/search/v2/articlesearch.json?`
                +`fq=${this.apiSearch}`
                +`&facet_field=day_of_week`
                +`&facet=true`
                +`&begin_date=${this.apiYearStart}0101`
                +`&end_date=${this.apiYearEnd}0101`
                +`&api-key=${this.apiKey}`
    }
}


/// ------------------------------------------------- BUTTONS
// Attach listeners when document is ready
$(document).ready(function() {
    
    // Button Search
    $('#btn-submit').on('click', function() {
        app_start_search();
    });

    // Button Clear Search Results
    $('#btn-reset').on('click', function() {
        app_clear_results();
    });


});

/// ------------------------------------------------- FUNCTIONS
// Get results of search and push to DOM
function app_start_search() {
    
    // Set search parameters based on values from input elements
    appData.apiSearch      = encodeURI($('#app_input_search').val());
    appData.apiRecordCount = $('#app_record_count option:selected').val();
    appData.apiYearStart   = $('#app_input_year_start').val();
    appData.apiYearEnd     = $('#app_input_year_end').val();

    console.log(appData.apiURL())


    // Send request
    $.get(appData.apiURL(), function(response) {

        // DOM: Clear previous results
        $("#app_articles_display").empty();

        // Loop through and grab articles 
        for (i = 0; i < appData.apiRecordCount; i++) {
            let articleHeadline = response.response.docs[i].headline.main;
            let articleSnippet  = response.response.docs[i].snippet;
            // DOM: Add Articles
            let myHTML = `
                <div class="app_article_cell">
                    <h1>${articleHeadline}</h1>
                    <h3>${articleSnippet}</h3>
                </div>    
                `;

            // DOM: Append each found article
            $("#app_articles_display").append(myHTML);
        }   
    
    });

}

// DOM: Empty results display
function app_clear_results() {
    // DOM: Clear previous results
    $("#app_articles_display").empty();
}