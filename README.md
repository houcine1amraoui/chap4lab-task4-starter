# Task 4: Brute-forcing a stay-logged-in cookie

The target web application allows users to stay logged in even after they close their browser session i.e., stay-loggedin option. However, the session ID (transmitted via cookies) used to provide this functionality is vulnerable to brute-forcing.

Instructions:

1. Explore how the app's session management works by using the provided user account. Make use of the provided **base64 decoder** and the **MD5 cracker** to analyze the session cookie. stay-logged-in:dWZzcnU6Y2M0MGZiYTQxMzI2MjI0NmY0YWUyMmNmYTRmN2Y4MjI=

2. Complete the brute_force_script to brute-force the victims's session ID to gain access to his /acount page.

You are provided with:

- A user account: ufsru:tgrtw
- Victim's username: cahfa
- candidate-passwords.txt

You can use application either by:

- Launching the provided **app.exe**
- Using render-hosted app: [https://auth-lab9.onrender.com](https://auth-lab9.onrender.com)
- Using Portswigger-hosted app: [https://portswigger.net/web-security/authentication/other-mechanisms/lab-brute-forcing-a-stay-logged-in-cookie](https://portswigger.net/web-security/authentication/other-mechanisms/lab-brute-forcing-a-stay-logged-in-cookie)

Hints:

- The session management is borken, the session ID reveal sensisitve information.
- Lack if brute force protection mechanism.
- Attacker can generate session IDs offline. No need to hit /login at all
