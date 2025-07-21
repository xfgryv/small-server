
    let express = require('express');
    let app = express();

    let cors = require('cors');
    app.use(cors());


    app.get("/intrest", function(req, res){
        let principal = parseFloat(req.query.a);
        let rate = parseFloat(req.query.b);
        let time = parseFloat(req.query.c);
        
        let SI = (principal*rate*time)/100;
        res.send(SI);
    })

    
    app.listen(3000);
    