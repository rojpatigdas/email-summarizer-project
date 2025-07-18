// Fetches the most recent 10 email threads and logs sender, subject, and body for each message.
function fetchEmails() {
  var threads = GmailApp.getInboxThreads(0, 10); // Fetches the most recent 10 threads
  var x = 0;
  threads.forEach(function(thread) {
    var messages = thread.getMessages();

    messages.forEach(function(message) {
      var sender = message.getFrom(); // Get sender's email address
      var subject = message.getSubject(); // Get email subject
      var body = message.getPlainBody(); // Get plain text body
      x = x + 1;
      Logger.log(sender + ', ' + subject + ', ' + body + ' ' + x); // Log email details
      // Process the email data as needed
    });
    Logger.log(x); // Log the number of processed messages
  });
}