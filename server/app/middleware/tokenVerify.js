const jwt = require('jsonwebtoken');
const {secret} = require('../../config/auth')

module.exports={


  tokenVerify(req, res, next){

    const TOKEN_POSITION=1

    
    if(!req.headers.authorization){
      res.status(401).json({msg:'no encontrado'})
    }else {
      
      const token = req.headers.authorization.split(' ')[TOKEN_POSITION]

        jwt.verify(token,secret,(err,decoded)=>{
          if(err){
            res.status(500).json({msg: 'ha ocurrido un error', err})
          }else{
            console.log(decoded);
            // res.status(200).json({msg:'token valido'})
            next();
          }
        })

      }
    }
    

    

  }

