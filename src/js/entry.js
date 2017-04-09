require('../css/entry.less');
require("../css/wyMeiTuan.less");
require("./wyMeiTuan/footerModule.js")
require("./wyMeiTuan/wyMeiTuan.js");

var React = require("react"),
    ReactDom = require("react-dom");



var data = [
    {dishType:'热销', src:'./src/img/hot-sale.png',dishes:[['./src/img/food.jpg','护心肉炒土豆','月售44','赞22','¥12'],
                                    ['./src/img/food.jpg','农家小炒肉','月售77','赞50','¥10'],
                                    ['./src/img/food.jpg','回锅肉','月售188','赞130','¥10'],
                                    ['./src/img/food.jpg','麻辣豆腐','月售88','赞28','¥8'],
    ]},
    {dishType:'折扣', src:'',dishes:[['./src/img/food.jpg','护心肉炒土豆','月售44','赞22','¥12'],
                                    ['./src/img/food.jpg','农家小炒肉','月售77','赞50','¥10'],
                                    ['./src/img/food.jpg','回锅肉','月售188','赞130','¥10'],
                                    ['./src/img/food.jpg','麻辣豆腐','月售88','赞28','¥8'],
    ]},
    {dishType:'买赠', src:'',dishes:[['./src/img/food.jpg','护心肉炒土豆','月售44','赞22','¥12'],
                                    ['./src/img/food.jpg','农家小炒肉','月售77','赞50','¥10'],
                                    ['./src/img/food.jpg','回锅肉','月售188','赞130','¥10'],
                                    ['./src/img/food.jpg','麻辣豆腐','月售88','赞28','¥8'],
                                    ]},
    {dishType:'土豆丝拌饭', src:'',dishes:[['./src/img/food.jpg','护心肉炒土豆','月售44','赞22','¥12'],
                                    ['./src/img/food.jpg','农家小炒肉','月售77','赞50','¥10'],
                                    ['./src/img/food.jpg','回锅肉','月售188','赞130','¥10'],
                                    ['./src/img/food.jpg','麻辣豆腐','月售88','赞28','¥8'],
    ]},
    {dishType:'咖喱饭', src:'',dishes:[['./src/img/food.jpg','护心肉炒土豆','月售44','赞22','¥12'],
                                    ['./src/img/food.jpg','农家小炒肉','月售77','赞50','¥10'],
                                    ['./src/img/food.jpg','回锅肉','月售188','赞130','¥10'],
                                    ['./src/img/food.jpg','麻辣豆腐','月售88','赞28','¥8'],
    ]},
    ];

var Navtop = React.createClass({
    render:function(){
        return(
            <div className = 'nav-wrap'>
                <div className ='nav-top'>
                    <div className="backPage-box">
                        <i></i>
                    </div>
                    <div className="shopName-box">
                        <span className="top-name">
                            {this.props.headName}
                        </span>
                    </div>
                    <div className="search-box">
                        <i></i>
                    </div>
                    <div className="link-box">
                        <i></i>
                    </div>
                </div>
                <ul className="list-box">
                    <li className = 'isChecked'>点菜</li>
                    <li>评价</li>
                    <li>详情</li>
                </ul>
            </div>
        )
    }
})
ReactDom.render(
    <Navtop headName = {'一休土豆丝拌饭'}/>,
    document.getElementById('head-wrap')
)

//  dish content begin...................

var Typelist = React.createClass({
    componentWillMount:function(){
        var list = [],
            oData = this.props.oData;
        oData.forEach(function(ele,index){
            if (ele.src){
                list.push(
                    <div className = 'list-item' key = {index + 100}>
                        <span>
                            <img src = {ele.src} />
                            {ele.dishType}
                        </span>
                    </div>
                )
            }else{
                list.push(
                    <div className= 'list-item'  key = {index + 100}>
                       <span>{ele.dishType}</span>
                    </div>
                )
            }
        });
        this.list = list;
    },
    render:function (){
        return (
            <div className = 'type-list-box'>
                {this.list}
            </div>
        )
    }
})

var OneTypeList  = React.createClass({
    componentWillMount:function(){
        var oData = this.props.oData,
            list = [],
            len = oData.length;
        for(let i = 0;i < len;i++){
            list.push(
                <li className = {"dish" + i } key = {i + 500}>
                    <div className="food-img">
                        <img src={oData[i][0]}/>
                    </div>
                    <div className="food-cont">
                        <div className="food-name">{oData[i][1]}</div>
                        <div className="sale-info">
                            <span className = 'month-sale'>{oData[i][2]}</span>
                            <span className="people-like">{oData[i][3]}</span>
                        </div>
                        <div className="price-region">
                            <span className="buy-money">{oData[i][4]}</span>
                            <div className="buy-return">
                                <i className= 'food-buy'></i>
                                <span className= 'count-dish'></span>
                                <i className = 'food-return'></i>
                            </div>
                        </div>
                    </div>
                </li>
            )
        }
        this.list = list;
    },
    render:function(){
        return(
            <ul className = 'a-type-list'>
                <h3>{this.props.headType}</h3>
                {this.list}
            </ul>
        )
    }
})

var DishesListBox = React.createClass({
    componentWillMount:function(){
        var oData = this.props.oData,
            list = [];
        oData.forEach(function(ele,index){
            list.push(
                <OneTypeList key={index + 1500} headType = {ele.dishType} oData = {ele.dishes}></OneTypeList>
            )
        })
        this.list = list;
    },
    render:function(){
        return(
            <div className = 'dish-list-box'>
                {this.list}
            </div>
        )
    }
})


var ContentApp = React.createClass({
    render : function(){
        return (
            <div className = "dishes-wrap">
                <div className= 'dishType-box'>
                    <Typelist oData = {this.props.oData}></Typelist>
                    <DishesListBox oData = {this.props.oData}> </DishesListBox>
                </div>
            </div>
        )
    },
})   

ReactDom.render(
    <ContentApp oData = {data}/>,
    document.getElementById('content-wrap')
)
