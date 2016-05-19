'use strict';

var app = angular.module('app', ['ngRoute','angular-table','ngDialog']);

app.config(function($routeProvider,ngDialogProvider) {
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
   ngDialogProvider.setForceHtmlReload(true);
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

app.controller('fotosCtrl', function($scope,$http,$window,ngDialog){
   $http.get('data/gallery.json').success(function(data) {
      var qtdPorPagina = 20;
      var indice = 0;
      var pagina = null;

      $scope.gallery = [];

      $scope.itemCorrente = data[0];

      data.forEach(function(item) {
         if (indice >= qtdPorPagina){
            indice = 0;
         }
         if (indice == 0){
            pagina = [];
            $scope.gallery.push(pagina);
         }
         indice++;
         pagina.push(item);
      });

   });
   $scope.config = {
         itemsPerPage: 1,
         fillLastPage: true,
         firstLabel: 'Primeira',
         previousText: 'Anterior',
         nextText: 'Proxima',
         last: 'Ultima'
      };

   $scope.openPhoto = function (item) {
      //$window.alert("foto: " + item.titulo);
      $scope.itemCorrente = item;
      ngDialog.open({ template: 'templateId', scope: $scope });
   }
   

});

app.controller('videosCtrl', function($scope){

});