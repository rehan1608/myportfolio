const mailgun = require("mailgun-js");

exports.handler = async (event) => {
  try {
    const { name, email, message } = event.body ? JSON.parse(event.body) : {};

    if (!name || !email || !message) {
      return {
        statusCode: 400,
        body: JSON.stringify({ msg: "Please provide all required fields." }),
      };
    }

    if (!email.endsWith("@gmail.com")) {
      return {
        statusCode: 400,
        body: JSON.stringify({ msg: "Please enter a valid email (ending with @gmail.com)." }),
      };
    }

    // Replace these values with your actual Mailgun API key and domain
    const mg = mailgun({
      apiKey: process.env.MAILGUN_API_KEY,
      domain: process.env.MAILGUN_DOMAIN,
    });

    const formattedMessage = `
      ${name} Wants to connect:
      Name: ${name}
      Email: ${email}
      Message: ${message}
    `;

    const mailOptions = {
      from: "mohdshahid14112003@gmail.com",
      to: "mohdshahid14112003@gmail.com",
      subject: `New Query`,
      text: formattedMessage,
    };

    await mg.messages().send(mailOptions);

    return {
      statusCode: 200,
      body: JSON.stringify({ msg: "Thanks for contacting! I'll get in touch with you." }),
    };
  } catch (error) {
    console.error(error);
    return {
      statusCode: 500,
      body: JSON.stringify({ msg: "There was an error processing the form submission." }),
    };
  }
};
