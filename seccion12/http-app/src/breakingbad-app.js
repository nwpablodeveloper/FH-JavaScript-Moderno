/**
 *  @returns {Promise<Object>} quote information
 */
const fetchQuote = async () => {
    const url = 'https://api.breakingbadquotes.xyz/v1/quotes/';

    const res = await fetch( url );
    const data = await res.json();


    return data[0];

}

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const BreakingBad = async ( element ) => {

    document.querySelector('#app-title').innerHTML = 'Breaking Bad app';

    
    const quoteLabel = document.createElement('blockquote');
    const authoLabel = document.createElement('h3');
    const nextQuoteButton = document.createElement('button');
    nextQuoteButton.innerText = 'Next Quote';

    nextQuoteButton.addEventListener( 'click', () => {
        quote();
    })

    

    const renderQuote = ( data ) => {
        quoteLabel.innerHTML = data.quote;
        authoLabel.innerHTML = data.author;
        element.replaceChildren( quoteLabel, authoLabel, nextQuoteButton );
    }
    

    const quote = async () => {
        element.innerText = 'Loading...';
        await fetchQuote()
            .then( renderQuote );
    }
    quote();


}