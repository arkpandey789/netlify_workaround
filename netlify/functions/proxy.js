exports.handler = async function(event, context) {
  const fetch = require('node-fetch');
  
  try {
    const response = await fetch('https://www.yummypooch.com');
    const body = await response.text();
    
    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'text/html',
        'X-Frame-Options': 'ALLOWALL',
        'Access-Control-Allow-Origin': '*'
      },
      body: body
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed fetching content' })
    };
  }
};