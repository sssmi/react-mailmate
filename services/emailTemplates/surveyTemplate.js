module.exports = survey => `
  <html>
    <body>
      <div style="text-align: center;">
        <h1>We'd like your input!</h1>
        <h3>Please answer the following question.</h3>
        <p>${survey.body}</p>
        <div>
          <a href="${process.env.REDIRECT_DOMAIN}/api/surveys/${survey.id}/positive">Yes</a>
        </div>
        <div>
          <a href="${process.env.REDIRECT_DOMAIN}/api/surveys/${survey.id}/negative">No</a>
        </div>
      </div>
    </body>
  </html>

    `;
