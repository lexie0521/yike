//该js文件主要用于定义控制器
angular.module("ctrls",[])

//创建导航栏的控制器
//作用:模拟导航栏数据,绑定传递过去
.controller("navs",["$scope",function($scope){
    $scope.navs = [
      {link:"#/index",icon:"icon-home",text:"今日一刻"},
      {link:"#/older",icon:"icon-file-empty",text:"往期内容"},
      {link:"#/author",icon:"icon-pencil",text:"热门作者"},
      {link:"#/category",icon:"icon-menu",text:"栏目浏览"},
      {link:"#/favourite",icon:"icon-heart",text:"我的喜欢"},
      {link:"#/settings",icon:"icon-cog",text:"设置"}
    ]
}])

//创建index控制器
.controller("index",["$scope","$rootScope",function($scope,$rootScope){
     //模拟数据 
     $scope.msg = "控制器获取的数据";
     //绑定num,判断被点击标题被选中状态
     $rootScope.num = 0;
}])

//创建older控制器
.controller("older",["$scope","$rootScope",function($scope,$rootScope){
  $scope.msg = "控制器获取的往期内容";
  $rootScope.num = 1;
}])

//创建author控制器
.controller("author",["$scope","$rootScope",function($scope,$rootScope){
  $scope.msg = "控制器获取的热门作者";
  $rootScope.num = 2;
}])

//创建category控制器
.controller("category",["$scope","$rootScope",function($scope,$rootScope){
  $scope.msg = "控制器获取的栏目浏览";
  $rootScope.num = 3;
}])

//创建favourite控制器
.controller("favourite",["$scope","$rootScope",function($scope,$rootScope){
  $scope.msg = "控制器获取的我的喜欢";
  $rootScope.num = 4;
}])

//创建settings控制器
.controller("settings",["$scope","$rootScope",function($scope,$rootScope){
  $scope.msg = "控制器获取的设置";
  $rootScope.num = 5;
}])