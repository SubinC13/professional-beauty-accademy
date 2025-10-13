import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);
console.log("Ressenf ==>", resend, process.env.RESEND_API_KEY);


export async function POST(request) {
  try {
    const formData = await request.json();
    const { name, email, phone, duration, careerPath } = formData;

    const { data, error } = await resend.emails.send({
      from: 'Professional Beauty Academy <onboarding@resend.dev>',
      to: [process.env.EMAIL_RECEIVER],
      subject: `New Enrollment Form Submission - ${name}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <style>
              body {
                font-family: Arial, sans-serif;
                line-height: 1.6;
                color: #333;
              }
              .container {
                max-width: 600px;
                margin: 0 auto;
                padding: 20px;
                background-color: #f9f9f9;
              }
              .header {
                background-color: #2d3748;
                color: white;
                padding: 20px;
                text-align: center;
                border-radius: 5px 5px 0 0;
              }
              .content {
                background-color: white;
                padding: 30px;
                border-radius: 0 0 5px 5px;
              }
              .field {
                margin-bottom: 15px;
                padding: 10px;
                background-color: #f7fafc;
                border-left: 4px solid #2d3748;
              }
              .label {
                font-weight: bold;
                color: #2d3748;
                display: block;
                margin-bottom: 5px;
              }
              .value {
                color: #4a5568;
              }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1>New Enrollment Form Submission</h1>
              </div>
              <div class="content">
                <div class="field">
                  <span class="label">Name:</span>
                  <span class="value">${name}</span>
                </div>
                <div class="field">
                  <span class="label">Email:</span>
                  <span class="value">${email}</span>
                </div>
                <div class="field">
                  <span class="label">Phone:</span>
                  <span class="value">${phone}</span>
                </div>
                <div class="field">
                  <span class="label">Course Duration:</span>
                  <span class="value">${duration}</span>
                </div>
                <div class="field">
                  <span class="label">Career Path:</span>
                  <span class="value">${careerPath}</span>
                </div>
              </div>
            </div>
          </body>
        </html>
      `,
    });

    if (error) {
      console.error('Resend error:', error);
      return Response.json(
        { message: 'Failed to send email', error: error.message },
        { status: 500 }
      );
    }

    return Response.json(
      { message: 'Email sent successfully', data },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending email:', error);
    return Response.json(
      { message: 'Failed to send email', error: error.message },
      { status: 500 }
    );
  }
}

