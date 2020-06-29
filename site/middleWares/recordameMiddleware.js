function recordameMiddleware (req,res,next){
    next();
    if (req.cookie.recordame != undefined && req.session.usuarioLogueado == undefined)


    // Falta agregar codio que lea todos los usuarios y compare su mail con el registrado

    // luego hacer require en APP.JS y app.use de nuestro middleware recordame asi podemos usarlo en todas las paginas.

    req.session.usuarioLogueado = usuarioALoguearse;
}

module.exports = recordameMiddleware;