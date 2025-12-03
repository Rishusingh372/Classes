class Mysession{
    static get_session(req, res){
        console.log("welcome to session");
        console.log(req.session.id);
        console.log(req.sessionID);
        console.log(req.session.cookie);
        console.log(req.session.cookie.maxAge);
        console.log(req.session.cookie.OriginalMaxAge);

        console
        res.send("session page");

    }
}

export default Mysession;