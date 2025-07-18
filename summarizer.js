// Summarizes the given text using the OpenAI API and logs the summary.
function summarizeText(text) {
  var apiUrl = 'https://api.openai.com/v1/completions'; // OpenAI API endpoint
  // TODO: Load your OpenAI API key from a secure source (e.g., PropertiesService or environment variable). Do not commit real API keys to version control.
  var apiKey = 'YOUR_OPENAI_API_KEY';

  var payload = {
    model: 'text-davinci-003',
    prompt: 'This is from a csv file consisting of emails. summarise these emails into bullet points from each person and let me know if anything is urgent: ' + text,
    max_tokens: 200,
    temperature: 0
  };

  var options = {
    method: 'post',
    contentType: 'application/json',
    payload: JSON.stringify(payload),
    headers: {
      'Authorization': 'Bearer ' + apiKey
    }
  };

  var response = UrlFetchApp.fetch(apiUrl, options); // Call the OpenAI API
  var jsonResponse = JSON.parse(response.getContentText());
  var summary = jsonResponse.choices[0].text;

  // Process and utilize the summary as needed
  console.log(summary); // Log the summary
}



