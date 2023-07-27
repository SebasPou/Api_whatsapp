const res = require("express/lib/response")

 VerficiacionToken = (req, res) => {

    try {
      var accessToken = "EAANhrNjI3VQBOzY69f8jl9YEEc1QhsaqZAg64xCSvWnbRFUJOK4CZCCz71wB51XuedTaOhDo1w6ts6XHTSJBa6ZCWbeLnF7rvp8Rn0TEmBcpq6jsjsRZCqN7ZBkTxHf6rH1K2ZAJBG8w6G5lEJmwvUoIVKilXv16ZBdeGKIRv0itIftS4dZBnO8rZALsJQ6pPU3ML5dcv8e6Dxls9BpUZD";
      var token = req.query["hub.verify_token"];
      var challenge = req.body["hub.challenge"];
      if (challenge != null && token != null & token == accessToken){
      res.send(challenge);   }
      else{
          res.send(400).send();
      }
    } catch (error){

    }
    res.send("Verificacion del token")
}

 RecibirMensaje = (req, res) => {
    res.send("Mensaje Recibido")
}

module.exports = {VerficiacionToken , RecibirMensaje}