module.exports= function() {

 return{
 	getUserRootPage:function(req,res){
 		res.render('index', { title: 'Express user root controller' });
 	},
 	getUserIDPage:function(req,res){
 		res.render('user', { id: req.params.id });
 	},
 	getUserPostRequest:function(req,res){
 		res.send(req.params.id);
 	}
 }

}
