module.exports = {
    index:  function(req, res){
        res.render('home/layout', {fileName: "home"});
    },
    sobre: function(req, res){
        res.render('home/layout', {fileName:'about'});
    },
    loja: function(req, res){
         res.render('home/layout', {fileName:'marketplace'});
    },
    pets: function(req, res){
         res.render('home/layout', {fileName:'pets'});
    },
    contato: function(req, res){
        res.render('home/layout', {fileName:'contact'});
    }
};

