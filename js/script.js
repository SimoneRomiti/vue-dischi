// Attraverso una chiamata ajax all’API di boolean
// https://flynn.boolean.careers/exercises/api/array/music
// avremo a disposizione una decina di dischi musicali.
// Utilizzando vue, stampiamo a schermo una card per ogni album.
// BONUS: Creare una select con tutti i generi dei dischi. In base a
// cosa scegliamo nella select, vedremo i corrispondenti cd.
// BONUS 2: Ordinare i dischi per anno di uscita.

var app = new Vue(
  {
    el: "#container",
    data: {
      discs: [],
      orderedDiscs: [],
      genres: [],
      myGenre: ""
    },

    mounted: function(){
      var self = this;
      axios
        .get('https://flynn.boolean.careers/exercises/api/array/music')
        .then(function(result) {

          self.discs = result.data.response;
          for(var i = 0; i < self.discs.length; i++){
            if(self.genres.includes(result.data.response[i].genre) == false){
              self.genres.push(result.data.response[i].genre);
            }
          }
          self.orderedDiscs = self.sortDiscs(self.discs);

        }
      );
    },

    methods: {
      sortDiscs: function(arrayObject){

        arrayObject.sort(
          function(a, b){
            return a.year - b.year;
          }
        );
        return arrayObject;

        // var arrayYear = [];
        // for(var i = 0; i < arrayObject.length; i++){
        //   console.log(arrayObject[i].year);
        //   arrayYear.push(arrayObject[i].year);
        //   arrayYear.sort(
        //     function(a, b){
        //       return a - b;
        //     }
        //   );
        // }
        //
        // var orderedDiscs = [];
        // for(var i = 0; i < arrayObject.length; i++){
        //   for(var k = 0; k < arrayObject.length; k++)
        //   if(arrayYear[i] == arrayObject[k].year){
        //     if(orderedDiscs.includes(arrayObject[k]) == false){
        //       orderedDiscs.push(arrayObject[k]);
        //     }
        //   }
        // }
        // return orderedDiscs;
      },

    }
  }
);
