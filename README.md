# Secrets-Access
# Password Protected Website with Express

This is a simple Node.js application built with Express that serves a password-protected page. The user is required to input the correct password to access the secret page. If the password is incorrect, the user is redirected back to the login page.

## Features
- A login page that asks the user for a password.
- A secret page that can only be accessed by entering the correct password.
- Redirect to the login page with a `401 Unauthorized` status if the password is incorrect.
