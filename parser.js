// parser.js
// Parses email threads and extracts relevant information for summarization.

/**
 * Parses the most recent 10 email threads and extracts sender, subject, and content.
 * Calls summarizeText to generate a summary for each message.
 */
function parseEmails() {
  var threads = GmailApp.getInboxThreads(0, 10); // Fetches the most recent 10 threads
  threads.forEach(function(thread) {
    var messages = thread.getMessages();
    messages.forEach(function(message) {
      var sender = message.getFrom();
      var subject = message.getSubject();
      var body = message.getPlainBody();
      // Extract relevant information using regular expressions or string manipulation
      var emailData = {
        sender: extractSender(sender), // Helper function to extract sender info
        subject: subject,
        content: extractContent(body) // Helper function to extract main content
      };
      // Process the email data as needed
      // For example, you can store the extracted data in a spreadsheet or send a notification
      // Log the email data
      //console.log(emailData);
      summarizeText("Spent 24 hours, I need more hours with you You spent the weekend getting even, ooh We spent the late nights making things right between us"); // Example call to summarizer
    });
  });
}

function extractSender(sender) {
  // Extract the sender's email address using regular expression or string manipulation
  // Example: 'John Doe <johndoe@example.com>' => 'johndoe@example.com'
  var regex = /<([^>]+)>/;
  var match = regex.exec(sender);
  if (match && match.length > 1) {
    return match[1];
  } else {
    return sender;
  }
}

function extractContent(body) {
  // Perform any necessary extraction or formatting of the email content
  // Example: Remove unnecessary line breaks or special characters
  
  // Replace line breaks with spaces
  body = body.replace(/\r?\n/g, ' ');
  
  return body;
}
