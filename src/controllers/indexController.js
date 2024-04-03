




const indexController = {
    home: (req,res)=>{
        res.render('home')
    },
    favoriteMovies: (req,res)=>{
        res.render('favoritas')
    }
}

module.exports = indexController;