module.exports = function (req, res, next) {

    if (req.session.flash) {
        res.locals.flash = req.session.flash
        req.session.flash = undefined
    }
    
    req.flash = function (type, content) { //type et contenu
    if (req.session.flash === undefined) {
        req.session.flash = {} //ici c_à_d l'objet est vide
    }
    req.session.flash[type] = content //c'est une clé flash qui contient l'erreur
    }
    next()
}
