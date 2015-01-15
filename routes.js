var indexController=require('./controllers/index');
var userController=require('./controllers/users');
var hotelController=require('./controllers/hotel');
module.exports.router = function(app) {
  app.get('/',function(req,res){
    indexController().getHompage(req,res);
  });
  app.get('/home',function(req,res){
    res.redirect('/');
  });
  app.get('/login',function(req,res){
    indexController().getLoginPage(req,res);
  });
  app.get('/users',function(req,res){
    userController().getUserRootPage(req,res);
  });
  app.get('/users/:id',function(req,res){
    userController().getUserIDPage(req,res);
  });
  app.get('/hotels',function(req,res){
    hotelController().getHotelListpage(req,res);
  });
  app.get('/hotel/:id',function(req,res){
    hotelController().getHotelDetailPage(req,res);
  });
  app.post('/users/:id',function(req,res){
    userController().getUserPostRequest(req,res);
  })
}
