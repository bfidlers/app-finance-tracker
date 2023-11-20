import { app, query, sparqlEscapeUri } from 'mu';
import { getSessionIdHeader } from './utils';


app.get('/hello', function (req, res) {
    res.send('Hello mu-javascript-template');
});

app.get('/overview', async function (req, res) {
    const sessionID = getSessionIdHeader(req);

    const dbQuery = `
    SELECT ?category (sum(?price) AS ?total)
    WHERE {
        ?expense <http://mu.semte.ch/vocabularies/ext/category> ?category;
                 <http://mu.semte.ch/vocabularies/ext/amount> ?price.
        {
            SELECT DISTINCT ?category
            WHERE {
                ${sparqlEscapeUri(sessionID)} <http://mu.semte.ch/vocabularies/session/account> ?account.
                ?account <http://mu.semte.ch/vocabularies/ext/expense> ?expense.
                ?expense <http://mu.semte.ch/vocabularies/ext/category> ?category.
            }
        }
    }
    `

    const dbResponse = await query(dbQuery);
    const parsedResponse = dbResponse.results.bindings;
    const result = parsedResponse.map((elem) => {
        return {
            category: elem.category.value, amount: elem.total.value
        }
    });

    let data = {
        categories: result,
    };
    res.send(data);
});