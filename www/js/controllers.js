angular.module('starter.controllers', [])


.controller('DashCtrl', function($scope, $http, Chats, Units, city, days) {

      $http.get("http://api.openweathermap.org/data/2.5/forecast/daily?q="+city.get()+"&units="+ Units.get()+"&cnt=" + days.get()).success(function (data){
      Chats.set(data.list);
      $scope.Ciudad = data.city.name;
      console.log(data.list);
      $scope.weatherToday = Chats.getOne();
      $scope.chats = Chats.all();
      });

       //Metodo de actualizacion
    $scope.doRefresh = function() {

      $http.get("http://api.openweathermap.org/data/2.5/forecast/daily?q="+city.get()+"&units="+ Units.get()+"&cnt=" + days.get())
     .success(function(data) {
      $scope.Ciudad = data.city.name;
       Chats.set(data.list);
      $scope.weatherToday = Chats.getOne();
      $scope.chats = Chats.all();
     })
     .finally(function() {
       $scope.$broadcast('scroll.refreshComplete');
     });
    }  
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('DashCtrl2', function($scope, $http, Chats, Units, city, days) {

      $http.get("http://api.openweathermap.org/data/2.5/forecast/?q="+city.get()+"&units="+ Units.get()+"&cnt=1").success(function (data){
      Chats.set(data.list);
      $scope.Ciudad = data.city.name;
      console.log(data.list);
      $scope.weatherToday = Chats.getOne();
      $scope.chats = Chats.all();
      });

       //Metodo de actualizacion
    $scope.doRefresh = function() {

      $http.get("http://api.openweathermap.org/data/2.5/forecast/?q="+city.get()+"&units="+ Units.get()+"&cnt=1")
     .success(function(data) {
      $scope.Ciudad = data.city.name;
       Chats.set(data.list);
      $scope.weatherToday = Chats.getOne();
      $scope.chats = Chats.all();
     })
     .finally(function() {
       $scope.$broadcast('scroll.refreshComplete');
     });
    }  
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('AccountCtrl', function($scope, city, days, Units) {
    
  $scope.monterrey = function(){
      city.set("monterrey");
  }
  $scope.tokio = function(){
      city.set("tokyo");
  }
  $scope.miami = function(){
      city.set("miami");
  }

  $scope.uno = function(){
      days.set("1");
  }
  $scope.dos = function(){
      days.set("2");
  }
  $scope.tres = function(){
      days.set("3");
  }

  $scope.cuatro = function(){
      days.set("4");
  }
  $scope.cinco = function(){
      days.set("5");
  }
  $scope.seis = function(){
      days.set("6");
  }
   $scope.siete = function(){
      days.set("7");
  }

   $scope.celcius = function(){
      Units.set("metric");
  }
  $scope.fahrenheit = function(){
      Units.set("imperial");
  }
  $scope.kelvin = function(){
      Units.set("kelvin");
  }


})


;
