/**
 * Created by Administrator on 2017/9/18.
 */
var express = require('express');
var router = express.Router();
var spider = require('../api/spider');


//秒拍
router.get('/homePage', function(req,res,next){

    spider("/m_v1/promote/qgajax.do?t=1505701982575&pagenum=1&tabnum=1", function(data){
        // console.log(data);
        res.send(data);
    })
})

//首页商品   白酒    葡萄酒

router.get('/homeAll', function(req,res,next){

    spider("/m_v1/statics/getzx.htm?topicId=1165&pageNum="+req.query.page, function(data){
        // console.log(data);

        res.send(data);
    })
})


// 喜酒
router.get('/xijiu1All', function(req,res,next){
    spider("/m_v1/dynamic/mob01ajax/151578?pageNum=1", function(data){
        // console.log(data);
        res.send(data);
    })
})

router.get('/xijiu2All', function(req,res,next){
    spider("/m_v1/dynamic/mob01ajax/151578?pageNum=2", function(data){
        // console.log(data);
        res.send(data);
    })
})


//清仓
router.get('/qingcang', function(req,res,next){
    spider("/m_v1/dynamic/mob01ajax/150450?pageNum=1", function(data){
        // console.log(data);
        res.send(data);
    })
})

//老酒
router.get('/laojiu', function(req,res,next){
    spider("/m_v1/dynamic/mob01ajax/150722?pageNum=1", function(data){
        // console.log(data);
        res.send(data);
    })
})

//详情
router.get('/goods', function(req,res,next){
    spider("/m_v1/goods/detailPromo/"+req.query.id, function(data){
        // console.log(data);
        res.send(data);
    })
})




//注册
router.post('/register',function(req,res,next){
    dbhandler.user.findOne({
        phone:req.body.phone,
        password:req.body.password
    },function(error,data){
        if(data){
            res.send(false);
        }else{
            dbhandler.user.create({
                phone:req.body.phone,
                password:req.body.password
            },function(error,data){
                if(!error){
                    res.send(true);
                }else{
                    res.send(false);
                }
            })
        }
    })
})


//登录
router.post('/login',function(req,res){
    // console.log(req.body)
    dbhandler.user.findOne({
        phone:req.body.phone,
        password:req.body.password
    },function(error,data){
        if(data){
            res.send(true);
        }else{
            res.send(false);
        }
    })
})

module.exports = router;