# MultCloud Script

A userscript for MultCloud containing features to help productivity in MultCloud.

**Current Features**:

- URL Decoding For Filename

**Upcoming Features**:

- None (suggest if you have any)

## Features

### URL Decoding
**How it works**: It adds a **Sanitize** button to the '*Add URL*' window. On clicking the button, the URL gets decoded to convert the URL encodes to special characters. Look at the table below to see what gets decoded.

| **URL Encode** | **Decoded To** | **Name**          |
| -------------- | -------------- | ----------------- |
| %20            |                | Space             |
| %60            | `              | Accent Grave      |
| %7E            | ~              | Tilde             |
| %21            | !              | Exclamation Sign  |
| %23            | #              | Number Sign       |
| %24            | $              | Dollar Sign       |
| %25            | %              | Percent Sign      |
| %5E            | ^              | Circumflex        |
| %26            | &              | Ampersand         |
| %28            | (              | Open Parenthesis  |
| %29            | )              | Close Parenthesis |
| %3D            | =              | Equals Sign       |
| %2B            | +              | Plus Sign         |
| %5C            | \              | Back Slash        |
| %7C            | \|             | Bar               |
| %5B            | [              | Left Bracket      |
| %5D            | ]              | Right Bracket     |
| %7B            | {              | Left Brace        |
| %7D            | }              | Right Brace       |
| %3B            | ;              | Semi-colon        |
| %3A            | :              | Colon             |
| %27            | '              | Single Quote      |
| %22            | "              | Double Quote      |
| %2C            | ,              | Comma             |
| %3C            | <              | Less Than         |
| %3E            | >              | Greater Than      |
| %3F            | ?              | Question Mark     |

**What it does**: When you add a URL and click 'Sanitize' it converts any of the URL encoding sets to the special character that is assigned to it. e.g **"http://somewhere.com/somefile%20%28a%20file%29.zip"** would give the filename **"somefile%20%28a%20file%29.zip"** which would be converted to **"somefile (a file).zip"**

**Screenshot**:

![Before](https://i.imgur.com/YVV9GLD.png)

![After](https://i.imgur.com/hPeoAY7.png)