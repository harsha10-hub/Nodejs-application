const http = require("http");

const html = `
<!DOCTYPE html>
<html>
<head>
    <title>DevOps Portfolio</title>
    <style>
        *{
            margin:0;
            padding:0;
            box-sizing:border-box;
            font-family:Arial,sans-serif;
        }

        body{
            background:linear-gradient(135deg,#1e3c72,#2a5298);
            color:white;
            display:flex;
            justify-content:center;
            align-items:center;
            height:100vh;
        }

        .container{
            text-align:center;
            background:rgba(255,255,255,0.1);
            padding:40px;
            border-radius:15px;
            backdrop-filter:blur(10px);
            box-shadow:0 8px 20px rgba(0,0,0,0.3);
        }

        h1{
            font-size:3rem;
            margin-bottom:15px;
        }

        p{
            font-size:1.2rem;
            margin-bottom:20px;
        }

        .skills{
            display:flex;
            gap:10px;
            justify-content:center;
            flex-wrap:wrap;
        }

        .skill{
            background:#ffffff22;
            padding:10px 15px;
            border-radius:20px;
        }

        .footer{
            margin-top:20px;
            color:#ddd;
        }
    </style>
</head>
<body>

<div class="container">
    <h1>DevOps Portfolio</h1>
    <p>Welcome to Harsha's Node.js Application</p>

    <div class="skills">
        <div class="skill">Docker</div>
        <div class="skill">Kubernetes</div>
        <div class="skill">AWS</div>
        <div class="skill">Jenkins</div>
        <div class="skill">Terraform</div>
        <div class="skill">Linux</div>
    </div>

    <div class="footer">
        <p>Containerized with Docker</p>
    </div>
</div>

</body>
</html>
`;

const server = http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(html);
});

server.listen(3000, () => {
    console.log("Server running on port 3000");
});
