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
            $.ajax({
                url: 'http://www.sweatinsync.com/api/listen.php?id=1',
                success:function(data){
                    var playlist = data.playlisturl;
                    //update the spotifyurl based on the playlist
                    vm.spotifyURLPlayer(stem + playlist);
                }
            });

            return;

        }
    }
);