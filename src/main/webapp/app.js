'use strict';

var app = angular.module('app', ['ngRoute','angular-table','ngDialog']);

app.config(function($routeProvider) {
   $routeProvider.when('/', {
      templateUrl : 'home.html',
      controller     : 'homeCtrl',
   }).when('/evento', {
      templateUrl : 'evento.html',
      controller  : 'eventoCtrl',
   }).when('/viagem', {
      templateUrl : 'viagem.html',
      controller  : 'viagemCtrl',
   }).when('/fotos', {
      templateUrl : 'fotos.html',
      controller  : 'fotosCtrl',
   }).when('/videos', {
      templateUrl : 'videos.html',
      controller  : 'videosCtrl',
   });//.otherwise ({ redirectTo: '/' });

});

app.controller('homeCtrl', function($scope,$http){
   /* TODO: implement by service */
   $http.get('data/slide1.json').success(function(data) {
      $scope.slides1 = data;
   });
   $http.get('data/slide2.json').success(function(data) {
      $scope.slides2 = data;
   });
   $http.get('data/slide3.json').success(function(data) {
      $scope.slides3 = data;
   });
   $http.get('data/slide4.json').success(function(data) {
      $scope.slides4 = data;
   });
   $http.get('data/news.json').success(function(data) {
      $scope.news = data;
   });
});

app.controller('eventoCtrl', function($scope){

});

app.controller('viagemCtrl', function($scope){

});

app.controller('fotosCtrl', function($scope,$http,ngDialog){
   $http.get('data/gallery.json').success(function(data) {
      $scope.gallery = data;
   });
   $scope.config = {
         itemsPerPage: 5,
         fillLastPage: true,
         firstLabel: 'Primeira',
         previousText: 'Anterior',
         nextText: 'Proxima',
         last: 'Ultima'
      };
   //$scope.openPhoto = function(photo){
      //photo.replace("F.jpg","M.jpg");
     // ngDialog.open();
   //};
});

app.controller('videosCtrl', function($scope){

});