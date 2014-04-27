define(['knockout'],
    function (ko) {
        var stem = "https://embed.spotify.com/?uri=";

        var vm = {
            spotifyURLPlayer: ko.observable(""),
            blasted: ko.observable(false),
            activate: activate 
        };



        return vm;

        function activate(querystring) {
            //get the playlist based on the querystring
            var playlist = "";


            //update the spotifyurl based on the playlist
            vm.spotifyURLPlayer(stem + playlist);

            return;

        }

        function blast() {

        }
    }
);